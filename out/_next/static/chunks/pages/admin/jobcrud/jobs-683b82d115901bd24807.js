(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7793],{75787:function(n,e,t){"use strict";var r=t(85893),s=t(67294),c=t(11163),o=t(88043);e.Z=function(n){var e=n.children;return(0,s.useEffect)((function(){(0,o.$D)()?1!==(0,o.$D)().role&&c.default.push("/"):c.default.push("/signin")}),[]),(0,r.jsx)(s.Fragment,{children:e})}},16054:function(n,e,t){"use strict";var r=t(85893),s=t(67294),c=t(41664),o=t(88043),i=t(30381),u=t.n(i);e.Z=function(n){var e=n.removeApi,t=n.list,i=n.newRoute,a=n.updateLink,l=(0,s.useState)([]),d=l[0],f=l[1],h=(0,s.useState)(""),j=(h[0],h[1]),m=(0,o.ej)("token");(0,s.useEffect)((function(){x()}),[]);var x=function(){t().then((function(n){n.error?console.log(n.error):f(n)}))},b=function(n){window.confirm("Are you sure you want to delete your Job?")&&function(n){e(n,m).then((function(n){n.error?console.log(n.error):(j(n.message),x())}))}(n)},g=function(n){return(0,o.$D)()&&0===(0,o.$D)().role?(0,r.jsx)(c.default,{href:"/user/".concat(a,"/").concat(n.slug),children:(0,r.jsx)("a",{className:"btn nbtn btn-success",children:"Update"})}):(0,o.$D)()&&1===(0,o.$D)().role?(0,r.jsx)("a",{href:"/admin/".concat(a,"/").concat(n.slug),className:"m-2 btn nbtn btn-success",children:"Update"}):void 0};u()();return(0,r.jsx)(s.Fragment,{children:(0,r.jsx)("div",{className:"blog",children:d.map((function(n,e){return(0,r.jsxs)("div",{className:"p-1",children:[(0,r.jsx)(c.default,{href:"/".concat(i,"/").concat(n.slug),children:(0,r.jsx)("a",{children:(0,r.jsx)("h2",{className:"text-dark small   ",style:{lineHeight:"1.9rem"},children:n.title})})}),(0,r.jsx)("button",{className:"btn btn-danger nbtn",onClick:function(){return b(n.slug)},children:"Delete"}),g(n)]},e)}))})})}},54012:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return l}});var r=t(85893),s=(t(84830),t(75787)),c=(t(67294),t(21622)),o=(t(30381),t(16054)),i=function(){return(0,r.jsxs)("div",{className:"container",children:[(0,r.jsx)("h2",{className:"large text-primary my-",children:"Manage Jobs"}),(0,r.jsx)("div",{className:"line"}),(0,r.jsx)(o.Z,{list:c.pb,removeApi:c.eX,newRoute:"jobs",updateLink:"jobcrud"})]})},u=t(9008),a=t(82025),l=function(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(u.default,{children:[(0,r.jsxs)("title",{children:["Create Job | The ",a.iC]}),(0,r.jsx)("meta",{name:"robots",content:"noindex nofollow"})]}),(0,r.jsx)(s.Z,{children:(0,r.jsx)(i,{})})]})}},950:function(n,e,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/admin/jobcrud/jobs",function(){return t(54012)}])}},function(n){n.O(0,[4885,1622,9774,2888,179],(function(){return e=950,n(n.s=e);var e}));var e=n.O();_N_E=e}]);