(function(t){function e(e){for(var a,o,s=e[0],c=e[1],u=e[2],l=0,f=[];l<s.length;l++)o=s[l],r[o]&&f.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);d&&d(e);while(f.length)f.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==r[s]&&(a=!1)}a&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},o={app:0},r={app:0},i=[];function s(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"0078f85d"}[t]+".js"}function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={about:1};o[t]?e.push(o[t]):0!==o[t]&&n[t]&&e.push(o[t]=new Promise(function(e,n){for(var a="css/"+({about:"about"}[t]||t)+"."+{about:"9d96163d"}[t]+".css",o=c.p+a,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var s=r[i],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===a||u===o))return e()}var l=document.getElementsByTagName("style");for(i=0;i<l.length;i++){s=l[i],u=s.getAttribute("data-href");if(u===a||u===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var a=e&&e.target&&e.target.src||o,r=new Error("Loading CSS chunk "+t+" failed.\n("+a+")");r.request=a,n(r)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)}).then(function(){o[t]=0}));var a=r[t];if(0!==a)if(a)e.push(a[2]);else{var i=new Promise(function(e,n){a=r[t]=[e,n]});e.push(a[2]=i);var u,l=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,c.nc&&f.setAttribute("nonce",c.nc),f.src=s(t),u=function(e){f.onerror=f.onload=null,clearTimeout(d);var n=r[t];if(0!==n){if(n){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src,i=new Error("Loading chunk "+t+" failed.\n("+a+": "+o+")");i.type=a,i.request=o,n[1](i)}r[t]=void 0}};var d=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,l.appendChild(f)}return Promise.all(e)},c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var d=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"106f":function(t,e,n){},"21e9":function(t,e,n){},"2d63":function(t,e,n){"use strict";var a=n("517e"),o=n.n(a);o.a},3623:function(t,e,n){},"517e":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("back-canvas"),n("div",{staticClass:"main-container"},[n("router-view")],1)],1)},r=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"canvas",staticClass:"back-cnvs-container"})},s=[],c=(n("6c7b"),n("ac6a"),{name:"BackCanvasCmp",components:{},data:function(){return{script:null,ps:null,ufo:{isShown:!1,frames:[],x:3e3,y:0,scale:.5,show:function(t){t.image(this.frames[t.frameCount%this.frames.length],this.x,this.y)},reset:function(t){this.x=t.windowWidth/this.scale+500,this.y=0,this.scale},update:function(t){var e=t.noise(t.frameCount/100);e=t.map(e,0,1,50,70),this.x-=t.floor(e);var n=t.noise(t.frameCount/30);n=t.map(n,0,1,-50,t.windowHeight-300),this.y=t.floor(n)}},bubbles:[]}},mounted:function(){var t=this;this.script=function(e){var n=e.windowWidth,a=e.windowHeight;e.preload=function(n){for(var a=0;a<25;a++){var o=e.loadImage("./img/ufd_blue/ufo-sprite_".concat(a,".png"));t.ufo.frames.push(o)}},e.setup=function(o){t.canvas=e.createCanvas(n,a),e.noStroke(),e.frameRate(25);for(var r=0;r<20;r++)t.bubbles[r]=new t.Bubble(e)},e.draw=function(n){e.background(255),t.handleUfo(e),t.bubbles.forEach(function(n,a){n.update(),n.show(),(n.alpha<=40||n.scl<4||n.posx<0||n.posx>e.windowWidth+60)&&t.bubbles.splice(a,1,new t.Bubble(e))})},e.windowResized=function(t){e.resizeCanvas(e.windowWidth,e.windowHeight)},setTimeout(function(e){t.ufo.isShown||(t.ufo.reset(e),t.ufo.isShown=!0)},3e3,e)};var e=n("237d");this.ps=new e(this.script,this.$refs.canvas)},methods:{handleUfo:function(t){var e=t.noise(t.frameCount/40);this.ufo.scale=t.map(e,0,1,.02,.6),this.ufo.isShown?(this.ufo.update(t),t.push(),t.scale(this.ufo.scale),this.ufo.show(t),t.pop(),this.ufo.x<-500&&(this.ufo.isShown=!1)):Math.random()<.007&&(this.ufo.reset(t),this.ufo.isShown=!0)},Bubble:function(t){var e=this;this.scl=30+t.floor(t.random(-15,15)),this.alpha=240,this.pos={x:t.random(0,t.windowWidth),y:t.windowHeight+this.scl},this.vel={x:t.random(-1,2),y:t.random(-4,-1)},this.acc={x:0,y:0},this.show=function(){t.fill(204,e.alpha),t.ellipse(e.pos.x,e.pos.y,e.scl)},this.update=function(){e.attracted(t.mouseX,t.mouseY),e.vel={x:e.vel.x+e.acc.x,y:e.vel.y+e.acc.y},e.pos={x:e.pos.x+e.vel.x,y:e.pos.y+e.vel.y},e.acc={x:0,y:0},e.alpha-=t.floor(t.random(5)),e.scl-=t.random([1,0,0,0,0])},this.attracted=function(t,n){var a={x:t,y:n},o={x:a.x-e.pos.x,y:a.y-e.pos.y},r=Math.floor(Math.sqrt(o.x*o.x+o.y*o.y));r>800?r=800:r<1&&(r=1);var i=50,s=i/(r*r),c=Math.atan2(o.y,o.x);o={x:Math.cos(c)*s,y:Math.sin(c)*s},r<20&&(o={x:-1.5*o.x,y:-1.5*o.y});var u=20;e.acc={x:(e.acc.x+o.x)*u,y:(e.acc.y+o.y)*u}}}}}),u=c,l=(n("2d63"),n("2877")),f=Object(l["a"])(u,i,s,!1,null,"799a09a9",null);f.options.__file="BackCanvasCmp.vue";var d=f.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"front-cnvs-container",attrs:{id:"container"}})},h=[],v=n("5a89"),m={name:"FrontCanvasCmp",components:{},data:function(){return{camera:null,scene:null,renderer:null,mesh:null}},methods:{init:function(){var t=document.getElementById("container");this.camera=new v["PerspectiveCamera"](70,t.clientWidth/t.clientHeight,.01,10),this.camera.position.z=1,this.scene=new v["Scene"];var e=new v["BoxGeometry"](.2,.2,.06),n=new v["MeshNormalMaterial"];this.mesh=new v["Mesh"](e,n),this.scene.add(this.mesh),this.renderer=new v["WebGLRenderer"]({antialias:!0,alpha:!0}),this.renderer.setSize(t.clientWidth,t.clientHeight)},animate:function(){var t=this;setTimeout(function(){requestAnimationFrame(t.animate)},40),this.mesh.rotation.x+=.01,this.mesh.rotation.y+=.02,this.renderer.render(this.scene,this.camera)}},mounted:function(){this.init(),this.animate()}},b=m,g=(n("75ab"),Object(l["a"])(b,p,h,!1,null,"d138ff40",null));g.options.__file="FrontCanvasCmp.vue";var w=g.exports,y={name:"App",components:{BackCanvas:d,FrontCanvas:w}},x=y,_=(n("5c0b"),Object(l["a"])(x,o,r,!1,null,null,null));_.options.__file="App.vue";var C=_.exports,j=n("8c4f"),k=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"home"},[a("div",{staticClass:"first-page page"},[a("div",{staticClass:"content-container"},[a("div",{staticClass:"title-container"},[a("title-interactive",{attrs:{txt:t.titleTxt}})],1),a("div",{staticClass:"middle-line"}),t._m(0)]),a("div",{staticClass:"btns-container"},[a("div",{staticClass:"contact-btn btn",on:{click:t.goToContactInfo}},[t._v("Contact")]),a("div",{staticClass:"nav-btn btn",on:{click:t.onNavBtnClick}},[t._v("⇩")])]),a("img",{staticClass:"woods-img",attrs:{src:n("86c5")}})]),a("div",{staticClass:"second-page page"},[a("div",{staticClass:"projects-container"},[a("div",{staticClass:"projects-grid"},t._l(t.projects,function(t){return a("div",{key:t.title,staticClass:"project"},[a("project-preview",{attrs:{project:t}})],1)}))])]),t._m(1)])},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"intro-container"},[n("p",[t._v("\n          Hi!"),n("br"),t._v("\n          I'm Fullstac᠎k developer with a passion for design, animation and new technologies.\n          Please chec᠎k out my past projects below as well as my contact details.\n        ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"contact",attrs:{"data-section-name":"footer"}},[n("p",[t._v("\n        hiush call mee"),n("br"),t._v("\n        hiush call mee"),n("br"),t._v("\n        hiush call mee"),n("br"),t._v("\n        hiush call mee"),n("br")])])}],T=n("1157"),B=n.n(T),S=(n("5598"),n("5a72")),E=n.n(S),O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"Title"},[n("h1",[t._v("\n    "+t._s(t.txt)+"\n  ")])])},M=[],I={name:"TitleCmp",props:{txt:String}},A=I,$=(n("b0a9"),Object(l["a"])(A,O,M,!1,null,"3e720776",null));$.options.__file="TitleCmp.vue";var H=$.exports,N=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"project-preview"},[n("img",{attrs:{src:t.project.img}}),n("h1",[t._v("\n    "+t._s(t.project.title)+"\n  ")])])},Y=[],W={name:"ProjectPreviewCmp",props:["project"],created:function(){}},F=W,q=(n("61e9"),Object(l["a"])(F,N,Y,!1,null,"567387e1",null));q.options.__file="ProjectPreviewCmp.vue";var X=q.exports,z={name:"home",components:{TitleInteractive:H,ProjectPreview:X},data:function(){return{titleTxt:"Ilay Skutelsky",currPageIdx:0,projects:[{title:"TravelMaker",img:"../../img/projects-previews/TravelMaker.png"}]}},mounted:function(){var t=this;B()(function(){B.a.scrollify({section:".page",interstitialSection:"footer",updateHash:!1,scrollbars:!1,before:function(e){if(0===e)t.moveBtnsToPage1();else if(1===e){if(2===t.currPageIdx)return;t.moveBtnsToPage2(),t.animateProjects()}},after:function(e){t.currPageIdx=e}})}),B()(".btns-container .btn").mousemove(function(t){var e=t.offsetY-40,n=t.offsetX-40;E()({targets:t.target,rotateX:e+"deg",rotateY:n+"deg",translateY:"+=0",rotateZ:"+=0","background-color":"rgba(187,187,187,0.8)",duration:100})}),B()(".btns-container .btn").mouseleave(function(t){E()({targets:t.target,rotateX:"0deg",rotateY:"0deg",translateY:"+=0",rotateZ:"+=0","background-color":"rgba(204,204,204,0.6)",duration:300})}),this.moveBtnsToPage1()},methods:{onNavBtnClick:function(){0===this.currPageIdx?B.a.scrollify.next():B.a.scrollify.previous()},goToContactInfo:function(){this.moveBtnsToPage2(),this.currPageIdx=3,B.a.scrollify.move("#footer")},moveBtnsToPage1:function(){E()({targets:[".contact-btn",".nav-btn",".options-btn"],translateY:[150,0],duration:300,delay:function(t,e){return 150*e}})},moveBtnsToPage2:function(){E()({targets:[".contact-btn",".nav-btn",".options-btn"],translateY:[0,150],rotateZ:function(t,e){return 1===e?"180":0},duration:300,delay:function(t,e){return 100*e}})},animateProjects:function(){E()({targets:[".project"],translateX:[-1e3,0],translateY:function(t,e){return[100*e,0]},duration:1300,delay:function(t,e){return 100*e}})}}},L=z,R=(n("a3a0"),Object(l["a"])(L,k,P,!1,null,"5bf6e440",null));R.options.__file="Home.vue";var Z=R.exports;a["a"].use(j["a"]);var G=new j["a"]({routes:[{path:"/",name:"home",component:Z},{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}}]}),J=n("2f62");a["a"].use(J["a"]);var U=new J["a"].Store({state:{},mutations:{},actions:{}}),D=n("9483");Object(D["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},cached:function(){console.log("Content has been cached for offline use.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),a["a"].config.productionTip=!1,new a["a"]({router:G,store:U,render:function(t){return t(C)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";var a=n("106f"),o=n.n(a);o.a},"61e9":function(t,e,n){"use strict";var a=n("3623"),o=n.n(a);o.a},"75ab":function(t,e,n){"use strict";var a=n("d3f0"),o=n.n(a);o.a},"86c5":function(t,e,n){t.exports=n.p+"img/autumn-landscape-1352568333n2y.c1edee46.png"},a3a0:function(t,e,n){"use strict";var a=n("f805"),o=n.n(a);o.a},b0a9:function(t,e,n){"use strict";var a=n("21e9"),o=n.n(a);o.a},d3f0:function(t,e,n){},f805:function(t,e,n){}});
//# sourceMappingURL=app.ec688d63.js.map