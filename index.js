/*
get the html elements by their class names
and save them into their various variables.
*/
const mainMenu = document.querySelector(".main-menu");
const menuBar = document.querySelector(".menu-bar");

const readMore = document.querySelector(".read-more");
const text = document.querySelector(".text");

const displayedText = document.querySelector(".display-more-text");
const projects = document.querySelector(".projects-wrapper");

const projectBtn = document.querySelector(".show-more-btn");
const lightAndDarkContainer = document.querySelector('.light-and-dark-container');

const switchButton = document.querySelector('.switch-button');
const  navLinks = document.querySelectorAll('.nav-links');

const header = document.querySelector('.header');
const inputFields = document.querySelectorAll('.input-field');

/*
toggle both menu-bar and main-menu elements with a class name of active
when the hambuger is clicked(for smaller screens).
*/
menuBar.addEventListener("click", () => {
    menuBar.classList.toggle("active");
    mainMenu.classList.toggle("active");
});

/*
remove active class from both menu-bar and main-menu elements 
when a nav-link is clicked(for smaller screens).
*/
document.querySelectorAll(".menu-item").forEach(n => n.addEventListener("click", () => {
    menuBar.classList.remove("active");
    mainMenu.classList.remove("active");
    
}));

/*
display the rest of the about informtion when read-more button is clicked
and change the read-more button text.
*/
readMore.addEventListener("click", () => {
    text.classList.toggle("display");
    if(readMore.innerText == "Read More"){
        readMore.innerText = "Read Less";
    }
    else{
        readMore.innerText = "Read More";
    }
});

/*
display the rest of the projects when see-more button is clicked
and change the see-more button text.
*/
projectBtn.addEventListener("click", () => {
    projects.classList.toggle("more-projects");
    if(projectBtn.innerText == "See More"){
        projectBtn.innerText = "See Less";
    }
    else{
        projectBtn.innerText = "See More";
    }
});

//dark and light mode
//execute the function below when switch-button is clicked 
switchButton.addEventListener('click', () =>{
    /*
    check if body contain a class name of 'is-toggled', if it contains
     then remove it and set the background-color and color of the entire 
     page to default color.
    */
  if(document.body.classList.contains('is-toggled')){
    document.body.classList.remove('is-toggled');
    switchButton.classList.remove('is-switched');
    switchButton.innerHTML = '<i class="fa-solid fa-moon"></i>';
    navLinks.forEach(function(link){
        link.style.color = '#fbfbfe';
    });
    inputFields.forEach(function(value){
        value.style.background = '#fbfbfe';
        value.style.color = '';
    });
    switchButton.style.color = '#222';
    header.style.background = '#222';
    lightAndDarkContainer.style.background = '#fbfbfe';
    mainMenu.classList.remove('light-mode');
  }

  /*
  if it does not contain then add a class name of 'is-toggled' to it
  and change the background-color and color of the entire page.
  */
  else{
    document.body.classList.add('is-toggled');
    switchButton.style.color = '#fbfbfe';
    switchButton.classList.add('is-switched');
    switchButton.innerHTML = '<i class="fa-solid fa-sun"></i>';
    lightAndDarkContainer.style.background = 'black';
    header.style.background = '#fbfbfe';
    navLinks.forEach(function(link){
        link.style.color = '#222';
    });
    inputFields.forEach(function(value){
        value.style.background = '#222';
        value.style.color = '#fbfbfe';
    });
    mainMenu.classList.add('light-mode');
  }
});

// Preloader disappears when the page finish loading
const preloader = document.querySelector('.container');

window.addEventListener('load', function(){
    preloader.style.display = 'none';
})