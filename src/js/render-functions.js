import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = new SimpleLightbox('.gallery a', {
  /* options */
});
const loader = document.querySelector('.loader');

function createGallery(images) {
  const galleryItems = images
    .map(element => {
      const {
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      } = element;
      // ['id', 'pageURL', 'type', 'tags', 'previewURL', 'previewWidth', 'previewHeight', 'webformatURL', 'webformatWidth',
      // 'webformatHeight', 'largeImageURL', 'imageWidth', 'imageHeight', 'imageSize', 'views', 'downloads', 'collections',
      // 'likes', 'comments', 'user_id', 'user', 'userImageURL', 'noAiTraining', 'isAiGenerated', 'isGRated', 'isLowQuality', 'userURL']
      return `<li class="gallery-card">
        <a class="img-link" href="${largeImageURL}">
          <div class="img-wrap"><img src="${webformatURL}" alt="${tags}" /></div>
             <ul class="gallery-item-stats">
                 <li class="gallery-item-stats-item">Likes <span>${likes}</span></li>
                 <li class="gallery-item-stats-item">Views <span>${views}</span></li>
                <li class="gallery-item-stats-item">Comments <span>${comments}</span></li>
                 <li class="gallery-item-stats-item">Downloads <span>${downloads}</span></li>
            </ul>
        </a>
    </li>`;
    })
    .join('');
  console.log(galleryItems);
  const ul = document.querySelector('.gallery');
  ul.innerHTML = galleryItems;
  gallery.refresh();
}

function clearGallery() {
  const ul = document.querySelector('.gallery');
  if (ul) ul.innerHTML = '';
}

function showLoader() {
  loader.style.display = 'block';
}
function hideLoader() {
  console.log(loader);
  loader.style.display = 'none';
}

export { createGallery, clearGallery, showLoader, hideLoader };
