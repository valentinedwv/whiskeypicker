<template>
  <div >
    <h1>Flight of the Random Whiskey</h1>
    <WhiskeyTable msg="Any of Them" :w="showPriceRange(whiskeys,{min: 0, max:10000 },whiskeyTypesSelect,2)" :range="{min: 0, max:10000 }" :wt="whiskeyTypesSelect" />
    <WhiskeyTable msg="Everyday" :w="showPriceRange(whiskeys,{min: 0, max:15 },whiskeyTypesSelect,2)" :range="{min: 0, max:15 }" :wt="whiskeyTypesSelect" />
    <WhiskeyTable msg="Good Day" :w="showPriceRange(whiskeys,{min: 10, max:30 },whiskeyTypesSelect,2)" :range="{min: 10, max:30 }" :wt="whiskeyTypesSelect" />
    <WhiskeyTable msg="Great Day" :w="showPriceRange(whiskeys,{min: 20, max:40 },whiskeyTypesSelect,2)" :range="{min: 20, max:40 }" :wt=" whiskeyTypesSelect" />
    <WhiskeyTable msg="Special Day" :w="showPriceRange(whiskeys,{min: 30, max:60 },whiskeyTypesSelect,2)" :range="{min: 30, max:60 }" :wt="whiskeyTypesSelect" />
    <WhiskeyTable msg="Make Bruces' Day" :w="showPriceRange(whiskeys,{min: 50, max:100 },whiskeyTypesSelect,2)" :range="{min: 50, max:100 }" :wt="whiskeyTypesSelect" />
    <WhiskeyTable msg="Extra Special" :w="showPriceRange(whiskeys,{min: 75, max:10000 },whiskeyTypesSelect,2)" :range="{min: 75, max:10000 }" :wt="whiskeyTypesSelect" />


    <div>Limit Selections to: </div>
    <fieldset class="flex">
    <label v-for="wt in whiskeyTypes(whiskeys)" v-bind:key="wt" :for="wt.replaceAll(' ','') +'ws'">
      <input type="checkbox"  v-model="whiskeyTypesSelect" :id="wt.replaceAll(' ','') +'ws'" :value="wt" v-on:change="spinTheBottle(whiskeys,prices, whiskeyTypesSelect)" >
      <span class="checkable">{{ wt }}</span>
    </label>


    </fieldset>



  </div>

</template>

<!--
put all 4 javascripts on the page
grab 4 imp-menu elements
grab first imp-heading as the type
grab all the imp-food-item, then imp-name[0].textContent, imp-price[0].textContent
-->

<script>
//https://cleverbeagle.com/blog/articles/tutorial-how-to-load-third-party-scripts-dynamically-in-javascript
//import imenupro from  'whiskey1'
import WhiskeyTable from './WhiskeyTable'
export default {
  name: 'WhiskySelector',
  components:{"WhiskeyTable":WhiskeyTable},
  props: {
    msg: String,
    whiskeys: []
  },
  inject: [  "spinTheBottle",
    "showPriceRange", "propsedSelections","whiskeyTypes"
    //   , "setSearchExactmatch"
  ],
 //  watch:{
 // //   whiskeys:"spinTheBottle"
 //  },
  data() {
    return {
//      whiskey: this.whiskeys,
      whiskeyTypesSelect:[],
      whiskeyBadPrice:[],
      whiskeyCount: 0,
      prices: {min: 0, max:10000 },
    //  propsedSelections:[]

    }
  },
  created() {   // this.whiskey = imenupro
    // var menus = document.getElementsByClassName('imp-menu')
    // var bottles = []
    // var badBottles = []
    // for (var i = 0, len = menus.length | 0; i < len; i = i + 1 | 0) {
    //   var headers = menus[i].getElementsByClassName('imp-heading')
    //   var menuName = "SomeWhiskey"
    //   if (headers != undefined) {
    //     menuName = headers[0].textContent
    //   }
    //
    //   var w = menus[i].getElementsByClassName('imp-food-item')
    //
    //   for (var n = 0, nlen = w.length | 0; n < nlen; n = n + 1 | 0) {
    //     var nameEl = w[n].getElementsByClassName('imp-name')
    //     var priceEl = w[n].getElementsByClassName('imp-price')
    //     if (nameEl.length > 0 && priceEl.length > 0) {
    //       var name = nameEl[0].textContent ? nameEl[0].textContent : 'Missing'
    //       var price = priceEl[0].textContent ? priceEl[0].textContent.split('/') : undefined
    //       if ( isNaN(price)) {
    //         var p = parseInt(price)
    //         if (Number.isInteger(p))
    //         bottles.push({name: name, price: p, whiskeyType: menuName})
    //       } else {
    //         badBottles.push({name: name, price: price[0], whiskeyType: menuName})
    //       }
    //
    //     }
    //
    //
    //   }
    //   console.log(`menu: ${i}`)
    //   console.log(`count: ${bottles.length}`)
    //   console.log(`count bad: ${badBottles.length}`)
    // }
    // this.whiskey = bottles.sort((a,b)=> a.price - b.price)
    // this.whiskeyBadPrice = badBottles
    //
    // this.whiskeyCount = this.whiskey.length
   // this.spinTheBottle()


  },
  computed: {
    // whiskeyTypes: function () {
    //   if (this.whiskeys) {
    //     var unique = [...new Set(this.whiskeys.map(item => item.whiskeyType))];
    //     return unique
    //   } else {
    //     return []
    //   }
    // },
    priceMax: function () {

        if (this.whiskeys) {
          return this.whiskeys.reduce(
              (previousValue, currentValue) =>
                  previousValue =   (previousValue > currentValue.price) ?  previousValue : currentValue.price
          )

          // return this.whiskey.map(item => Number.parseFloat(item.price));
        } else {
          return 1000
        }

    },
    priceMin: function () {
      if (this.whiskeys) {
        return this.whiskeys.reduce(
            (previousValue, currentValue) =>
                previousValue =(previousValue < currentValue.price) ?  previousValue : currentValue.price
           )

       // return this.whiskey.map(item => Number.parseFloat(item.price));
      } else {
        return 1000
      }
    }
  },
  methods:{
    // whiskeyTypes: function () {
    //   if (this.whiskeys) {
    //     var unique = [...new Set(this.whiskeys.map(item => item.whiskeyType))];
    //     return unique
    //   } else {
    //     return []
    //   }
    // },
    sorted: (w)=> {
      if (w ){
        return w.sort((a,b)=> a.price > b.price)
      } else {
        return []
      }

    },
    filter(w,price){
      var filtered = []
      filtered = w.filter(b => {
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
    // spinTheBottle (){
    //   var r = this.random(this.filter(this.whiskeys, this.prices ), 2)
    //   this.propsedSelections= this.propsedSelections.slice(0,0).concat(r)
    // },
    // showPriceRange(range, count=2){
    //   return this.random(this.filter(this.whiskeys, range ), count)
    // }
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
