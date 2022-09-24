import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryRef = document.querySelector('.gallery');
const itemsMarkup = createGalleryItems(galleryItems);

galleryRef.insertAdjacentHTML('beforeend', itemsMarkup);

function createGalleryItems(gallery) {
  return gallery
    .map(({ preview, original, description }) => {
      return `<li>
				<a class="gallery__item" href="${original}">
                    <img class="gallery__image"
                        src="${preview}" 
                        alt="${description}" />
                </a>
			</li>`;
    })
    .join('');
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionPosition: 'bottom',
  captionsData: 'alt',
  captionDelay: 250,
});
