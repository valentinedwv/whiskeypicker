(function(e){function t(t){for(var i,a,o=t[0],c=t[1],l=t[2],p=0,u=[];p<o.length;p++)a=o[p],Object.prototype.hasOwnProperty.call(n,a)&&n[a]&&u.push(n[a][0]),n[a]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(e[i]=c[i]);h&&h(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),s()}function s(){for(var e,t=0;t<r.length;t++){for(var s=r[t],i=!0,o=1;o<s.length;o++){var c=s[o];0!==n[c]&&(i=!1)}i&&(r.splice(t--,1),e=a(a.s=s[0]))}return e}var i={},n={app:0},r=[];function a(t){if(i[t])return i[t].exports;var s=i[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,a),s.l=!0,s.exports}a.m=e,a.c=i,a.d=function(e,t,s){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(a.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(s,i,function(t){return e[t]}.bind(null,i));return s},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/whiskeypicker/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=t,o=o.slice();for(var l=0;l<o.length;l++)t(o[l]);var h=c;r.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"00fc":function(e,t,s){},"034f":function(e,t,s){"use strict";s("85ec")},1761:function(e,t,s){},"36b0":function(e,t,s){"use strict";s("b40b")},"3bbf":function(e,t,s){},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var i=s("2b0e"),n=s("8c4f"),r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("img",{attrs:{alt:"Boomerangs logo",src:"https://boomerangburgers.com/wp-content/uploads/2020/06/Boomerangs-Restaurant-400px-Wide.png"}}),s("div",{staticClass:"flex one "},[s("div",[s("router-link",{attrs:{to:{name:"spin",params:{whiskeys:e.whiskeys}}}},[e._v(" Spin Bottle (Random)")])],1),s("div",[s("router-link",{attrs:{to:{name:"select",params:{whiskeys:e.whiskeys}}}},[e._v("Select by Region and Price")])],1),s("div",[s("router-link",{attrs:{to:{name:"listing",params:{whiskeys:e.whiskeys}}}},[e._v("Listing of All Bottles")])],1),s("div",[s("router-link",{attrs:{to:{name:"typelisting",params:{whiskeys:e.whiskeys}}}},[e._v("By Type Listing of Bottles")])],1)]),s("router-view")],1)},a=[],o=s("2909"),c=(s("498a"),s("ac1f"),s("1276"),s("8ba4"),s("a9e3"),s("4e82"),s("d3b7"),s("6062"),s("3ca3"),s("ddb0"),s("d81d"),s("4de4"),s("caad"),s("2532"),s("99af"),s("fb6a"),s("b0c0"),s("328a")),l={name:"App",components:{},provide:function(){return{whiskeys:this.whiskeys,spinTheBottle:this.spinTheBottle,showPriceRange:this.showPriceRange,propsedSelections:this.propsedSelections,whiskeyTypes:this.getWhiskeyTypes,listPriceRange:this.listPriceRange,byBrand:this.byBrand,byType:this.byType}},data:function(){return{whiskeys:[],whiskeysBadPrice:[],propsedSelections:[]}},created:function(){for(var e="imp-menu",t="imp-heading",s="imp-title-heading",i="imp-subheading",n="imp-normal-heading",r="imp-food-cols",a="imp-food-item",o="imp-name",l="imp-price",h=document.getElementsByClassName(e),p=[],u=[],y="Type",d="Brand",m="Manufacturuer",f=0,w=0,k=0|h.length;w<k;w=w+1|0)for(var v=h[w].children,g=0,_=0|v.length;g<_;g=g+1|0){var b=v[g];if(b.classList.contains(t)){var T=b.firstElementChild;T.classList.contains(s)?(y=T.textContent.trim().toLowerCase(),y=Object(c["a"])(y)):T.classList.contains(i)?(m=T.textContent.trim().toLowerCase(),m=Object(c["a"])(m)):T.classList.contains(n)&&(d=T.textContent.trim().toLowerCase(),d=Object(c["a"])(d))}if(b.classList.contains(r))for(var S=b.getElementsByClassName(a),x=0,C=0|S.length;x<C;x=x+1|0){var B=S[x].getElementsByClassName(o),P=S[x].getElementsByClassName(l);if(B.length>0&&P.length>0){var W=B[0].textContent?Object(c["a"])(B[0].textContent):"Missing",j=P[0].textContent?P[0].textContent.split("/"):void 0;if(isNaN(j)){var O=parseInt(j);Number.isInteger(O)&&p.push({name:W,price:O,whiskeyType:y,whiskeyBrand:d,whiskeyManufacturer:m,id:f++})}else u.push({name:W,price:j[0],whiskeyType:y,whiskeyBrand:d,whiskeyManufacturer:m,id:f++})}}}this.whiskeys=p.sort((function(e,t){return e.price-t.price})),this.whiskeyBadPrice=u,console.log("whiskeys ".concat(this.whiskeys.length))},methods:{getWhiskeyTypes:function(e){if(e){var t=Object(o["a"])(new Set(e.map((function(e){return e.whiskeyType})))),s=t.filter((function(e){return e.includes("Whisk")}));s=s.sort((function(e,t){return e.localeCompare(t)}));var i=t.filter((function(e){return!e.includes("Whisk")}));return i=i.sort((function(e,t){return e.localeCompare(t)})),s.concat(i)}return[]},sorted:function(e){return e?e.sort((function(e,t){return e.price>t.price})):[]},byBrand:function(e){return e?e.sort((function(e,t){return e.whiskeyBrand.localeCompare(t.whiskeyBrand)})):[]},byType:function(e){if(e){var t=Object(o["a"])(new Set(e.map((function(e){return e.whiskeyType})))),s=t.map((function(t){return e.filter((function(e){var s=!e.whiskeyType.localeCompare(t);return s}))}));return s=s.map((function(e){return e.sort((function(e,t){return e.whiskeyBrand.localeCompare(t.whiskeyBrand)}))})),s||[]}return[]},filter:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=e;return void 0!==s&&s.length>0&&(i=e.filter((function(e){return s.includes(e.whiskeyType)}))),i=i.filter((function(e){var s=e.price>=t.min&&e.price<=t.max;return s})),i},random:function(e,t){if(void 0===e||0===e.length)return[];for(var s=[],i=0;i<t;i++){var n=Math.floor(Math.random()*e.length);console.log(n),console.log(e[n]),s.push(e[n])}return s},spinTheBottle:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=this.random(this.filter(e,t,s),2);this.propsedSelections=this.propsedSelections.slice(0,0).concat(i)},showPriceRange:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2;return this.random(this.filter(e,t,s),i)},listPriceRange:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:void 0,i=this.filter(e,t,s);return i=i.sort((function(e,t){return e.name.localeCompare(t.name)})),i}}},h=l,p=(s("034f"),s("2877")),u=Object(p["a"])(h,r,a,!1,null,null,null),y=u.exports,d=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v("Flight of the Random Whiskey")]),s("h3",[e._v(" This shows two random whiskeys from a set of price ranges. You can filter by region by going to the bottom of the page")]),e.whiskeys.length>0?s("h4",[e._v("Selecting from "+e._s(e.whiskeys.length)+" Bottles")]):e._e(),s("WhiskeyCards",{attrs:{msg:"Any of Them",w:e.showPriceRange(e.whiskeys,{min:0,max:1e4},e.whiskeyTypesSelect,2),range:{min:0,max:1e4},wt:e.whiskeyTypesSelect}}),s("WhiskeyCards",{attrs:{msg:"Everyday",w:e.showPriceRange(e.whiskeys,{min:0,max:15},e.whiskeyTypesSelect,2),range:{min:0,max:15},wt:e.whiskeyTypesSelect}}),s("WhiskeyCards",{attrs:{msg:"Good Day",w:e.showPriceRange(e.whiskeys,{min:10,max:30},e.whiskeyTypesSelect,2),range:{min:10,max:30},wt:e.whiskeyTypesSelect}}),s("WhiskeyCards",{attrs:{msg:"Great Day",w:e.showPriceRange(e.whiskeys,{min:20,max:40},e.whiskeyTypesSelect,2),range:{min:20,max:40},wt:e.whiskeyTypesSelect}}),s("WhiskeyCards",{attrs:{msg:"Special Day",w:e.showPriceRange(e.whiskeys,{min:30,max:60},e.whiskeyTypesSelect,2),range:{min:30,max:60},wt:e.whiskeyTypesSelect}}),s("WhiskeyCards",{attrs:{msg:"Make Bruces' Day",w:e.showPriceRange(e.whiskeys,{min:50,max:100},e.whiskeyTypesSelect,2),range:{min:50,max:100},wt:e.whiskeyTypesSelect}}),s("WhiskeyCards",{attrs:{msg:"Extra Special",w:e.showPriceRange(e.whiskeys,{min:75,max:1e4},e.whiskeyTypesSelect,2),range:{min:75,max:1e4},wt:e.whiskeyTypesSelect}}),s("div",[e._v("Limit Selections to: ")]),s("fieldset",{staticClass:"flex two four-600 six-1000"},e._l(e.whiskeyTypes(e.whiskeys),(function(t){return s("label",{key:t,attrs:{for:t.replaceAll(" ","")+"ws"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.whiskeyTypesSelect,expression:"whiskeyTypesSelect"}],attrs:{type:"checkbox",id:t.replaceAll(" ","")+"ws"},domProps:{value:t,checked:Array.isArray(e.whiskeyTypesSelect)?e._i(e.whiskeyTypesSelect,t)>-1:e.whiskeyTypesSelect},on:{change:[function(s){var i=e.whiskeyTypesSelect,n=s.target,r=!!n.checked;if(Array.isArray(i)){var a=t,o=e._i(i,a);n.checked?o<0&&(e.whiskeyTypesSelect=i.concat([a])):o>-1&&(e.whiskeyTypesSelect=i.slice(0,o).concat(i.slice(o+1)))}else e.whiskeyTypesSelect=r},function(t){return e.spinTheBottle(e.whiskeys,e.prices,e.whiskeyTypesSelect)}]}}),s("span",{staticClass:"checkable"},[e._v(e._s(t))])])})),0)],1)},m=[],f=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",[e._v(e._s(e.msg))]),e.w.length>0?s("div",{staticClass:"flex one two-600 four-1000 grow"},e._l(e.w,(function(t){return s("div",{key:t.name,staticClass:"card"},[s("div",[s("span",{staticClass:"label"},[e._v("whiskeyType")]),e._v(" "+e._s(t.whiskeyType)+" ")]),s("div",[s("span",{staticClass:"label"},[e._v("whiskey Brand")]),e._v(" "+e._s(t.whiskeyBrand)+" ")]),s("div",[s("span",{staticClass:"label"},[e._v("Name")]),e._v(" "+e._s(t.name)+" ")]),s("div",[s("span",{staticClass:"label"},[e._v("Price")]),e._v(" "+e._s(t.price)+" ")]),s("div",[s("span",{staticClass:"label"},[e._v("whiskey Manufacturer")]),e._v(" "+e._s(t.whiskeyManufacturer)+" ")])])})),0):e._e()])},w=[],k={name:"WhiskeyCards",props:{msg:String,w:[],wt:[],range:{},count:{default:2,type:Number}},inject:["spinTheBottle","showPriceRange","propsedSelections"],methods:{}},v=k,g=Object(p["a"])(v,f,w,!1,null,"3f558689",null),_=g.exports,b={name:"WhiskySelector",components:{WhiskeyCards:_},props:{msg:String,whiskeys:[]},inject:["spinTheBottle","showPriceRange","propsedSelections","whiskeyTypes"],data:function(){return{whiskeyTypesSelect:[],whiskeyBadPrice:[],whiskeyCount:0,prices:{min:0,max:1e4}}},created:function(){},computed:{priceMax:function(){return this.whiskeys?this.whiskeys.reduce((function(e,t){return e>t.price?e:t.price})):1e3},priceMin:function(){return this.whiskeys?this.whiskeys.reduce((function(e,t){return e<t.price?e:t.price})):1e3}},methods:{sorted:function(e){return e?e.sort((function(e,t){return e.price>t.price})):[]},filter:function(e,t){var s=[];return s=e.filter((function(e){var s=e.price>=t.min&&e.price<=t.max;return s})),s},random:function(e,t){if(void 0===e||0===e.length)return[];for(var s=[],i=0;i<t;i++){var n=Math.floor(Math.random()*e.length);console.log(n),console.log(e[n]),s.push(e[n])}return s}}},T=b,S=(s("36b0"),Object(p["a"])(T,d,m,!1,null,"05ad7350",null)),x=S.exports,C=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v("Whiskey Listing")]),s("h3",[e._v(" This will let you select a region, and a price range and show you whiskeys that match those characteristics")]),s("div",[e._v("Show:")]),s("fieldset",{staticClass:"flex two four-600 six-1000"},e._l(e.whiskeyTypes(e.whiskeys),(function(t){return s("label",{key:t,attrs:{for:t.replaceAll(" ","")+"wl"}},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.whiskeyTypesSelect,expression:"whiskeyTypesSelect"}],attrs:{type:"checkbox",id:t.replaceAll(" ","")+"wl"},domProps:{value:t,checked:Array.isArray(e.whiskeyTypesSelect)?e._i(e.whiskeyTypesSelect,t)>-1:e.whiskeyTypesSelect},on:{change:[function(s){var i=e.whiskeyTypesSelect,n=s.target,r=!!n.checked;if(Array.isArray(i)){var a=t,o=e._i(i,a);n.checked?o<0&&(e.whiskeyTypesSelect=i.concat([a])):o>-1&&(e.whiskeyTypesSelect=i.slice(0,o).concat(i.slice(o+1)))}else e.whiskeyTypesSelect=r},function(t){return e.selectFilters(e.whiskeys,e.prices,e.whiskeyTypesSelect)}]}}),s("span",{staticClass:"checkable"},[e._v(e._s(t))])])})),0),s("label",{attrs:{for:"pricerange"}},[e._v("In the price range")]),s("select",{directives:[{name:"model",rawName:"v-model",value:e.prices,expression:"prices"}],attrs:{id:"pricerange"},on:{change:[function(t){var s=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.prices=t.target.multiple?s:s[0]},function(t){return e.selectFilters(e.whiskeys,e.prices,e.whiskeyTypesSelect)}]}},[s("option",{domProps:{value:{min:0,max:15}}},[e._v("<15")]),s("option",{domProps:{value:{min:15,max:20}}},[e._v("15 to 20")]),s("option",{domProps:{value:{min:20,max:30}}},[e._v("20-30")]),s("option",{domProps:{value:{min:30,max:40}}},[e._v("30-40")]),s("option",{domProps:{value:{min:40,max:50}}},[e._v("40-50")]),s("option",{domProps:{value:{min:50,max:75}}},[e._v("50-75")]),s("option",{domProps:{value:{min:75,max:1e4}}},[e._v("75")])]),e.whiskeys.length>0?s("h1",[e._v(" Showing "+e._s(e.listPriceRange(this.whiskeys,this.prices,this.whiskeyTypesSelect).length)+" of "+e._s(this.whiskeys.length)+" Bottles")]):e._e(),s("WhiskeyCards",{attrs:{msg:"Whiskeys",w:e.listPriceRange(this.whiskeys,this.prices,this.whiskeyTypesSelect),range:{min:0,max:1e4},wt:e.whiskeyTypesSelect,count:1e4}})],1)},B=[],P={name:"WhiskyList",components:{WhiskeyCards:_},props:{msg:String,whiskeys:[]},inject:["spinTheBottle","listPriceRange","propsedSelections","whiskeyTypes"],data:function(){return{whiskeyTypesSelect:[],whiskeyBadPrice:[],whiskeyCount:0,prices:{min:0,max:1e4},filteredWhiskeys:this.whiskeys}},created:function(){},computed:{priceMax:function(){return this.whiskeys?this.whiskeys.reduce((function(e,t){return e>t.price?e:t.price})):1e3},priceMin:function(){return this.whiskeys?this.whiskeys.reduce((function(e,t){return e<t.price?e:t.price})):1e3}},methods:{selectFilters:function(){return i["a"].$forceUpdate()}}},W=P,j=(s("b248"),Object(p["a"])(W,C,B,!1,null,"5efb925e",null)),O=j.exports,R=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v("All Whiskeys")]),e.whiskeys?s("h1",[e._v("Whiskey Count: "+e._s(e.whiskeys.length))]):e._e(),s("WhiskyTable",{attrs:{w:e.sortedWhiskeys}})],1)},M=[],A=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.w.length>0?s("table",{staticClass:"primary"},[e._m(0),s("tbody",e._l(e.w,(function(t){return s("tr",{key:t.name},[s("td",[e._v(" "+e._s(t.whiskeyBrand))]),s("td",[e._v(e._s(t.name))]),s("td",[e._v(e._s(t.price))]),s("td",[e._v(e._s(t.whiskeyManufacturer)+" ")])])})),0)]):e._e()])},E=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("thead",[s("tr",[s("th",[e._v("Brand")]),s("th",[e._v("Name")]),s("th",[e._v("Price")]),s("th",[e._v("Manufacturer")])])])}],L={name:"WhiskyTable",props:{msg:String,w:[]},inject:[],created:function(){},computed:{},methods:{}},N=L,$=(s("c96a"),Object(p["a"])(N,A,E,!1,null,"5bcd793a",null)),D=$.exports,F={name:"WhiskySheet",components:{WhiskyTable:D},props:{msg:String,whiskeys:[]},inject:["byBrand"],data:function(){return{sortedWhiskeys:[]}},mounted:function(){this.whiskeys&&(this.sortedWhiskeys=this.byBrand(this.whiskeys))},computed:{},methods:{}},I=F,G=(s("82e6"),Object(p["a"])(I,R,M,!1,null,"1d903c83",null)),J=G.exports,U=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("h1",[e._v("All Whiskeys")]),e.whiskeys?s("h1",[e._v("Whiskey Count: "+e._s(e.whiskeys.length))]):e._e(),e._l(e.sortedWhiskeys,(function(t,i){return s("div",{key:i},[s("h2",{staticStyle:{"text-align":"left"}},[e._v(e._s(t[0].whiskeyType))]),s("WhiskyTable",{attrs:{w:t}})],1)}))],2)},Y=[],q={name:"WhiskyByType",components:{WhiskyTable:D},props:{msg:String,whiskeys:[]},inject:["byBrand","byType"],data:function(){return{sortedWhiskeys:[]}},mounted:function(){this.whiskeys&&(this.sortedWhiskeys=this.byType(this.whiskeys))},computed:{},methods:{}},z=q,H=(s("9dc6"),Object(p["a"])(z,U,Y,!1,null,"3391d2a0",null)),K=H.exports;i["a"].use(n["a"]),i["a"].config.productionTip=!1;var Q=[{path:"/spin",name:"spin",component:x,props:function(e){return{whiskeys:e.params.whiskeys}}},{path:"/select",name:"select",component:O,props:function(e){return{whiskeys:e.params.whiskeys}}},{path:"/listing",name:"listing",component:J,props:function(e){return{whiskeys:e.params.whiskeys}}},{path:"/typelisting",name:"typelisting",component:K,props:function(e){return{whiskeys:e.params.whiskeys}}}],V=new n["a"]({routes:Q});new i["a"]({render:function(e){return e(y)},router:V}).$mount("#app")},"5bd0":function(e,t,s){},"82e6":function(e,t,s){"use strict";s("00fc")},"85ec":function(e,t,s){},"9dc6":function(e,t,s){"use strict";s("5bd0")},b248:function(e,t,s){"use strict";s("1761")},b40b:function(e,t,s){},c96a:function(e,t,s){"use strict";s("3bbf")}});
//# sourceMappingURL=app.dae07be8.js.map