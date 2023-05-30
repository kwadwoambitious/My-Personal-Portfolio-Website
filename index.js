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

//form validation
/*
const firstNameInput = document.querySelector('#first-name');
const lastNameInput = document.querySelector('#last-name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');
const errorMessage = document.querySelectorAll('.error');


const submitButton = document.querySelector('.submit-button');


function sendEmail(){
    if(firstNameInput.value.length < 1){
        errorMessage[0].innerHTML = 'Name cannot be blank';
        firstNameInput.classList.add('error-border');
    }
    else{
        errorMessage[0].innerHTML = 'Filled correctly!';
        errorMessage[0].style.color = '#28A745';
        firstNameInput.classList.remove('error-border');
    };

    if(lastNameInput.value.length < 1){
        errorMessage[1].innerHTML = 'Name cannot be blank';
        lastNameInput.classList.add('error-border');
    }
    else{
        errorMessage[1].innerHTML = 'Filled correctly!';
        errorMessage[1].style.color = '#28A745';
        lastNameInput.classList.remove('error-border');
    };
    let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    ///^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(emailInput.value.match(emailFormat)){
        errorMessage[2].innerHTML = 'Valid email address';
        errorMessage[2 ].style.color = '#28A745';
        emailInput.classList.remove('error-border');
    }
    else{
        errorMessage[2].innerHTML = 'Invalid email address';
        emailInput.classList.add('error-border');
    };

    if(messageInput.value.length < 1){
        errorMessage[3].innerHTML = 'Please enter a message';
        messageInput.classList.add('error-border');
    }
    else{
        errorMessage[3].innerHTML = 'Message entered!';
        errorMessage[3].style.color = '#28A745';
        messageInput.classList.remove('error-border');
    }
}
*/