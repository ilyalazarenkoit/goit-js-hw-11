!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},a={},r=n.parcelRequired7c6;null==r&&((r=function(e){if(e in t)return t[e].exports;if(e in a){var n=a[e];delete a[e];var r={id:e,exports:{}};return t[e]=r,n.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){a[e]=n},n.parcelRequired7c6=r);var o=r("bpxeT"),c=r("2TvXO"),i=(o=r("bpxeT"),c=r("2TvXO"),r("dIxxU"));r("iU1Pc");var s,l="https://pixabay.com/api/",u="31138413-9963ca1c42c5ab8454e713dbb",p=new URLSearchParams({image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:40});function f(e,n){return d.apply(this,arguments)}function d(){return(d=e(o)(e(c).mark((function n(t,a){var r;return e(c).wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.default.get("".concat(l,"?key=").concat(u,"&q=").concat(t,"&").concat(p,"&page=").concat(a));case 3:return r=e.sent,e.abrupt("return",r);case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}function h(e){s=e.map((function(e){return'<a class="gallery__item" href='.concat(e.largeImageURL,' ><div class="photo-card">\n    <img class="image"src=').concat(e.webformatURL,' alt="').concat(e.tags,'" loading="lazy" />\n    <div class="info">\n      <p class="info-item">\n        <b>Likes</b>\n        ').concat(e.likes,'\n      </p>\n      <p class="info-item">\n        <b>Views</b>\n        ').concat(e.views,'\n      </p>\n      <p class="info-item">\n        <b>Comments</b>\n        ').concat(e.comments,'\n      </p>\n      <p class="info-item">\n        <b>Downloads</b>\n        ').concat(e.downloads,"\n      </p>\n    </div>\n    </div>\n    </a>")})).join(""),v.innerHTML+=s}var g,y=r("iU1Pc"),m=r("5IjG7"),v=document.querySelector(".gallery"),w=document.querySelector(".search-form"),b=1;function x(){return(x=e(o)(e(c).mark((function n(t){var a,r;return e(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return g=t.currentTarget.searchQuery.value,t.preventDefault(),T(),n.next=5,f(g,b);case 5:return a=n.sent,console.log(a),n.next=9,a.data.hits;case 9:r=n.sent,console.log(r),0===r.length&&e(y).Notify.failure("Sorry, there are no images matching your search query. Please try again."),h(r),r.length>1&&e(y).Notify.success("Hooray! We found ".concat(a.data.totalHits," images.")),new(e(m))(".gallery a",{captionsData:"alt",captionDelay:250});case 15:case"end":return n.stop()}}),n)})))).apply(this,arguments)}function T(){b=1,v.innerHTML=""}function L(e){return++e}function D(){return(D=e(o)(e(c).mark((function n(){var t,a,r,o,i;return e(c).wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=L(b),n.next=3,f(g,t);case 3:return a=n.sent,console.log(a),n.next=7,a.data.hits;case 7:(r=n.sent).length<40&&e(y).Notify.info("We're sorry, but you've reached the end of search results."),console.log(r),h(r),b++,new(e(m))(".gallery a",{captionsData:"alt",captionDelay:250}),o=document.querySelector(".gallery").firstElementChild.getBoundingClientRect(),i=o.height,window.scrollBy({top:2*i,behavior:"smooth"});case 15:case"end":return n.stop()}}),n)})))).apply(this,arguments)}w.addEventListener("submit",(function(e){return x.apply(this,arguments)})),window.addEventListener("scroll",(function(){window.innerHeight+window.pageYOffset>=document.body.offsetHeight&&function(){D.apply(this,arguments)}()}))}();
//# sourceMappingURL=infiniteScroll.d25bfeb2.js.map
