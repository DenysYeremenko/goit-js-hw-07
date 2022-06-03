import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery');

const galerryImgAdd = array => {
    array.map(({preview, original, description}) => {
        const newImageEl = document.createElement('img');
            newImageEl.src = preview
            newImageEl.alt = description
            newImageEl.classList.add('gallery__image')
            

        const newLinkEl = document.createElement('a')
            newLinkEl.href = original
            newLinkEl.classList.add("gallery__item")
            newLinkEl.append(newImageEl)

        galleryEl.append(newLinkEl)
    }) 
}

galerryImgAdd(galleryItems)

new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});

