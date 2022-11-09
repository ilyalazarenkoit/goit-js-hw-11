import { fetchData, page, searchParams } from "./fetchData"
import { renderMarkup } from "./renderMarkup"
import Notiflix from "notiflix"
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css"

const form = document.querySelector(".search-form")
const buttonLoadMore = document.querySelector(".button_load-more")
const gallery = document.querySelector(".gallery")

let pages = 1;
let request;

form.addEventListener("submit", onSubmit)
buttonLoadMore.addEventListener("click", onLoadMore)


async function onSubmit (event) {
  request = event.currentTarget.searchQuery.value
   event.preventDefault();
   resetPage()
   const response = await fetchData(request, pages)
   console.log(response);
   let fetching = await response.data.hits
   console.log(fetching)
    if(fetching.length === 0) {
      Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again."); 
    }
    renderMarkup(fetching)
    buttonLoadMore.classList.remove("is-hidden")
    if(fetching.length < 40) {
      buttonLoadMore.classList.add("is-hidden")
    }
    if(fetching.length > 1) {
    Notiflix.Notify.success(`Hooray! We found ${response.data.totalHits} images.`);
  }
  var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    })
}


function resetPage() {
  pages = 1
  gallery.innerHTML = ""
}

function newPage(pages) {
  return ++pages
}

async function onLoadMore () {
  let newPages = newPage(pages)
  const preparingForAdditionalFetch = await fetchData(request, newPages)
  console.log(preparingForAdditionalFetch)
  const additionalFetch = await preparingForAdditionalFetch.data.hits
  if(additionalFetch.length < 40) {
    buttonLoadMore.classList.add("is-hidden")
    Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
  }
  console.log(additionalFetch)
  renderMarkup(additionalFetch)
  pages++ 
  var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    })
}


export {gallery}

