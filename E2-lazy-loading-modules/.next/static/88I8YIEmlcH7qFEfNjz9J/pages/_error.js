(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"/a9y":function(e,t,n){"use strict";var r=n("KI45"),a=r(n("0iUn")),u=r(n("sLSF")),i=r(n("MI3g")),o=r(n("a7VT")),l=r(n("Tit0")),f=n("KI45");t.__esModule=!0,t.default=void 0;var d=f(n("q1tI")),c=f(n("PgRs")),s={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"},p=function(e){function t(){return(0,a.default)(this,t),(0,i.default)(this,(0,o.default)(t).apply(this,arguments))}return(0,l.default)(t,e),(0,u.default)(t,[{key:"render",value:function(){var e=this.props.statusCode,t=this.props.title||s[e]||"An unexpected error has occurred";return d.default.createElement("div",{style:v.error},d.default.createElement(c.default,null,d.default.createElement("title",null,e,": ",t)),d.default.createElement("div",null,d.default.createElement("style",{dangerouslySetInnerHTML:{__html:"body { margin: 0 }"}}),e?d.default.createElement("h1",{style:v.h1},e):null,d.default.createElement("div",{style:v.desc},d.default.createElement("h2",{style:v.h2},t,"."))))}}],[{key:"getInitialProps",value:function(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}}]),t}(d.default.Component);t.default=p,p.displayName="ErrorPage";var v={error:{color:"#000",background:"#fff",fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",borderRight:"1px solid rgba(0, 0, 0,.3)",margin:0,marginRight:"20px",padding:"10px 23px 10px 0",fontSize:"24px",fontWeight:500,verticalAlign:"top"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"inherit",margin:0,padding:0}}},"04/V":function(e,t,n){var r=n("fYqa"),a=n("G1Wo")("iterator"),u=n("sipE");e.exports=n("p9MR").isIterable=function(e){var t=Object(e);return void 0!==t[a]||"@@iterator"in t||u.hasOwnProperty(r(t))}},"04ac":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){var e=n("/a9y");return{page:e.default||e}}])},"3JuP":function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};(0,n("KI45")(n("hfKm")).default)(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.AmpStateContext=a.createContext({})},"4hZ1":function(e,t,n){"use strict";var r=n("KI45"),a=r(n("0iUn")),u=r(n("MI3g")),i=r(n("a7VT")),o=r(n("AT/M")),l=r(n("sLSF")),f=r(n("Tit0")),d=r(n("dfwq")),c=r(n("ttDY"));(0,r(n("hfKm")).default)(t,"__esModule",{value:!0});var s=n("q1tI"),p=!1;t.default=function(){var e,t=new c.default;function n(n){e=n.props.reduceComponentsToState((0,d.default)(t),n.props),n.props.handleStateChange&&n.props.handleStateChange(e)}return function(r){function d(e){var r;return(0,a.default)(this,d),r=(0,u.default)(this,(0,i.default)(d).call(this,e)),p&&(t.add((0,o.default)(r)),n((0,o.default)(r))),r}return(0,f.default)(d,r),(0,l.default)(d,null,[{key:"rewind",value:function(){var n=e;return e=void 0,t.clear(),n}}]),(0,l.default)(d,[{key:"componentDidMount",value:function(){t.add(this),n(this)}},{key:"componentDidUpdate",value:function(){n(this)}},{key:"componentWillUnmount",value:function(){t.delete(this),n(this)}},{key:"render",value:function(){return null}}]),d}(s.Component)}},CPHa:function(e,t,n){"use strict";var r=n("B4CS"),a=n("H8ru");e.exports=n("8vat")("Set",function(e){return function(){return e(this,arguments.length>0?arguments[0]:void 0)}},{add:function(e){return r.def(a(this,"Set"),e=0===e?0:e,e)}},r)},GDVm:function(e,t,n){n("ER9p")("Set")},IClC:function(e,t,n){"use strict";var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)Object.hasOwnProperty.call(e,n)&&(t[n]=e[n]);return t.default=e,t};(0,n("KI45")(n("hfKm")).default)(t,"__esModule",{value:!0});var a=r(n("q1tI"));t.HeadManagerContext=a.createContext(null)},IrWQ:function(e,t,n){var r=n("0T/a");r(r.P+r.R,"Set",{toJSON:n("A0wl")("Set")})},OuPC:function(e,t,n){n("AS96")("Set")},PgRs:function(e,t,n){e.exports=n("m/Pd")},"V/f9":function(e,t,n){n("k8Q4"),n("YQlv"),e.exports=n("p9MR").Array.from},Wziy:function(e,t,n){"use strict";var r=function(e){return e&&e.__esModule?e:{default:e}};(0,n("KI45")(n("hfKm")).default)(t,"__esModule",{value:!0});var a=r(n("q1tI")),u=n("3JuP");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,r=e.hybrid,a=void 0!==r&&r,u=e.hasQuery;return n||a&&(void 0!==u&&u)}t.isInAmpMode=i,t.useAmp=function(){return i(a.default.useContext(u.AmpStateContext))}},YQlv:function(e,t,n){"use strict";var r=n("vCXk"),a=n("0T/a"),u=n("AYVP"),i=n("nJOo"),o=n("widk"),l=n("pasi"),f=n("s+zB"),d=n("8Vlj");a(a.S+a.F*!n("Q2zc")(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,a,c,s=u(e),p="function"==typeof this?this:Array,v=arguments.length,h=v>1?arguments[1]:void 0,m=void 0!==h,y=0,g=d(s);if(m&&(h=r(h,v>2?arguments[2]:void 0,2)),void 0==g||p==Array&&o(g))for(n=new p(t=l(s.length));t>y;y++)f(n,y,m?h(s[y],y):s[y]);else for(c=g.call(s),n=new p;!(a=c.next()).done;y++)f(n,y,m?i(c,h,[a.value,y],!0):a.value);return n.length=y,n}})},d04V:function(e,t,n){e.exports=n("V/f9")},dfwq:function(e,t,n){"use strict";n.r(t);var r=n("p0XB"),a=n.n(r);var u=n("d04V"),i=n.n(u),o=n("yLu3"),l=n.n(o);function f(e){return function(e){if(a()(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}(e)||function(e){if(l()(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return i()(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}n.d(t,"default",function(){return f})},icr7:function(e,t,n){n("tCzM"),n("k8Q4"),e.exports=n("04/V")},"m/Pd":function(e,t,n){"use strict";var r=n("KI45"),a=r(n("ttDY")),u=function(e){return e&&e.__esModule?e:{default:e}};(0,r(n("hfKm")).default)(t,"__esModule",{value:!0});var i=u(n("q1tI")),o=u(n("4hZ1")),l=n("3JuP"),f=n("IClC"),d=n("Wziy");function c(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[i.default.createElement("meta",{key:"charSet",charSet:"utf-8"})];return e||t.push(i.default.createElement("meta",{key:"viewport",name:"viewport",content:"width=device-width,minimum-scale=1,initial-scale=1"})),t}function s(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===i.default.Fragment?e.concat(i.default.Children.toArray(t.props.children).reduce(function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)},[])):e.concat(t)}t.defaultHead=c;var p=["name","httpEquiv","charSet","itemProp"];function v(e,t){return e.reduce(function(e,t){var n=i.default.Children.toArray(t.props.children);return e.concat(n)},[]).reduce(s,[]).reverse().concat(c(t.inAmpMode)).filter(function(){var e=new a.default,t=new a.default,n=new a.default,r={};return function(u){if(u.key&&"number"!==typeof u.key&&0===u.key.indexOf(".$"))return!e.has(u.key)&&(e.add(u.key),!0);switch(u.type){case"title":case"base":if(t.has(u.type))return!1;t.add(u.type);break;case"meta":for(var i=0,o=p.length;i<o;i++){var l=p[i];if(u.props.hasOwnProperty(l))if("charSet"===l){if(n.has(l))return!1;n.add(l)}else{var f=u.props[l],d=r[l]||new a.default;if(d.has(f))return!1;d.add(f),r[l]=d}}}return!0}}()).reverse().map(function(e,t){var n=e.key||t;return i.default.cloneElement(e,{key:n})})}var h=o.default();function m(e){var t=e.children;return i.default.createElement(l.AmpStateContext.Consumer,null,function(e){return i.default.createElement(f.HeadManagerContext.Consumer,null,function(n){return i.default.createElement(h,{reduceComponentsToState:v,handleStateChange:n,inAmpMode:d.isInAmpMode(e)},t)})})}m.rewind=h.rewind,t.default=m},"s+zB":function(e,t,n){"use strict";var r=n("OtwA"),a=n("+EWW");e.exports=function(e,t,n){t in e?r.f(e,t,a(0,n)):e[t]=n}},ttDY:function(e,t,n){e.exports=n("vjmV")},vjmV:function(e,t,n){n("Ev2V"),n("k8Q4"),n("tCzM"),n("CPHa"),n("IrWQ"),n("GDVm"),n("OuPC"),e.exports=n("p9MR").Set},yLu3:function(e,t,n){e.exports=n("icr7")}},[["04ac",1,0]]]);