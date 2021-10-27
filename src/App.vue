<template>
  <div id="app">
    <img alt="Boomerangs logo"
         src="https://boomerangburgers.com/wp-content/uploads/2020/06/Boomerangs-Restaurant-400px-Wide.png">
    <!--   <div>{{ whiskeys }}</div> -->
    <div class="tabs two">
      <input id='tab-1' type='radio' name='tabgroupB' checked/>
      <label class="pseudo button toggle" for="tab-1">Random</label>
      <input id='tab-2' type='radio' name='tabgroupB'>
      <label class="pseudo button toggle" for="tab-2">Listing</label>
      <div class="row">
        <div>
          <whisky-selector :whiskeys="whiskeys"/>
        </div>
        <div>
          <WhiskyList msg="Welcome to Your Vue.js App" :whiskeys="whiskeys"/>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import WhiskyList from './components/WhiskyList.vue'
import WhiskySelector from "./components/WhiskySelector";

export default {
  name: 'App',
  components: {
    WhiskyList: WhiskyList,
    WhiskySelector: WhiskySelector
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
      whiskeys: this.whiskeys
    }
  },
  data() {
    return {
      whiskeys: [],
      whiskeysBadPrice: [],
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

    for (var i = 0, len = menus.length | 0; i < len; i = i + 1 | 0) {
      var menuChildren = menus[i].children

      for (var mc = 0, mclen = menuChildren.length | 0; mc < mclen; mc = mc + 1 | 0) {
        var node = menuChildren[mc]
        if (node.classList.contains(IMP_HEADING_CLASS)) {

          var heading = node.firstElementChild
          if (heading.classList.contains(WHISKEY_TYPE_CLASS)) {
            whiskey_type = heading.textContent

          } else if (heading.classList.contains(WHISKEY_MANUFACTURER_CLASS)) {
            whiskey_manufacturer = heading.textContent

          } else if (heading.classList.contains(WHISKEY_BRAND_CLASS)) {
            whiskey_brand = heading.textContent

          }

        }
        if (node.classList.contains(WHISKEY_GROUP_CLASS)) {
          var w = node.getElementsByClassName(WHISKEY_ITEM_CLASS)
          for (var wi = 0, lenwi = w.length | 0; wi < lenwi; wi = wi + 1 | 0) {
            var nameEl = w[wi].getElementsByClassName(WHISKEY_NAME_CLASS)
            var priceEl = w[wi].getElementsByClassName(WHISKEY_PRICE_CLASS)
            if (nameEl.length > 0 && priceEl.length > 0) {
              var name = nameEl[0].textContent ? nameEl[0].textContent : 'Missing'
              var price = priceEl[0].textContent ? priceEl[0].textContent.split('/') : undefined
              if (isNaN(price)) {
                var p = parseInt(price)
                if (Number.isInteger(p))
                  bottles.push({
                    name: name, price: p, whiskeyType: whiskey_type,
                    whiskeyBrand: whiskey_brand, whiskeyManufacturer: whiskey_manufacturer
                  })
                //    console.debug("bottle:" + name)
              } else {
                badBottles.push({
                  name: name, price: price[0], whiskeyType: whiskey_type,
                  whiskeyBrand: whiskey_brand, whiskeyManufacturer: whiskey_manufacturer
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
  }
  //     var headers = menus[i].getElementsByClassName(WHISKEY_TYPE_CLASS)
  //     var menuName = "SomeWhiskey"
  //     if (headers != undefined) {
  //       menuName = headers[0].textContent
  //     }
  //
  //     var w = menus[i].getElementsByClassName(WHISKEY_ITEM_CLASS)
  //
  //     for (var n = 0, nlen = w.length | 0; n < nlen; n = n + 1 | 0) {
  //       var nameEl = w[n].getElementsByClassName(WHISKEY_NAME_CLASS)
  //       var priceEl = w[n].getElementsByClassName(WHISKEY_PRICE_CLASS)
  //       if (nameEl.length > 0 && priceEl.length > 0) {
  //         var name = nameEl[0].textContent ? nameEl[0].textContent : 'Missing'
  //         var price = priceEl[0].textContent ? priceEl[0].textContent.split('/') : undefined
  //         if (isNaN(price)) {
  //           var p = parseInt(price)
  //           if (Number.isInteger(p))
  //             bottles.push({name: name, price: p, whiskeyType: menuName})
  //         } else {
  //           badBottles.push({name: name, price: price[0], whiskeyType: menuName})
  //         }
  //
  //       }
  //
  //
  //     }
  //     console.log(`menu: ${i}`)
  //     console.log(`count: ${bottles.length}`)
  //     console.log(`count bad: ${badBottles.length}`)
  //   }
  //   this.whiskey = bottles.sort((a, b) => a.price - b.price)
  //   this.whiskeyBadPrice = badBottles
  // }
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
