import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryList = document.querySelector('.gallery')
console.log(galleryList);
const galleryMarkup = createMarkup(galleryItems);
console.log(galleryMarkup);

galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);


function  createMarkup(gallery){
    return gallery.map(({ preview, original, description }) =>
        `<div class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    ).join('');

};
console.log(galleryMarkup);

// galleryList.addEventListener("click", onModalClick);

// function onModalClick(e) {
//     console.log(e);
//     e.preventDefault();
//     if (e.target.nodeName !== "IMG") {
//     return;
//     } 
    
// }

// const instance = basicLightbox.create(`
// 	<h1>Dynamic Content</h1>
// 	<p>You can set the content of the lightbox with JS.</p>
// `);
// console.log(instance);