import { fetchData, page, searchParams } from "./fetchData"
import { renderMarkup } from "./renderMarkup"
import Notiflix from "notiflix"

let page = 1;
// const button = document.querySelector(".button")
// const input = document.querySelector(".input")
const form = document.querySelector(".search-form")
const buttonLoadMore = document.querySelector(".button_load-more")
const gallery = document.querySelector(".gallery")

let request;
let markup;
let toRender;

form.addEventListener("submit", onSubmit)
form.addEventListener("input", onInput)
buttonLoadMore.addEventListener("click", onLoadMore)

function onInput(event) {
    request = event.target.value;
    return request;
}

async function onSubmit (event) {
 
  event.preventDefault();
  resetPage()
   const response = await fetchData(request, page)
   console.log(response);
   let fetching = await response.data.hits
   console.log(fetching)
    if(fetching.length === 0) {
      Notiflix.Notify.failure("Sorry, there are no images matching your search query. Please try again."); 
    }
    toRender = await fetching
    renderMarkup(toRender)
    buttonLoadMore.classList.remove("is-hidden")
    if(fetching.length < 40) {
      buttonLoadMore.classList.add("is-hidden")
    }
}
function resetPage() {
  page = 1
  gallery.innerHTML = ""
}

async function onLoadMore () {

  const preparingForAdditionalFetch = await fetchData(request, page)
  console.log(preparingForAdditionalFetch)
  const additionalFetch = await preparingForAdditionalFetch.data.hits
  if(additionalFetch.length < 40) {
    buttonLoadMore.classList.add("is-hidden")
    Notiflix.Notify.info("We're sorry, but you've reached the end of search results.");
  }
  console.log(additionalFetch)
  renderMarkup(additionalFetch)
  page += 1 
}

export {gallery, page}
