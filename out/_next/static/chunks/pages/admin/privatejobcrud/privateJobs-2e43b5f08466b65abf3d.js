(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9402],{75787:function(n,e,t){"use strict";var r=t(85893),s=t(67294),c=t(11163),i=t(88043);e.Z=function(n){var e=n.children;return(0,s.useEffect)((function(){(0,i.$D)()?1!==(0,i.$D)().role&&c.default.push("/"):c.default.push("/signin")}),[]),(0,r.jsx)(s.Fragment,{children:e})}},16054:function(n,e,t){"use strict";var r=t(85893),s=t(67294),c=t(41664),i=t(88043),a=t(30381),o=t.n(a);e.Z=function(n){var e=n.removeApi,t=n.list,a=n.newRoute,u=n.updateLink,l=(0,s.useState)([]),d=l[0],f=l[1],h=(0,s.useState)(""),m=(h[0],h[1]),j=(0,i.ej)("token");(0,s.useEffect)((function(){x()}),[]);var x=function(){t().then((function(n){n.error?console.log(n.error):f(n)}))},b=function(n){window.confirm("Are you sure you want to delete your Job?")&&function(n){e(n,j).then((function(n){n.error?console.log(n.error):(m(n.message),x())}))}(n)},p=function(n){return(0,i.$D)()&&0===(0,i.$D)().role?(0,r.jsx)(c.default,{href:"/user/".concat(u,"/").concat(n.slug),children:(0,r.jsx)("a",{className:"btn nbtn btn-success",children:"Update"})}):(0,i.$D)()&&1===(0,i.$D)().role?(0,r.jsx)("a",{href:"/admin/".concat(u,"/").concat(n.slug),className:"m-2 btn nbtn btn-success",children:"Update"}):void 0};o()();return(0,r.jsx)(s.Fragment,{children:(0,r.jsx)("div",{className:"blog",children:d.map((function(n,e){return(0,r.jsxs)("div",{className:"p-1",children:[(0,r.jsx)(c.default,{href:"/".concat(a,"/").concat(n.slug),children:(0,r.jsx)("a",{children:(0,r.jsx)("h2",{className:"text-dark small   ",style:{lineHeight:"1.9rem"},children:n.title})})}),(0,r.jsx)("button",{className:"btn btn-danger nbtn",onClick:function(){return b(n.slug)},children:"Delete"}),p(n)]},e)}))})})}},63846:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l}});var r=t(85893),s=t(75787),c=(t(67294),t(20118)),i=(t(30381),t(16054)),a=function(){return(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("h2",{className:"large text-primary my-",children:"Manage Jobs"}),(0,r.jsx)("div",{className:"line"}),(0,r.jsx)(i.Z,{list:c.A4,removeApi:c.pu,newRoute:"privateJobs",updateLink:"privatejobcrud"})]})},o=t(9008),u=t(82025),l=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsxs)("title",{children:["Read Private Job | The ",u.iC]}),(0,r.jsx)("meta",{name:"robots",content:"noindex nofollow"})]}),(0,r.jsx)(s.Z,{children:(0,r.jsx)(a,{})})]})}},63501:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/privatejobcrud/privateJobs",function(){return t(63846)}])}},function(n){n.O(0,[4885,118,9774,2888,179],(function(){return e=63501,n(n.s=e);var e}));var e=n.O();_N_E=e}]);