import axios from 'axios';

function linkConstruction(query) {
  let link = 'https://pixabay.com/api/?';
  const searchArgs = {
    key: '22701944-f8f056c666d70ac6de5e1d35b',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };
  searchArgs.q = query;

  link += Object.keys(searchArgs).reduce(
    (acc, currentVal) =>
      (acc +=
        currentVal +
        '=' +
        searchArgs[currentVal].split(' ').join('+').trim() +
        '&'),
    ''
  );
  return link
    .split('')
    .splice(0, link.length - 1)
    .join('');
}

export default function getImagesByQuery(query) {
  return fetch(linkConstruction(query))
    .then(response => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then(data => {
      return data.hits;
    })
    .catch(err => {
      return err;
    });
}
