import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

import getImagesByQuery from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions';

const formNode = document.querySelector('.form');

formNode.addEventListener('submit', evt => {
  evt.preventDefault();
  clearGallery();
  showLoader();
  const formData = new FormData(evt.currentTarget);
  let input = '';
  formData.forEach((value, name) => {
    input = value;
    console.log(name);
  });

  if (input.trim() === '') {
    iziToast.error({
      title: 'Hey!',
      message: 'Input is empty!',
    });
    hideLoader();
    return;
  }
  getImagesByQuery(input)
    .then(data => {
      if (data.hits.length !== 0) {
        createGallery(data.hits);
      } else
        iziToast.info({
          title: 'Sorry!',
          message:
            'Sorry, there are no images matching your search query. Please try again!!',
        });
      hideLoader();
    })
    .catch(err => {
      hideLoader();
    });
});
