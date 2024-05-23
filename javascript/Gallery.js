//selects all elements with the id responsive-image and creats a NodeList with them

const mobilecolumn = document.querySelectorAll("#mobileGallery");

function mediasize(x) {
    if (x.matches) {
        // Iterate over each element in the NodeList
        mobilecolumn.forEach(function (element) {
            element.classList.add("mobile-column")
        });
    }
    else {
        // Iterate over each element in the NodeList
        mobilecolumn.forEach(function (element) {
            element.classList.remove("mobile-column")
        });
    }
}

//gives mmObj the value of the matchMedia function which is true when the screen is less than 768px
const mmObj = window.matchMedia("(max-width: 768px)");

//calls the function with the value of mmObj
mediasize(mmObj);

//adds an EventListener which listens for changes and than calls the mediasize function
mmObj.addEventListener('change', function () {
    mediasize(mmObj);
});


//adds the function to open the images in fullscreen when clicked on. it uses photoswipe to do this https://photoswipe.com/options/
import PhotoSwipeLightbox from 'https://cdn.jsdelivr.net/npm/photoswipe@5.3.7/dist/photoswipe-lightbox.esm.js';
const options = {
  gallery: '#my-gallery',
  children: 'a',
  pswpModule: () => import('https://cdn.jsdelivr.net/npm/photoswipe@5.3.7/dist/photoswipe.esm.js'),
  preload: [2, 6],
  preloaderDelay: 0,
  rrowKeys: true,
  escKey: true,
  wheelToZoom: true,
};
const lightbox = new PhotoSwipeLightbox(options);
lightbox.on('uiRegister', function () {
  lightbox.pswp.ui.registerElement({
    name: 'zoom-level-indicator',
    order: 9,
    onInit: (el, pswp) => {
      pswp.on('zoomPanUpdate', (e) => {
        if (e.slide === pswp.currSlide) {
          el.innerText = 'Zoom level ' + Math.round(pswp.currSlide.currZoomLevel * 100) + '%';
        }
      });
    }
  });
});
lightbox.init();

