import{g as E,d as T,r as u,u as k,a as O,j as e,L as o,Q as P,k as F,O as A}from"./index-tmO2HUr7.js";import{F as I,a as U,b as M}from"./index.esm-JIE0sIxC.js";import{I as D,a as R,b as V,A as H,H as $,c as q}from"./index.esm-nadLbJ-x.js";import{F as B}from"./index.esm-d12o-Y_c.js";import{v as W,a as K}from"./Api-Yfgixm3F.js";import{R as Y}from"./index.esm-hOfC7k_p.js";import"./iconBase-VPgEYFnN.js";var L={exports:{}};const G=E(T);/*! For license information please see index.js.LICENSE.txt */(function(y,w){(function(j,g){y.exports=g()})(globalThis,function(){return function(){var j={44:function(t,s,l){var n=l(497),c=Symbol.for("react.element"),p=Symbol.for("react.fragment"),f=Object.prototype.hasOwnProperty,b=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,C={key:!0,ref:!0,__self:!0,__source:!0};s.Fragment=p,s.jsx=function(N,h,S){var m,v={},i=null,d=null;for(m in S!==void 0&&(i=""+S),h.key!==void 0&&(i=""+h.key),h.ref!==void 0&&(d=h.ref),h)f.call(h,m)&&!C.hasOwnProperty(m)&&(v[m]=h[m]);if(N&&N.defaultProps)for(m in h=N.defaultProps)v[m]===void 0&&(v[m]=h[m]);return{$$typeof:c,type:N,key:i,ref:d,props:v,_owner:b.current}}},598:function(t,s,l){t.exports=l(44)},497:function(t){t.exports=u}},g={};function a(t){var s=g[t];if(s!==void 0)return s.exports;var l=g[t]={exports:{}};return j[t](l,l.exports,a),l.exports}a.d=function(t,s){for(var l in s)a.o(s,l)&&!a.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:s[l]})},a.o=function(t,s){return Object.prototype.hasOwnProperty.call(t,s)},a.r=function(t){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var r={};return function(){a.r(r),a.d(r,{ScrollToTop:function(){return c},useScrollToTop:function(){return l}});var t=a(497),s=G,l=function(){var p=(0,s.useLocation)(),f=p.pathname,b=p.state;(0,t.useEffect)(function(){(b==null?void 0:b.scrollToTop)!==!1&&window.scrollTo(0,0)},[f,b])},n=a(598),c=function(p){var f=p.children;return l(),(0,n.jsx)(n.Fragment,{children:t.Children.toArray(f)})}}(),r}()})})(L);var Q=L.exports;const _="/assets/viza-UMg461Dz.svg",X="/assets/vislog-GiOiHEhK.svg";function Z(){const y=k(),w=u.useRef(!1),[j,g]=u.useState([]),a=O();u.useEffect(()=>{const s=async()=>{var l;try{const n=await K.get(`${W.api_url}/api/1.0/user/testimonial/testimonials`);console.log("response...",n);const c=(l=n==null?void 0:n.data)==null?void 0:l.data;g(c)}catch(n){console.error("Error fetching visa data:",n)}};w.current||(s(),w.current=!0)},[]);const t=["/","/about","/blogs","/contact","/faq","/privacy-policy","/visa-consultant-in-dubai"].includes(y.pathname);return e.jsxs("main",{className:"",children:[e.jsxs("footer",{className:" w-11/12 lg:w-9/12 py-10 mx-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4  lg:place-content-start text-left gap-10  lg:gap-0",children:[t&&e.jsx("div",{className:"fixed right-5 z-50 bottom-5 md:right-1 md:bottom-5 rounded-full",children:e.jsx("a",{href:"https://api.whatsapp.com/send?phone=971544404197",target:"_blank",rel:"noopener noreferrer","aria-label":"Chat with us on WhatsApp",className:"bg-visaclr shadow-sm shadow-zinc-600 rounded-full h-[48px] w-[48px] cursor-pointer hover:scale-105 duration-200 grid place-items-center",children:e.jsx(D,{className:"text-white text-[27px]","aria-hidden":"true"})})}),e.jsxs("div",{className:"col-span-2 md:col-span-1",children:[e.jsx(o,{to:"/",children:e.jsx("img",{className:"h-7 lg:h-9 object-contain",src:_,alt:"logo",width:100,height:50})}),e.jsxs("ul",{className:"text-visaclr flex gap-3 mt-5 ml-2 text-2xl",children:[e.jsx("li",{className:"hover:-translate-y-1 duration-200",children:e.jsx("a",{href:"https://www.instagram.com/ztartvisa",target:"_blank",rel:"noopener noreferrer","aria-label":"Follow us on Instagram",className:"inline-flex items-center justify-center",children:e.jsx(I,{"aria-hidden":"true",role:"img"})})}),e.jsx("li",{className:"hover:-translate-y-1 duration-200",children:e.jsx("a",{href:"http://www.youtube.com/@ztartvisa",target:"_blank",rel:"noopener noreferrer","aria-label":"Subscribe us on Youtube",children:e.jsx(U,{"aria-hidden":"true",role:"img"})})}),e.jsx("li",{className:"hover:-translate-y-1 duration-200",children:e.jsx("a",{href:"https://www.linkedin.com/company/ztartvisa/?originalSubdomain=ae",target:"_blank",rel:"noopener noreferrer","aria-label":"Follow us on Linkedin",children:e.jsx(M,{"aria-hidden":"true",role:"img"})})}),e.jsx("li",{className:"hover:-translate-y-1 duration-200",children:e.jsx("a",{href:"https://x.com/ztartvisa/status/1772161296835936545",target:"_blank",rel:"noopener noreferrer","aria-label":"Follow us on Threads",children:e.jsx(B,{"aria-hidden":"true",role:"img"})})})]})]}),e.jsxs("div",{className:"",children:[e.jsx("h2",{className:"text-base lg:text-lg font-PoppinsSemibold",children:"About Us"}),e.jsxs("ul",{className:"text-base pt-5 flex flex-col gap-2",children:[e.jsx("li",{children:e.jsx(o,{to:"/about",children:"About"})}),e.jsx("li",{children:e.jsx(o,{to:"/faq",children:"FAQ"})}),e.jsx("li",{children:e.jsx(o,{to:"/blogs",children:"Blogs"})}),e.jsx("li",{children:e.jsx(o,{to:"/contact",children:"Contact"})}),e.jsx("li",{children:e.jsx(o,{to:"/privacy-policy",children:"Privacy Policy"})})]})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-base lg:text-lg font-PoppinsSemibold",children:"Contact Us"}),e.jsxs("ul",{className:"text-base pt-5 flex flex-col gap-2",children:[e.jsx("li",{children:e.jsx("a",{href:"mailto:hello@ztartvisa.com",children:"hello@ztartvisa.com"})}),e.jsx("li",{children:e.jsx("a",{href:"tel:04 528 2118",children:"04 528 2118"})})]})]}),e.jsxs("div",{className:"col-span-2 md:col-span-1",children:[e.jsx("h2",{className:"text-base lg:text-lg font-PoppinsSemibold",children:"Visas"}),e.jsx("ul",{className:"text-base pt-5 grid grid-cols-2 gap-2 capitalize",children:j==null?void 0:j.slice(0,10).reverse().map((s,l)=>e.jsx("li",{className:"cursor-pointer",onClick:()=>{a(`/visa/${s.slug}`)},children:s==null?void 0:s.country},l))})]})]}),e.jsxs("div",{className:"pl-4 md:pl-0 md:text-center pb-5 leading-relaxed",children:[e.jsx("p",{className:"text-[9px] md:text-[11px]",children:"Copyright © 2024 Ztartvisa Documents Clearing Services. All rights reserved."}),e.jsx("p",{className:"text-[9px] md:text-[11px]",children:"Level1, Wafi residence - Oud Metha Rd - Umm Hurair 2 - Dubai, UAE"})]})]})}function J(){const y=O(),w=k(),[j,g]=u.useState(!1),[a,r]=u.useState(!1),[t,s]=u.useState(!1);a?document.body.style.overflow="hidden":document.body.style.overflow="unset";const l=()=>{r(!a)},n=()=>{s(!t)};u.useEffect(()=>{const i=()=>{g(window.scrollY>360)};return window.addEventListener("scroll",i),()=>{window.removeEventListener("scroll",i)}},[[w.pathname]]);const[c,p]=u.useState({customerName:"",mobileNo:"",countryId:""}),f=i=>{const{name:d,value:x}=i.target;p({...c,[d]:x})},b=async i=>{i.preventDefault();const d="0"+c.mobileNo;try{const x=await fetch("https://lead.accorelab.com/api/Lead/Create/LeadAutoCustomer",{method:"POST",headers:{Accept:"*/*","Content-Type":"application/json",ClientKey:"AcrelbKey",ClientValue:"Xjr@5j%787gfounS10"},body:JSON.stringify({customerName:c.customerName,mobileNo:d,countryId:c.countryId})});if(!x.ok)throw P.error("Please fill out all fields to proceed"),new Error("Something went wrong");const z=await x.json();P.dark("Submission Successful"),p({customerName:"",mobileNo:"",countryId:""}),r(!1),s(!1),console.log("Submission Successful",z)}catch(x){console.error("Submission failed",x)}},[C,N]=u.useState([]),[h,S]=u.useState(!0),[m,v]=u.useState(null);return u.useEffect(()=>{(async()=>{try{const d=await fetch("https://lead.accorelab.com/api/Country/List",{method:"GET",headers:{ClientKey:"AcrelbKey",ClientValue:"Xjr@5j%787gfounS10"}});if(!d.ok)throw new Error(`HTTP error! status: ${d.status}`);const x=await d.json();x.status===200&&x.result?N(x.result):v(x.errorMessage||"Failed to fetch countries")}catch(d){console.log(d),v(d.message)}finally{S(!1)}})()},[]),e.jsxs(e.Fragment,{children:[e.jsxs("nav",{className:"px-5 md:px-6 p-4 sticky top-0 left-0 right-0 bg-white z-20 flex justify-between items-center border-b border-gray-100",children:[e.jsx("img",{onClick:()=>y("/"),loading:"lazy",className:"cursor-pointer h-7 lg:h-9 w-40 object-fill hidden md:block",src:_,alt:"Logo"}),e.jsx("img",{onClick:()=>y("/"),loading:"lazy",className:"cursor-pointer h-9 w-9 object-fill block md:hidden",src:X,alt:"Logo"}),e.jsxs("ul",{className:"text-base font-PoppinsMedium hidden xl:flex items-center gap-5",children:[e.jsx("li",{children:e.jsx(o,{className:"hover:text-visaclr duration-200 ",onClick:()=>r(!1),to:"/",children:"Home"})}),e.jsx("li",{children:e.jsx(o,{className:"hover:text-visaclr duration-200",onClick:()=>r(!1),to:"/about",children:"About Us"})}),e.jsx("li",{children:e.jsx(o,{className:"hover:text-visaclr duration-200",onClick:()=>r(!1),to:"/visa",children:"Visa"})}),e.jsx("li",{children:e.jsx(o,{className:"hover:text-visaclr duration-200",onClick:()=>r(!1),to:"/blogs",children:"Blogs"})}),e.jsx("li",{children:e.jsx(o,{className:"hover:text-visaclr duration-200",onClick:()=>r(!1),to:"/contact",children:"Contact Us"})})]}),e.jsxs("div",{className:"flex items-center gap-3",children:[e.jsx("a",{href:"tel:045282118",target:"_blank",className:"bg-visaclr lg:bg-white hover:bg-visaclrhvr duration-200 hover:text-white  font-PoppinsMedium text-white text-sm lg:text-base lg:text-visaclr border border-visaclr px-2 py-2 md:px-7 rounded-full lg:py-2.5",children:e.jsx("span",{className:"",children:"Request a call"})}),e.jsx("button",{className:"lg:hidden",onClick:l,"aria-label":"Open menu",children:e.jsx(Y,{className:"text-xl"})})]})]}),e.jsx("div",{className:`fixed  top-0 left-0 w-full h-full bg-black bg-opacity-75 flex items-center justify-center transition-opacity duration-300 z-[999] ${a?"opacity-100":"opacity-0 pointer-events-none"}`,children:e.jsxs("div",{className:`bg-white overflow-y-scroll h-full w-full transform transition-transform duration-200 ease-in ${a?"scale-100":"scale-0"}`,children:[e.jsx("button",{className:"absolute top-3 right-3",onClick:l,"aria-label":"Close popup",children:e.jsx(R,{className:"text-3xl"})}),e.jsxs("div",{className:"",children:[e.jsx("div",{className:"h-14 grid place-items-center  w-full border-b border-gray-300",children:e.jsx("p",{className:"text-center text-base font-semibold tracking-wide capitalize text-gray-800",children:"Preferences"})}),e.jsxs("div",{className:"p-4 pt-5 flex flex-col gap-7 h-full",children:[e.jsxs("div",{className:"w-full  bg-[#f2efe9] p-5 rounded-xl text-center flex flex-col gap-3",children:[e.jsxs("h2",{className:"text-[1.7rem] font-PoppinsSemibold ",children:["Before applying,",e.jsx("br",{})," know your cost"]}),e.jsx("p",{className:"text-base text-gray-700",children:"Simply reach our Visa expert to know the visa process and cost — absolutely free!"}),e.jsx("button",{onClick:n,className:"bg-visaclr py-3 rounded-xl text-white font-PoppinsSemibold capitalize",children:"get free visa consultation"})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-PoppinsSemibold",children:"About ztartvisa"}),e.jsxs("ul",{className:"text-base pt-4 flex flex-col gap-2",children:[e.jsx("li",{children:e.jsx(o,{onClick:()=>r(!1),to:"/about",children:"About Us"})}),e.jsx("li",{children:e.jsx(o,{onClick:()=>r(!1),to:"/visa",children:"Visa"})}),e.jsx("li",{}),e.jsx("li",{children:e.jsx(o,{onClick:()=>r(!1),to:"/blogs",children:"Blogs"})}),e.jsx("li",{children:e.jsx(o,{onClick:()=>r(!1),to:"/contact",children:"Contact Us"})}),e.jsx("li",{children:e.jsx(o,{onClick:()=>r(!1),to:"/privacy-policy",children:"Privacy Policy"})})]})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-PoppinsSemibold",children:"Contact Us"}),e.jsxs("ul",{className:"text-base pt-4 flex flex-col gap-2",children:[e.jsx("li",{children:e.jsx("a",{href:"mailto:hello@ztartvisa.com",children:"hello@ztartvisa.com"})}),e.jsx("li",{children:e.jsx("a",{href:"tel:04 528 2118",children:"04 528 2118"})})]})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-PoppinsSemibold",children:"Business Hours"}),e.jsx("p",{className:"pt-3",children:"Monday - Friday : 9AM - 6PM"}),e.jsx("p",{children:"Saturday & Sunday Closed"})]}),e.jsxs("div",{children:[e.jsx("h2",{className:"text-lg font-PoppinsSemibold",children:"Location"}),e.jsxs("p",{className:"pt-3",children:["Level1, Wafi residence - Oud Metha Rd",e.jsx("br",{})," Umm Hurair 2 - Dubai, UAE"]})]})]})]})]})}),t&&e.jsx("div",{className:"fixed w-full h-screen bg-[#000000a1] backdrop-blur-[2px] top-0 left-0 z-[9999]",children:e.jsxs("div",{className:"fixed top-[50%] left-[50%] w-[85%] sm:w-[80%] md:w-[60%] -translate-x-[50%] -translate-y-[50%] bg-white rounded-lg z-[9999]",children:[e.jsx(V,{onClick:n,className:"text-2xl text-visaclr absolute top-3 right-3"}),e.jsxs("div",{className:"w-full h-full p-5 py-10 ",children:[e.jsx("h1",{className:"text-visaclr font-PoppinsSemibold text-center pb-5 text-lg capitalize",children:"get free visa consultation"}),e.jsxs("form",{onSubmit:b,className:"flex flex-col gap-y-3",children:[e.jsxs("div",{className:"relative",children:[e.jsx("input",{className:"border border-gray-300 p-2 w-full pl-8 rounded-sm outline-none",type:"text",placeholder:"Name",name:"customerName",value:c.customerName,onChange:f,required:!0}),e.jsx(H,{className:"absolute top-2.5 left-2 text-lg text-gray-700"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("input",{className:"border border-gray-300 p-2 pl-[75px] w-full rounded-sm outline-none",type:"tel",inputMode:"numeric",placeholder:"58 550 3940",pattern:"[0-9]{9}",title:"Please enter a 9-digit number",name:"mobileNo",value:c.mobileNo,onChange:f,required:!0}),e.jsx("p",{className:"absolute top-[7px] left-8 chfont font-medium",children:"+971"}),e.jsx($,{className:"absolute top-2.5 left-2 text-lg text-gray-700"})]}),e.jsxs("div",{className:"relative",children:[e.jsx("label",{htmlFor:"country-select",className:"sr-only",children:"Select your location"}),e.jsxs("select",{id:"country-select","aria-required":"true",className:"h-10 w-full pl-8 text-base outline-none border appearance-none",name:"countryId",value:c.countryId,onChange:f,required:!0,children:[e.jsx("option",{value:"",children:"Select a location"}),C.map(i=>e.jsx("option",{value:i.countryId,children:i.countryName},i.countryId))]}),e.jsx(q,{className:"absolute top-2.5 left-2 text-lg text-gray-700"})]}),e.jsx("button",{className:"text-center w-full bg-visaclr h-10 text-white rounded-md mt-2",type:"submit",children:"Submit"})]})]})]})})]})}const ie=()=>(k(),e.jsxs("div",{className:"app",children:[e.jsx(J,{}),e.jsx(Q.ScrollToTop,{}),e.jsx(F,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0}),e.jsx(A,{}),e.jsx(Z,{})]}));export{ie as default};
