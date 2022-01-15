<template>
  <div >
    <h1>All Whiskeys</h1>

    <h1>Whiskey Count: {{ this.whiskeys.length }}</h1>
    <table class="primary">
      <thead>
      <tr>
        <th>Brand</th>
        <th>Name</th>
        <th>Price</th>
        <th>Manufacturer</th>
      </tr>
      </thead>
    <tbody  v-if="whiskeys.length >0">
      <!--  name: name, price: p, whiskeyType: whiskey_type,
               whiskeyBrand: whiskey_brand, whiskeyManufacturer: whiskey_manufacturer -->



      <tr  v-for="wh in byBrand(whiskeys)" :key="wh.name">

        <td> {{ wh.whiskeyBrand }}</td>
        <td>{{ wh.name }}</td>
        <td>{{ wh.price }}</td>
        <td>{{ wh.whiskeyManufacturer }} </td>

      </tr>
    </tbody>
    </table>
<!--    <div>{{ whiskeyTypes }}</div>-->
<!--    <div>Min {{ priceMin }}</div>-->
<!--    <div>Max {{ priceMax }}</div>(-->
<!--    <div>count {{ filter(this.whiskey, prices).length}}</div>-->

<!--    <table>-->
<!--      &lt;!&ndash;  name: name, price: p, whiskeyType: whiskey_type,-->
<!--               whiskeyBrand: whiskey_brand, whiskeyManufacturer: whiskey_manufacturer &ndash;&gt;-->
<!--      <thead>-->
<!--      <tr>-->
<!--        <th>whiskeyType</th>-->
<!--        <th>whiskey Brand</th>-->
<!--        <th>Name</th>-->
<!--        <th>Price</th>-->
<!--        <th>whiskey Manufacturer</th>-->
<!--      </tr>-->

<!--      </thead>-->
<!--      <tbody>-->
<!--      <tr v-for="w in listPriceRange(this.whiskeys,this.prices,this.whiskeyTypesSelect)" :key="w.id">-->
<!--        <td> {{ w.whiskeyType }} </td>-->
<!--        <td> {{ w.whiskeyBrand }} </td>-->
<!--        <td> {{ w.name }} </td>-->
<!--        <td> {{ w.price }} </td>-->
<!--        <td> {{ w.whiskeyManufacturer }} </td>-->
<!--      </tr>-->
<!--      </tbody>-->
<!--      </table>-->
<!--    <div>-->

<!--      <div v-for="w in whiskeyBadPrice" :key="w.id">-->
<!--        <span>{{ w.name }}</span>-->
<!--        <span>{{ w.price }}</span>-->
<!--        <span>{{ w.whiskeyType }}</span>-->
<!--      </div>-->
<!--    </div>-->

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

export default {
  name: 'WhiskySheet',

  props: {
    msg: String,
    whiskeys: []
  },

  inject: [   "byBrand"
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
    //  propsedSelections: [],
      filteredWhiskeys:this.whiskeys

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
    //     unique = unique.sort( (a,b)=> a < b )
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
    // sorted: (w)=> {
    //   if (w ){
    //     return w.sort((a,b)=> a.price > b.price)
    //   } else {
    //     return []
    //   }
    //
    // },
    // filter(w,price){
    //   var filtered = []
    //
    //     filtered = w.filter(b => {
    //       var t =  b.price  >= price.min && b.price  <= price.max
    //       return t
    //     })
    //
    //   return filtered
    //
    // },
    // random ( w, count){
    //   if (w=== undefined || w.length ===0 ) return []
    //   var selected = []
    //   for (var i =0; i < count; i++){
    //     var r = Math.floor(Math.random() * w.length)
    //     console.log(r)
    //     console.log(w[r])
    //     selected.push(w[r])
    //   }
    //    return  selected
    // },
    // spinTheBottle (){
    //   var r = this.random(this.filter(this.whiskeys, this.prices ), 2)
    //   this.propsedSelections= this.propsedSelections.slice(0,0).concat(r)
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
