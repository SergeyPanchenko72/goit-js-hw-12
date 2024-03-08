import axios from 'axios';

export async function getsGalleryImg(pageNumber, inputValue) {
  const API_KEY = '42458903-cbb27ce669d5c06b9309f1f84';
  axios.defaults.baseURL = 'https://pixabay.com/api/';
  const { data } = await axios.get('', {
    params: {
      page: pageNumber,
      per_page: 15,
      key: API_KEY,
      q: inputValue,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });
  return data;
}
