import axios from "axios";
import Notiflix from 'notiflix';
import { pages } from "./infiniteScroll";

const BASE_URL = "https://pixabay.com/api/"
const USER_KEY = "31138413-9963ca1c42c5ab8454e713dbb"
const searchParams = new URLSearchParams({
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: 40,
  });

async function fetchData(keyWord, page) {
try {
    const response = await axios.get(`${BASE_URL}?key=${USER_KEY}&q=${keyWord}&${searchParams}&page=${page}`);
    return response
}catch(error) {
    console.log(error)
}
}


export {fetchData, BASE_URL , USER_KEY, searchParams}