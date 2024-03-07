import { gallery, loaderForm } from '../main';

export function galleryElements(element, galleryEl) {
  loaderForm.classList.remove('loader');
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
