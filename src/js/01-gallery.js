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
      src=${preview}
      data-source=${original}
      alt="${description}"
    />
  </a>
</div>`
    ).join('');

};
console.log(galleryMarkup);

galleryList.addEventListener("click", onModalClick);

function onModalClick(e) {
  console.log(e);
  console.log(e.target);
  console.log(e.target.nodeName);
    e.preventDefault();
    if (e.target.nodeName !== "IMG") {
    return;
    } 
 
    const instance = basicLightbox.create(`
<div class = modal>
<img src=${e.target.dataset.source} alt=${e.target.alt}/>
</div>
`);
console.log(instance);
  instance.show();

  window.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close()
    }
  });

}