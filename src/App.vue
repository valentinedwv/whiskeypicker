<template>
  <div id="app">
    <img alt="Boomerangs logo"
         src="https://boomerangburgers.com/wp-content/uploads/2020/06/Boomerangs-Restaurant-400px-Wide.png">
    <!--   <div>{{ whiskeys }}</div> -->
<div class="flex one ">
      <div ><router-link :to="{ name: 'spin', params: { whiskeys: whiskeys }}"> Spin Bottle (Random)</router-link></div>
      <div > <router-link :to="{ name: 'select', params: { whiskeys: whiskeys }}">Select by Region and Price</router-link></div>
      <div ><router-link :to="{ name: 'listing', params: { whiskeys: whiskeys }}">Listing of All Bottles</router-link></div>
  <div ><router-link :to="{ name: 'typelisting', params: { whiskeys: whiskeys }}">By Type Listing of  Bottles</router-link></div>
</div>
    <router-view></router-view>

  </div>
</template>
<script>
//import WhiskyList from './components/WhiskyList.vue'
//import WhiskySelector from "./components/WhiskySelector";
//import WhiskySheet from "./components/WhiskySheet";
import { titleCase } from "title-case";


export default {
  name: 'App',
  components: {
//    WhiskyList: WhiskyList,
//    WhiskySelector: WhiskySelector,
//    WhiskySheet:WhiskySheet
  },
  // mounted() {
  //   const plugin = document.createElement("script");
  //   plugin.setAttribute(
  //       "src",
  //       "//s3.amazonaws.com/menupro/imp_i4JWWgDtA0RJIB/hga-4y.js"
  //   );
  //   plugin.async = true;
  //   document.head.appendChild(plugin);
  // }
  provide: function () {
    return {
      whiskeys: this.whiskeys,
      spinTheBottle: this.spinTheBottle,
      showPriceRange: this.showPriceRange,
      propsedSelections: this.propsedSelections,
      whiskeyTypes: this.getWhiskeyTypes,
      listPriceRange: this.listPriceRange,
      byBrand: this.byBrand,
      byType: this.byType
    }
  },
  data() {
    return {
      whiskeys: [],
      whiskeysBadPrice: [],
      propsedSelections:[],

    }
  },

  created() {
    /* get MENU_CLASS
    foreach MENU_CLASS
      basically, streaming parser

      walk down siblings... if imp-heading, what type
        imp-title-heading ~ whiskey-type
        imp-subheading = manufacture
        imp-normal-heading = brand/subtype
      if imp-food-cols
        for each imp-food-item
          write
            name: imp-name,
            price: imp-price.split('/')[0],
            whiskeytype: imp-title-heading
            manufacturer: imp-subheading
            brand: imp-normal-heading



     */
    const MENU_CLASS = 'imp-menu'
    const IMP_HEADING_CLASS = 'imp-heading'
    const WHISKEY_TYPE_CLASS = 'imp-title-heading'
    const WHISKEY_MANUFACTURER_CLASS = 'imp-subheading'
    const WHISKEY_BRAND_CLASS = 'imp-normal-heading'

    const WHISKEY_GROUP_CLASS = 'imp-food-cols'
    const WHISKEY_ITEM_CLASS = 'imp-food-item'
    const WHISKEY_NAME_CLASS = 'imp-name'
    const WHISKEY_PRICE_CLASS = 'imp-price'

    var menus = document.getElementsByClassName(MENU_CLASS)
    var bottles = []
    var badBottles = []
    var whiskey_type = 'Type'
    var whiskey_brand = 'Brand'
    var whiskey_manufacturer = 'Manufacturuer'
    var whiskeyId = 0
    for (var i = 0, len = menus.length | 0; i < len; i = i + 1 | 0) {
      var menuChildren = menus[i].children

      for (var mc = 0, mclen = menuChildren.length | 0; mc < mclen; mc = mc + 1 | 0) {
        var node = menuChildren[mc]
        if (node.classList.contains(IMP_HEADING_CLASS)) {

          var heading = node.firstElementChild
          if (heading.classList.contains(WHISKEY_TYPE_CLASS)) {
            whiskey_type = heading.textContent.trim().toLowerCase()
            whiskey_type = titleCase(whiskey_type)

          } else if (heading.classList.contains(WHISKEY_MANUFACTURER_CLASS)) {
            whiskey_manufacturer = heading.textContent.trim().toLowerCase()
            whiskey_manufacturer = titleCase(whiskey_manufacturer)
          } else if (heading.classList.contains(WHISKEY_BRAND_CLASS)) {
            whiskey_brand = heading.textContent.trim().toLowerCase()
            whiskey_brand = titleCase(whiskey_brand)

          }

        }
        if (node.classList.contains(WHISKEY_GROUP_CLASS)) {
          var w = node.getElementsByClassName(WHISKEY_ITEM_CLASS)
          for (var wi = 0, lenwi = w.length | 0; wi < lenwi; wi = wi + 1 | 0) {
            var nameEl = w[wi].getElementsByClassName(WHISKEY_NAME_CLASS)
            var priceEl = w[wi].getElementsByClassName(WHISKEY_PRICE_CLASS)
            if (nameEl.length > 0 && priceEl.length > 0) {
              var name = nameEl[0].textContent ? titleCase(nameEl[0].textContent) : 'Missing'
              var price = priceEl[0].textContent ? priceEl[0].textContent.split('/') : undefined
              if (isNaN(price)) {
                var p = parseInt(price)
                if (Number.isInteger(p))
                  bottles.push({
                    name: name, price: p, whiskeyType: whiskey_type,
                    whiskeyBrand: whiskey_brand, whiskeyManufacturer: whiskey_manufacturer, id: whiskeyId++
                  })
                //    console.debug("bottle:" + name)
              } else {
                badBottles.push({
                  name: name, price: price[0], whiskeyType: whiskey_type,
                  whiskeyBrand: whiskey_brand, whiskeyManufacturer: whiskey_manufacturer, id: whiskeyId++
                })
              }
            }


          }
        }

      }
    }
    this.whiskeys = bottles.sort((a, b) => a.price - b.price)

    this.whiskeyBadPrice = badBottles
    console.log(`whiskeys ${this.whiskeys.length}`)
  },
  methods:{
    getWhiskeyTypes: (w)=> {
      if (w) {
        var unique = [...new Set(w.map(item => item.whiskeyType))];
        //unique = unique.sort ((a,b)=> a.localeCompare(b))
        var whiskeyInName = unique.filter(a => a.includes('Whisk'))
        whiskeyInName = whiskeyInName.sort ((a,b)=> a.localeCompare(b))
        var whiskeyNotInName = unique.filter(a => ! a.includes('Whisk'))
        whiskeyNotInName = whiskeyNotInName.sort ((a,b)=> a.localeCompare(b))

        return whiskeyInName.concat(whiskeyNotInName)
      } else {
        return []
      }
    },
    sorted: (w)=> {
      if (w ){
        return w.sort((a,b)=> a.price > b.price)
      } else {
        return []
      }

    },
    byBrand: (w)=> {
      if (w ){
        return w.sort((a,b)=> a.whiskeyBrand.localeCompare( b.whiskeyBrand))
      } else {
        return []
      }

    },
    byType: (w)=> {
      if (w ){
        //let wtypes = this.getWhiskeyTypes(w)
        // for some reason it's not seeing the getWHiskeyTypes function
        let wtypes  = [...new Set(w.map(item => item.whiskeyType))];

        let by = wtypes.map(
            (wt)=> {
          return w.filter(
              (a)=> {
            let matchType = ! a.whiskeyType.localeCompare(wt)
                return matchType
          })

        }
        )
         by = by.map(
             (bt)=> bt.sort((a,b)=> a.whiskeyBrand.localeCompare( b.whiskeyBrand)
                 //(t) => console.log (t)
                // (t)=> t.sort((a,b)=> a.whiskeyBrand.localeCompare( b.whiskeyBrand))
             )
         )
        if (by ){
          return by
        } else {
          return []
        }
      } else {
        return []
      }


    },
    filter(w,price, whiskeyTypesSelect=undefined){
      var filtered = w
      if (whiskeyTypesSelect !== undefined && whiskeyTypesSelect.length >0){

        filtered = w.filter( b => whiskeyTypesSelect.includes(b.whiskeyType) )
      }
      filtered = filtered.filter(b => {
        var t =  b.price  >= price.min && b.price  <= price.max
        return t
      })
      return filtered

    },
    random ( w, count){
      if (w=== undefined || w.length ===0 ) return []
      var selected = []
      for (var i =0; i < count; i++){
        var r = Math.floor(Math.random() * w.length)
        console.log(r)
        console.log(w[r])
        selected.push(w[r])
      }
      return  selected
    },
    spinTheBottle (w, range, whiskeyTypesSelect=undefined){
      var r = this.random(this.filter(w, range, whiskeyTypesSelect ), 2)
      this.propsedSelections= this.propsedSelections.slice(0,0).concat(r)
    },
    showPriceRange(w, range,  whiskeyTypesSelect=undefined, count=2){
      return this.random(this.filter(w, range, whiskeyTypesSelect ), count)


    },
    listPriceRange(w, range,  whiskeyTypesSelect=undefined){
      var list = this.filter(w, range, whiskeyTypesSelect )
      list = list.sort( (a,b) => a.name.localeCompare(b.name))
      return list

    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
