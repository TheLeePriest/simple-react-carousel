(this["webpackJsonpsimple-react-carousel-example"]=this["webpackJsonpsimple-react-carousel-example"]||[]).push([[0],{10:function(e,t,n){e.exports=n(19)},11:function(e,t,n){},18:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);n(11);var i=n(0),r=n.n(i),a=n(6),o=n.n(a),c=n(1);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function l(e,t){return t||(t=e.slice(0)),e.raw=t,e}var u={show:!0,position:"middle",leftControlIcon:null,rightControlIcon:null,backgroundColor:"rgba(0, 0, 0, 0.75)",shape:"rectangle",width:"auto",height:"auto",iconHeight:"32",iconWidth:"32",iconFill:"#FFFFFF",borderRadius:"3px"},d={show:!0,shape:"pill",height:"5px",width:"20px",activeColor:"rgba(0,0,0,0.75)",inactiveColor:"rgba(255,255,255,0.75)",border:"none",boxShadow:"0 0 3px rgba(0, 0, 0, 0.16), 0 0 3px rgba(0, 0, 0, 0.23)"},h=Object(i.createContext)({}),p=h.Provider,v=function(e){var t=e.children,n=e.childCount,a=void 0===n?0:n,o=e.autoPlay,c=void 0!==o&&o,l=e.autoChangeTime,h=void 0===l?3:l,v=e.contentCoversContainer,f=void 0===v||v,m=e.itemFit,w=void 0===m?"cover":m,g=e.controlsOptions,x=e.indicatorOptions,b=e.slideTransitionValue,C=void 0===b?.3:b,E=e.currentSlideTransition,y=void 0===E?C:E,I=Object(i.useReducer)((function(e,t){var n=t.type,i=t.payload;switch(n){case"updateActiveItem":return s({},e,{activeItem:i});case"setCarouselWidth":return s({},e,{carouselWidth:i});case"setTranslateValue":return s({},e,{translateValue:i});case"setToSpecificItem":return s({},e,{activeItem:i,translateValue:e.translateValue+e.carouselWidth});case"setNextItem":return s({},e,{translateValue:e.translateValue+e.carouselWidth,activeItem:e.activeItem===a-1?0:e.activeItem+1});case"setPreviousItem":return s({},e,{translateValue:0,activeItem:0===e.activeItem?a-1:e.activeItem-1});case"setActiveSlidesArray":return s({},e,{activeSlides:i});case"setCurrentSlideTransitionValue":return s({},e,{currentSlideTransition:i});case"triggerSlideTransition":case"handleWindowResize":return s({},e,{},i);default:return e}}),{activeItem:0,childCount:a,translateValue:0,carouselWidth:0,autoPlay:c,autoChangeTime:h,contentCoversContainer:f,itemFit:w,controlsOptions:s({},u,{},g),indicatorOptions:s({},d,{},x),activeSlides:[],slideTransitionValue:C,currentSlideTransition:y}),O=I[0],T=I[1];return r.a.createElement(p,{value:{state:O,dispatch:T}},t)};function f(){var e=l(["\n  position: relative;\n  display: inherit;\n  max-width: 100%;\n  flex: ",";\n  height: 100%;\n\n  > *:first-child {\n    max-width: 100%;\n    width: ",";\n    flex: ",";\n    object-fit: ",";\n  }\n"]);return f=function(){return e},e}function m(){var e=l(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n"]);return m=function(){return e},e}var w=c.a.li(m()),g=c.a.div(f(),(function(e){return e.coverContainer?"1":"unset"}),(function(e){return e.width+"px"}),(function(e){return e.coverContainer?"1":"unset"}),(function(e){var t=e.coverContainer,n=e.itemFit;return t?n:"unset"})),x=function(e){var t=e.children,n=e.index,a=e.overrideFit,o=void 0!==a&&a,c=Object(i.useContext)(h).state,s=c.activeItem,l=c.contentCoversContainer,u=c.carouselWidth,d=c.itemFit,p=c.currentSlideTransition,v=o||d;return r.a.createElement(w,{"data-testid":"carouselItem-"+n,active:n===s,"data-active":n===s,slideTransition:p},r.a.createElement(g,{coverContainer:l,width:u,itemFit:v},t))},b=function(e){var t=e.width,n=void 0===t?80:t,i=e.height,a=void 0===i?80:i,o=e.fill,c=void 0===o?"#000000":o;return r.a.createElement("svg",{"data-testid":"next-chevron",role:"img",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:n,height:a,viewBox:"0 0 80 80","aria-labelledby":"nextChevronId nextChevronDescId"},r.a.createElement("title",{id:"nextChevronId"},"Next Item"),r.a.createElement("desc",{id:"nextChevronDescId"},"An arrow to go to the next item in the carousel"),r.a.createElement("path",{fill:c,d:"M36.652 18.064c1.672 1.632 18.008 18.78 18.008 18.78 0.892 0.876 1.34 2.016 1.34 3.156s-0.448 2.28-1.34 3.148c0 0-16.336 17.156-18.008 18.78-1.672 1.632-4.68 1.744-6.46 0-1.784-1.736-1.924-4.164 0-6.296l14.988-15.632-14.988-15.632c-1.924-2.132-1.784-4.564 0-6.304 1.78-1.744 4.788-1.636 6.46 0z"}))},C=function(e){var t=e.width,n=void 0===t?80:t,i=e.height,a=void 0===i?80:i,o=e.fill,c=void 0===o?"#000000":o;return r.a.createElement("svg",{"data-testid":"previous-chevron",role:"img",version:"1.1",xmlns:"http://www.w3.org/2000/svg",width:n,height:a,viewBox:"0 0 80 80","aria-labelledby":"previousChevronId previousChevronDescId"},r.a.createElement("title",{id:"previousChevronId"},"Previous Item"),r.a.createElement("desc",{id:"previousChevronDescId"},"An arrow to go to the previous item in the carousel"),r.a.createElement("path",{fill:c,d:"M49.808 18.064c1.784 1.744 1.924 4.172 0 6.304l-14.988 15.632 14.988 15.632c1.924 2.132 1.784 4.564 0 6.296-1.78 1.744-4.788 1.632-6.46 0-1.672-1.624-18.008-18.78-18.008-18.78-0.892-0.868-1.34-2.008-1.34-3.148s0.448-2.28 1.34-3.156c0 0 16.336-17.148 18.008-18.78 1.672-1.636 4.68-1.744 6.46 0z"}))};function E(){var e=l(["\n  position: absolute;\n  ",";\n  z-index: 9;\n  top: ",";\n\n  ","\n\n  ","\n\n\n  background: rgba(0, 0, 0, 0.75);\n  border: none;\n  padding: 0;\n  margin: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 0.5rem 0;\n  transition: all ease\n    ","s;\n  box-shadow: 0 0 3px rgba(0, 0, 0, 0.16), 0 0 3px rgba(0, 0, 0, 0.23);\n\n  &:hover {\n    cursor: pointer;\n\n    ","\n  }\n"]);return E=function(){return e},e}var y=c.a.button(E(),(function(e){return e.previous?"left: 10px;":"right: 10px;"}),(function(e){switch(e.options.position){case"top":return"10px";case"bottom":return"calc(100% - (42px + 1rem))";default:return"50%"}}),(function(e){var t=e.options;switch(t.shape){case"circle":return"auto"===t.width&&console.log("You haven't specified a width for the button!"),"width: "+t.width+";\n        height: "+t.width+";\n        border-radius: 50%;";case"square":return"auto"===t.width&&console.log("You haven't specified a width for the button!"),"width: "+t.width+";\n        height: "+t.width+";\n        border-radius: 0;";default:return"\n            width: "+t.width+";\n            height: "+t.height+";\n            border-radius: "+t.borderRadius+";\n          "}}),(function(e){if("middle"===e.options.position)return"transform: scale(1);"}),(function(e){return e.currentSlideTransition}),(function(e){return"middle"===e.options.position?"transform: scale(1.05);":"transform: scale(1.05)"})),I=function(e){var t=e.previous,n=Object(i.useContext)(h),a=n.state,o=n.dispatch,c=a.controlsOptions,s=a.currentSlideTransition;return r.a.createElement(y,{onClick:function(){o(t?{type:"setPreviousItem"}:{type:"setNextItem"})},previous:t,options:c,currentSlideTransition:s},t?c.leftControlIcon&&r.a.isValidElement(c.leftControlIcon)?c.leftControlIcon:r.a.createElement(C,{width:c.iconWidth,height:c.iconWidth,fill:c.iconFill}):c.rightControlIcon&&r.a.isValidElement(c.rightControlIcon)?c.leftControlIcon:r.a.createElement(b,{width:c.iconWidth,height:c.iconWidth,fill:c.iconFill}))};function O(){var e=l(["\n  ","}\n  border: ",";\n  background-color: ",";\n  box-shadow: ",";\n  transition: all 0.3s ease;\n\n  &:hover {\n    cursor: pointer;\n  }\n"]);return O=function(){return e},e}function T(){var e=l(["\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: space-between;\n  margin: auto;\n  position: absolute;\n  bottom: 5px;\n  left: 0;\n  right: 0;\n"]);return T=function(){return e},e}var j=c.a.div(T()),S=c.a.div(O(),(function(e){var t=e.options;switch(t.shape){case"square":return"width: "+t.width+";\n          height: "+t.width+";\n          border-radius: 0;\n          ";case"circle":return"width: "+t.width+";\n          height: "+t.width+";\n          border-radius: 50%;\n          ";default:return"width: "+t.width+";\n              height: "+t.height+";\n              border-radius: 50px;"}}),(function(e){return e.options.border}),(function(e){var t=e.active,n=e.options;return t?n.activeColor:n.inactiveColor}),(function(e){return e.options.boxShadow})),V=function(){var e=Object(i.useContext)(h),t=e.state,n=e.dispatch,a=t.childCount,o=t.activeItem,c=t.indicatorOptions,s=Object(i.useState)(20*a),l=s[0],u=s[1];return Object(i.useEffect)((function(){u(20*a+5*a)}),[a]),r.a.createElement(j,{style:{width:l+"px"||!1},"data-testid":"indicators"},[].concat(Array(a).fill("")).map((function(e,t){return r.a.createElement(S,{key:"indicator-"+t,"data-testid":"indicator-"+t,"data-active":t===o,active:t===o,onClick:function(){return function(e){n({type:"setToSpecificItem",payload:e})}(t)},options:c})})))},F=function(e){if(e){var t=e.getBoundingClientRect();return{width:t.width,height:t.height}}return{width:500,height:500}};function W(){var e=l(["\n  width: 100%;\n  display: flex;\n  flex-wrap: no-wrap;\n  position: relative;\n  width: ","px;\n  height: ","px;\n  padding: 0;\n  margin: 0;\n  list-style: none;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n  transition: transform ease-out ","s;\n  transform: translate(-","px, 0);\n"]);return W=function(){return e},e}function k(){var e=l(["\n  width: 100%;\n  overflow: hidden;\n  position: relative;\n  height: 100vh;\n  max-height: 100%;\n"]);return k=function(){return e},e}var P=c.a.div(k()),R=c.a.ul(W(),(function(e){return e.width}),(function(e){return e.height}),(function(e){return e.transition}),(function(e){return e.translateValue})),A=function(e){var t=e.children,n=Object(i.useContext)(h),a=n.state,o=n.dispatch,c=a.activeItem,s=a.translateValue,l=a.autoPlay,u=a.autoChangeTime,d=a.childCount,p=a.controlsOptions,v=a.indicatorOptions,f=a.activeSlides,m=a.slideTransitionValue,w=a.currentSlideTransition,g=Object(i.useRef)(null),b=function(){var e=function(){return window.innerWidth},t=Object(i.useState)(e()),n=t[0],r=t[1];return Object(i.useEffect)((function(){var t=function(){r(e())};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]),n}(),C=Object(i.useRef)(null),E=Object(i.useRef)(null),y=function(){o({type:"setNextItem",payload:{isLast:c===d-1}})},O=Object(i.useCallback)((function(){o({type:"setActiveSlidesArray",payload:t.slice(t.slice(0,c+3))})}),[t]);Object(i.useEffect)((function(){t&&O()}),[]),Object(i.useEffect)((function(){C.current=y,E.current=T})),Object(i.useEffect)((function(){0===w&&o({type:"setCurrentSlideTransitionValue",payload:m})}),[w]),Object(i.useEffect)((function(){var e=window.addEventListener("transitionend",(function(e){"carouselWrapper"===e.target.dataset.name&&E.current()}));if(l){var t=setInterval((function(){C.current()}),1e3*u);return function(){clearInterval(t),window.removeEventListener("transitionend",e)}}return function(){window.removeEventListener("transitionend",e)}}),[]),Object(i.useEffect)((function(){o({type:"handleWindowResize",payload:{translateValue:c*F(g.current).width,currentSlideTransition:0}})}),[b]),Object(i.useEffect)((function(){var e=g.current.getBoundingClientRect().width;o({type:"setCarouselWidth",payload:e})}),[g]);var T=function(){var e=[];e=c===t.length-1?[t[t.length-2],t[t.length-1],t[0]]:0===c?[t[t.length-1],t[0],t[1]]:t.slice(c-1,c+2),o({type:"triggerSlideTransition",payload:{activeSlides:e,translateValue:F(g.current).width,currentSlideTransition:0}})};return t?r.a.createElement(P,{tabIndex:0,ref:g,"data-testid":"carousel-wrapper"},p.show&&r.a.createElement(I,{previous:!0}),r.a.createElement(R,{translateValue:s,width:F(g.current).width*f.length,height:F(g.current).height,transition:w,"data-name":"carouselWrapper"},f.map((function(e,t){return r.a.createElement(x,{key:t,index:t,overrideFit:e.props["data-itemFit"]},e)}))),p.show&&r.a.createElement(I,null),v.show&&r.a.createElement(V,null)):r.a.createElement(P,{tabIndex:0,ref:g,"data-testid":"carousel-wrapper-no-children"},r.a.createElement(R,{translateValue:s,style:{width:"100%",transform:"translate(-"+s+"px, 0)"},"data-name":"carouselWrapper"},r.a.createElement("h2",null,"You need to pass some elements in to navigate through!")))},z=function(e){var t=e.children,n=e.autoPlay,i=e.autoChangeTime,a=e.showIndicators,o=e.contentCoversContainer,c=e.itemFit,s=e.controlsOptions,l=e.indicatorOptions;return r.a.createElement(v,{childCount:t?t.length:0,autoPlay:n,autoChangeTime:i,showIndicators:a,contentCoversContainer:o,itemFit:c,controlsOptions:s,indicatorOptions:l},r.a.createElement(A,null,t))};n(18);var L=()=>r.a.createElement("div",{style:{width:"500px",height:"700px"}},r.a.createElement(z,null,r.a.createElement("img",{src:"https://picsum.photos/1200/600",alt:"You can use images in the carousel!","data-itemFit":"cover"}),r.a.createElement("div",null,r.a.createElement("h2",null,"OMG Text!"),r.a.createElement("p",null,"You can use text here too!")),r.a.createElement("div",null,r.a.createElement("h2",null,"Text and Images!?"),r.a.createElement("div",null,r.a.createElement("p",null,"Here is a pretty image:"),r.a.createElement("img",{src:"https://picsum.photos/600/600",alt:"You can use text and images in the same slide"})))));o.a.render(r.a.createElement(L,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.86242a33.chunk.js.map