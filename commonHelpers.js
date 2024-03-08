import{a as u,S as L,i as b}from"./assets/vendor-5401a4b0.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=o(e);fetch(e.href,r)}})();async function f(a,t){const o="42458903-cbb27ce669d5c06b9309f1f84";u.defaults.baseURL="https://pixabay.com/api/";const{data:s}=await u.get("",{params:{page:a,per_page:15,key:o,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}});return s}function d(a,t){c.classList.remove("loader");const o=a.map(({webformatURL:s,largeImageURL:e,tags:r,likes:i,views:g,comments:y,downloads:h})=>`<li class="gallery-item">
        <a href="${e}"><img class="gallery-image" src="${s}" alt="${r}" /></a>
        <ul class="parameters">
          <li class="parameter-list">
            <p class="img-parameter">Likes</p>
            <p class="img-parameter-quantity">${i}</p>
          </li>
          <li class="parameter-list">
            <p class="img-parameter">Views</p>
            <p class="img-parameter-quantity">${g}</p>
          </li>
          <li class="parameter-list">
            <p class="img-parameter">Comments</p>
            <p class="img-parameter-quantity">${y}</p>
          </li>
          <li class="parameter-list">
            <p class="img-parameter">Downloads</p>
            <p class="img-parameter-quantity">${h}</p>
          </li>
        </ul>
      </li>`).join("");t.insertAdjacentHTML("beforeend",o)}function S(){m.innerHTML=null}const q="/goit-js-hw-12/assets/error-97f7a778.svg",v=document.querySelector(".form"),p=document.querySelector("input"),c=document.querySelector(".form-load"),m=document.querySelector(".gallery"),w=document.querySelector(".load-more"),P=new L(".gallery a",{captionsData:"alt",captionDelay:250});let l=1,n;v.addEventListener("submit",$);async function $(a){if(a.preventDefault(),n=p.value.trim(),n!==""){c.innerHTML=null,c.classList.add("loader");try{S();const t=await f(l,n);t.total===0&&b.error({iconUrl:q,messageColor:"#ffffff",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",messageSize:16,layout:2,maxWidth:380,theme:"dark"}),d(t.hits,m),P.refresh()}catch(t){console.log(t)}p.value=""}}w.addEventListener("click",E);async function E(a){l+=1,console.log(l);try{const t=await f(l,n);d(t.hits,m)}catch(t){console.log(t)}}
//# sourceMappingURL=commonHelpers.js.map
