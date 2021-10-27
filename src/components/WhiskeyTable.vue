<template>
  <div>

  <table>
    <!--  name: name, price: p, whiskeyType: whiskey_type,
             whiskeyBrand: whiskey_brand, whiskeyManufacturer: whiskey_manufacturer -->

    <thead>
    <tr><th>{{msg}}</th></tr>
    <tr>
      <th>whiskeyType</th>
      <th>whiskey Brand</th>
      <th>Name</th>
      <th>Price</th>
      <th>whiskey Manufacturer</th>
    </tr>

    </thead>
    <tbody>
    <tr v-for="w in   showPriceRange()" :key="w.name">
      <td> {{ w.whiskeyType }} </td>
      <td> {{ w.whiskeyBrand }} </td>
      <td> {{ w.name }} </td>
      <td> {{ w.price }} </td>
      <td> {{ w.whiskeyManufacturer }} </td>
    </tr>
    </tbody>
  </table>
  </div>
</template>

<script>
export default {
  name: "WhiskeyTable",
  props: {
    msg: String,
    w: [],
    range:{},
    count: {default:2, type:Number}
  },
  methods:{
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
    showPriceRange(){
      return this.random(this.filter(this.w, this.range ), this.count)
    }
  }
}
</script>

<style scoped>

</style>
