function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},a={},t={},o=n.parcelRequired7c6;null==o&&((o=function(e){if(e in a)return a[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return a[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){t[e]=n},n.parcelRequired7c6=o);var i=o("2shzp");o("eWCmQ");const r=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40});async function l(e,n){try{return await i.default.get(`https://pixabay.com/api/?key=31138413-9963ca1c42c5ab8454e713dbb&q=${e}&${r}&page=${n}`)}catch(e){console.log(e)}}function s(e){markup=e.map((e=>`<a class="gallery__item" href=${e.largeImageURL} ><div class="photo-card">\n    <img class="image"src=${e.webformatURL} alt="${e.tags}" loading="lazy" />\n    <div class="info">\n      <p class="info-item">\n        <b>Likes</b>\n        ${e.likes}\n      </p>\n      <p class="info-item">\n        <b>Views</b>\n        ${e.views}\n      </p>\n      <p class="info-item">\n        <b>Comments</b>\n        ${e.comments}\n      </p>\n      <p class="info-item">\n        <b>Downloads</b>\n        ${e.downloads}\n      </p>\n    </div>\n    </div>\n    </a>`)).join(""),f.innerHTML+=markup}var c=o("eWCmQ"),d=o("fZKcF");const f=document.querySelector(".gallery"),u=document.querySelector(".search-form");let g,p=1;u.addEventListener("submit",(async function(n){g=n.currentTarget.searchQuery.value,n.preventDefault(),p=1,f.innerHTML="";const a=await l(g,p);console.log(a);let t=await a.data.hits;console.log(t),0===t.length&&e(c).Notify.failure("Sorry, there are no images matching your search query. Please try again.");s(t),t.length>1&&e(c).Notify.success(`Hooray! We found ${a.data.totalHits} images.`);new(e(d))(".gallery a",{captionsData:"alt",captionDelay:250})})),window.addEventListener("scroll",(()=>{window.innerHeight+window.pageYOffset>=document.body.offsetHeight&&async function(){let n=(a=p,++a);var a;const t=await l(g,n);console.log(t);const o=await t.data.hits;o.length<40&&e(c).Notify.info("We're sorry, but you've reached the end of search results.");console.log(o),s(o),p++;new(e(d))(".gallery a",{captionsData:"alt",captionDelay:250});const{height:i}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:2*i,behavior:"smooth"})}()}));
//# sourceMappingURL=infiniteScroll.6dbdb0ab.js.map