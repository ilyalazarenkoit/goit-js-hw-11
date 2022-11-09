import { gallery } from "./loadMore";

let markup;
function renderMarkup(array) {
    markup = array.map(item => {
    return `<a class="gallery__item" href=${item.largeImageURL} ><div class="photo-card">
    <img class="image"src=${item.webformatURL} alt="${item.tags}" loading="lazy" />
    <div class="info">
      <p class="info-item">
        <b>Likes</b>
        ${item.likes}
      </p>
      <p class="info-item">
        <b>Views</b>
        ${item.views}
      </p>
      <p class="info-item">
        <b>Comments</b>
        ${item.comments}
      </p>
      <p class="info-item">
        <b>Downloads</b>
        ${item.downloads}
      </p>
    </div>
    </div>
    </a>`
     }).join('')
     gallery.innerHTML += markup;
    }
    
export {renderMarkup}