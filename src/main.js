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

// console.log(
//   getImagesByQuery,
//   createGallery,
//   clearGallery,
//   showLoader,
//   hideLoader
// );

const formNode = document.querySelector('.form');

formNode.addEventListener('submit', evt => {
  evt.preventDefault();
  clearGallery();
  showLoader();

  const formData = new FormData(evt.currentTarget);
  let input = '';
  formData.forEach((value, name) => {
    console.log(name + ': ', value);
    input = value;
  });
  if (input.trim() === '') {
    iziToast.error({
      title: 'Fuck me!',
      message: 'Input is empty, bitch!',
    });
    return;
  }
  //   console.log(getImagesByQuery(input));
  getImagesByQuery(input).then(elem => {
    console.log(elem);
    if (elem.length !== 0) {
      hideLoader();
      createGallery(elem);
      return;
    }
    hideLoader();

    return iziToast.info({
      title: 'Sorry!',
      message:
        'Sorry, there are no images matching your search query. Please try again!!',
    });
  });
});

// formNode.addEventListener('input', evt => {
//   console.log(evt.target.value);
// });
