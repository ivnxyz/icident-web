(window.webpackJsonp=window.webpackJsonp||[]).push([[16,246],{266:function(e,t,n){var content=n(268);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(49).default)("cf39a5ee",content,!0,{sourceMap:!1})},267:function(e,t,n){"use strict";n(266)},268:function(e,t,n){var r=n(48)((function(i){return i[1]}));r.push([e.i,"/*purgecss start ignore*/\n@-webkit-keyframes loader-rotate-data-v-d6dae6f2{\n0%{\n    transform:rotate(0)\n}\nto{\n    transform:rotate(1turn)\n}\n}\n@keyframes loader-rotate-data-v-d6dae6f2{\n0%{\n    transform:rotate(0)\n}\nto{\n    transform:rotate(1turn)\n}\n}\n.loader[data-v-d6dae6f2]{\n  border-right-color:transparent;\n  -webkit-animation:loader-rotate-data-v-d6dae6f2 1s linear infinite;\n          animation:loader-rotate-data-v-d6dae6f2 1s linear infinite\n}\n\n/*purgecss end ignore*/",""]),r.locals={},e.exports=r},269:function(e,t,n){"use strict";n.r(t);n(70);var r={props:{color:{type:String,required:!1,default:"blue-300"},size:{type:String,rquired:!1,default:"12"}},computed:{spinnerClass:function(){return"border-4 rounded-full loader border-".concat(this.color," ").concat(this.spinnerSizeClass)},spinnerSizeClass:function(){return"w-".concat(this.size," h-").concat(this.size)}}},o=(n(267),n(9)),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{class:e.spinnerClass})}),[],!1,null,"d6dae6f2",null);t.default=component.exports},270:function(e,t,n){"use strict";n.r(t);var r={props:{loading:{type:Boolean,required:!1,default:!1},isCTA:{type:Boolean,required:!1,default:!1}},methods:{onClick:function(){if(!this.loading){if(this.isCTA)return void this.$router.push("/agenda/formulario");this.$emit("click")}}}},o=n(9),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"bg-blue-500 active:bg-blue-600 text-white px-8 py-4 rounded-full font-medium tracking-widest flex justify-center items-center",on:{click:e.onClick}},[e.loading?n("Spinner",{attrs:{size:"8",color:"white"}}):e._t("default")],2)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Spinner:n(269).default})}}]);