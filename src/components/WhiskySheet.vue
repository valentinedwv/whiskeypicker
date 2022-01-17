<template>
  <div >
    <h1>All Whiskeys</h1>

    <h1  v-if="whiskeys">Whiskey Count: {{ whiskeys.length }}</h1>
  <WhiskyTable :w="sortedWhiskeys" />


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

import WhiskyTable from "./WhiskyTable";
export default {
  name: 'WhiskySheet',
  components: {"WhiskyTable": WhiskyTable},
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
      sortedWhiskeys: []
//      whiskey: this.whiskeys,

    //  propsedSelections: [],


    }
  },
  mounted() {
    if (this.whiskeys){
      this.sortedWhiskeys = this.byBrand(this.whiskeys)
    }



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
