"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[84],{515:function(n,t,e){e.d(t,{qN:function(){return h},vw:function(){return l}});var r=e(861),i=e(757),o=e.n(i),c=e(44);c.ZP.defaults.baseURL="https://api.themoviedb.org/3/";var s="trending/movie/day?",a="api_key=7880f10208129df405f0f3d5264141ee",u="language=en-US";function l(){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(o().mark((function n(){var t;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("".concat(s).concat(a));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function h(n){return p.apply(this,arguments)}function p(){return(p=(0,r.Z)(o().mark((function n(t){var e;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.ZP.get("movie/".concat(t,"?").concat(a,"&").concat(u));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})))).apply(this,arguments)}},84:function(n,t,e){e.r(t),e.d(t,{default:function(){return h}});var r,i=e(885),o=e(739),c=e(791),s=e(515),a=e(731),u=e(168),l=e(444).ZP.button(r||(r=(0,u.Z)(["\n  font-weight: 800;\n  width: 100px;\n  height: 40px;\n  margin: 0 auto;\n  margin-bottom: 10px;\n  padding: 0 16px;\n  border-radius: 10px;\n  color: black;\n  background-color: white;\n  cursor: pointer;\n    :hover,\n    :focus {\n    color: white;\n    background-color:  orangered;\n    border: 3px solid white;\n"]))),d=e(184);function h(){var n=(0,c.useState)(null),t=(0,i.Z)(n,2),e=t[0],r=t[1],u=(0,c.useState)(null),h=(0,i.Z)(u,2),p=h[0],f=h[1],v=(0,c.useState)(!1),x=(0,i.Z)(v,2),g=x[0],j=x[1],w=(0,o.UO)().movieId,m=(0,o.TH)(),b=(0,o.s0)(),k={color:"orangered"},_={color:"black"};return(0,c.useEffect)((function(){j(!0),(0,s.qN)(w).then((function(n){r(n)})).catch((function(n){f("Error3"),console.log(n)})).finally((function(){return j(!1)}))}),[w]),console.log(e),(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{children:[(0,d.jsx)(l,{onClick:function(){var n,t;return b(null!==(n=null===m||void 0===m||null===(t=m.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/")},children:"Go back"}),g&&"Loading ...",p&&(0,d.jsx)("div",{children:p}),e&&(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{width:300,src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:e.title}),(0,d.jsx)("h3",{children:e.title}),(0,d.jsxs)("p",{children:["(",new Date(e.release_date).getFullYear(),")"]}),(0,d.jsxs)("p",{children:["User Score: ",e.popularity]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"Overview"}),(0,d.jsx)("p",{children:e.overview})]})]}),(0,d.jsx)("hr",{}),(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"Additional Information"}),(0,d.jsx)(a.OL,{to:"/movies/".concat(w,"/reviews"),style:function(n){return n.isActive?k:_},state:m.state,children:(0,d.jsx)("p",{children:"Reviews"})}),(0,d.jsx)(a.OL,{to:"/movies/".concat(w,"/cast"),style:function(n){return n.isActive?k:_},state:m.state,children:(0,d.jsx)("p",{children:"Cast"})}),(0,d.jsx)("hr",{}),(0,d.jsx)(o.j3,{})]})]})})}}}]);
//# sourceMappingURL=84.949644c4.chunk.js.map