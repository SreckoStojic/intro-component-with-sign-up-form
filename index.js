function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const form = document.querySelector(".js-sign-up-form");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const firstName = document.querySelector(".js-error-firstName");
    const firstNameImg = document.querySelector(".js-error-img-firstName");

    const lastName = document.querySelector(".js-error-lastName");
    const lastNameImg = document.querySelector(".js-error-img-lastName");

    const email = document.querySelector(".js-error-email");
    const emailImg = document.querySelector(".js-error-img-email");
    

    const password = document.querySelector(".js-error-password");
    const passwordImg = document.querySelector(".js-error-img-password");
    
    
    if(e.target.elements.firstName.value === "") {
        firstName.classList.add("css-error-msg-visible");
        firstNameImg.classList.add("css-error-img-visible");
    } else {
        firstName.classList.remove("css-error-msg-visible");
        firstNameImg.classList.remove("css-error-img-visible");
    }
    
    if(e.target.elements.lastName.value === "") {
        lastName.classList.add("css-error-msg-visible");
        lastNameImg.classList.add("css-error-img-visible");
    } else {
        lastName.classList.remove("css-error-msg-visible");
        lastNameImg.classList.remove("css-error-img-visible");
    }


    if(validateEmail(e.target.elements.email.value)) {
        email.classList.remove("css-error-msg-visible");
        emailImg.classList.remove("css-error-img-visible");
    } else {
        email.classList.add("css-error-msg-visible");
        emailImg.classList.add("css-error-img-visible");
    }

   
    if(e.target.elements.password.value === "") {
        password.classList.add("css-error-msg-visible");
        passwordImg.classList.add("css-error-img-visible");
    } else {
        password.classList.remove("css-error-msg-visible");
        passwordImg.classList.remove("css-error-img-visible");
    }
    
    const listOfErrors = document.querySelectorAll(".css-error-msg-visible");
    console.log(listOfErrors);
    if (listOfErrors.length === 0) {
        alert("Successfully claimed Free trial!");
    }
});