(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"+pmV":function(e,t,a){e.exports={post:"post-module--post--28Mq2",title:"post-module--title--3XBo2",coverImage:"post-module--coverImage--1GM7V",meta:"post-module--meta--3YtjE",tags:"post-module--tags--3RbqF",tag:"post-module--tag--16U9p",readMore:"post-module--readMore--3zWML",postContent:"post-module--postContent--1bfnt"}},"9eSz":function(e,t,a){"use strict";var r=a("TqRt");t.__esModule=!0,t.default=void 0;var i,n=r(a("PJYZ")),s=r(a("VbXa")),o=r(a("8OQS")),d=r(a("pVnL")),l=r(a("q1tI")),c=r(a("17x9")),u=function(e){var t=(0,d.default)({},e),a=t.resolutions,r=t.sizes,i=t.critical;return a&&(t.fixed=a,delete t.resolutions),r&&(t.fluid=r,delete t.sizes),i&&(t.loading="eager"),t.fluid&&(t.fluid=w([].concat(t.fluid))),t.fixed&&(t.fixed=w([].concat(t.fixed))),t},f=function(e){var t=e.media;return!!t&&(v&&!!window.matchMedia(t).matches)},g=function(e){var t=e.fluid,a=e.fixed,r=p(t||a||[]);return r&&r.src},p=function(e){if(v&&function(e){return!!e&&Array.isArray(e)&&e.some((function(e){return void 0!==e.media}))}(e)){var t=e.findIndex(f);if(-1!==t)return e[t];var a=e.findIndex((function(e){return void 0===e.media}));if(-1!==a)return e[a]}return e[0]},m=Object.create({}),h=function(e){var t=u(e),a=g(t);return m[a]||!1},b="undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype,v="undefined"!=typeof window,y=v&&window.IntersectionObserver,S=new WeakMap;function E(e){return e.map((function(e){var t=e.src,a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return l.default.createElement(l.default.Fragment,{key:t},r&&l.default.createElement("source",{type:"image/webp",media:i,srcSet:r,sizes:n}),a&&l.default.createElement("source",{media:i,srcSet:a,sizes:n}))}))}function w(e){var t=[],a=[];return e.forEach((function(e){return(e.media?t:a).push(e)})),[].concat(t,a)}function R(e){return e.map((function(e){var t=e.src,a=e.media,r=e.tracedSVG;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function x(e){return e.map((function(e){var t=e.src,a=e.media,r=e.base64;return l.default.createElement("source",{key:t,media:a,srcSet:r})}))}function L(e,t){var a=e.srcSet,r=e.srcSetWebp,i=e.media,n=e.sizes;return"<source "+(t?"type='image/webp' ":"")+(i?'media="'+i+'" ':"")+'srcset="'+(t?r:a)+'" '+(n?'sizes="'+n+'" ':"")+"/>"}var I=function(e,t){var a=(void 0===i&&"undefined"!=typeof window&&window.IntersectionObserver&&(i=new window.IntersectionObserver((function(e){e.forEach((function(e){if(S.has(e.target)){var t=S.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(i.unobserve(e.target),S.delete(e.target),t())}}))}),{rootMargin:"200px"})),i);return a&&(a.observe(e),S.set(e,t)),function(){a.unobserve(e),S.delete(e)}},O=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",r=e.srcSet?'srcset="'+e.srcSet+'" ':"",i=e.title?'title="'+e.title+'" ':"",n=e.alt?'alt="'+e.alt+'" ':'alt="" ',s=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",d=e.crossOrigin?'crossorigin="'+e.crossOrigin+'" ':"",l=e.loading?'loading="'+e.loading+'" ':"",c=e.draggable?'draggable="'+e.draggable+'" ':"";return"<picture>"+e.imageVariants.map((function(e){return(e.srcSetWebp?L(e,!0):"")+L(e)})).join("")+"<img "+l+s+o+a+r+t+n+i+d+c+'style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},z=l.default.forwardRef((function(e,t){var a=e.src,r=e.imageVariants,i=e.generateSources,n=e.spreadProps,s=e.ariaHidden,o=l.default.createElement(C,(0,d.default)({ref:t,src:a},n,{ariaHidden:s}));return r.length>1?l.default.createElement("picture",null,i(r),o):o})),C=l.default.forwardRef((function(e,t){var a=e.sizes,r=e.srcSet,i=e.src,n=e.style,s=e.onLoad,c=e.onError,u=e.loading,f=e.draggable,g=e.ariaHidden,p=(0,o.default)(e,["sizes","srcSet","src","style","onLoad","onError","loading","draggable","ariaHidden"]);return l.default.createElement("img",(0,d.default)({"aria-hidden":g,sizes:a,srcSet:r,src:i},p,{onLoad:s,onError:c,ref:t,loading:u,draggable:f,style:(0,d.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},n)}))}));C.propTypes={style:c.default.object,onError:c.default.func,onLoad:c.default.func};var V=function(e){function t(t){var a;(a=e.call(this,t)||this).seenBefore=v&&h(t),a.isCritical="eager"===t.loading||t.critical,a.addNoScript=!(a.isCritical&&!t.fadeIn),a.useIOSupport=!b&&y&&!a.isCritical&&!a.seenBefore;var r=a.isCritical||v&&(b||!a.useIOSupport);return a.state={isVisible:r,imgLoaded:!1,imgCached:!1,fadeIn:!a.seenBefore&&t.fadeIn,isHydrated:!1},a.imageRef=l.default.createRef(),a.placeholderRef=t.placeholderRef||l.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,n.default)(a)),a.handleRef=a.handleRef.bind((0,n.default)(a)),a}(0,s.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.setState({isHydrated:v}),this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:h(this.props)}),this.isCritical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.componentWillUnmount=function(){this.cleanUpListeners&&this.cleanUpListeners()},a.handleRef=function(e){var t=this;this.useIOSupport&&e&&(this.cleanUpListeners=I(e,(function(){var e=h(t.props);t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:e}),t.setState({isVisible:!0},(function(){t.setState({imgLoaded:e,imgCached:!(!t.imageRef.current||!t.imageRef.current.currentSrc)})}))})))},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),(a=g(t))&&(m[a]=!0),this.setState({imgLoaded:!0}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,r=e.className,i=e.style,n=void 0===i?{}:i,s=e.imgStyle,o=void 0===s?{}:s,c=e.placeholderStyle,f=void 0===c?{}:c,g=e.placeholderClassName,m=e.fluid,h=e.fixed,b=e.backgroundColor,v=e.durationFadeIn,y=e.Tag,S=e.itemProp,w=e.loading,L=e.draggable,I=m||h;if(!I)return null;var V=!1===this.state.fadeIn||this.state.imgLoaded,N=!0===this.state.fadeIn&&!this.state.imgCached,T=(0,d.default)({opacity:V?1:0,transition:N?"opacity "+v+"ms":"none"},o),k="boolean"==typeof b?"lightgray":b,P={transitionDelay:v+"ms"},M=(0,d.default)({opacity:this.state.imgLoaded?0:1},N&&P,o,f),H={title:t,alt:this.state.isVisible?"":a,style:M,className:g,itemProp:S},W=this.state.isHydrated?p(I):I[0];if(m)return l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:(0,d.default)({position:"relative",overflow:"hidden",maxWidth:W.maxWidth?W.maxWidth+"px":null,maxHeight:W.maxHeight?W.maxHeight+"px":null},n),ref:this.handleRef,key:"fluid-"+JSON.stringify(W.srcSet)},l.default.createElement(y,{"aria-hidden":!0,style:{width:"100%",paddingBottom:100/W.aspectRatio+"%"}}),k&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:k,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,right:0,left:0},N&&P)}),W.base64&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:H,imageVariants:I,generateSources:x}),W.tracedSVG&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:H,imageVariants:I,generateSources:R}),this.state.isVisible&&l.default.createElement("picture",null,E(I),l.default.createElement(C,{alt:a,title:t,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:a,title:t,loading:w},W,{imageVariants:I}))}}));if(h){var j=(0,d.default)({position:"relative",overflow:"hidden",display:"inline-block",width:W.width,height:W.height},n);return"inherit"===n.display&&delete j.display,l.default.createElement(y,{className:(r||"")+" gatsby-image-wrapper",style:j,ref:this.handleRef,key:"fixed-"+JSON.stringify(W.srcSet)},k&&l.default.createElement(y,{"aria-hidden":!0,title:t,style:(0,d.default)({backgroundColor:k,width:W.width,opacity:this.state.imgLoaded?0:1,height:W.height},N&&P)}),W.base64&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:W.base64,spreadProps:H,imageVariants:I,generateSources:x}),W.tracedSVG&&l.default.createElement(z,{ariaHidden:!0,ref:this.placeholderRef,src:W.tracedSVG,spreadProps:H,imageVariants:I,generateSources:R}),this.state.isVisible&&l.default.createElement("picture",null,E(I),l.default.createElement(C,{alt:a,title:t,width:W.width,height:W.height,sizes:W.sizes,src:W.src,crossOrigin:this.props.crossOrigin,srcSet:W.srcSet,style:T,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError,itemProp:S,loading:w,draggable:L})),this.addNoScript&&l.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:O((0,d.default)({alt:a,title:t,loading:w},W,{imageVariants:I}))}}))}return null},t}(l.default.Component);V.defaultProps={fadeIn:!0,durationFadeIn:500,alt:"",Tag:"div",loading:"lazy"};var N=c.default.shape({width:c.default.number.isRequired,height:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string}),T=c.default.shape({aspectRatio:c.default.number.isRequired,src:c.default.string.isRequired,srcSet:c.default.string.isRequired,sizes:c.default.string.isRequired,base64:c.default.string,tracedSVG:c.default.string,srcWebp:c.default.string,srcSetWebp:c.default.string,media:c.default.string,maxWidth:c.default.number,maxHeight:c.default.number});function k(e){return function(t,a,r){var i;if(!t.fixed&&!t.fluid)throw new Error("The prop `fluid` or `fixed` is marked as required in `"+r+"`, but their values are both `undefined`.");c.default.checkPropTypes(((i={})[a]=e,i),t,"prop",r)}}V.propTypes={resolutions:N,sizes:T,fixed:k(c.default.oneOfType([N,c.default.arrayOf(N)])),fluid:k(c.default.oneOfType([T,c.default.arrayOf(T)])),fadeIn:c.default.bool,durationFadeIn:c.default.number,title:c.default.string,alt:c.default.string,className:c.default.oneOfType([c.default.string,c.default.object]),critical:c.default.bool,crossOrigin:c.default.oneOfType([c.default.string,c.default.bool]),style:c.default.object,imgStyle:c.default.object,placeholderStyle:c.default.object,placeholderClassName:c.default.string,backgroundColor:c.default.oneOfType([c.default.string,c.default.bool]),onLoad:c.default.func,onError:c.default.func,onStartLoad:c.default.func,Tag:c.default.string,itemProp:c.default.string,loading:c.default.oneOf(["auto","lazy","eager"]),draggable:c.default.bool};var P=V;t.default=P},TWNs:function(e,t,a){var r=a("g6v/"),i=a("2oRo"),n=a("lMq5"),s=a("cVYH"),o=a("m/L8").f,d=a("JBy8").f,l=a("ROdP"),c=a("rW0t"),u=a("n3/R"),f=a("busE"),g=a("0Dky"),p=a("afO8").set,m=a("JiZb"),h=a("tiKp")("match"),b=i.RegExp,v=b.prototype,y=/a/g,S=/a/g,E=new b(y)!==y,w=u.UNSUPPORTED_Y;if(r&&n("RegExp",!E||w||g((function(){return S[h]=!1,b(y)!=y||b(S)==S||"/a/i"!=b(y,"i")})))){for(var R=function(e,t){var a,r=this instanceof R,i=l(e),n=void 0===t;if(!r&&i&&e.constructor===R&&n)return e;E?i&&!n&&(e=e.source):e instanceof R&&(n&&(t=c.call(e)),e=e.source),w&&(a=!!t&&t.indexOf("y")>-1)&&(t=t.replace(/y/g,""));var o=s(E?new b(e,t):b(e,t),r?this:v,R);return w&&a&&p(o,{sticky:a}),o},x=function(e){e in R||o(R,e,{configurable:!0,get:function(){return b[e]},set:function(t){b[e]=t}})},L=d(b),I=0;L.length>I;)x(L[I++]);v.constructor=R,R.prototype=v,f(i,"RegExp",R)}m("RegExp")},UxlC:function(e,t,a){"use strict";var r=a("14Sl"),i=a("glrk"),n=a("ewvW"),s=a("UMSQ"),o=a("ppGB"),d=a("HYAF"),l=a("iqWW"),c=a("FMNM"),u=Math.max,f=Math.min,g=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,m=/\$([$&'`]|\d\d?)/g;r("replace",2,(function(e,t,a,r){var h=r.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=r.REPLACE_KEEPS_$0,v=h?"$":"$0";return[function(a,r){var i=d(this),n=null==a?void 0:a[e];return void 0!==n?n.call(a,i,r):t.call(String(i),a,r)},function(e,r){if(!h&&b||"string"==typeof r&&-1===r.indexOf(v)){var n=a(t,e,this,r);if(n.done)return n.value}var d=i(e),g=String(this),p="function"==typeof r;p||(r=String(r));var m=d.global;if(m){var S=d.unicode;d.lastIndex=0}for(var E=[];;){var w=c(d,g);if(null===w)break;if(E.push(w),!m)break;""===String(w[0])&&(d.lastIndex=l(g,s(d.lastIndex),S))}for(var R,x="",L=0,I=0;I<E.length;I++){w=E[I];for(var O=String(w[0]),z=u(f(o(w.index),g.length),0),C=[],V=1;V<w.length;V++)C.push(void 0===(R=w[V])?R:String(R));var N=w.groups;if(p){var T=[O].concat(C,z,g);void 0!==N&&T.push(N);var k=String(r.apply(void 0,T))}else k=y(O,g,z,C,N,r);z>=L&&(x+=g.slice(L,z)+k,L=z+O.length)}return x+g.slice(L)}];function y(e,a,r,i,s,o){var d=r+e.length,l=i.length,c=m;return void 0!==s&&(s=n(s),c=p),t.call(o,c,(function(t,n){var o;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return a.slice(0,r);case"'":return a.slice(d);case"<":o=s[n.slice(1,-1)];break;default:var c=+n;if(0===c)return t;if(c>l){var u=g(c/10);return 0===u?t:u<=l?void 0===i[u-1]?n.charAt(1):i[u-1]+n.charAt(1):t}o=i[c-1]}return void 0===o?"":o}))}}))},rgsX:function(e,t,a){"use strict";var r=a("q1tI"),i=a.n(r),n=a("17x9"),s=a.n(n),o=a("Wbzz"),d=a("9eSz"),l=a.n(d),c=a("zpb6"),u=a("+pmV"),f=a.n(u),g=function(e){var t=e.title,a=e.date,r=e.path,n=e.coverImage,s=e.excerpt,d=e.tags,u=e.html;return i.a.createElement("div",{className:f.a.post},i.a.createElement("div",{className:f.a.postContent},i.a.createElement("h1",{className:f.a.title},s?i.a.createElement(o.Link,{to:r},t):t),i.a.createElement("div",{className:f.a.meta},"Last updated "+a,d?i.a.createElement("div",{className:f.a.tags},d.map((function(e){return i.a.createElement(o.Link,{to:"/tag/"+Object(c.toKebabCase)(e)+"/",key:Object(c.toKebabCase)(e)},i.a.createElement("span",{className:f.a.tag},"#",e))}))):null),n&&i.a.createElement(l.a,{fluid:n.childImageSharp.fluid,className:f.a.coverImage}),s?i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,s),i.a.createElement(o.Link,{to:r,className:f.a.readMore},"Read more →")):i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{dangerouslySetInnerHTML:{__html:u}}))))};g.propTypes={title:s.a.string,date:s.a.string,path:s.a.string,coverImage:s.a.object,author:s.a.string,excerpt:s.a.string,html:s.a.string,tags:s.a.arrayOf(s.a.string),previousPost:s.a.object,nextPost:s.a.object},t.a=g},zpb6:function(e,t,a){a("TWNs"),a("UxlC"),e.exports.toKebabCase=function(e){return e.replace(new RegExp("(\\s|_|-)+","gmi"),"-")}}}]);
//# sourceMappingURL=23c3d3a3a2879427593569aafa02d04d4d5b9e2a-59a8657901984a2111cd.js.map