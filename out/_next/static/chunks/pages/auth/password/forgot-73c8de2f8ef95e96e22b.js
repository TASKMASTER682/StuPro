(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[711],{89626:function(e,r,n){"use strict";n.r(r);var t=n(85893),s=n(26265),o=n(67294),i=n(88043),a=n(9008),c=n(82025);function l(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function u(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?l(Object(n),!0).forEach((function(r){(0,s.Z)(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}r.default=function(){var e=(0,o.useState)({email:"",message:"",error:"",showForm:!0}),r=e[0],n=e[1],l=r.email,d=(r.message,r.error,r.showForm),m=function(e){e.preventDefault(),n(u(u({},r),{},{message:"",error:""})),(0,i.gF)({email:l}).then((function(e){e.error?n(u(u({},r),{},{error:e.error})):n(u(u({},r),{},{message:e.message,email:"",showForm:!1}))}))};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(a.default,{children:[(0,t.jsxs)("title",{children:["Forgot Password | The ",c.iC]}),(0,t.jsx)("meta",{name:"robots",content:"noindex nofollow"})]}),(0,t.jsxs)("div",{className:"container",children:[(0,t.jsx)("h2",{children:"Forgot password"}),(0,t.jsx)("div",{className:"line"}),(0,t.jsxs)("div",{children:[function(e){return(0,t.jsx)("div",{className:"badge-danger",children:e})}(),function(e){return(0,t.jsx)("div",{className:"badge-primary",children:e})}()]}),d&&function(){return(0,t.jsxs)("form",{onSubmit:m,className:"form",children:[(0,t.jsx)("div",{className:"form-group py-1",children:(0,t.jsx)("input",{type:"email",onChange:(e="email",function(t){n(u(u({},r),{},(0,s.Z)({message:"",error:""},e,t.target.value)))}),value:l,placeholder:"Type your email",required:!0})}),(0,t.jsx)("div",{children:(0,t.jsx)("button",{className:"btn nbtn btn-primary",children:"Send password reset link"})})]});var e}()]})]})}},94352:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/auth/password/forgot",function(){return n(89626)}])}},function(e){e.O(0,[9774,2888,179],(function(){return r=94352,e(e.s=r);var r}));var r=e.O();_N_E=r}]);