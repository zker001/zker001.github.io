(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{845:function(e,t,n){"use strict";n.r(t),function(e){n.d(t,"default",function(){return l});var a=n(21),r=n(22),i=n(399),l=function(){function t(){Object(a.a)(this,t);this.client=new i({tracker:{rtcConfig:{iceServers:[{urls:"stun:stun2.l.google.com:19302"},{urls:"stun:stun3.l.google.com:19302"},{urls:"stun:stun.btbresource.com:3478"},{urls:"stun:global.stun.twilio.com:3478?transport=udp"}]}},dht:!1}),this.torrentCallback=null,this.onStartCallback=null}return Object(r.a)(t,[{key:"init",value:function(e,t,n){this.torrentCallback=e,this.onStartCallback=t;var a=n;a||(a=document.querySelector("input[name=upload]")),a&&this.uploadElement(a,this.onStartCallback,function(e,t){if(e)return e;t=t.map(function(e){return e.file}),this.onFiles(t)}.bind(this))}},{key:"isTorrentFile",value:function(e){return-1!==e.name.indexOf(".torrent")}},{key:"isNotTorrentFile",value:function(e){return!this.isTorrentFile(e)}},{key:"onSeedTorrent",value:function(e){e.on("warning",function(e){console.log(e)}),e.on("error",function(e){console.log(e)}),this.torrentCallback(e)}},{key:"seedContent",value:function(t,n){var a=e.from(t),r=this.client.seed(a,n);r.on("infoHash",function(e){n(r)})}},{key:"seed",value:function(e){var t=this;0!==e.length&&(this.onStartCallback(e),setTimeout(function(){var n=t.client.seed(e,t.onSeedTorrent.bind(t));n.on("infoHash",function(e){t.torrentCallback(n)})},1e3))}},{key:"onFiles",value:function(e){console.log("got files:"),e.forEach(function(e){}),this.seed(e)}},{key:"uploadElement",value:function(e,t,n,a){"function"===typeof n&&(a=n,n={}),"string"===typeof n&&(n={type:n}),e.addEventListener("change",function(r){if(0===e.files.length)return a(null,[]);t&&t(null);var i=new FileReader,l=0,s=[];function o(t){var a=e.files[t];"text"===n.type?i.readAsText(a):"url"===n.type?i.readAsDataURL(a):i.readAsArrayBuffer(a)}i.addEventListener("load",function(t){s.push({file:e.files[l],target:t.target}),++l===e.files.length?a(null,s):o(l)}),o(l)})}}]),t}()}.call(this,n(7).Buffer)},921:function(e,t,n){(function(t){e.exports=function(e,n){var d=e.files.filter(function(e){return/^poster\.(jpg|png|gif)$/.test(e.name)})[0];if(d)return u(d,n);var m=["audio","video","image"].map(function(t){return{type:t,size:l(e,r[t])}}).sort(function(e,t){return t.size-e.size})[0];if(0===m.size)return n(new Error(i));switch(m.type){case"audio":return function(e,t){var n=o(e,r.image);if(0===n.length)return t(new Error(i));var l=n.map(function(e){return{file:e,score:c(e)}}).reduce(function(e,t){return e.score>t.score?e:t.score>e.score?t:e.file.length>t.file.length?e:t}),s=a.extname(l.file.name);l.file.getBuffer(function(e,n){return t(e,n,s)})}(e,n);case"image":return function(e,t){u(s(e,r.image),t)}(e,n);case"video":return function(e,n){s(e,r.video).getBlobURL(function(e,a){var r=document.createElement("video");function l(){r.removeEventListener("seeked",l);var e=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};"string"===typeof e&&(e=document.querySelector(e));if(null==e||"VIDEO"!==e.nodeName)throw new TypeError("First argument must be a <video> element or selector");var a=n.format;null==a&&(a="png");if("png"!==a&&"jpeg"!==a&&"webp"!==a)throw new TypeError('Second argument must be one of "png", "jpeg", or "webp"');var r=document.createElement("canvas");r.width=e.videoWidth,r.height=e.videoHeight,r.getContext("2d").drawImage(e,0,0);var i=r.toDataURL("image/"+a).split(",")[1];return t.from(i,"base64")}(r);if(r.pause(),r.src="",r.load(),0===e.length)return n(new Error(i));n(null,e,".png")}r.addEventListener("canplay",function e(){r.removeEventListener("canplay",e);r.addEventListener("seeked",l);r.currentTime=Math.min(.03*(r.duration||600),60)}),r.volume=0,r.src=a,r.play()})}(e,n)}};var a=n(92),r=n(922),i="Cannot generate a poster from any files in the torrent";function l(e,t){var n=o(e,t);return 0===n.length?0:n.map(function(e){return e.length}).reduce(function(e,t){return e+t})}function s(e,t){var n=o(e,t);if(0!==n.length)return n.reduce(function(e,t){return e.length>t.length?e:t})}function o(e,t){return e.files.filter(function(e){var n=a.extname(e.name).toLowerCase();return-1!==t.indexOf(n)})}function c(e){var t=a.basename(e.name,a.extname(e.name)).toLowerCase(),n={cover:80,folder:80,album:80,front:80,back:20,spectrogram:-80};for(var r in n){if(t===r)return n[r];if(-1!==t.indexOf(r))return n[r]}return 0}function u(e,t){var n=a.extname(e.name);e.getBuffer(function(e,a){return t(e,a,n)})}}).call(this,n(7).Buffer)},922:function(e,t){e.exports={audio:[".aac",".aif",".aiff",".asf",".dff",".dsf",".flac",".m2a",".m4a",".m4b",".mp2",".mp3",".mpc",".oga",".ogg",".opus",".spx",".wma",".wav",".wv",".wvp"],video:[".avi",".mp4",".m4v",".webm",".mov",".mkv",".mpg",".mpeg",".ogv",".webm",".wmv"],image:[".gif",".jpg",".jpeg",".png"]}},934:function(e,t,n){"use strict";n.r(t),function(e){var a=n(51),r=n(21),i=n(22),l=n(24),s=n(23),o=n(25),c=n(0),u=n.n(c),d=n(826),m=n(827),p=n(229),h=n(230),f=n(232),g=n(33),v=n(65),E=n(89),y=n(64),b=n(77),k=n(127),S=n(40),w=n(231),T=n(78),N=n(835),I=n(919),O=n(920),C=n(834),j=n(397),F=n(394),x=n(395),L=n(13),B=n(30),M=n(845).default,A=n(878),H=(n(79),n(13)),z=(H.shareResource,H.postSafe),D=H.loadLocalAccount,P=H.signString,R=(n(921),function(t){function n(e){var t;Object(r.a)(this,n);return(t=Object(l.a)(this,Object(s.a)(n).call(this,e))).state={collapse:!0,resourceList:[],resource:{tags:"",price:"",fee:"",deadline:"",owner:"",id:""},rsId:""},t.state.shareMsg="",t.share=new M(t.state),t.userSec="",t.fee=.01,t.deadline=5,t.price=0,t.tags="",t.resName="",t.resId="",t.infoInterval=null,t.torrentList=[],t.resume=null,t.html5File=null,t.torrent=null,t.poster=null,t}return Object(o.a)(n,t),Object(i.a)(n,[{key:"cancelShare",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"toggle",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"uploadTorrent",value:function(){var e=this,t=this.torrent,n=t.torrentFile.toString("base64"),a=t.infoHash,r=(this.poster,this.torrent.files[0].name);this.setState({shareMsg:"\u6587\u4ef6\u4e0a\u4f20\u4e2d..."}),console.log("upload torrentFile"+n);var i={torrentFile:n,name:r},l=(new Date).getTime();l-=l%864e5;var s=P(this.userSec,a+l),o=Object(L.getFileHost)();z({url:o+"/torrentFile/"+a+"/"+s,nonce:"0000"},i,function(t){t&&(e.initResumable(a,s),e.resume.addFile(e.html5File))})}},{key:"uploadAgain",value:function(){this.setState({shareMsg:"\u8d44\u6e90\u4e0a\u4f20\u4e2d...",uploadAgain:!1}),this.resume.addFile(this.html5File)}},{key:"doShare",value:function(){var t=this,n=this.deadline+"",a=this.fee+"",r=(this.resName,this.price+""),i=Object(L.createPeerId)(this.userSec),l=i.pk,s=i.aid,o=new e(this.tags+"$$"+this.resName).toString("hex"),c={action:"transaction",type:"share",resId:this.resId,accountId:s,pk:l,fee:a,deadline:n,price:r,resName:o},u={tags:o};Object(B.doBShopTransaction)(this.userSec,c,function(e,n){e&&n&&n.ok?(t.setState({shareMsg:"\u8d44\u6e90\u6821\u9a8c\u6210\u529f\uff0c\u8d44\u6e90\u4e0a\u4f20\u4e2d,\u8bf7\u7a0d\u540e...",ready:!1}),setTimeout(function(){t.uploadTorrent()},3e3)):t.setState({shareMsg:"\u53d1\u5e03\u8d44\u6e90\u51fa\u9519\u4e86"})},u)}},{key:"componentDidMount",value:function(){var e=D();e&&e.secret&&(this.userSec=e.secret,this.setState({rsId:e.rsId})),this.share.init(this.onTorrentDone.bind(this),this.onTorrentStart.bind(this))}},{key:"initResumable",value:function(e,t){var n=this,a=Object(L.getFileHost)()+"/share/"+e+"/"+t;this.resume=new A({target:a,chunkSize:10485760,simultaneousUploads:4,testChunks:!1,throttleProgressCallbacks:1,method:"octet"}),this.resume.on("fileAdded",function(e){console.log("resume got file "+e),n.resume?n.resume.upload():console.log("this.resume is null")}.bind(this)),this.resume.on("pause",function(){console.log("resume pause")}),this.resume.on("complete",function(){console.log("resume complete"),n.state.uploadAgain||n.setState({shareMsg:"\u6587\u4ef6\u4e0a\u4f20\u6210\u529f"})}),this.resume.on("fileSuccess",function(e,t){console.log("resume fileSuccess")}),this.resume.on("fileError",function(e,t){console.log("resume fileError"),n.setState({shareMsg:"\u53d1\u5e03\u8d44\u6e90\u51fa\u9519\u4e86",uploadAgain:!0})}),this.resume.on("fileProgress",function(e){var t=100*e.progress();n.setState({shareMsg:"\u6587\u4ef6\u4e0a\u4f20\u4e2d "+t+"%"})}),this.resume.on("cancel",function(){console.log("resume cancel")}),this.resume.on("uploadStart",function(){console.log("resume uploadStart")})}},{key:"prettyBytes",value:function(e){var t,n=e<0,a=["B","kB","MB","GB","TB","PB","EB","ZB","YB"];return n&&(e=-e),e<1?(n?"-":"")+e+" B":(t=Math.min(Math.floor(Math.log(e)/Math.log(1e3)),a.length-1),(n?"-":"")+(e=Number((e/Math.pow(1e3,t)).toFixed(2)))+" "+a[t])}},{key:"updateTorrentStatus",value:function(){var e=this;this.torrentList.map(function(t){var n=document.querySelector("#pid"+t.infoHash);n&&(n.innerHTML=t.numPeers);var a=document.querySelector("#sid"+t.infoHash);a&&(a.innerHTML=e.prettyBytes(t.uploadSpeed)+"/s")})}},{key:"onTorrentStart",value:function(e){this.setState({shareMsg:"\u5904\u7406\u4e2d...(\u5927\u6587\u4ef6\u53ef\u80fd\u4f1a\u6bd4\u8f83\u6162,\u8bf7\u8010\u5fc3\u7b49\u5f85)"}),e&&(this.html5File=e[0])}},{key:"onTorrentDone",value:function(e){if(this.setState({ready:!0}),e){this.torrent=e;e.infoHash,e.magnetURI,e.torrentFileBlobURL,e.name;this.resId=e.infoHash,this.resName=e.name;var t=this.state.resourceList;t.push({id:this.resId,name:this.resName}),this.setState({resourceList:t}),e.key=e.infoHash,this.torrentList.unshift(e)}this.infoInterval||(this.infoInterval=setInterval(this.updateTorrentStatus.bind(this),3e3)),this.setState({shareMsg:""})}},{key:"updateSecret",value:function(e){if(e&&e.target){this.userSec=e.target.value;var t=Object(L.calcAccountId)(this.userSec);this.setState({rsId:t})}}},{key:"updateFee",value:function(e){e&&e.target&&(this.fee=e.target.value)}},{key:"updatePrice",value:function(e){e&&e.target&&(this.price=e.target.value)}},{key:"updateTags",value:function(e){e&&e.target&&(this.tags=e.target.value)}},{key:"updateDeadline",value:function(e){e&&e.target&&(this.deadline=e.target.value)}},{key:"renderAddFile",value:function(){var e=this;return u.a.createElement(d.a,null,u.a.createElement(m.a,{xs:"12"},u.a.createElement(S.a,null,u.a.createElement(p.a,null,u.a.createElement(h.a,null,u.a.createElement("i",{className:"icon-share",onClick:this.toggle.bind(this)},"\u5171\u4eab\u8d44\u6e90\u8d5a\u79ef\u5206"),u.a.createElement("div",{className:"card-header-actions"},u.a.createElement(g.a,{color:"link",className:"card-header-action btn-setting"},u.a.createElement("i",{className:"icon-settings"})),u.a.createElement(g.a,{color:"link",className:"card-header-action btn-minimize","data-target":"#collapseExample",onClick:this.toggle.bind(this)},u.a.createElement("i",{className:"icon-arrow-up"})),u.a.createElement(g.a,{color:"link",className:"card-header-action btn-close",onClick:this.toggleFade},u.a.createElement("i",{className:"icon-close"})))),u.a.createElement(w.a,{isOpen:this.state.collapse,id:"collapseExample"},u.a.createElement(f.a,null,u.a.createElement(T.a,null,u.a.createElement("div",{className:"controls"},u.a.createElement(v.a,{className:"input-prepend"},u.a.createElement(E.a,{addonType:"prepend"},u.a.createElement(y.a,null,"\u6211\u7684\u8d26\u53f7:")),u.a.createElement(b.a,{id:"prependedInput",size:"16",type:"text",value:this.state.rsId})))),u.a.createElement(T.a,null,u.a.createElement("div",{className:"controls"},u.a.createElement(v.a,{className:"input-prepend"},u.a.createElement(E.a,{addonType:"prepend"},u.a.createElement(y.a,null,"\u8d44\u6e90:")),u.a.createElement("input",{name:"upload",type:"file"})))),u.a.createElement(T.a,null,u.a.createElement("div",{className:"controls"},u.a.createElement(v.a,{className:"input-prepend"},u.a.createElement(E.a,{addonType:"prepend"},u.a.createElement(y.a,null,"\u8d44\u6e90ID:")),u.a.createElement(b.a,{id:"prependedInput1",size:"16",type:"text",value:this.resId})))),u.a.createElement(T.a,null,u.a.createElement("div",{className:"controls"},u.a.createElement(v.a,{className:"input-prepend"},u.a.createElement(E.a,{addonType:"prepend"},u.a.createElement(y.a,null,"\u8d44\u6e90\u6807\u7b7e:")),u.a.createElement(b.a,{id:"prependedInput2",size:"16",type:"text",onChange:this.updateTags.bind(this),placeholder:"\u8d44\u6e90\u63cf\u8ff0"})))),u.a.createElement(T.a,null,u.a.createElement("div",{className:"controls"},u.a.createElement(v.a,{className:"input-prepend"},u.a.createElement(E.a,{addonType:"prepend"},u.a.createElement(y.a,null,"\u4ef7\u683c:")),u.a.createElement(b.a,{id:"appendedPrependedInput3",size:"16",type:"text",onChange:this.updatePrice.bind(this),placeholder:" \u8d44\u6e90\u4ef7\u683c,\u9ed8\u8ba40\u79ef\u5206"}),u.a.createElement(E.a,{addonType:"append"},u.a.createElement(y.a,null,"\u79ef\u5206"))))),u.a.createElement(T.a,null,u.a.createElement("div",{className:"controls"},u.a.createElement(v.a,{className:"input-prepend"},u.a.createElement(E.a,{addonType:"prepend"},u.a.createElement(y.a,null,"\u673a\u5668\u4eba\u8d39:")),u.a.createElement(b.a,{id:"appendedPrependedInput",size:"16",type:"text",onChange:this.updateFee.bind(this),placeholder:"\u673a\u5668\u4eba\u624b\u7eed\u8d39\uff0c\u6700\u5c110.01\u4e2a\u79ef\u5206"}),u.a.createElement(E.a,{addonType:"append"},u.a.createElement(y.a,null,"\u79ef\u5206"))))),this.renderDeadline(),u.a.createElement("div",null,u.a.createElement(k.a,{color:"info"},this.state.shareMsg),this.renderUploadAgainButton()),u.a.createElement("div",{className:"form-actions"},u.a.createElement(g.a,{type:"submit",color:"primary",disabled:!this.state.ready,onClick:function(t){e.setState({shareMsg:"\u6587\u4ef6\u5904\u7406\u4e2d..."}),setTimeout(function(){e.doShare()},1e3)}},"\u5206\u4eab"),u.a.createElement(g.a,{color:"secondary",onClick:function(t){return e.cancelShare()}},"\u53d6\u6d88"))))))))}},{key:"renderUploadAgainButton",value:function(){var e=this;return this.state.uploadAgain?u.a.createElement(g.a,{type:"submit",color:"primary",onClick:function(t){return e.uploadAgain()}},"\u91cd\u65b0\u4e0a\u4f20"):null}},{key:"renderDeadline",value:function(){return null}},{key:"renderResourceItems",value:function(){return this.state.resourceList.map(function(e){var t="pid"+e.id,n="sid"+e.id;return u.a.createElement(N.a,{action:!0},u.a.createElement(I.a,null," ",e.name,"  ",u.a.createElement(U,{id:e.id,res:e})),u.a.createElement(O.a,null,u.a.createElement("code",null," ",u.a.createElement("span",{id:t}),"\u8282\u70b9"),". \u2197",u.a.createElement("code",null,u.a.createElement("span",{id:n}),"\u4e0a\u4f20\u901f\u5ea6")))})}},{key:"renderShareList",value:function(){return u.a.createElement(d.a,null,u.a.createElement(m.a,{sm:"12",xl:"6"},u.a.createElement(p.a,null,u.a.createElement(h.a,null,u.a.createElement("i",{className:"fa fa-align-justify"}),u.a.createElement("strong",null,"\u6211\u7684\u8d44\u6e90\u5217\u8868"),u.a.createElement(k.a,{color:"danger"},u.a.createElement("small",null,"\u8bf7\u4e0d\u8981\u5237\u65b0\u6216\u5173\u95ed\u6b64\u9875\u9762\uff0c\u4fdd\u6301\u6b64\u9875\u9762\u6253\u5f00\u72b6\u6001\u4e0b\uff0c\u8d2d\u4e70\u8fc7\u8d44\u6e90\u7684\u7528\u6237\u624d\u53ef\u4ee5\u4e0b\u8f7d\u672c\u673a\u8d44\u6e90"))),u.a.createElement(f.a,null,u.a.createElement(C.a,null,this.renderResourceItems())))))}},{key:"render",value:function(){return u.a.createElement("div",{className:"animated fadeIn"},this.renderAddFile(),this.renderShareList())}}]),n}(c.Component)),U=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(l.a)(this,Object(s.a)(t).call(this,e))).toggle=n.toggle.bind(Object(a.a)(Object(a.a)(n))),n.state={popoverOpen:!1},n}return Object(o.a)(t,e),Object(i.a)(t,[{key:"toggle",value:function(){this.setState({popoverOpen:!this.state.popoverOpen})}},{key:"render",value:function(){return u.a.createElement("span",null,u.a.createElement("span",{className:"alert-primary  fade show",id:"Popover-"+this.props.id,onClick:this.toggle},"(\u5206\u4eab\u94fe\u63a5)"),u.a.createElement(j.a,{placement:"top",isOpen:this.state.popoverOpen,target:"Popover-"+this.props.id,toggle:this.toggle},u.a.createElement(F.a,null,"\u5206\u4eab\u8fd9\u4e2a\u8d44\u6e90\u7684\u94fe\u63a5"),u.a.createElement(x.a,null,Object(L.getCurrentHost)()+"/#/btb#"+this.props.res.id+"#"+this.props.res.name)))}}]),t}(c.Component);t.default=R}.call(this,n(7).Buffer)}}]);
//# sourceMappingURL=9.8133f708.chunk.js.map