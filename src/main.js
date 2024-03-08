import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

import { getsGalleryImg } from './js/pixabay-api';
import { galleryElements } from './js/render-functions';
import { resetPage } from './js/render-functions';
import cross from './img/error.svg';

const formSearch = document.querySelector('.form');
const inputSearch = document.querySelector('input');
export const loaderForm = document.querySelector('.form-load');
export const gallery = document.querySelector('.gallery');
const loadMoreBtn = document.querySelector('.load-more');

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
let pageNumber = 1;
let inputValue;
formSearch.addEventListener('submit', onformSearchSubmit);

async function onformSearchSubmit(event) {
  event.preventDefault();
  inputValue = inputSearch.value.trim();
  if (inputValue === '') {
    return;
  }
  loaderForm.innerHTML = null;
  loaderForm.classList.add('loader');
  try {
    resetPage();
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
    }
    galleryElements(data.hits, gallery);

    lightbox.refresh();
  } catch (error) {
    console.log(error);
  }
  inputSearch.value = '';
}

loadMoreBtn.addEventListener('click', onLoadingImg);

async function onLoadingImg(event) {
  pageNumber += 1;
  console.log(pageNumber);
  try {
    const data = await getsGalleryImg(pageNumber, inputValue);
    galleryElements(data.hits, gallery);
  } catch (error) {
    console.log(error);
  }
}
