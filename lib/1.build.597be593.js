webpackJsonp([1],{50:function(t,n,e){var o,s;o=e(51);var i=e(56);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=o},51:function(t,n,e){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(n,"__esModule",{value:!0});var s=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},i=e(10),a=e(12),r=o(a),c=e(52),p=o(c),l=e(36),u=o(l),d=e(41),f=o(d),h=e(46),_=e(48),m=e(47),y=e(27),I=e(55),v=o(I);n.default={data:function(){return{replyId:"",topicId:""}},mounted:function(){this.topicId=this.$route.params.id,this.getTopicInfo()},methods:{getTopicInfo:function(){this.$store.dispatch(h.GET_TOPIC_INFO,this.topicId)},getTabInfo:function(t){var n=t.tab;return t.good?n="good":t.top&&(n="top"),m.topicTab[n]},addReply:function(t){this.userInfo.loginname||this.$router.push({name:"login",query:{redirect:encodeURIComponent(this.$route.name)}}),this.replyId=t},handleReply:function(){this.replyId=""},isUps:function(t){return t.indexOf(this.userInfo.id)>-1},handleUpReply:function(t){var n=this;return this.userInfo.loginname?void(0,y.upReply)({accesstoken:this.userInfo.accesstoken},t.id).then(function(e){if(e.success)if("down"===e.action){var o=t.ups.indexOf(n.userInfo.id);o>-1&&t.ups.splice(o,1)}else t.ups.push(n.userInfo.id)}):void this.$router.push({name:"login",query:{redirect:encodeURIComponent(this.$route.name)}})}},filters:{getTimeInfo:function(t){return(0,_.getTimeInfo)(t)}},beforeRouteEnter:function(t,n,e){v.default.state.topicInfo={},e()},computed:s({},(0,i.mapState)(["topicInfo","userInfo","showLoad"])),components:{nvHead:r.default,nvReply:p.default,nvTop:u.default,nvLoad:f.default}}},52:function(t,n,e){var o,s;o=e(53);var i=e(54);s=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(s=o=o.default),"function"==typeof s&&(s=s.options),s.render=i.render,s.staticRenderFns=i.staticRenderFns,t.exports=o},53:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o])}return t},s=e(10),i=e(46);n.default={data:function(){return{content:""}},props:["replyId","replyTo","topicId","focus"],mounted:function(){this.replyTo&&(this.content="@"+this.replyTo+" ")},methods:{handleReply:function(){var t=this,n={accesstoken:this.userInfo.accesstoken,content:this.content,reply_id:this.replyId,topicId:this.topicId};this.$store.dispatch(i.REPLY,n).then(function(){t.content="",t.$emit("onReply")})}},computed:o({},(0,s.mapState)(["userInfo"]))}},54:function(module,exports){module.exports={render:function(){with(this)return _h("section",{staticClass:"reply"},[_h("textarea",{directives:[{name:"model",rawName:"v-model",value:content,expression:"content"},{name:"focus",rawName:"v-focus",value:focus,expression:"focus"}],staticClass:"text",attrs:{id:"content",rows:"8",placeholder:"回复支持Markdown语法,请注意标记代码"},domProps:{value:_s(content)},on:{input:function(t){t.target.composing||(content=t.target.value)}}})," ",_h("button",{staticClass:"btn btn-reply btn-reply-confirm",on:{click:handleReply}},["确定"])])},staticRenderFns:[]}},56:function(module,exports){module.exports={render:function(){with(this)return _h("div",[_h("nv-head")," ",topicInfo.title?_h("div",{staticClass:"topic"},[_h("h2",{staticClass:"topic-title",domProps:{textContent:_s(topicInfo.title)}})," ",_h("section",{staticClass:"author-info"},[_h("img",{staticClass:"avatar",attrs:{src:topicInfo.author.avatar_url,alt:""}})," ",_h("div",{staticClass:"center"},[_h("span",{staticClass:"author",domProps:{textContent:_s(topicInfo.author.loginname)}})," ",_h("time",{staticClass:"info"},["\n                    发布于:"+_s(_f("getTimeInfo")(topicInfo.create_at))+"\n                "])])," ",_h("div",{staticClass:"right"},[_h("span",{staticClass:"tag",class:{color:topicInfo.good||topicInfo.top},domProps:{textContent:_s(getTabInfo(topicInfo))}})," ",_h("span",{staticClass:"name"},[_s(topicInfo.visit_count)+"次浏览"])])])," ",_h("section",{staticClass:"markdown-body topic-content",domProps:{innerHTML:_s(topicInfo.content)}})," ",_h("section",{staticClass:"topic-reply"},[_h("h3",{staticClass:"topic-total"},[_h("strong",[_s(topicInfo.reply_count)])," 回复\n            "])," ",_h("ul",{staticClass:"reply-list"},[_l(topicInfo.replies,function(t){return _h("li",[_h("section",{staticClass:"user"},[_h("router-link",{attrs:{to:{name:"user",params:{loginname:t.author.loginname}}}},[_h("img",{staticClass:"head",attrs:{src:t.author.avatar_url}})])," ",_h("div",{staticClass:"info"},[_h("span",{staticClass:"left"},[_h("span",{staticClass:"name",domProps:{textContent:_s(t.author.loginname)}})," ",_h("span",{staticClass:"name"},["\n                                    发布于:"+_s(_f("getTimeInfo")(t.create_at))+"\n                                "])])," ",_h("span",{staticClass:"right"},[_h("span",{staticClass:"iconfont icon-dianzan",class:{uped:isUps(t.ups)},attrs:{style:"margin-right: 5px"},on:{click:function(n){handleUpReply(t)}}})," ",_h("span",{attrs:{style:"margin-right: 5px"}},[_s(t.ups.length)])," ",_h("span",{staticClass:"iconfont icon-hf",on:{click:function(n){addReply(t.id)}}})])])])," ",_h("div",{staticClass:"reply-content markdown-body",domProps:{innerHTML:_s(t.content)}})," ",userInfo.loginname&&replyId===t.id?_h("nv-reply",{attrs:{"reply-to":t.author.loginname,"reply-id":t.id,"topic-id":topicId,focus:!0},on:{onReply:handleReply}}):_e()])})])])," ",userInfo.loginname?_h("nv-reply",{attrs:{"topic-id":topicId}}):_e()]):_e()," ",_h("nv-top")," ",_h("nv-load",{attrs:{show:showLoad}})])},staticRenderFns:[]}}});