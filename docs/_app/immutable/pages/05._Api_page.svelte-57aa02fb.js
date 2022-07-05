import{S as F,i as J,s as K,k as v,e as n,t as P,K as N,d as s,m as _,c as r,a as f,h as q,b as d,f as O,g as b,J as o,n as H,w as Q}from"../chunks/index-22e9cf07.js";let C,G,R,j;async function U(){R=document.getElementById("breed"),j=document.getElementById("slideshow");try{const i=await(await fetch("https://dog.ceo/api/breeds/list/all")).json();W(i.message)}catch(a){console.log(a),console.log("There was a problem fetching the breed list.")}}function W(a){const e=document.createElement("select");e.addEventListener("change",()=>{X(e.value).then(()=>{})}),e.innerHTML=`
        <option>Choose a dog breed</option>
        ${Object.keys(a).map(i=>`<option>${i}</option>`).join("")}
    `,R.append(e)}async function X(a){if(a!=="Choose a dog breed"){let e=`https://dog.ceo/api/breed/${a}/images`;const c=await(await fetch(e)).json();Y(c.message)}}function Y(a){let e=0;clearInterval(C),clearTimeout(G),a.length>1?(j.innerHTML=`
        <div class="slide" style="background-image: url('${a[0]}')"></div>
        <div class="slide" style="background-image: url('${a[1]}')"></div>
        `,e+=2,a.length===2&&(e=0),C=setInterval(i,3e3)):j.innerHTML=`
        <div class="slide" style="background-image: url('${a[0]}')"></div>
        <div class="slide"></div>
        `;function i(){j.insertAdjacentHTML("beforeend",`<div class="slide" style="background-image: url('${a[e]}')"></div>`),G=setTimeout(()=>{document.querySelector(".slide").remove()},1e3),e+1>=a.length?e=0:e++}}function Z(a){let e,i,c,A,k,y,E,l,p,x,$,D,w,L,T,V,h,m;return{c(){e=v(),i=n("nav"),c=n("a"),A=P("To the main page"),k=v(),y=n("hr"),E=v(),l=n("div"),p=n("div"),x=n("h2"),$=P("Dog photos"),D=v(),w=n("div"),L=v(),T=n("hr"),V=v(),h=n("div"),m=n("div"),this.h()},l(t){N('[data-svelte="svelte-1nweo3n"]',document.head).forEach(s),e=_(t),i=r(t,"NAV",{});var z=f(i);c=r(z,"A",{href:!0});var B=f(c);A=q(B,"To the main page"),B.forEach(s),z.forEach(s),k=_(t),y=r(t,"HR",{class:!0}),E=_(t),l=r(t,"DIV",{class:!0});var g=f(l);p=r(g,"DIV",{class:!0});var I=f(p);x=r(I,"H2",{});var M=f(x);$=q(M,"Dog photos"),M.forEach(s),D=_(I),w=r(I,"DIV",{id:!0}),f(w).forEach(s),I.forEach(s),L=_(g),T=r(g,"HR",{class:!0}),V=_(g),h=r(g,"DIV",{class:!0,id:!0});var S=f(h);m=r(S,"DIV",{class:!0,style:!0}),f(m).forEach(s),S.forEach(s),g.forEach(s),this.h()},h(){document.title="API images",d(c,"href","/"),d(y,"class","upper svelte-918fbi"),d(w,"id","breed"),d(p,"class","header"),d(T,"class","lower svelte-918fbi"),d(m,"class","slide"),O(m,"background-image","url('https://images.dog.ceo/breeds/chihuahua/n02085620_11258.jpg')"),d(h,"class","slideshow"),d(h,"id","slideshow"),d(l,"class","app")},m(t,u){b(t,e,u),b(t,i,u),o(i,c),o(c,A),b(t,k,u),b(t,y,u),b(t,E,u),b(t,l,u),o(l,p),o(p,x),o(x,$),o(p,D),o(p,w),o(l,L),o(l,T),o(l,V),o(l,h),o(h,m)},p:H,i:H,o:H,d(t){t&&s(e),t&&s(i),t&&s(k),t&&s(y),t&&s(E),t&&s(l)}}}function ee(a){return Q(U),[]}class ae extends F{constructor(e){super(),J(this,e,ee,Z,K,{})}}export{ae as default};
