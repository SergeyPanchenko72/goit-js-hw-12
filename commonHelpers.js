import{a as c,S as f,i as d}from"./assets/vendor-5401a4b0.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();async function g(s,r){const a="42458903-cbb27ce669d5c06b9309f1f84";c.defaults.baseURL="https://pixabay.com/api/";const{data:o}=await c.get("",{params:{page:s,per_page:5,key:a,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0}});return o}function y(s,r){l.classList.remove("loader");const a=s.map(({webformatURL:o,largeImageURL:e,tags:t,likes:i,views:m,comments:p,downloads:u})=>`<li class="gallery-item">
        <a href="${e}"><img class="gallery-image" src="${o}" alt="${t}" /></a>
        <ul class="parameters">
          <li class="parameter-list">
            <p class="img-parameter">Likes</p>
            <p class="img-parameter-quantity">${i}</p>
          </li>
          <li class="parameter-list">
            <p class="img-parameter">Views</p>
            <p class="img-parameter-quantity">${m}</p>
          </li>
          <li class="parameter-list">
            <p class="img-parameter">Comments</p>
            <p class="img-parameter-quantity">${p}</p>
          </li>
          <li class="parameter-list">
            <p class="img-parameter">Downloads</p>
            <p class="img-parameter-quantity">${u}</p>
          </li>
        </ul>
      </li>`).join("");r.insertAdjacentHTML("beforeend",a)}const h="/goit-js-hw-12/assets/error-97f7a778.svg",b=document.querySelector(".form"),n=document.querySelector("input"),l=document.querySelector(".form-load"),L=document.querySelector(".gallery"),S=new f(".gallery a",{captionsData:"alt",captionDelay:250});let q=1;b.addEventListener("submit",v);async function v(s){s.preventDefault();const r=n.value.trim();if(r!==""){l.innerHTML=null,l.classList.add("loader");try{const a=await g(q,r);a.total===0&&d.error({iconUrl:h,messageColor:"#ffffff",message:"Sorry, there are no images matching your search query. Please try again!",backgroundColor:"#EF4040",position:"topRight",messageSize:16,layout:2,maxWidth:380,theme:"dark"}),y(a.hits,L),S.refresh()}catch(a){console.log(a)}n.value=""}}
//# sourceMappingURL=commonHelpers.js.map
