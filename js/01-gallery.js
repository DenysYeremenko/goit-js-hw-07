import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryEl = document.querySelector('.gallery');

const galerryImgAdd = array => {
    array.map(({preview, original, description}) => {
        const newImageEl = document.createElement('img');
            newImageEl.src = preview
            newImageEl.alt = description
            newImageEl.dataset.source = original
            newImageEl.classList.add('gallery__image')
            

        const newLinkEl = document.createElement('a')
            newLinkEl.href = original
            newLinkEl.classList.add("gallery__link")
            newLinkEl.append(newImageEl)
        
        const newGalleryItemEl = document.createElement('div')
            newGalleryItemEl.classList.add('gallery__item')
            newGalleryItemEl.append(newLinkEl)

        galleryEl.append(newGalleryItemEl)
    
    }) 
}

const zoomImg = event => {
    if (event.target.nodeName !== "IMG") {
        return;
      }
    
    const closeByEscape = event => {
            if(event.key === 'Escape') {
                newLightBoxEl.close()
            }
            console.log(event.key);
        }

    const newLightBoxEl = (basicLightbox.create(
        `<img src=${event.target.dataset.source}>`,{onClose: () => {document.removeEventListener("keydown", closeByEscape)}}
        )
    )

    newLightBoxEl.show()

    document.addEventListener("keydown", closeByEscape)
            
    event.preventDefault()
}

galerryImgAdd(galleryItems)
galleryEl.addEventListener('click', zoomImg)