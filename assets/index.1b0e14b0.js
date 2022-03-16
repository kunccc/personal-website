var R=Object.defineProperty,W=Object.defineProperties;var Y=Object.getOwnPropertyDescriptors;var f=Object.getOwnPropertySymbols;var A=Object.prototype.hasOwnProperty,D=Object.prototype.propertyIsEnumerable;var k=(i,t,n)=>t in i?R(i,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):i[t]=n,z=(i,t)=>{for(var n in t||(t={}))A.call(t,n)&&k(i,n,t[n]);if(f)for(var n of f(t))D.call(t,n)&&k(i,n,t[n]);return i},I=(i,t)=>W(i,Y(t));var j=(i,t)=>{var n={};for(var a in i)A.call(i,a)&&t.indexOf(a)<0&&(n[a]=i[a]);if(i!=null&&f)for(var a of f(i))t.indexOf(a)<0&&D.call(i,a)&&(n[a]=i[a]);return n};var C=(i,t,n)=>(k(i,typeof t!="symbol"?t+"":t,n),n);import{j as N,s as m,r as l,N as b,H as L,S as q,R as v,a as H,b as V,c as P}from"./vendor.7a77bce0.js";import _ from"https://unpkg.com/swiper@7/swiper-bundle.esm.browser.min.js";const Z=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const u of r)if(u.type==="childList")for(const p of u.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&a(p)}).observe(document,{childList:!0,subtree:!0});function n(r){const u={};return r.integrity&&(u.integrity=r.integrity),r.referrerpolicy&&(u.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?u.credentials="include":r.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function a(r){if(r.ep)return;r.ep=!0;const u=n(r);fetch(r.href,u)}};Z();const e=N.exports.jsx,s=N.exports.jsxs,c=r=>{var u=r,{name:i,children:t,className:n}=u,a=j(u,["name","children","className"]);return e("svg",I(z({className:`icon ${n||""}`},a),{children:e("use",{xlinkHref:`#icon-${i}`})}))},X=m.div`
  display: flex;
  width: 100%;
  height: 220px;
  border: 1px solid transparent;
  border-radius: 10px;
  margin: 0 0 60px;
  background: rgba(255, 255, 255, .6);
  box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.06);
  position: relative;
  z-index: 20;
  overflow: hidden;
  transition: all 250ms ease;
  &.night {
    background: transparent;
    border: 1px solid #fff;
    .intro {
      h2 {
        color: #eee;
      }
      .info {
        color: #aaa;
      }
      p {
        color: #ccc;
      }
    }
  }
  &:hover {
    img {
      transform: scale(1.15);
    }
  }
  .img {
    width: 40%;
    height: 100%;
    display: flex;
    align-items: center;
    overflow: hidden;
    img {
      transition: all .8s ease;
      width: 100%;
    }
  }
  .intro {
    width: 60%;
    padding: 26px 40px 30px;
    text-align: start;
    h2 {
      color: #333;
      cursor: pointer;
      display: inline-block;
      transition: all 250ms ease;
      &:hover {
        color: lightseagreen;
      }
    }
    .info {
      color: #999;
      margin: 10px 0 16px;
      display: flex;
      align-items: center;
    }
    p {
      color: #666;
      &:first-of-type {
        max-height: 67px;
        overflow: hidden;
      }
    }
  }
  @media (max-width: 576px) {
    flex-direction: column;
    height: 440px;
    margin: 0 0 20px;
    .img {
      width: 100%;
      height: 50%;
    }
    .intro {
      width: 100%;
      height: 50%;
      padding: 18px 30px 22px;
    }
  }
`,w=i=>{const t=l.exports.useRef(null),n=l.exports.useRef(null);return l.exports.useEffect(()=>{n.current.clientHeight>40&&(t.current.style.maxHeight="44px");let a=()=>{n.current.clientHeight>40?t.current.style.maxHeight="44px":t.current.style.maxHeight="67px"};return window.addEventListener("resize",a),()=>window.removeEventListener("resize",a)},[]),s(X,{className:i.day?"":"night",children:[e("div",{className:"img",children:e("img",{src:i.articleInfo.img,alt:""})}),s("div",{className:"intro",children:[e("h2",{ref:n,children:e("a",{href:i.articleInfo.href,target:"_blank",children:i.articleInfo.title})}),s("div",{className:"info",children:[e(c,{name:"calendar"}),s("span",{children:["\xA0",i.articleInfo.date,"\xA0\xA0\xA0"]}),e(c,{name:"write"}),s("span",{children:[i.articleInfo.words,"\u5B57"]})]}),e("p",{ref:t,children:i.articleInfo.article}),e("p",{children:"......"})]})]})},T=m.div`
  display: inline-block;
  text-align: center;
  box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.06);
  padding: 10px 20px;
  position: fixed;
  top: 140px;
  right: 100px;
  z-index: -1;
  border-radius: 8px;
  opacity: 0;
  transform-origin: top;
  transform: scaleY(.9);
  transition: all 250ms ease;
  font-weight: 300;
  background: rgba(250, 250, 250, 0.9);
  li {
    margin: 16px 0;
    color: #333;
    transition: all 250ms ease;
    a {
      padding: 3px 15px;
      &.active {
        color: #fff;
        background: lightseagreen;
        border-radius: 20px;
      }
    }
    &:hover {
      color: lightseagreen;
    }
  }
  &.night {
    background: rgba(80, 80, 80, 0.9);
    li {
      color: #eee;
      &:hover {
        color: lightseagreen;
      }
    }
  }
  &.visible {
    transform: scaleY(1);
    opacity: 1;
    z-index: 100;
  }
  @media (max-width: 992px) {
    right: 50px;
  }
  @media (max-width: 768px) {
    position: absolute;
    top: 126px;
    right: 4vw;
  }
  @media (max-width: 576px) {
    top: 92px;
  }
`,E=i=>{const t=l.exports.useRef(null);return l.exports.useEffect(()=>{[...document.querySelectorAll("li")].forEach(a=>a.onclick=()=>i.setVisible(!1))},[]),l.exports.useEffect(()=>{const n=document.querySelector(".menuIcon");let a=r=>{var u;(n==null?void 0:n.contains(r.target))||((u=t.current)==null?void 0:u.contains(r.target))||i.setVisible(!1)};return window.addEventListener("click",a),()=>window.removeEventListener("click",a)},[]),e(T,{ref:t,className:`nav ${i.day?"":"night"} ${i.visible?"visible":""}`,children:s("ul",{children:[e("li",{children:e(b,{to:"/home",children:"Home"})}),e("li",{children:e(b,{to:"/works",children:"Works"})}),e("li",{children:e(b,{to:"/articles",children:"Articles"})}),e("li",{children:e(b,{to:"/about",children:"About"})})]})})},O=m.canvas`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
`,F=()=>{const i=l.exports.useRef(null);return l.exports.useEffect(()=>{const t=i.current,n=t.getContext("2d");t.width=document.documentElement.clientWidth,t.height=document.documentElement.clientHeight,n.fillStyle="white";let a=t.width<576?50:100,r=t.width<576?20:40,u=[],p=[];class x{constructor(){C(this,"x");C(this,"y");this.x=Math.random()*t.width,this.y=Math.random()*t.height}}for(let o=0;o<a;o++){let d=new x;u.push(d)}for(let o=0;o<r;o++){let d=new x;p.push(d)}const h=()=>{n.clearRect(0,0,t.width,t.height);for(let o of u)o.x-=.8,o.y-=.8,o.x<0&&(o.x=t.width),o.y<0&&(o.y=t.height),n.fillRect(o.x,o.y,1,1);for(let o of p)o.x-=.4,o.y-=.4,o.x<0&&(o.x=t.width),o.y<0&&(o.y=t.height),n.fillRect(o.x,o.y,2,2);requestAnimationFrame(h)};h()},[]),e(O,{ref:i})};let S=0,B=()=>S+=1;const g=l.exports.createContext({day:!0,setDay:()=>{}});var $="/assets/background.504dca21.png",M="/assets/promise.098902c7.png",J="/assets/axios.1b87a9e1.png",K="/assets/eventLoop.305f1615.png",U="/assets/redux.e60b45bc.png";const G=m.div`
  background: linear-gradient(180deg, rgba(170, 220, 243, 1) 0%, rgba(255, 241, 235, 1) 100%) fixed;
  &.night {
    background: linear-gradient(180deg, rgba(58, 74, 82, 1) 0%, rgba(77, 71, 70, 1) 100%) fixed;
    main .iconWrapper .icon {
      color: #fff;
    }
    h1 {
      color: #fff;
    }
    .about {
      background: transparent;
      box-shadow: 0 0 5px #fff;
      color: #eee;
    }
  }
  header {
    color: #fff;
    width: 100vw;
    height: 100vh;
    background-image: url(${$});
    background-attachment: fixed;
    img {
      width: 100vw;
      height: 100vh;
      position: fixed;
      top: 0;
      left: 0;
      z-index: -10;
    }
    .intro {
      margin: 30vh 120px;
      position: absolute;
      z-index: 40;
      p {
        font-size: 72px;
        text-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
        &:nth-child(1) {
          font-size: 18px;
          font-weight: lighter;
          padding-left: 6px;
          margin-bottom: 8px;
        }
        span {
          color: lightseagreen;
        }
      }
      button {
        font-size: 18px;
        font-family: -apple-system sans-serif;
        font-weight: lighter;
        background: none;
        color: #fff;
        padding: 4px 18px;
        border: 1px solid #ddd;
        border-radius: 20px;
        cursor: pointer;
        margin-top: 30px;
        margin-left: 2px;
        transition: all 250ms ease;
      }
    }
  }
  main {
    width: 100vw;
    min-height: 100vh;
    padding: 80px 20vw 100px;
    text-align: center;
    .iconWrapper {
      position: sticky;
      top: 80px;
      display: inline-block;
      transform: translate(calc(50vw - 134px), 20px);
      z-index: 100;
      .icon {
        color: #333;
        font-size: 28px;
        cursor: pointer;
        transition: color 250ms ease;
        &:first-of-type {
          margin-right: 12px;
        }
        &:last-of-type {
          transform: scale(.9);
        }
        &.active {
          color: lightseagreen;
        }
      }
    }
    .nav {
      position: sticky;
      top: 194px;
      transform: translate(calc(50vw - 163.43px), -54px) scaleY(.9);
      &.visible {
        transform: translate(calc(50vw - 163.43px), -54px) scaleY(1);
      }
    }
    h1 {
      color: #333;
      margin: 80px 0 40px;
      position: relative;
      display: inline-block;
      padding: 2px;
      z-index: 20;
      &:first-of-type {
        margin-top: 0;
        transform: translateY(-28px);
      }
      &::before {
        content: '';
        position: absolute;
        bottom: 4px;
        left: 0;
        width: 100%;
        height: 10px;
        transition: all 250ms ease;
        background: lightseagreen;
        z-index: -1;
      }
    }
    .about {
      color: #333;
      text-align: start;
      background: rgba(255, 255, 255, .6);
      border: 1px solid transparent;
      border-radius: 10px;
      padding: 50px 60px;
      margin-top: -210px;
      width: 100%;
      line-height: 1.6em;
      box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.06);
      transition: background-color 250ms ease;
      position: relative;
      z-index: 20;
      span {
        position: relative;
        z-index: 1;
        cursor: pointer;
        padding: 2px;
        &::after {
          content: '';
          position: absolute;
          bottom: 2px;
          left: 0;
          width: 100%;
          height: 6px;
          transition: all 250ms ease;
          background: lightseagreen;
          z-index: -1;
        }
        &:hover::after {
          height: 20px;
        }
      }
    }
  }
  footer {
    text-align: center;
    position: relative;
    z-index: 10;
    color: #333;
    font-size: 14px;
    padding-bottom: 16px;
  }
  @media (min-width: 576px) {
    header {
      button:hover {
        background: lightseagreen;
        border-color: transparent;
      }
    }
    main {
      .iconWrapper {
        .icon:hover {
          color: lightseagreen;
        }
      }
    }
  }
  @media (max-width: 992px) {
    header {
      .intro {
        margin-right: 0;
        margin-left: 60px;
      }
    }
    main {
      padding: 80px 18vw 100px;
      .iconWrapper {
        transform: translate(calc(50vw - 84px), 20px);
      }
      .nav {
        transform: translate(calc(50vw - 113.43px), -54px) scaleY(.9);
        &.visible {
          transform: translate(calc(50vw - 113.43px), -54px) scaleY(1);
        }
      }
    }
  }
  @media (max-width: 768px) {
    main {
      padding: 80px 4vw 100px;
      position: relative;
      .iconWrapper {
        position: absolute;
        transform: translate(0);
        top: 90px;
        right: 4vw;
      }
      .nav {
        position: absolute;
        transform: translate(0) scaleY(.9);
        top: 140px;
        right: 4vw;
        &.visible {
          transform: translate(0) scaleY(1);
        }
      }
      h1 {
        &:first-of-type {
          transform: translate(0);
        }
      }
      .about {
        margin-top: 0;
      }
    }
  }
  @media (max-width: 576px) {
    header {
      .intro {
        p {
          font-size: 56px;
          &:nth-child(1) {
            font-size: 16px;
          }
        }
        button {
          font-size: 16px;
          padding: 4px 16px;
          &:active {
            background: lightseagreen;
            border-color: transparent;
          }
        }
      }
    }
    main {
      padding-top: 40px;
      padding-bottom: 40px;
      .iconWrapper {
        top: 52px;
        .icon {
          font-size: 26px;
          &:active {
            color: lightseagreen;
          }
          &:first-of-type {
            margin-right: 8px;
          }
        }
      }
      .nav {
        top: 86px;
      }
      .about {
        padding: 30px 40px;
      }
      h1 {
        margin: 60px 0 40px;
        font-size: 30px;
      }
    }
  }
`,Q=()=>{const[i,t]=l.exports.useState(!1),[n,a]=l.exports.useState(document.documentElement.clientWidth),{day:r,setDay:u}=l.exports.useContext(g),p={img:M,href:"https://www.yuque.com/u1847179/eb66q5/cslrev",title:"\u624B\u5199 Promise\uFF1F\u770B\u8FD9\u4E00\u7BC7\u5C31\u591F\u4E86",date:"2021-11-11",words:"3832",article:"Promise \u4F5C\u4E3A\u5982\u4ECA\u524D\u7AEF\u89E3\u51B3\u5F02\u6B65\u95EE\u9898\u7684\u7EDF\u4E00\u65B9\u6848\uFF0C\u5728\u9762\u8BD5\u4E2D\u5DF2\u51E0\u4E4E\u662F\u5FC5\u8003\u9898\u3002\u4E3A\u6DF1\u5165\u7406\u89E3 Promise\uFF0C\u4E86\u89E3\u5176\u5185\u90E8\u7684\u5B9E\u73B0\u539F\u7406\uFF0C\u672C\u6587\u5C06\u5E26\u4F60\u7531\u6D45\u5165\u6DF1\uFF0C\u4ECE\u96F6\u5F00\u59CB\u624B\u5199\u4E00\u4E2A Promise\u3002"},x={img:J,href:"https://www.yuque.com/u1847179/eb66q5/hghrm1",title:"axios \u6E90\u7801\u6D45\u6790\u4E0E\u624B\u5199",date:"2021-11-05",words:"1837",article:"axios \u662F\u76EE\u524D\u524D\u7AEF\u6700\u70ED\u95E8\u7684 ajax \u8BF7\u6C42\u5E93\uFF0CVue \u548C React \u4E24\u5927\u6846\u67B6\u5B98\u65B9\u90FD\u63A8\u8350\u4F7F\u7528 axios \u8FDB\u884C ajax \u8BF7\u6C42\u3002\u90A3\u4E48 axios \u5185\u90E8\u7684\u539F\u7406\u662F\u600E\u6837\u7684\u5462\uFF1Faxios \u521B\u5EFA\u8FC7\u7A0B \u5148\u770B\u4E00\u4E0B axios \u7684\u6E90\u7801\uFF1A"},h={img:U,href:"https://www.yuque.com/u1847179/eb66q5/yo9h6l",title:"Redux \u5B66\u4E60\u7B14\u8BB0",date:"2021-10-19",words:"2091",article:"Redux \u662F\u4E00\u4E2A JavaScript \u72B6\u6001\u5BB9\u5668\uFF0C\u7528\u6765\u7BA1\u7406\u9879\u76EE\u4E2D\u7684\u72B6\u6001\u3002Redux \u9664\u4E86\u4E0E React \u4E00\u8D77\u7528\u5916\uFF0C\u8FD8\u652F\u6301\u5176\u4ED6\u5E93\u5982 Angular\uFF0C\u6709\u4E86\u5B83\u6211\u4EEC\u53EF\u4EE5\u8F7B\u677E\u5B9E\u73B0\u70ED\u52A0\u8F7D\u4E0E\u65F6\u95F4\u65C5\u884C\u3002\u4E09\u5927\u539F\u5219\u5355\u4E00\u6570\u636E\u6E90\u6240\u6709\u7684 state \u90FD\u5B58\u50A8\u5728\u4E00\u68F5 object tree \u4E2D\uFF0C\u5E76\u4E14\u8FD9\u4E2A object tree \u4EC5\u5B58\u5728\u552F\u4E00\u4E00\u4E2A store \u4E2D\u3002"},o={img:K,href:"https://www.yuque.com/u1847179/eb66q5/xmrprs",title:"\u6D45\u6790 EventLoop",date:"2021-10-04",words:"633",article:"JavaScript \u662F\u5355\u7EBF\u7A0B\u7684\uFF0C\u8FD9\u610F\u5473\u7740\uFF0CJavaScript \u8FD0\u884C\u65F6\u53EF\u80FD\u4F1A\u53D1\u751F \u963B\u585E\u3002\u6BD4\u5982\u5B9A\u4E0B\u4E00\u4E2A\u8BA1\u65F6\u5668 setTimeout\uFF0C\u5982\u679C\u628A delay \u8BBE\u7F6E\u5F97\u5F88\u5927\uFF0C\u90A3\u5728\u7B49\u5F85\u8BA1\u65F6\u5668\u7684\u8FD9\u6BB5\u65F6\u95F4\uFF0CJavaScript \u4E0D\u5C31\u4E00\u76F4\u505C\u7559\u5728\u8FD9\u91CC\u4E86\u5417\uFF1F"};return l.exports.useEffect(()=>{S!==0&&window.scrollTo(0,document.documentElement.clientHeight)},[]),l.exports.useEffect(()=>{let d=()=>{a(document.documentElement.clientWidth)};return window.addEventListener("resize",d),()=>window.removeEventListener("resize",d)},[]),s(G,{className:r?"":"night",children:[s("header",{children:[e(F,{}),s("div",{className:"intro",children:[e("p",{children:"Welcome to"}),s("p",{children:[e("span",{children:"K"}),"unc's"]}),s("p",{children:[e("span",{children:"P"}),"ersonal ",e("span",{children:"W"}),"ebsite"]}),e("button",{onClick:()=>scrollTo({top:document.documentElement.clientHeight,behavior:"smooth"}),children:"take a tour"})]})]}),s("main",{children:[s("div",{className:"iconWrapper",children:[r?e(c,{name:"night",onClick:()=>u(!1)}):e(c,{name:"day",onClick:()=>u(!0)}),e(c,{name:"menu",className:`menuIcon ${i?"active":""}`,onClick:()=>t(d=>!d)})]}),n>768?e("br",{}):null,e("h1",{children:"Preface"}),e("br",{}),e(E,{day:r,visible:i,setVisible:t}),s("div",{className:"about",children:["Hello\uFF0C\u6211\u662F Kunc\u3002",e("br",{}),"\u6B22\u8FCE\u6765\u5230\u6211\u7684\u4E2A\u4EBA\u7F51\u7AD9\u3002",e("br",{}),e("br",{}),"\u6211\u662F\u4E00\u540D\u5927\u4E09\u5728\u6821\u5927\u5B66\u751F\uFF0C\u4E3B\u4FEE\u65B9\u5411\u662F\u4EA4\u4E92\u8BBE\u8BA1\u3002",e("br",{}),"\u5728\u653B\u8BFB\u4E13\u4E1A\u8BFE\u7A0B\u4E4B\u4F59\uFF0C\u6211\u559C\u6B22\u7814\u7A76\u524D\u7AEF\u5F00\u53D1\uFF0C\u5E76\u81EA\u5DF1\u5199\u4E86\u8BB8\u591A\u5927\u5927\u5C0F\u5C0F\u7684\u9879\u76EE\uFF0C\u6211\u5C06\u4ED6\u4EEC\u4E0A\u4F20\u5230\u4E86\u6211\u7684",e("span",{children:e("a",{href:"https://github.com/kunccc",target:"_blank",children:"GitHub"})}),"\u3002",e("br",{}),"\u6211\u8FD8\u559C\u6B22\u5199\u4E00\u4E9B\u6280\u672F\u535A\u5BA2\u6765\u8BB0\u5F55\u6211\u7684\u5B66\u4E60\u8FC7\u7A0B\uFF0C\u4F60\u53EF\u4EE5\u5728",e("span",{children:e("a",{href:"https://www.yuque.com/u1847179/eb66q5",target:"_blank",children:"\u8BED\u96C0"})}),"\u9605\u8BFB\u4ED6\u4EEC\u3002",e("br",{}),"\u6B22\u8FCE\u5173\u6CE8\u6211\uFF0C\u6211\u4F1A\u6301\u7EED\u5206\u4EAB~",e("br",{}),e("br",{}),"\u5E73\u65F6\u6211\u8FD8\u559C\u6B22\u5531\u6B4C\u3001\u542C\u97F3\u4E50\u3001\u770B\u7535\u5F71\u8FD8\u6709\u6253\u6253\u6E38\u620F ^^"]}),e("h1",{children:"Recommend"}),e(w,{articleInfo:p,day:r}),e(w,{articleInfo:x,day:r}),e(w,{articleInfo:h,day:r}),e(w,{articleInfo:o,day:r})]}),s("footer",{children:[e("p",{children:"Copyright \xA9 www.kuncc.cc All Rights Reserved"}),s("p",{children:["\u5907\u6848\u53F7\uFF1A",e("a",{href:"https://beian.miit.gov.cn/#/Integrated/index",target:"_blank",children:"\u7CA4ICP\u59072021154443\u53F7"})]})]})]})};var ee="/assets/xiyoUI.794175c1.png",te="/assets/xiyoAccount.f54a535a.png",ie="/assets/bigScreen.70788f66.png",ne="/assets/paint-1.a20c3540.jpg",re="/assets/paint-2.b9593d35.jpg",ae="/assets/paint-3.b2eea5e8.jpg",oe="/assets/paint-4.15f1d8b8.jpg",se="/assets/paint-5.f9281713.jpg",ue="/assets/paint-6.913fdeed.jpg",le="/assets/rhino-1.5fab655c.jpg",ce="/assets/rhino-2.0b707546.jpg",pe="/assets/ps-1.f2c463fe.jpg",de="/assets/ps-2.c1e63d3a.jpg",he="/assets/ai-1.7509d713.jpg",xe="/assets/ai-2.16c820bf.jpg",me="/assets/ai-3.1fdbf8df.jpg",ge="/assets/ai-4.8897b083.jpg",fe="/assets/photo-1.814c0ee5.jpg",be="/assets/photo-2.473f21ae.jpg",ve="/assets/photo-3.e991b23b.jpg",we="/assets/photo-4.f457e40e.jpg";const Ee=m.div`
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(170, 220, 243, 1) 0%, rgba(255, 241, 235, 1) 100%) fixed;
  text-align: center;
  padding: 80px 20vw 100px;
  overflow: hidden;
  &.night {
    background: linear-gradient(180deg, rgba(58, 74, 82, 1) 0%, rgba(77, 71, 70, 1) 100%) fixed;
    .icon {
      color: #fff;
    }
    h1 {
      color: #fff;
    }
    .works-container {
      div p {
        color: #eee;
      }
    }
    .small-works {
      color: #eee;
      h3 {
        color: #fff;
      }
    }
    > p {
      color: #eee;
    }
  }
  > .icon {
    color: #333;
    position: fixed;
    top: 100px;
    right: 100px;
    font-size: 28px;
    cursor: pointer;
    transition: color 250ms ease;
    &:first-of-type {
      transform: translateX(-40px);
    }
    &:last-of-type {
      transform: scale(.9);
    }
  }
  h1 {
    color: #333;
    margin: 80px 0 40px;
    position: relative;
    display: inline-block;
    padding: 2px;
    z-index: 20;
    &::before {
      content: '';
      position: absolute;
      bottom: 4px;
      left: 0;
      width: 100%;
      height: 10px;
      transition: all 250ms ease;
      background: lightseagreen;
      z-index: -1;
    }
    &:first-of-type {
      margin-top: 0;
    }
  }
  .works-container {
    display: flex;
    justify-content: center;
    transform-style: preserve-3d;
    perspective: 900px;
    margin-top: 10px;
    div {
      transition: all 250ms ease;
      width: 300px;
      p {
        margin-bottom: 20px;
        color: #333;
        opacity: 0;
        transition: all 250ms ease;
      }
      img {
        width: 300px;
        box-shadow: 0 3px 8px 5px rgba(7, 17, 27, 0.05);
      }
    }
  }
  .small-works {
    position: relative;
    z-index: 0;
    text-align: start;
    margin-top: 70px;
    h3 {
      color: #333;
      position: relative;
      margin-bottom: 10px;
      display: inline-block;
      padding: 2px;
      z-index: 20;
      &::before {
        content: '';
        position: absolute;
        bottom: 4px;
        left: 0;
        width: 100%;
        height: 5px;
        transition: all 250ms ease;
        background: lightseagreen;
        z-index: -1;
      }
    }
    ul {
      li {
        margin-top: 8px;
        display: inline-block;
        a:hover {
          color: lightseagreen;
          text-decoration: underline;
        }
      }
      span {
        margin: 0 12px;
      }
    }
  }
  > p {
    margin-bottom: 30px;
  }
  .other-works {
    position: relative;
    z-index: 0;
    column-count: 3;
    a {
      display: inline-block;
      width: 300px;
      margin: 20px;
      img {
        width: 100%;
        box-shadow: 0 3px 8px 5px rgba(7, 17, 27, 0.08);
        transition: all 250ms ease;
        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }
  @media (min-width: 576px) {
    > .icon:hover {
      color: lightseagreen;
    }
    .works-container {
      div {
        margin: 0 30px;
        &:nth-of-type(1) {
          transform: rotateX(60deg);
        }
        &:nth-of-type(2) {
          transform: rotateX(60deg);
        }
        &:nth-of-type(3) {
          transform: rotateX(60deg);
        }
        &:hover {
          transform: rotateX(0);
          p {
            opacity: 1;
          }
          img {
            box-shadow: 0 3px 9px 6px rgba(7, 17, 27, 0.08);
          }
        }
      }
    }
  }
  @media (max-width: 1700px) {
    padding: 80px 16vw 100px;
  }
  @media (max-width: 1600px) {
    padding: 80px 14vw 100px;
  }
  @media (max-width: 1500px) {
    padding: 80px 12vw 100px;
    > .icon {
      position: absolute;
    }
  }
  @media (max-width: 1400px) {
    padding: 80px 10vw 100px;
  }
  @media (max-width: 1300px) {
    padding: 80px 8vw 100px;
  }
  @media (max-width: 1200px) {
    padding: 80px 16vw 100px;
    .works-container {
      div {
        margin: 0 28px;
        img {
          width: 280px;
        }
      }
    }
    .other-works {
      column-count: 2;
    }
  }
  @media (max-width: 1100px) {
    padding: 80px 12vw 100px;
    .works-container {
      div {
        margin: 0 26px;
        img {
          width: 260px;
        }
      }
    }
  }
  @media (max-width: 992px) {
    padding: 80px 8vw 100px;
    > .icon {
      right: 50px;
    }
    .works-container {
      div {
        margin: 0 23px;
        img {
          width: 230px;
        }
      }
    }
  }
  @media (max-width: 900px) {
    padding: 80px 6vw 100px;
    .works-container {
      div {
        margin: 0 21px;
        img {
          width: 210px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    padding: 80px 8vw 100px;
    > .icon {
      position: absolute;
      top: 90px;
      right: 4vw;
    }
    .works-container {
      div {
        margin: 0 8px;
        img {
          width: 170px;
        }
      }
    }
    .other-works {
      column-count: 1;
    }
  }
  @media (max-width: 576px) {
    padding: 40px 0;
    h1 {
      margin: 60px 0 40px;
      font-size: 30px;
    }
    > .icon {
      top: 52px;
      font-size: 26px;
      &:first-of-type {
        transform: translateX(-36px);
      }
    }
    .swiper-slide-active p {
      opacity: 1 !important;
    }
    .works-container {
      perspective: none;
      justify-content: start;
      div {
        width: 220px;
        margin: 0;
        img {
          width: 220px;
        }
      }
    }
    > p {
      margin: 0 2vw;
    }
    .small-works {
      margin-left: 6vw;
      margin-top: 60px;
    }
  }
`,Fe=()=>{const{day:i,setDay:t}=l.exports.useContext(g),n=l.exports.useRef(null),[a,r]=l.exports.useState(!1),[u]=l.exports.useState([de,ne,me,he,ue,fe,le,oe,pe,ge,ce,re,ve,se,we,xe,be,ae]);return l.exports.useEffect(()=>{window.scrollTo(0,0),B()},[]),l.exports.useEffect(()=>{document.documentElement.clientWidth>576||new _(".swiper",{effect:"coverflow",centeredSlides:!0,slidesPerView:"auto",coverflowEffect:{rotate:0,depth:500,modifier:1,slideShadows:!1}})},[]),s(Ee,{className:i?"":"night",children:[e(F,{}),i?e(c,{name:"night",onClick:()=>t(!1)}):e(c,{name:"day",onClick:()=>t(!0)}),e(c,{name:"menu",className:"menuIcon",onClick:()=>r(p=>!p)}),e(E,{day:i,visible:a,setVisible:r}),e("h1",{children:"Works"}),e("div",{className:"swiper",children:s("div",{className:"works-container swiper-wrapper",ref:n,children:[s("div",{className:"swiper-slide",children:[e("p",{children:"\u897F\u67DA UI"}),e("a",{href:"https://kuncc.gitee.io/xiyo-ui-react",target:"_blank",children:e("img",{src:ee,alt:""})})]}),s("div",{className:"swiper-slide",children:[e("p",{children:"\u897F\u67DA\u8BB0\u8D26"}),e("a",{href:"https://kunccc.github.io/xiyoAccount-website",target:"_blank",children:e("img",{src:te,alt:""})})]}),s("div",{className:"swiper-slide",children:[e("p",{children:"\u53EF\u89C6\u5316\u5927\u5C4F"}),e("a",{href:"https://kunccc.github.io/big-screen-website",target:"_blank",children:e("img",{src:ie,alt:""})})]})]})}),s("div",{className:"small-works",children:[e("h3",{children:"\u5176\u4ED6\u5C0F\u9879\u76EE"}),e("br",{}),s("ul",{children:[e("li",{children:e("a",{href:"https://kuncc.gitee.io/xiyo-note-website",target:"_blank",children:"\u897F\u67DA\u7B14\u8BB0"})}),e("span",{children:"|"}),e("li",{children:e("a",{href:"https://kunccc.github.io/aweslide-1",target:"_blank",children:"AweSlide"})}),e("span",{children:"|"}),e("li",{children:e("a",{href:"https://kunccc.github.io/nav-1/dist/index.html",target:"_blank",children:"\u5BFC\u822A\u7F51\u7AD9"})}),e("span",{children:"|"}),e("li",{children:e("a",{href:"https://kunccc.github.io/pikachu-1/dist/index.html",target:"_blank",children:"\u4F1A\u52A8\u7684\u76AE\u5361\u4E18"})}),e("span",{children:"|"}),e("li",{children:e("a",{href:"https://kunccc.github.io/canvas-1/index.html",target:"_blank",children:"Canvas \u753B\u677F"})})]})]}),e("h1",{children:"Others"}),e("p",{children:"\u4E00\u4E9B\u8BFE\u7A0B\u4F5C\u54C1\uFF0C\u5305\u62EC PS / AI / Rhino / KeyShot / \u624B\u7ED8 / \u6444\u5F71"}),e("div",{className:"other-works",children:u.map(p=>e("a",{href:p,target:"_blank",children:e("img",{src:p,alt:""})},p))})]})},ye=m.div`
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(170, 220, 243, 1) 0%, rgba(255, 241, 235, 1) 100%) fixed;
  text-align: center;
  padding: 80px 15vw 0;
  &.night {
    background: linear-gradient(180deg, rgba(58, 74, 82, 1) 0%, rgba(77, 71, 70, 1) 100%) fixed;
    .icon {
      color: #fff;
    }
    h1 {
      color: #fff;
    }
  }
  .icon {
    color: #333;
    position: fixed;
    top: 100px;
    right: 100px;
    font-size: 28px;
    cursor: pointer;
    transition: color 250ms ease;
    &:first-of-type {
      transform: translateX(-40px);
    }
    &:last-of-type {
      transform: scale(.9);
    }
  }
  h1 {
    color: #333;
    margin: 80px 0 40px;
    position: relative;
    display: inline-block;
    padding: 2px;
    z-index: 20;
    &::before {
      content: '';
      position: absolute;
      bottom: 4px;
      left: 0;
      width: 100%;
      height: 10px;
      transition: all 250ms ease;
      background: lightseagreen;
      z-index: -1;
    }
    &:first-of-type {
      margin-top: 0;
    }
  }
  iframe {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 100vh;
    box-shadow: 0 3px 8px 6px rgba(7, 17, 27, 0.06);
    transition: all 1s;
  }
  @media (min-width: 576px) {
    > .icon:hover {
      color: lightseagreen;
    }
  }
  @media (max-width: 1200px) {
    padding: 80px 10vw 0;
  }
  @media (max-width: 992px) {
    padding: 80px 5vw 0;
    > .icon {
      right: 50px;
    }
  }
  @media (max-width: 768px) {
    padding: 80px 0 0;
    > .icon {
      position: absolute;
      top: 90px;
      right: 4vw;
    }
  }
  @media (max-width: 576px) {
    padding-top: 40px;
    padding-bottom: 0;
    h1 {
      margin: 60px 0 40px;
      font-size: 30px;
    }
    > .icon {
      top: 52px;
      font-size: 26px;
      &:first-of-type {
        transform: translateX(-36px);
      }
    }
  }
`,ke=()=>{const{day:i,setDay:t}=l.exports.useContext(g),[n,a]=l.exports.useState(!1);return l.exports.useEffect(()=>{window.scrollTo(0,0),B()},[]),s(ye,{className:i?"":"night",children:[e(F,{}),i?e(c,{name:"night",onClick:()=>t(!1)}):e(c,{name:"day",onClick:()=>t(!0)}),e(c,{name:"menu",className:"menuIcon",onClick:()=>a(r=>!r)}),e(E,{day:i,visible:n,setVisible:a}),e("h1",{children:"Articles"}),e("br",{}),e("iframe",{src:"https://www.yuque.com/u1847179/eb66q5",frameBorder:"0",title:"article"})]})};var Ce="/assets/react.82fc9a77.png",Be="/assets/vue.7901e1ab.png",Ae="/assets/es6.9636166f.png",De="/assets/node.fe46ac17.png",ze="/assets/webpack.12bc1102.png",Ie="/assets/typescript.e81d0a96.png";const je=m.div`
  min-height: 100vh;
  background: linear-gradient(180deg, rgba(170, 220, 243, 1) 0%, rgba(255, 241, 235, 1) 100%) fixed;
  text-align: center;
  padding: 80px 20vw 100px;
  &.night {
    background: linear-gradient(180deg, rgba(58, 74, 82, 1) 0%, rgba(77, 71, 70, 1) 100%) fixed;
    .icon {
      color: #fff;
    }
    h1 {
      color: #fff;
    }
    .about, .concat, .concat .icon {
      color: #eee;
    }
    > p {
      color: #eee;
    }
  }
  > .icon {
    color: #333;
    position: fixed;
    top: 100px;
    right: 100px;
    font-size: 28px;
    cursor: pointer;
    transition: color 250ms ease;
    &:first-of-type {
      transform: translateX(-40px);
    }
    &:last-of-type {
      transform: scale(.9);
    }
  }
  h1 {
    color: #333;
    margin: 80px 0 40px;
    position: relative;
    display: inline-block;
    padding: 2px;
    z-index: 20;
    &::before {
      content: '';
      position: absolute;
      bottom: 4px;
      left: 0;
      width: 100%;
      height: 10px;
      transition: all 250ms ease;
      background: lightseagreen;
      z-index: -1;
    }
    &:first-of-type {
      margin-top: 0;
    }
  }
  > p {
    margin: -10px 0 50px;
  }
  .concat {
    text-align: start;
    position: relative;
    z-index: 1;
    line-height: 1.8em;
    display: flex;
    justify-content: space-around;
    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 180px;
      cursor: pointer;
      transition: all 250ms ease;
      position: relative;
      &::before {
        content: '点击复制';
        font-size: 10px;
        position: absolute;
        top: -20px;
        right: -20px;
        transition: all 250ms ease;
        opacity: 0;
      }
      .icon {
        font-size: 128px;
        color: #353535;
        margin-bottom: 16px;
        transition: all 250ms ease;
      }
    }
  }
  @keyframes show {
    0% {
      opacity: 0;
      transform: translateY(10px);
    }
    30% {
      transform: translateY(0);
      opacity: 1;
    }
    70% {
      transform: translateY(0);
      opacity: 1;
    }
    100% {
      transform: translateY(-10px);
      opacity: 0;
    }
  }
  .skills {
    position: relative;
    z-index: 1;
    width: 100%;
    height: 143px;
    transform-style: preserve-3d;
    animation: rotate 20s linear infinite;
    div {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      text-align: center;
      -webkit-box-reflect: below 0 -webkit-linear-gradient(transparent 10%, rgba(255, 255, 255, .3));
      img {
        width: 240px;
      }
      &:nth-of-type(1) {
        transform: translateZ(240px);
      }
      &:nth-of-type(2) {
        transform: rotateY(60deg) translateZ(240px);
      }
      &:nth-of-type(3) {
        transform: rotateY(120deg) translateZ(240px);
      }
      &:nth-of-type(4) {
        transform: rotateY(180deg) translateZ(240px);
      }
      &:nth-of-type(5) {
        transform: rotateY(240deg) translateZ(240px);
      }
      &:nth-of-type(6) {
        transform: rotateY(300deg) translateZ(240px);
      }
    }
    @keyframes rotate {
      0% {
        transform: rotateY(0);
      }
      100% {
        transform: rotateY(360deg);
      }
    }
  }
  > span {
    cursor: default;
    color: lightseagreen;
    position: absolute;
    opacity: 0;
    z-index: 10;
    font-size: 14px;
    &.visible {
      animation: show 1s ease;
    }
  }
  @media (min-width: 576px) {
    > .icon:hover {
      color: lightseagreen;
    }
    .concat {
      > div {
        &:hover {
          transform: scale(1.2);
          &::before {
            opacity: 1;
          }
        }
        a:hover {
          color: lightseagreen;
          text-decoration: underline;
        }
      }
    }
  }
  @media (max-width: 992px) {
    padding: 80px 15vw 0;
    > .icon {
      right: 50px;
    }
  }
  @media (max-width: 768px) {
    padding: 80px 10vw 100px;
    > .icon {
      position: absolute;
      top: 90px;
      right: 4vw;
    }
  }
  @media (max-width: 576px) {
    padding: 40px 2vw 40px;
    h1 {
      margin: 60px 0 40px;
      font-size: 30px;
    }
    > .icon {
      top: 52px;
      font-size: 26px;
      &:first-of-type {
        transform: translateX(-36px);
      }
    }
    > p {
      font-size: 14px;
    }
    .concat {
      > div {
        font-size: 12px;
        &.tip {
          animation: bigger 1s ease;
        }
        &::before {
          content: '';
        }
        &:active {
          transform: scale(1.1);
        }
        a:active {
          color: lightseagreen;
          text-decoration: underline;
        }
        .icon {
          font-size: 72px;
          margin-bottom: 2px;
        }
      }
    }
    .skills {
      height: 86px;
      div {
        img {
          width: 145px;
        }
        &:nth-of-type(1) {
          transform: translateZ(145px);
        }
        &:nth-of-type(2) {
          transform: rotateY(60deg) translateZ(145px);
        }
        &:nth-of-type(3) {
          transform: rotateY(120deg) translateZ(145px);
        }
        &:nth-of-type(4) {
          transform: rotateY(180deg) translateZ(145px);
        }
        &:nth-of-type(5) {
          transform: rotateY(240deg) translateZ(145px);
        }
        &:nth-of-type(6) {
          transform: rotateY(300deg) translateZ(145px);
        }
      }
    }
    @keyframes bigger {
      0% {
        transform: scale(1);
      }
      40% {
        transform: scale(1.1);
      }
      60% {
        transform: scale(1.1);
      }
      100% {
        transform: scale(1);
      }
    }
  }
`,Ne=()=>{const i=l.exports.useRef(null),{day:t,setDay:n}=l.exports.useContext(g),[a,r]=l.exports.useState(!1);l.exports.useEffect(()=>{window.scrollTo(0,0),B()},[]),l.exports.useEffect(()=>([...document.querySelectorAll(".concat div")].forEach(h=>{h.addEventListener("click",o=>{const d=document.createElement("input");d.setAttribute("value",h.dataset.info),document.body.append(d),d.select(),document.execCommand("copy");let y=!1;y||(h.classList.add("tip"),y=!0),setTimeout(()=>{h.classList.remove("tip"),y=!1},1e3),document.body.removeChild(d),p(o.clientX,o.clientY)})}),()=>{u=null}),[]);let u;const p=(x,h)=>{u||(u=setTimeout(()=>{var o;(o=i.current)==null||o.classList.remove("visible"),u=null},1e3),i.current.style.left=document.documentElement.clientWidth>=576?x+10+"px":x-30+"px",i.current.style.top=document.documentElement.clientWidth>=576?h-21+"px":h-31+"px",i.current.classList.add("visible"))};return s(je,{className:t?"":"night",children:[e(F,{}),t?e(c,{name:"night",onClick:()=>n(!1)}):e(c,{name:"day",onClick:()=>n(!0)}),e(c,{name:"menu",className:"menuIcon",onClick:()=>r(x=>!x)}),e(E,{day:t,visible:a,setVisible:r}),e("h1",{children:"About"}),e("br",{}),e("p",{children:"\u6B63\u5728\u524D\u7AEF\u9886\u57DF\u63A2\u7D22\uFF0C\u671F\u5F85\u6210\u4E3A\u5168\u6808\u5DE5\u7A0B\u5E08..."}),e("span",{ref:i,children:"\u590D\u5236\u6210\u529F\uFF01"}),s("div",{className:"concat",children:[s("div",{"data-info":13925626177,children:[e(c,{name:"phone"}),"13925626177"]}),s("div",{"data-info":"kunjingjing777",children:[e(c,{name:"wechat"}),"kunjingjing777"]}),s("div",{"data-info":"kuncc@foxmail.com",children:[e(c,{name:"email"}),e("a",{href:"mailto:kuncc@foxmail.com",children:"kuncc@foxmail.com"})]})]}),e("h1",{children:"Skills"}),s("div",{className:"skills",children:[e("div",{children:e("img",{src:Be,alt:""})}),e("div",{children:e("img",{src:Ce,alt:""})}),e("div",{children:e("img",{src:Ie,alt:""})}),e("div",{children:e("img",{src:De,alt:""})}),e("div",{children:e("img",{src:Ae,alt:""})}),e("div",{children:e("img",{src:ze,alt:""})})]})]})},Se=()=>{const[i,t]=l.exports.useState(!0);return e(L,{children:e(g.Provider,{value:{day:i,setDay:t},children:s(q,{children:[e(v,{path:"/home",component:Q}),e(v,{path:"/works",component:Fe}),e(v,{path:"/articles",component:ke}),e(v,{path:"/about",component:Ne}),e(H,{exact:!0,from:"",to:"/home"})]})})})};V.render(e(P.StrictMode,{children:e(Se,{})}),document.getElementById("root"));
