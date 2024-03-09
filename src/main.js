import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { getsGalleryImg } from './js/pixabay-api';
import { galleryElements, getInformMessage } from './js/render-functions';
// import cross from './img/error.svg';

const formSearch = document.querySelector('.form');
const inputSearch = document.querySelector('input');
const loaderForm = document.querySelector('.form-load');
const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');
const loadingMore = document.querySelector('.loading-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

let pageNumber;
let inputValue;
let scrollValue;

loadMoreBtn.classList.add('hidden');
formSearch.addEventListener('submit', onformSearchSubmit);

async function onformSearchSubmit(event) {
  event.preventDefault();
  pageNumber = 1;
  inputValue = inputSearch.value.trim();
  inputSearch.value = '';
  if (inputValue === '') {
    return;
  }
  loaderForm.innerHTML = null;
  loaderForm.classList.add('loader');
  try {
    gallery.innerHTML = null;
    const data = await getsGalleryImg(pageNumber, inputValue);

    if (data.total === 0) {
      getInformMessage(
        'Sorry, there are no images matching your search query. Please try again!',
        '#EF4040'
      );

      loaderForm.classList.remove('loader');
      loadMoreBtn.classList.add('hidden');
      return;
    }

    galleryElements(data.hits, gallery);
    loaderForm.classList.remove('loader');
    loadMoreBtn.classList.remove('hidden');
    lightbox.refresh();
    const cart = document.querySelector('.gallery-item');
    scrollValue = cart.getBoundingClientRect().height * 2 + 48;
  } catch (error) {
    console.log(error);
  }
}

loadMoreBtn.addEventListener('click', onLoadingImg);

async function onLoadingImg(event) {
  pageNumber += 1;
  loadingMore.classList.add('loader');
  try {
    const data = await getsGalleryImg(pageNumber, inputValue);

    if (data.totalHits / 15 <= pageNumber || pageNumber * 15 >= 500) {
      loadMoreBtn.classList.add('hidden');
      getInformMessage(
        "We're sorry, but you've reached the end of search results.",
        'blue'
      );
    }

    galleryElements(data.hits, gallery);
    window.scrollBy({
      top: scrollValue,
      behavior: 'smooth',
    });
    lightbox.refresh();
    loadingMore.classList.remove('loader');
  } catch (error) {
    console.log(error);
  }
}
