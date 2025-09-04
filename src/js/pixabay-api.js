import axios from 'axios';

export default function getImagesByQuery(query) {
  axios.defaults.baseURL = 'https://pixabay.com';
  return axios
    .get('/api', {
      params: {
        key: '22701944-f8f056c666d70ac6de5e1d35b',
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: 'true',
        q: query,
      },
    })
    .then(response => response.data)
    .catch(err => {
      err;
      console.log(err);
    });
}
