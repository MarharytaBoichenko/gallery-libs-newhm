import { galleryItems } from './gallery-items.js';
// import SimpleLightbox from "simplelightbox";
// Change code below this line

console.log(galleryItems);

console.log(galleryItems);

const galleryList = document.querySelector('.gallery')
console.log(galleryList);
const galleryMarkup = createMarkup(galleryItems);
console.log(galleryMarkup);

galleryList.insertAdjacentHTML("afterbegin", galleryMarkup);


function  createMarkup(gallery){
    return gallery.map(({ preview, original, description }) =>
        `<a class="gallery__item" href=${original}>
  <img class="gallery__image" src=${preview} alt=${description} />
</a>`
    ).join('');

};
console.log(galleryMarkup);

galleryList.addEventListener("click", onModalClick);

// function onModalClick() {
//     e.preventDefault();
//     if (e.target.nodeName !== IMG) {
//         return
//     } 

//     let lightbox = new SimpleLightbox('.galleryList a', {
// 	animationSpeed: 500,
// 	fadeSpeed: 500,
// 	captions: true,
// 	captionType: 'attr',
// 	captionsData: 'alt',
// 	captionPosition: 'bottom',
// 	captionDelay: 250,
// });
    
// };

   let lightbox = new SimpleLightbox('.gallery a', {
	animationSpeed: 500,
	fadeSpeed: 500,
	captions: true,
	captionType: 'attr',
	captionsData: 'alt',
	captionPosition: 'bottom',
	captionDelay: 250,
});

lightbox.on(() => {
	lightbox.next();
});


