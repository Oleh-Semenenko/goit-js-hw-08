import 'simplelightbox/dist/simple-lightbox.min.css';
import SimpleLightbox from 'simplelightbox';
import { galleryItems } from './gallery-items';

const galleryRef = document.querySelector('.gallery');
const itemsMarkup = createGalleryItems(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', itemsMarkup);

function createGalleryItems(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `
				<a class="gallery__item" href="${original}">
                    <img class="gallery__image"
                        src="${preview}" 
                        alt="${description}" />
                </a>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});
