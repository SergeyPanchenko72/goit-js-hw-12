import{a as p,i as w,S as M}from"./assets/vendor-483db976.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=o(t);fetch(t.href,r)}})();async function y(a,e){const o="42458903-cbb27ce669d5c06b9309f1f84";p.defaults.baseURL="https://pixabay.com/api/";const{data:i}=await p.get("",{params:{page:a,per_page:15,key:o,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}});return i}const $="/goit-js-hw-12/assets/error-97f7a778.svg";function h(a,e){const o=a.map(({webformatURL:i,largeImageURL:t,tags:r,likes:n,views:v,comments:S,downloads:q})=>`<li class="gallery-item">
        <a href="${t}"><img class="gallery-image" src="${i}" alt="${r}" /></a>
        <ul class="parameters">
          <li class="parameter-list">
            <p class="img-parameter">Likes</p>
            <p class="img-parameter-quantity">${n}</p>
          </li>
          <li class="parameter-list">
            <p class="img-parameter">Views</p>
            <p class="img-parameter-quantity">${v}</p>
          </li>
          <li class="parameter-list">
            <p class="img-parameter">Comments</p>
            <p class="img-parameter-quantity">${S}</p>
          </li>
          <li class="parameter-list">
            <p class="img-parameter">Downloads</p>
            <p class="img-parameter-quantity">${q}</p>
          </li>
        </ul>
      </li>`).join("");e.insertAdjacentHTML("beforeend",o)}function u(a,e){w.error({iconUrl:$,messageColor:"#ffffff",message:a,backgroundColor:e,position:"topRight",messageSize:16,layout:2,maxWidth:380,theme:"dark"})}const E=document.querySelector(".form"),f=document.querySelector("input"),c=document.querySelector(".form-load"),m=document.querySelector(".gallery"),l=document.querySelector(".load-more"),g=document.querySelector(".loading-more"),L=new M(".gallery a",{captionsData:"alt",captionDelay:250});let s,d,b;l.classList.add("hidden");E.addEventListener("submit",O);async function O(a){if(a.preventDefault(),s=1,d=f.value.trim(),f.value="",d!==""){c.innerHTML=null,c.classList.add("loader");try{m.innerHTML=null;const e=await y(s,d);if(e.total===0){u("Sorry, there are no images matching your search query. Please try again!","#EF4040"),c.classList.remove("loader"),l.classList.add("hidden");return}h(e.hits,m),c.classList.remove("loader"),l.classList.remove("hidden"),L.refresh(),e.totalHits/15<=s&&(l.classList.add("hidden"),u("We're sorry, but you've reached the end of search results.","blue")),b=document.querySelector(".gallery-item").getBoundingClientRect().height*2+48}catch(e){console.log(e)}}}l.addEventListener("click",P);async function P(a){s+=1,g.classList.add("loader");try{const e=await y(s,d);(e.totalHits/15<=s||s*15>=500)&&(l.classList.add("hidden"),u("We're sorry, but you've reached the end of search results.","blue")),h(e.hits,m),window.scrollBy({top:b,behavior:"smooth"}),L.refresh(),g.classList.remove("loader")}catch(e){console.log(e)}}
//# sourceMappingURL=commonHelpers.js.map
