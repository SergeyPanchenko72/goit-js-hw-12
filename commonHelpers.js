import{a as d,i as w,S as M}from"./assets/vendor-483db976.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function g(a,e){const s="42458903-cbb27ce669d5c06b9309f1f84";d.defaults.baseURL="https://pixabay.com/api/";const{data:o}=await d.get("",{params:{page:a,per_page:15,key:s,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}});return o}const $="/goit-js-hw-12/assets/error-97f7a778.svg";function y(a,e){const s=a.map(({webformatURL:o,largeImageURL:t,tags:r,likes:l,views:S,comments:v,downloads:q})=>`<li class="gallery-item">
        <a href="${t}"><img class="gallery-image" src="${o}" alt="${r}" /></a>
        <ul class="parameters">
          <li class="parameter-list">
            <p class="img-parameter">Likes</p>
            <p class="img-parameter-quantity">${l}</p>
          </li>
          <li class="parameter-list">
            <p class="img-parameter">Views</p>
            <p class="img-parameter-quantity">${S}</p>
          </li>
          <li class="parameter-list">
            <p class="img-parameter">Comments</p>
            <p class="img-parameter-quantity">${v}</p>
          </li>
          <li class="parameter-list">
            <p class="img-parameter">Downloads</p>
            <p class="img-parameter-quantity">${q}</p>
          </li>
        </ul>
      </li>`).join("");e.insertAdjacentHTML("beforeend",s)}function h(a,e){w.error({iconUrl:$,messageColor:"#ffffff",message:a,backgroundColor:e,position:"topRight",messageSize:16,layout:2,maxWidth:380,theme:"dark"})}const E=document.querySelector(".form"),p=document.querySelector("input"),c=document.querySelector(".form-load"),u=document.querySelector(".gallery"),n=document.querySelector(".load-more"),f=document.querySelector(".loading-more"),L=new M(".gallery a",{captionsData:"alt",captionDelay:250});let i,m,b;n.classList.add("hidden");E.addEventListener("submit",O);async function O(a){if(a.preventDefault(),i=1,m=p.value.trim(),m!==""){c.innerHTML=null,c.classList.add("loader");try{u.innerHTML=null;const e=await g(i,m);if(e.total===0){h("Sorry, there are no images matching your search query. Please try again!","#EF4040"),c.classList.remove("loader"),n.classList.add("hidden");return}y(e.hits,u),c.classList.remove("loader"),n.classList.remove("hidden"),L.refresh(),b=document.querySelector(".gallery-item").getBoundingClientRect().height*2+48}catch(e){console.log(e)}p.value=""}}n.addEventListener("click",P);async function P(a){i+=1,f.classList.add("loader");try{const e=await g(i,m);(e.totalHits/15<=i||i*15>=500)&&(n.classList.add("hidden"),h("We're sorry, but you've reached the end of search results.","blue")),y(e.hits,u),window.scrollBy({top:b,behavior:"smooth"}),L.refresh(),f.classList.remove("loader")}catch(e){console.log(e)}}
//# sourceMappingURL=commonHelpers.js.map
