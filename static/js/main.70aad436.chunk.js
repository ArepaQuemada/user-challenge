(this["webpackJsonpusers-challenge"]=this["webpackJsonpusers-challenge"]||[]).push([[0],{59:function(n,e,t){},60:function(n,e,t){"use strict";t.r(e);var r=t(1),c=t(0),i=t.n(c),a=t(5),o=t.n(a),u=t(2),s=t(3),l=t.p+"static/media/pattern2.f6272bd1.svg";function d(){var n=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n  fill: blue;\n"]);return d=function(){return n},n}function f(){var n=Object(u.a)(["\n  height: 8rem;\n"]);return f=function(){return n},n}var j=s.a.header(f()),b=s.a.img(d());function x(){return Object(r.jsx)(j,{children:Object(r.jsx)(b,{src:l})})}var m=t(6),O=t.n(m),p=t(10),h=t(13),v=Object(c.createContext)(),g={name:"",email:"",cities:[]},w=function(n){var e=Object(c.useState)(g),t=Object(h.a)(e,2),i=t[0],a=t[1];return Object(r.jsx)(v.Provider,{value:{filters:i,setfilters:a},children:n.children})},y=function n(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return e%r===0&&t++,r>e?2===t:n(e,t,r+1)},C=function(n,e){return n.toLowerCase().includes(e.toLowerCase())},F=function(n){return""===n},k=function(n,e){return n.cities.length>0?e.filter((function(e){return n.cities.find((function(n){return n===e.address.city}))})):e},N=t(32),E=t.n(N),S="https://jsonplaceholder.typicode.com/users",z=function(){var n=Object(p.a)(O.a.mark((function n(e){return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,E.a.get(e);case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}(),B=t(12),L=t(7);function P(){var n=Object(u.a)(["\n  cursor: pointer;\n  color: #fff;\n  display: block;\n  border-radius: 1rem;\n  padding: 1rem;\n  background-color: #d73d42;\n  border: none;\n  outline: none;\n  &:hover {\n    opacity: 0.7;\n  }\n"]);return P=function(){return n},n}function A(){var n=Object(u.a)(["\n  display: block;\n  border-radius: 1rem;\n  outline: none;\n  padding: 1rem;\n  width: 100%;\n  max-width: 350px;\n  margin-bottom: 1rem;\n  border: 2px solid #cccccc;\n  &:hover {\n    border: 2px solid #45c39d;\n  }\n  &:focus {\n    border: 2px solid #45c39d;\n  }\n"]);return A=function(){return n},n}function I(){var n=Object(u.a)(["\n  margin-auto;\n  display: flex;\n  justify-content: space-evenly;\n  align-items: center;\n  flex-wrap: wrap;\n  @media screen and (max-width: 800px) {\n    flex-direction: column;\n  }\n"]);return I=function(){return n},n}function J(){var n=Object(u.a)(["\n  margin-top: 3rem;\n"]);return J=function(){return n},n}var T=s.a.div(J()),D=s.a.div(I()),M=s.a.input(A()),R=s.a.button(P());function U(n){var e=n.clearFilters,t=Object(c.useContext)(v),i=t.filters,a=t.setfilters,o=function(n){a((function(e){return Object(L.a)(Object(L.a)({},e),{},Object(B.a)({},n.target.name,n.target.value))}))};return Object(r.jsx)(T,{children:Object(r.jsxs)(D,{children:[Object(r.jsx)(M,{type:"text",name:"name",placeholder:"Filter by name",onChange:o,className:"transition",value:i.name}),Object(r.jsx)(M,{type:"text",name:"email",placeholder:"Filter by email",onChange:o,className:"transition",value:i.email}),Object(r.jsx)(R,{className:"transition",name:"clear-filters",onClick:function(){return e()},children:"Clear Filters"})]})})}var q=t(14),G=(t(56),t(17));function H(){var n=Object(u.a)(["\n  cursor: pointer;\n  border-radius: 10px;\n  margin-left: 1rem;\n  color: #f2f2f2f2;\n  background-color: #0081ff;\n  padding: 1rem;\n  border: none;\n  &:hover {\n    opacity: 0.7;\n  }\n"]);return H=function(){return n},n}function K(){var n=Object(u.a)(["\n  margin-left: 0.5rem;\n"]);return K=function(){return n},n}function Q(){var n=Object(u.a)(["\n  display: flex;\n  align-items: center;\n  padding: 0.8rem;\n"]);return Q=function(){return n},n}function V(){var n=Object(u.a)(["\n  width: 100%;\n  padding: 1rem;\n  font-size: 15px;\n"]);return V=function(){return n},n}function W(){var n=Object(u.a)(["\n  background-color: #fff;\n"]);return W=function(){return n},n}function X(){var n=Object(u.a)(["\n  margin-top: -1.7rem;\n"]);return X=function(){return n},n}function Y(){var n=Object(u.a)(["\n  font-style: italic;\n"]);return Y=function(){return n},n}function Z(){var n=Object(u.a)(["\n  padding: 0.7rem;\n  background-color: ","\n  text-align: center;\n  border-radius: 10px 10px 0px 0px;\n  color: #f2f2f2;\n"]);return Z=function(){return n},n}function $(){var n=Object(u.a)(["\n  width: 100%;\n  max-width: 350px;\n  margin: 0 0.5rem 3rem 0.5rem;\n  @media screen and (max-width: 750px) {\n    max-width: 100%;\n  }\n  &:hover {\n    transform: scale(1.1);\n  }\n"]);return $=function(){return n},n}var _=s.a.div($()),nn=s.a.div(Z(),(function(n){return"primary"===n.color?"#1ABFEF;":"#E66BA0;"})),en=s.a.p(Y()),tn=s.a.div(X()),rn=s.a.div(W()),cn=s.a.div(V()),an=s.a.div(Q()),on=s.a.span(K()),un=s.a.button(H());function sn(n){var e=n.color,t=n.user,i=t.name,a=t.username,o=t.email,u=t.address,s=(u=void 0===u?{}:u).city,l=u.street,d=u.suite,f=t.phone,j=t.company,b=j.name,x=j.catchPhrase,m=Object(c.useContext)(v).setfilters;return Object(r.jsxs)(_,{className:"transition",children:[Object(r.jsxs)(nn,{color:e,children:[Object(r.jsx)(tn,{children:Object(r.jsx)("ion-icon",{name:"person-circle-outline",size:"large"})}),Object(r.jsxs)("div",{children:[Object(r.jsx)("h3",{children:i}),Object(r.jsx)(en,{children:x})]})]}),Object(r.jsx)(rn,{children:Object(r.jsxs)(cn,{children:[Object(r.jsxs)(an,{children:[Object(r.jsx)("ion-icon",{name:"mail-outline"}),Object(r.jsx)(on,{children:o})]}),Object(r.jsxs)(an,{children:[Object(r.jsx)("ion-icon",{name:"call-outline"}),Object(r.jsx)(on,{children:f})]}),Object(r.jsxs)(an,{children:[Object(r.jsx)("ion-icon",{name:"map-outline"}),Object(r.jsx)(on,{children:"".concat(l," - ").concat(d)})]}),Object(r.jsxs)(an,{children:[Object(r.jsx)("ion-icon",{name:"person-outline"}),Object(r.jsx)(on,{children:a})]}),Object(r.jsxs)(an,{children:[Object(r.jsx)("ion-icon",{name:"business-outline"}),Object(r.jsx)(on,{children:b})]}),Object(r.jsxs)(an,{children:[Object(r.jsx)("ion-icon",{name:"map-outline"}),Object(r.jsx)(un,{className:"transition",name:"add-filter-button",value:s,onClick:function(n){return m((function(e){return Object(L.a)(Object(L.a)({},e),{},{cities:Object(G.a)(new Set([].concat(Object(G.a)(e.cities),[n.target.value])))})}))},children:s})]})]})})]})}function ln(){var n=Object(u.a)(["\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  margin-top: 3rem;\n"]);return ln=function(){return n},n}var dn=s.a.div(ln());function fn(n){var e=n.users;Object(c.useContext)(v).setfilters;return Object(r.jsx)(dn,{children:e.map((function(n){return Object(r.jsx)(sn,{user:n,color:y(n.id)?"primary":"secondary"},n.id)}))})}var jn=t.p+"static/media/page-not-found-4.b89484ca.png";function bn(){var n=Object(u.a)(["\n  font-size: 24px;\n  font-weight: bold;\n"]);return bn=function(){return n},n}function xn(){var n=Object(u.a)(["\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n"]);return xn=function(){return n},n}function mn(){var n=Object(u.a)(["\n  width: 100%;\n  max-width: 15rem;\n  margin: auto;\n"]);return mn=function(){return n},n}function On(){var n=Object(u.a)(["\n  margin-top: 1rem;\n  text-align: center;\n"]);return On=function(){return n},n}var pn=s.a.div(On()),hn=s.a.div(mn()),vn=s.a.img(xn()),gn=s.a.p(bn());function wn(){return Object(r.jsxs)(pn,{children:[Object(r.jsx)(hn,{children:Object(r.jsx)(vn,{src:jn})}),Object(r.jsx)(gn,{children:"User not found"})]})}function yn(){var n=Object(u.a)(["\n  background-color: #0081ff;\n  padding: 2px;\n  margin: 0px 5px 0 5px;\n  color: #FFF;\n  border-radius: 10px;\n"]);return yn=function(){return n},n}var Cn=s.a.div(yn());function Fn(n){var e=n.filterName;return Object(r.jsx)(Cn,{children:e})}function kn(){var n=Object(u.a)(["\n  position: absolute;\n  top: -3.5rem;\n  font-size: 13px;\n  margin: auto;\n  border-radius: 20px;\n  background-color: #ffffff;\n  width: 95%;\n  max-width: 750px;\n  display: flex;\n  padding: 2rem;\n  overflow: auto;\n"]);return kn=function(){return n},n}function Nn(){var n=Object(u.a)(["\n  position: relative;\n  display: flex;\n  justify-content: center;\n"]);return Nn=function(){return n},n}var En=s.a.div(Nn()),Sn=s.a.div(kn()),zn=[];function Bn(){var n=Object(c.useState)(zn),e=Object(h.a)(n,2),t=e[0],i=e[1],a=Object(c.useContext)(v),o=a.filters,u=a.setfilters;Object(c.useEffect)((function(){(function(){var n=Object(p.a)(O.a.mark((function n(){var e,t;return O.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,z(S);case 2:e=n.sent,t=e.data,i(t);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[]),Object(c.useEffect)((function(){o.cities.length>0&&q.b.success("Added filter!")}),[o.cities]);var s=function(n,e){return F(n.name)&&F(n.email)&&0===n.cities.length?e:k(n,e).filter((function(e){return C(e.name,n.name)})).filter((function(e){return C(e.email,n.email)}))}(o,t);return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(q.a,{}),Object(r.jsx)(En,{children:Object(r.jsx)(Sn,{children:o.cities.length>0?o.cities.map((function(n,e){return Object(r.jsx)(Fn,{filterName:n},e)})):Object(r.jsx)("div",{children:"City filters here"})})}),Object(r.jsx)(U,{clearFilters:function(){u(g),q.b.warning("Removed filters!")}}),0===s.length?Object(r.jsx)(wn,{}):Object(r.jsx)(fn,{users:s})]})}function Ln(){var n=Object(u.a)(["\n  padding: 1rem;\n"]);return Ln=function(){return n},n}function Pn(){var n=Object(u.a)(["\n  width: 100%;\n"]);return Pn=function(){return n},n}var An=s.a.div(Pn()),In=s.a.main(Ln());function Jn(){return Object(r.jsxs)(An,{children:[Object(r.jsx)(x,{}),Object(r.jsx)(w,{children:Object(r.jsx)(In,{children:Object(r.jsx)(Bn,{})})})]})}var Tn=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,63)).then((function(e){var t=e.getCLS,r=e.getFID,c=e.getFCP,i=e.getLCP,a=e.getTTFB;t(n),r(n),c(n),i(n),a(n)}))};t(59);o.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(Jn,{})}),document.getElementById("root")),Tn()}},[[60,1,2]]]);
//# sourceMappingURL=main.70aad436.chunk.js.map