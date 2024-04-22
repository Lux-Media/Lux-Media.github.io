//selects all elements with the id responsive-image and creats a NodeList with them
const test = document.querySelectorAll("#responsive-image");

function mediasize(x) {
    if (x.matches) {
        // Iterate over each element in the NodeList
        test.forEach(function(element) {
            element.classList.add("image-item", "wow", "fadeInUpBig");
        });
    } 
}

//gives mmObj the value of the matchMedia function which is true when the screen is less than 768px
const mmObj = window.matchMedia("(max-width: 768px)");

//calls the function with the value of mmObj
mediasize(mmObj);

//adds an EventListener which listens for changes and than calls the mediasize function
mmObj.addEventListener('change', function() {
    mediasize(mmObj);
});

