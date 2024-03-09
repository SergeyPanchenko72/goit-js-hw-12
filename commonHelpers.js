import{a as u,S as $,i as g}from"./assets/vendor-5401a4b0.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&o(l)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();async function y(a,e){const s="42458903-cbb27ce669d5c06b9309f1f84";u.defaults.baseURL="https://pixabay.com/api/";const{data:o}=await u.get("",{params:{page:a,per_page:15,key:s,q:e,image_type:"photo",orientation:"horizontal",safesearch:!0}});return o}function h(a,e){const s=a.map(({webformatURL:o,largeImageURL:t,tags:r,likes:l,views:v,comments:q,downloads:w})=>`<li class="gallery-item">
        <a href="${t}"><img class="gallery-image" src="${o}" alt="${r}" /></a>
        <ul class="parameters">
          <li class="parameter-list">
            <p class="img-parameter">Likes</p>
            <p class="img-parameter-quantity">${l}</p>
          </li>
          <li class="parameter-list">
            <p class="img-parameter">Views</p>
            <p class="img-parameter-quantity">${v}</p>
          </li>
          <li class="parameter-list">
            <p class="img-parameter">Comments</p>
            <p class="img-parameter-quantity">${q}</p>
          </li>
          <li class="parameter-list">
            <p class="img-parameter">Downloads</p>
            <p class="img-parameter-quantity">${w}</p>
          </li>
        </ul>
      </li>`).join("");e.insertAdjacentHTML("beforeend",s)}const L="/goit-js-hw-12/assets/error-97f7a778.svg",x=document.querySelector(".form"),p=document.querySelector("input"),c=document.querySelector(".form-load"),d=document.querySelector(".gallery"),n=document.querySelector(".load-more"),f=document.querySelector(".loading-more"),b=new $(".gallery a",{captionsData:"alt",captionDelay:250});let i,m,S;n.classList.add("hidden");x.addEventListener("submit",C);async function C(a){if(a.preventDefault(),i=1,m=p.value.trim(),m!==""){c.innerHTML=null,c.classList.add("loader");try{d.innerHTML=null;const e=await y(i,m);if(e.total===0){g.error({iconUrl:L,messageColor:"#ffffff",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",messageSize:16,layout:2,maxWidth:380,theme:"dark"}),c.classList.remove("loader"),n.classList.add("hidden");return}h(e.hits,d),c.classList.remove("loader"),n.classList.remove("hidden"),b.refresh(),S=document.querySelector(".gallery-item").getBoundingClientRect().height*2+48}catch(e){console.log(e)}p.value=""}}n.addEventListener("click",E);async function E(a){i+=1,f.classList.add("loader");try{const e=await y(i,m);(e.totalHits/15<=i||i*15>=500)&&(n.classList.add("hidden"),g.error({iconUrl:L,messageColor:"#ffffff",message:"We're sorry, but you've reached the end of search results.",backgroundColor:"blue",position:"topRight",messageSize:16,layout:2,maxWidth:380,theme:"dark"})),h(e.hits,d),window.scrollBy({top:S,behavior:"smooth"}),b.refresh(),f.classList.remove("loader")}catch(e){console.log(e)}}
//# sourceMappingURL=commonHelpers.js.map
