webpackJsonp([3],{19:function(t,e,o){var n,a;n=o(80);var r=o(96);a=n=n||{},"object"!=typeof n.default&&"function"!=typeof n.default||(a=n=n.default),"function"==typeof a&&(a=a.options),a.render=r.render,a.staticRenderFns=r.staticRenderFns,t.exports=n},80:function(t,e,o){"use strict";var n=o(5),a=(o.n(n),o(8)),r=o.n(a),i=o(84),s=(o.n(i),o(6)),c=o(4);Object.defineProperty(e,"__esModule",{value:!0});var l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var n in o)Object.prototype.hasOwnProperty.call(o,n)&&(t[n]=o[n])}return t};e.default={data:function(){return{topic:{tab:"share",title:"",content:""}}},mounted:function(){c.a.close()},methods:{handleSubmit:function(){var t=this,e=this.topic,n=e.title,a=e.content;if(n&&!(n.length<10)&&a){var r=l({},this.topic,{accesstoken:this.userInfo.accesstoken});o.i(s.g)(r).then(function(){res.success&&(sessionStorage.removeItem("scrollTop"),sessionStorage.removeItem("searchOption"),sessionStorage.removeItem("tab"),t.$router.push({name:"list"}))})}}},computed:l({},o.i(n.mapGetters)(["userInfo"])),components:{nvHead:r.a}}},84:function(t,e){},96:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("nv-head",{attrs:{title:"主题"}}),t._v(" "),o("div",{staticClass:"topic-create"},[o("div",{staticClass:"category"},[o("span",[t._v("选择板块：")]),t._v(" "),o("select",{directives:[{name:"model",rawName:"v-model",value:t.topic.tab,expression:"topic.tab"}],on:{change:function(e){t.topic.tab=Array.prototype.filter.call(e.target.options,function(t){return t.selected}).map(function(t){var e="_value"in t?t._value:t.value;return e})[0]}}},[o("option",{attrs:{value:"share"},domProps:{value:"share"}},[t._v("分享")]),t._v(" "),o("option",{attrs:{value:"ask"},domProps:{value:"ask"}},[t._v("问答")]),t._v(" "),o("option",{attrs:{value:"job"},domProps:{value:"job"}},[t._v("招聘")])])]),t._v(" "),o("div",{staticClass:"title"},[o("input",{directives:[{name:"model",rawName:"v-model.trim",value:t.topic.title,expression:"topic.title",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"标题，字数10字以上",maxLength:"100"},domProps:{value:t._s(t.topic.title)},on:{input:function(e){e.target.composing||(t.topic.title=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),o("div",{staticClass:"content"},[o("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.topic.content,expression:"topic.content",modifiers:{trim:!0}}],attrs:{rows:"15",placeholder:"支持Markdown语法,请注意标记代码"},domProps:{value:t._s(t.topic.content)},on:{input:function(e){e.target.composing||(t.topic.content=e.target.value.trim())},blur:function(e){t.$forceUpdate()}}})]),t._v(" "),o("button",{on:{click:t.handleSubmit}},[t._v("提交")])])],1)},staticRenderFns:[]}}});