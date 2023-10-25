// All the variables
let tabLinks = document.getElementsByClassName("tab-links");
let tabContents = document.getElementsByClassName("tab-contents");
let submitButton = document.querySelector(".submit-btn");
let inputsField = document.querySelectorAll(".inputs");
let textArea = document.querySelector(".text-area");

// Script for hambuger menu
function opentab(tabname){
    for(tabLink of tabLinks){
        tabLink.classList.remove('active-link');
    }
    for(tabContent of tabContents){
        tabContent.classList.remove('active-tab');
    }

    e.currentTarget.classList.add('active-link');
    document.getElementById(tabname).classList.add('active-tab');
}

let sideMenu = document.getElementById("sidemenu");
function openmenu(){
    sideMenu.style.right = "0";
}
function closemenu(){
    sideMenu.style.right = "-200px";
}

// Script for submit button
submitButton.addEventListener("click", () => {
    inputsField.forEach((input) => {
        input.value = "";
    })
    textArea.value = "";
    alert("Your message sent successfully. Thank you.");
})