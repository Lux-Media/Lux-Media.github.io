//const debug = document.getElementById('debug');
let a = true;


// opens the Topnav when clicked on by adding the css class 
function openTopNav() {
    const x = document.getElementById("topnav");

    if (x.className === "header" ) {
      x.classList.add ("responsive");
    } 
    else if(x.className === "header sticky"){
      a = false;
      $('html, body').animate({ scrollTop: 0 }, 'fast');
      x.classList.add ("responsive");
//      debug.classList.add("KLICK"); 
    }
    else {
      x.className = "header";
    }
}


//when user clicks on the already active page it just scrolls up instead of reloading
const active = document.getElementById('active');
document.addEventListener('click', (event) => {
  if (active.contains(event.target)) {
    $('html, body').animate({ scrollTop: 0 }, 'slow');  
  }
});


// hides the topnav when a click event occurs outside the menu
const menuButton = document.getElementById('navbutton');
const menu = document.getElementById('topnav');


document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
    menu.classList.remove("responsive");
//    debug.classList.add("KLICK");
  }
});

// closes the topnav when scrolling down
document.addEventListener('scroll', (event) => {
  const y = document.getElementById("topnav");
  
  if (document.documentElement.scrollTop > 160 && a == true)  {
      if(y.className === "header sticky"){
        y.className === "header sticky";
//        debug.classList.add("SCROLL1")
      }
      else {
        y.classList.remove("responsive");
//        debug.classList.add("SCROLL2");
      }
  }
});

//hides the triangle under the topnav when scrolling down
document.addEventListener('scroll', (event) => {
  const z = document.getElementById("triangle");
  const s = document.getElementById("site-content");

  if(document.documentElement.scrollTop > 170) {
    if(z.className === "triangle-wrap sticky"){
      z.classList.add("responsive");
      s.classList.add("responsive");
    }
  }

  else if(document.documentElement.scrollTop == 0) {
    if(z.className === "triangle-wrap sticky responsive"){
      s.classList.remove("responsive");
      z.classList.remove("responsive");
    }
  }
});

// When the user scrolls the page, execute stickynavbar
window.onscroll = function() {stickynavbar();};

//gets the topnav 
const navbar = document.getElementById('topnav');


// Gets the offset position of the topnav
const sticky = navbar.offsetTop;

// Adds the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickynavbar() {
  if (window.scrollY > sticky) {
    navbar.classList.add("sticky");

  } else {
    a = true;
    navbar.classList.remove("sticky");
  }
}