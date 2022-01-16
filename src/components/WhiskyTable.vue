<template>


    <table class="primary" v-if="whiskeys.length >0">
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
  name: 'WhiskyTable',

  props: {
    msg: String,
    whiskeys: []
  },

  inject: [   "byBrand"
    //, "whiskeys"

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
      visible: false,
      wl: this.whiskeys

    }
  },
  created() {
    if (this.whiskeys.length > 0 ){
this.visible = true
    }// this.whiskey = imenupro
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

  },
  methods:{


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
