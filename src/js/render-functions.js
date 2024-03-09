import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import cross from '../img/error.svg';

export function galleryElements(element, galleryEl) {
  const markup = element
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => {
        return `<li class="gallery-item">
        <a href="${largeImageURL}"><img class="gallery-image" src="${webformatURL}" alt="${tags}" /></a>
        <ul class="parameters">
          <li class="parameter-list">
            <p class="img-parameter">Likes</p>
            <p class="img-parameter-quantity">${likes}</p>
          </li>
          <li class="parameter-list">
            <p class="img-parameter">Views</p>
            <p class="img-parameter-quantity">${views}</p>
          </li>
          <li class="parameter-list">
            <p class="img-parameter">Comments</p>
            <p class="img-parameter-quantity">${comments}</p>
          </li>
          <li class="parameter-list">
            <p class="img-parameter">Downloads</p>
            <p class="img-parameter-quantity">${downloads}</p>
          </li>
        </ul>
      </li>`;
      }
    )
    .join('');
  galleryEl.insertAdjacentHTML('beforeend', markup);
}

export function getInformMessage(message, backgroundColor) {
  iziToast.error({
    iconUrl: cross,
    messageColor: '#ffffff',
    message: message,
    backgroundColor: backgroundColor,
    position: 'topRight',
    messageSize: 16,
    layout: 2,
    maxWidth: 380,
    theme: 'dark',
  });
}
