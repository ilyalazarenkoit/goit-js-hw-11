function e(e){return e&&e.__esModule?e.default:e}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},o=a.parcelRequired7c6;null==o&&((o=function(e){if(e in n)return n[e].exports;if(e in t){var a=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,a.call(o.exports,o,o.exports),o.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,a){t[e]=a},a.parcelRequired7c6=o);var i=o("2shzp");o("eWCmQ");const s=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40});async function r(e,a){try{return await i.default.get(`https://pixabay.com/api/?key=31138413-9963ca1c42c5ab8454e713dbb&q=${e}&${s}&page=${a}`)}catch(e){console.log(e)}}let l;function c(e){l=e.map((e=>`<a class="gallery__item" href=${e.largeImageURL} ><div class="photo-card">\n    <img class="image"src=${e.webformatURL} alt="${e.tags}" loading="lazy" />\n    <div class="info">\n      <p class="info-item">\n        <b>Likes</b>\n        ${e.likes}\n      </p>\n      <p class="info-item">\n        <b>Views</b>\n        ${e.views}\n      </p>\n      <p class="info-item">\n        <b>Comments</b>\n        ${e.comments}\n      </p>\n      <p class="info-item">\n        <b>Downloads</b>\n        ${e.downloads}\n      </p>\n    </div>\n    </div>\n    </a>`)).join(""),g.innerHTML+=l}var d=o("eWCmQ"),u=o("fZKcF");const f=document.querySelector(".search-form"),p=document.querySelector(".button_load-more"),g=document.querySelector(".gallery");let y,m=1;f.addEventListener("submit",(async function(a){y=a.currentTarget.searchQuery.value,a.preventDefault(),m=1,g.innerHTML="";const n=await r(y,m);console.log(n);let t=await n.data.hits;console.log(t),0===t.length&&e(d).Notify.failure("Sorry, there are no images matching your search query. Please try again.");c(t),p.classList.remove("is-hidden"),t.length<40&&p.classList.add("is-hidden");t.length>1&&e(d).Notify.success(`Hooray! We found ${n.data.totalHits} images.`);new(e(u))(".gallery a",{captionsData:"alt",captionDelay:250})})),p.addEventListener("click",(async function(){let a=(n=m,++n);var n;const t=await r(y,a);console.log(t);const o=await t.data.hits;o.length<40&&(p.classList.add("is-hidden"),e(d).Notify.info("We're sorry, but you've reached the end of search results."));console.log(o),c(o),m++;new(e(u))(".gallery a",{captionsData:"alt",captionDelay:250})}));
//# sourceMappingURL=loadMoreButton.31dbbb33.js.map
