import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getsGalleryImg } from './js/pixabay-api';
import { galleryElements } from './js/render-functions';
import cross from './img/error.svg';

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
  if (inputValue === '') {
    return;
  }
  loaderForm.innerHTML = null;
  loaderForm.classList.add('loader');
  try {
    gallery.innerHTML = null;
    const data = await getsGalleryImg(pageNumber, inputValue);

    if (data.total === 0) {
      iziToast.error({
        iconUrl: cross,
        messageColor: '#ffffff',
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        backgroundColor: '#EF4040',
        position: 'topRight',
        messageSize: 16,
        layout: 2,
        maxWidth: 380,
        theme: 'dark',
      });
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
  inputSearch.value = '';
}

loadMoreBtn.addEventListener('click', onLoadingImg);

async function onLoadingImg(event) {
  pageNumber += 1;
  loadingMore.classList.add('loader');
  try {
    const data = await getsGalleryImg(pageNumber, inputValue);
    // console.log(pageNumber);
    // console.log(data.totalHits);
    // console.log(data.totalHits / 15);
    if (data.totalHits / 15 <= pageNumber || pageNumber * 15 >= 500) {
      loadMoreBtn.classList.add('hidden');
      iziToast.error({
        iconUrl: cross,
        messageColor: '#ffffff',
        message: "We're sorry, but you've reached the end of search results.",
        backgroundColor: 'blue',
        position: 'topRight',
        messageSize: 16,
        layout: 2,
        maxWidth: 380,
        theme: 'dark',
      });
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
