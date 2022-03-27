var N=Object.defineProperty,$=Object.defineProperties;var P=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var m=(e,l,r)=>l in e?N(e,l,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[l]=r,c=(e,l)=>{for(var r in l||(l={}))V.call(l,r)&&m(e,r,l[r]);if(h)for(var r of h(l))k.call(l,r)&&m(e,r,l[r]);return e},i=(e,l)=>$(e,P(l));import{j as g,$ as b,a as p,r as u,b as v,c as z,d as R,e as j,f as B,g as D,h as H,R as C,i as S}from"./vendor.66a969fe.js";const F=function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerpolicy&&(o.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?o.credentials="include":a.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(a){if(a.ep)return;a.ep=!0;const o=r(a);fetch(a.href,o)}};F();const t=g.exports.jsx,d=g.exports.jsxs;function x(e){let{locale:l}=b(),r=p(i(c({},e),{locale:l})),s=u.exports.useRef(),{labelProps:a,groupProps:o,inputProps:n}=v(e,r,s);return d("div",{className:`w-full h-auto mb-6 ${e.margin?"dialog:mb-10":"dialog:mb-4"}`,children:[t("label",i(c({className:"block w-full h-auto text-dark-grayish-cyan text-base font-bold mb-2"},a),{children:e.label})),d("div",i(c({className:"relative w-full h-auto"},o),{children:[t("input",i(c({className:"block w-full h-12 bg-light-grayish-cyan-alt rounded-md px-6 text-right text-very-dark-cyan text-2xl font-bold outline-strong-cyan transition-[outline] placeholder:text-dark-grayish-cyan"},n),{ref:s})),t("div",{className:"absolute top-1/2 left-6 -translate-y-1/2 w-auto h-auto",children:e.children})]}))]})}function M(e){let{locale:l}=b(),r=p(i(c({},e),{locale:l})),s=u.exports.useRef(),{groupProps:a,inputProps:o}=v(e,r,s);return t("div",i(c({className:"grid grid-cols-1 w-full h-auto mb-6 mt-4 xs:-mt-12 xs:grid-cols-2 xs:gap-4 sm:grid-cols-3 dialog:mb-10"},a),{children:t("input",i(c({className:"block w-full h-12 bg-light-grayish-cyan-alt rounded-md px-6 text-right text-very-dark-cyan text-2xl font-bold outline-strong-cyan transition-[outline] placeholder:text-dark-grayish-cyan xs:col-start-2 sm:col-start-3"},o),{ref:s}))}))}let y=u.exports.createContext(null);function O(e){let{children:l,label:r}=e,s=z(e),{radioGroupProps:a,labelProps:o}=R(e,s);return d("div",i(c({className:"w-full h-auto"},a),{children:[t("span",i(c({className:"block w-full h-auto text-dark-grayish-cyan text-base font-bold mb-3"},o),{id:"tip-choices",children:r})),t("div",{className:"grid grid-cols-1 gap-4 w-full h-auto xs:grid-cols-2 sm:grid-cols-3",children:t(y.Provider,{value:s,children:l})})]}))}function f(e){let{children:l}=e,r=u.exports.useContext(y),s=u.exports.useRef(null),{inputProps:a}=j(e,r,s),{isFocusVisible:o,focusProps:n}=B(),w=r.selectedValue===e.value;return d("label",{className:`block w-full h-12 rounded-md text-center text-2xl font-bold leading-[3rem] transition-colors cursor-pointer ${w?"bg-strong-cyan text-very-dark-cyan":"bg-very-dark-cyan text-white"} ${o?"ring-2 ring-offset-2 ring-strong-cyan":""}`,children:[t(D,{children:t("input",i(c(c({},a),n),{ref:s}))}),l]})}function L({bill:e,tip:l,people:r,setBill:s,setTip:a,setPeople:o}){return d("div",{className:"w-full h-auto dialog:pr-8",children:[t(x,{label:"Bill",minValue:0,formatOptions:{style:"currency",currency:"USD"},value:e,onChange:s,margin:!0,children:t("svg",{className:"w-3 h-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 11 17",children:t("path",{fill:"#9EBBBD",d:"M6.016 16.328v-1.464c1.232-.08 2.22-.444 2.964-1.092.744-.648 1.116-1.508 1.116-2.58v-.144c0-.992-.348-1.772-1.044-2.34-.696-.568-1.708-.932-3.036-1.092V4.184c.56.144 1.012.4 1.356.768.344.368.516.816.516 1.344v.288h1.824v-.432c0-.448-.088-.876-.264-1.284a3.783 3.783 0 00-.744-1.116A4.251 4.251 0 007.54 2.9a5.324 5.324 0 00-1.524-.492V.872H4.288V2.36a5.532 5.532 0 00-1.416.324c-.448.168-.84.392-1.176.672-.336.28-.604.616-.804 1.008-.2.392-.3.844-.3 1.356v.144c0 .96.316 1.708.948 2.244.632.536 1.548.884 2.748 1.044v3.912c-.704-.16-1.248-.472-1.632-.936-.384-.464-.576-1.08-.576-1.848v-.288H.256v.576c0 .464.08.924.24 1.38.16.456.404.88.732 1.272.328.392.744.728 1.248 1.008s1.108.476 1.812.588v1.512h1.728zM4.288 7.424c-.688-.128-1.164-.332-1.428-.612-.264-.28-.396-.644-.396-1.092 0-.464.176-.832.528-1.104.352-.272.784-.448 1.296-.528v3.336zm1.728 5.712V9.344c.768.128 1.328.328 1.68.6.352.272.528.688.528 1.248 0 .544-.196.984-.588 1.32-.392.336-.932.544-1.62.624z"})})}),d(O,{label:"Select Tip %",onChange:n=>a(Number(n)),value:String(l),children:[t(f,{value:"0.05",children:"5%"}),t(f,{value:"0.1",children:"10%"}),t(f,{value:"0.15",children:"15%"}),t(f,{value:"0.25",children:"25%"}),t(f,{value:"0.5",children:"50%"})]}),t(M,{minValue:0,defaultValue:0,formatOptions:{style:"percent",maximumFractionDigits:0},value:l,onChange:a,"aria-labelledby":"tip-choices"}),t(x,{label:"Number of People",minValue:1,formatOptions:{maximumFractionDigits:0},value:r,onChange:o,children:t("svg",{className:"w-3.5 h-auto",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 13 16",children:t("path",{fill:"#9EBBBD",d:"M9.573 7.729c.406 0 .784.07 1.126.209.342.14.639.33.881.569.232.227.438.503.614.82a5.1 5.1 0 01.407.949c.097.312.178.654.242 1.016.062.359.105.699.126 1.011.02.307.031.624.031.945 0 .836-.259 1.512-.768 2.01-.504.492-1.17.742-1.98.742H2.748c-.81 0-1.477-.25-1.98-.742C.259 14.76 0 14.084 0 13.248c0-.322.01-.64.032-.945.02-.312.063-.652.126-1.01.063-.363.144-.705.242-1.017.1-.323.238-.643.407-.948.176-.318.382-.594.613-.821.243-.238.54-.43.882-.57.342-.138.72-.208 1.125-.208.16 0 .313.067.61.265.183.123.397.264.636.421.204.134.48.259.822.372.333.11.671.167 1.005.167a3.19 3.19 0 001.006-.167c.341-.113.618-.238.822-.372l.636-.42c.296-.2.45-.266.61-.266zM6.598 0C7.63 0 8.522.38 9.252 1.129s1.1 1.666 1.1 2.724c0 1.06-.37 1.976-1.1 2.725-.73.75-1.623 1.13-2.654 1.13-1.03 0-1.924-.38-2.653-1.13-.73-.749-1.1-1.666-1.1-2.725 0-1.058.37-1.975 1.1-2.724C4.675.379 5.567 0 6.598 0z"})})})]})}function A(e){let{children:l}=e;const r=u.exports.useRef();let{buttonProps:s,isPressed:a}=H(i(c({},e),{elementType:"button"}),r),o=" ";return e.isDisabled?o+="bg-[#0D686D] text-very-dark-cyan":a?o+="bg-light-grayish-cyan text-strong-cyan":o+="bg-strong-cyan text-very-dark-cyan",t("button",i(c({className:`block w-full rounded-md text-center p-2 text-xl uppercase font-bold transition-colors dialog:mt-auto select-none${o}`},s),{ref:r,children:l}))}function E({bill:e,tip:l,people:r,resetForm:s}){const a=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}),o=e*l/r,n=(e*l+e)/r;return d("div",{className:"w-full h-auto px-6 pt-10 pb-6 bg-very-dark-cyan rounded-[0.875rem] dialog:flex dialog:flex-col dialog:justify-start dialog:items-start dialog:ml-4 dialog:px-10 dialog:pb-10 dialog:pt-14",children:[d("div",{className:"flex flex-col w-full h-auto mb-6 2xs:flex-row 2xs:justify-between 2xs:items-center",children:[d("div",{className:"flex flex-col justify-center items-center w-full h-auto mb-2 2xs:mb-0 2xs:justify-start 2xs:items-start",children:[t("h3",{className:"text-white text-base font-bold mb-0.5",children:"Tip Amount"}),t("p",{className:"text-dark-grayish-cyan-alt text-[0.8125rem] font-bold",children:"/ person"})]}),t("p",{className:"text-strong-cyan text-center text-[2rem] font-bold 2xs:text-right sm:text-[2.875rem]",children:a.format(o)})]}),d("div",{className:"flex flex-col w-full h-auto mb-8 2xs:flex-row 2xs:justify-between 2xs:items-center",children:[d("div",{className:"flex flex-col justify-center items-center w-full h-auto mb-2 2xs:mb-0 2xs:justify-start 2xs:items-start",children:[t("h3",{className:"text-white text-base font-bold mb-0.5",children:"Total"}),t("p",{className:"text-dark-grayish-cyan-alt text-[0.8125rem] font-bold",children:"/ person"})]}),t("p",{className:"text-strong-cyan text-center text-[2rem] font-bold 2xs:text-right sm:text-[2.875rem]",children:a.format(n)})]}),t(A,{isDisabled:e===0,onPress:s,children:"reset"})]})}function T(){const[e,l]=u.exports.useState(0),[r,s]=u.exports.useState(0),[a,o]=u.exports.useState(1);function n(){e>0&&l(0),r>0&&s(0),a>1&&o(1)}return d("main",{className:"w-full min-h-dialog max-w-dialog mx-auto bg-white rounded-t-3xl px-8 py-9 dialog:min-h-0 dialog:rounded-3xl dialog:flex dialog:flex-row dialog:pl-12 dialog:pb-8 dialog:pr-8 dialog:pt-8",children:[t(L,{bill:e,tip:r,people:a,setBill:l,setTip:s,setPeople:o}),t(E,{bill:e,tip:r,people:a,resetForm:n})]})}function G(){return d("div",{className:"relative w-full min-h-screen bg-light-grayish-cyan pt-36 dialog:pt-80 dialog:pb-60",children:[t("header",{className:"absolute top-0 left-0 flex items-start w-full h-36 dialog:h-80",children:t("a",{className:"w-auto h-auto m-auto dialog:mx-auto dialog:my-0 dialog:mt-40",href:"#",children:t("svg",{className:"w-auto h-14",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 87 54",children:t("path",{fill:"#3D6666",d:"M6.72 17.472c.944 0 1.792-.12 2.544-.36s1.392-.584 1.92-1.032a4.476 4.476 0 001.212-1.62c.28-.632.42-1.34.42-2.124v-.288c0-1.472-.464-2.584-1.392-3.336-.928-.752-2.272-1.288-4.032-1.608a14.615 14.615 0 01-1.74-.408c-.456-.144-.824-.308-1.104-.492-.28-.184-.476-.392-.588-.624a1.771 1.771 0 01-.168-.78c0-.56.232-1.004.696-1.332.464-.328 1.096-.492 1.896-.492.944 0 1.676.248 2.196.744.52.496.78 1.08.78 1.752v.576h3.168v-.864a5 5 0 00-.396-1.968 4.762 4.762 0 00-1.176-1.656C10.436 1.08 9.792.7 9.024.42 8.256.14 7.376 0 6.384 0c-.88 0-1.676.12-2.388.36s-1.32.576-1.824 1.008c-.504.432-.896.94-1.176 1.524-.28.584-.42 1.22-.42 1.908v.144c0 .832.144 1.536.432 2.112a3.978 3.978 0 001.212 1.44c.52.384 1.132.692 1.836.924.704.232 1.48.42 2.328.564.64.112 1.168.248 1.584.408.416.16.744.34.984.54s.408.424.504.672c.096.248.144.508.144.78 0 .576-.232 1.072-.696 1.488-.464.416-1.176.624-2.136.624-1.232 0-2.14-.3-2.724-.9-.584-.6-.876-1.404-.876-2.412v-.576H0v.72c0 .88.144 1.692.432 2.436a5.47 5.47 0 001.272 1.944c.56.552 1.26.984 2.1 1.296.84.312 1.812.468 2.916.468zm22-.336V10.8h3.408c.864 0 1.616-.144 2.256-.432a4.707 4.707 0 001.596-1.14 4.833 4.833 0 00.96-1.608c.216-.6.324-1.212.324-1.836v-.576c0-.608-.108-1.204-.324-1.788a4.625 4.625 0 00-.96-1.56A4.737 4.737 0 0034.384.756c-.64-.28-1.392-.42-2.256-.42h-6.576v16.8h3.168zm3.096-9.36H28.72V3.36h3.096c.704 0 1.26.192 1.668.576.408.384.612.88.612 1.488v.288c0 .608-.204 1.104-.612 1.488-.408.384-.964.576-1.668.576zm29.464 9.36v-3.024h-7.632V.336H50.48v16.8h10.8zm24.88 0v-3.024h-4.032V3.36h4.032V.336H74.928V3.36h4.032v10.752h-4.032v3.024H86.16zm-78.096 36V39.36h4.464v-3.024H.432v3.024h4.464v13.776h3.168zm24.688 0V39.36h4.464v-3.024H25.12v3.024h4.464v13.776h3.168zm28.624 0v-3.024h-7.728v-3.888H60.8V43.2h-7.152v-3.84h7.44v-3.024H50.48v16.8h10.896zm16.744 0V46.8h3.648c.464 0 .796.12.996.36.2.24.3.552.3.936v5.04h3.168v-5.808c0-.56-.164-1.024-.492-1.392-.328-.368-.772-.584-1.332-.648v-.432c.768-.32 1.336-.78 1.704-1.38a3.63 3.63 0 00.552-1.932v-.576c0-.64-.116-1.24-.348-1.8a4.332 4.332 0 00-1.008-1.476c-.44-.424-.988-.756-1.644-.996-.656-.24-1.416-.36-2.28-.36h-6.432v16.8h3.168zm3.024-9.36H78.12V39.36h3.024c.768 0 1.352.204 1.752.612.4.408.6.892.6 1.452v.288c0 .656-.2 1.164-.6 1.524-.4.36-.984.54-1.752.54z"})})})}),t(T,{})]})}C.render(t(S.StrictMode,{children:t(G,{})}),document.getElementById("root"));
