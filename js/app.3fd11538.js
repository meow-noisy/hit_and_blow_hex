(function(t){function e(e){for(var r,s,o=e[0],l=e[1],c=e[2],h=0,d=[];h<o.length;h++)s=o[h],Object.prototype.hasOwnProperty.call(i,s)&&i[s]&&d.push(i[s][0]),i[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(t[r]=l[r]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,c||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],r=!0,o=1;o<a.length;o++){var l=a[o];0!==i[l]&&(r=!1)}r&&(n.splice(e--,1),t=s(s.s=a[0]))}return t}var r={},i={app:0},n=[];function s(e){if(r[e])return r[e].exports;var a=r[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=t,s.c=r,s.d=function(t,e,a){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(a,r,function(e){return t[e]}.bind(null,r));return a},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=e,o=o.slice();for(var c=0;c<o.length;c++)e(o[c]);var u=l;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var r=a("2b0e"),i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",{attrs:{fluid:"","fill-height":""}},[a("v-layout",{attrs:{"align-center":"","justify-center":""}},[a("v-card",{staticClass:"elevation-12"},[t._v(" "+t._s(t.message))]),a("v-flex",{attrs:{xs12:"",sm8:"",md8:""}},[t._v(" "+t._s(t.current_predict)+" "+t._s(t.hit)+" "+t._s(t.blow)+" "),a("v-card",{staticClass:"elevation-12"},[t._l(t.button_label_list,(function(e,r){return a("v-btn",{key:r,attrs:{color:"primary",elevation:"2",height:"100",width:"100",disabled:t.numButtonDisable(e)},on:{click:function(a){return t.addNumToEstimateArray(e)}}},[t._v(t._s(e))])})),a("v-btn",{attrs:{color:"accent",elevation:"2",height:"100",width:"100",disabled:t.submit_button_disable},on:{click:function(e){return t.count_num_of_hit_and_blow()}}},[t._v("submit")]),a("v-btn",{attrs:{color:"accent",elevation:"2",height:"100",width:"100",disabled:t.clear_disabled},on:{click:function(e){return t.clearEstimateArrayElements()}}},[t._v("clear")]),a("v-dialog",{attrs:{width:"500"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on,i=e.attrs;return[a("v-btn",t._g(t._b({attrs:{color:"accent",elevation:"2",height:"100",width:"100",disabled:t.giveup_disabled}},"v-btn",i,!1),r),[t._v("give up")])]}}]),model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[a("v-card",[a("v-card-title",{staticClass:"text-h5 grey lighten-2"},[t._v(" Really give up? ")]),a("v-divider"),a("v-card-actions",[a("v-spacer"),a("v-btn",{attrs:{rounded:"",elevation:"2",text:""},on:{click:function(e){t.dialog=!1}}},[t._v(" No. ")]),a("v-btn",{attrs:{rounded:"",elevation:"2",color:"accent"},on:{click:[function(e){t.dialog=!1},function(e){return t.goGaveOverState()}]}},[t._v(" Yes, I give up. ")])],1)],1)],1),a("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],attrs:{color:"red",elevation:"2",height:"100",width:"100"},on:{click:function(e){return t.retryGame()}}},[t._v("retry ")])],2),a("v-card",{staticClass:"elevation-12"},[a("v-simple-table",[a("thead",[a("tr",[a("th",{staticClass:"text-left"},[t._v("submit num")]),a("th",{staticClass:"text-left"},[t._v("predict num")]),a("th",{staticClass:"text-left"},[t._v("hit")]),a("th",{staticClass:"text-left"},[t._v("blow")])])]),a("tbody",t._l(t.predict_history,(function(e,r){return a("tr",{key:r},[a("td",[t._v(t._s(r))]),a("td",[t._v(t._s(e.predict))]),a("td",[t._v(t._s(e.hit))]),a("td",[t._v(t._s(e.blow))])])})),0)])],1)],1)],1)],1)],1)},n=[],s=(a("a434"),a("fb6a"),a("4e82"),a("caad"),a("2532"),{name:"App",components:{},data:function(){return{estimate_array:[],answer_array:[],limit_of_num:5,button_label_list:["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"],hit:0,blow:0,predict_history:[],message:"",dialog:!1,gameover_state:!1}},created:function(){this.setAnswerNumberGenerator()},computed:{current_predict:function(){return this.estimate_array},submit_button_disable:function(){return 1==this.gameover_state||this.estimate_array.length<this.limit_of_num},clear_disabled:function(){return 1==this.gameover_state},giveup_disabled:function(){return 1==this.gameover_state},show:function(){return 1==this.gameover_state}},methods:{addNumToEstimateArray:function(t){this.estimate_array.length+1>this.limit_of_num?alert("over length. please submit or clear"):this.estimate_array.push(t)},clearEstimateArrayElements:function(){this.estimate_array.splice(0)},setAnswerNumberGenerator:function(){var t=this.button_label_list.slice(),e=t.sort((function(){return.5-Math.random()})),a=e.slice(0,this.limit_of_num);this.answer_array=a,this.predict_history.splice(0)},numButtonDisable:function(t){return 1==this.gameover_state||this.estimate_array.includes(t)},count_num_of_hit_and_blow:function(){for(var t=0,e=0,a=0,r=this.estimate_array.length;a<r;++a)this.estimate_array[a]===this.answer_array[a]&&++t,this.answer_array.includes(this.estimate_array[a])&&++e;this.hit=t,this.blow=e,this.predict_history.push({predict:this.estimate_array.slice(),hit:t,blow:e}),t===this.limit_of_num?this.goGameClearState():this.clearEstimateArrayElements()},goGaveOverState:function(){this.gameover_state=!0,this.estimate_array=[],this.message=this.answer_array},goGameClearState:function(){this.gameover_state=!0,this.message="Congratulations !"},retryGame:function(){this.setAnswerNumberGenerator(),this.gameover_state=!1,this.estimate_array=[],this.predict_history=[],this.message="",this.hit=0,this.blow=0}}}),o=s,l=a("2877"),c=a("6544"),u=a.n(c),h=a("7496"),d=a("8336"),_=a("b0af"),v=a("99d9"),f=a("a523"),m=a("169a"),p=a("ce7e"),b=a("0e8f"),y=a("a722"),g=a("1f4f"),w=a("2fa4"),x=Object(l["a"])(o,i,n,!1,null,null,null),C=x.exports;u()(x,{VApp:h["a"],VBtn:d["a"],VCard:_["a"],VCardActions:v["a"],VCardTitle:v["b"],VContainer:f["a"],VDialog:m["a"],VDivider:p["a"],VFlex:b["a"],VLayout:y["a"],VSimpleTable:g["a"],VSpacer:w["a"]});var O=a("f309");r["a"].use(O["a"]);var k=new O["a"]({theme:{themes:{light:{primary:"#3f51b5",secondary:"#b0bec5",accent:"#8c9eff",error:"#b71c1c"}}}});r["a"].config.productionTip=!1,new r["a"]({vuetify:k,render:function(t){return t(C)}}).$mount("#app")}});
//# sourceMappingURL=app.3fd11538.js.map