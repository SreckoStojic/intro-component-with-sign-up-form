function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const form = document.querySelector(".js-sign-up-form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const firstName = document.querySelector(".js-error-firstName");
    const firstNameImg = document.querySelector(".js-error-img-firstName");
    const firstNameDiv = document.querySelector(".js-input-firstName-div");

    const lastName = document.querySelector(".js-error-lastName");
    const lastNameImg = document.querySelector(".js-error-img-lastName");
    const lastNameDiv = document.querySelector(".js-input-lastName-div");

    const email = document.querySelector(".js-error-email");
    const emailImg = document.querySelector(".js-error-img-email");
    const emailDiv = document.querySelector(".js-input-email-div");
    

    const password = document.querySelector(".js-error-password");
    const passwordImg = document.querySelector(".js-error-img-password");
    const passwordDiv = document.querySelector(".js-input-password-div");
    
    const cssErrorMsgVisibleClass = "css-error-msg-visible";
    const cssErrorImgVisibleClass = "css-error-img-visible";
    const cssInputErrorClass = "css-input-error";

    if(e.target.elements.firstName.value === "") {
        firstName.classList.add(cssErrorMsgVisibleClass);
        firstNameImg.classList.add(cssErrorImgVisibleClass);
        firstNameDiv.classList.add(cssInputErrorClass);
    } else {
        firstName.classList.remove(cssErrorMsgVisibleClass);
        firstNameImg.classList.remove(cssErrorImgVisibleClass);
        firstNameDiv.classList.remove(cssInputErrorClass);
    }
    
    if(e.target.elements.lastName.value === "") {
        lastName.classList.add(cssErrorMsgVisibleClass);
        lastNameImg.classList.add(cssErrorImgVisibleClass);
        lastNameDiv.classList.add(cssInputErrorClass);
    } else {
        lastName.classList.remove(cssErrorMsgVisibleClass);
        lastNameImg.classList.remove(cssErrorImgVisibleClass);
        lastNameDiv.classList.remove(cssInputErrorClass);
    }


    if(validateEmail(e.target.elements.email.value)) {
        email.classList.remove(cssErrorMsgVisibleClass);
        emailImg.classList.remove(cssErrorImgVisibleClass);
        emailDiv.classList.remove(cssInputErrorClass);
    } else {
        email.classList.add(cssErrorMsgVisibleClass);
        emailImg.classList.add(cssErrorImgVisibleClass);
        emailDiv.classList.add(cssInputErrorClass);
    }

   
    if(e.target.elements.password.value === "") {
        password.classList.add(cssErrorMsgVisibleClass);
        passwordImg.classList.add(cssErrorImgVisibleClass);
        passwordDiv.classList.add(cssInputErrorClass);
    } else {
        password.classList.remove(cssErrorMsgVisibleClass);
        passwordImg.classList.remove(cssErrorImgVisibleClass);
        passwordDiv.classList.remove(cssInputErrorClass);
    }
    
    const listOfErrors = document.querySelectorAll(".css-error-msg-visible");
    console.log(listOfErrors);
    if (listOfErrors.length === 0) {
        alert("Successfully claimed Free trial!");
        form.reset();
    }
});