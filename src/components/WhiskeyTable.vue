<template>
  <div>

  <div class="flex " v-if="w.length >0">
    <!--  name: name, price: p, whiskeyType: whiskey_type,
             whiskeyBrand: whiskey_brand, whiskeyManufacturer: whiskey_manufacturer -->


    <div>{{msg}}</div>

    <div class="card" v-for="wh in w" :key="wh.name">





      <div> <span class="label">whiskeyType</span> {{ wh.whiskeyType }} </div>
      <div> <span class="label">whiskey Brand</span> {{ wh.whiskeyBrand }} </div>
      <div>  <span class="label">Name</span> {{ wh.name }} </div>
      <div> <span class="label">Price</span> {{ wh.price }} </div>
      <div> <span class="label">whiskey Manufacturer</span> {{ wh.whiskeyManufacturer }} </div>
    </div>

  </div>
  </div>
</template>

<script>
export default {
  name: "WhiskeyTable",
  props: {
    msg: String,
    w: [],
    wt:[],
    range:{},
    count: {default:2, type:Number}
  },
  inject: [  "spinTheBottle",
    "showPriceRange", "propsedSelections"
    //   , "setSearchExactmatch"
  ],
  methods:{
    // filter(w,price){
    //   var filtered = []
    //   filtered = w.filter(b => {
    //     var t =  b.price  >= price.min && b.price  <= price.max
    //     return t
    //   })
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
    //   return  selected
    // },
    // showPriceRange(){
    //   return this.random(this.filter(this.w, this.range ), this.count)
    // }
  }
}
</script>

<style scoped>

</style>
