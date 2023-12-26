// toggler icon changing
const togglerIconImage = document.getElementById("toggler-icon");
const togglerMenuImage = "../assets/practice5/menu.png";
const togglerCloseImage = "../assets/practice5/close.png";
let currentImage = togglerMenuImage;

function changeTogglerIcon() {
    if (currentImage === togglerMenuImage) {
        currentImage = togglerCloseImage;
    } else {
        currentImage = togglerMenuImage;
    }
    togglerIconImage.src = currentImage;
}

// nav background changing
const navTogglerButton = document.getElementById("navbar-toggler-btn");
const navToggler = document.getElementById("navbarTogglerDemo03");
navTogglerButton.addEventListener("click", function () {
    if (window.innerWidth > 992) {
        navToggler.style.backgroundColor = "";
    }
    else {
        navToggler.style.backgroundColor = "#1b201e";
        navToggler.style.borderRadius = "2px";
    }
})

// nav searchbar appearing
const searchButton = document.querySelector(".search-shopping-bag .search");
const searchbarFreeSpace = document.querySelector(".searchbar-free-space");
const searchbarContainer = document.querySelector(".searchbar-container");
const searchbarFeatures = document.querySelector(".searchbar-container .searchbar-features");
const searchbarForm =  document.querySelector(".searchbar-container .searchbar-form");
const searchbarFeaturesCloseIcon =  document.querySelector(".searchbar-container .close-icon");
const rotateCloseIconOpen = `
        @keyframes rotateCloseIconOpen {
            0% {
                transform: rotate(0deg);
            }
            100% {
                transform: rotate(180deg);
            }
        }
    `;
const rotateCloseIconClose = `
        @keyframes rotateCloseIconClose {
            0% {
                transform: rotate(180deg);
            }
            100% {
                transform: rotate(0deg);
            }
        }
    `;
const searchbarDisplayOn = `
        @keyframes searchbarDisplayOn {
            0% {
                opacity: 0;
            }
            100% {
                opacity: 1;
            }
        }
    `;
const searchbarDisplayOff = `
        @keyframes searchbarDisplayOff {
            0% {
                opacity: 1;
            }
            100% {
                opacity: 0;
            }
        }
    `;

searchButton.addEventListener("click", function() {
    searchbarFreeSpace.style.setProperty('top', '55vh');
    searchbarContainer.style.setProperty('top', '0', 'important');
    if ((styleElement.textContent.includes(rotateCloseIconOpen)) && (styleElement.textContent.includes(searchbarDisplayOn))){
        searchbarFeatures.style.animation = "searchbarDisplayOn 1s forwards";
        searchbarFeatures.style.animationDelay = ".6s";
        searchbarFeaturesCloseIcon.style.animation = "rotateCloseIconOpen .5s";
        searchbarFeaturesCloseIcon.style.animationDelay = ".6s";
        searchbarForm.style.animation = "searchbarDisplayOn .5s forwards";
        searchbarForm.style.animationDelay = ".2s";
    } else {
        styleElement.textContent += rotateCloseIconOpen + searchbarDisplayOn;
        searchbarFeatures.style.animation = "searchbarDisplayOn 1s forwards";
        searchbarFeatures.style.animationDelay = ".6s";
        searchbarFeaturesCloseIcon.style.animation = "rotateCloseIconOpen .5s";
        searchbarFeaturesCloseIcon.style.animationDelay = ".6s";
        searchbarForm.style.animation = "searchbarDisplayOn .5s forwards";
        searchbarForm.style.animationDelay = ".2s";
    }
});

const closeIcon = document.querySelector(".close-icon");
closeIcon.addEventListener("click", function () {
    if ((styleElement.textContent.includes(rotateCloseIconClose)) && (styleElement.textContent.includes(searchbarDisplayOff))){
        searchbarFreeSpace.style.setProperty('top', '-45vh');
        searchbarContainer.style.setProperty('top', '-55vh');
        searchbarFeatures.style.animation = "searchbarDisplayOff .2s forwards";
        searchbarFeatures.style.animationDelay = "";
        searchbarFeaturesCloseIcon.style.animation = "rotateCloseIconClose .5s";
        searchbarFeaturesCloseIcon.style.animationDelay = ".2s";
        searchbarForm.style.animation = "searchbarDisplayOff .5s forwards";
        searchbarForm.style.animationDelay = "";
    } else {
        styleElement.textContent += rotateCloseIconClose + searchbarDisplayOff;
        searchbarFreeSpace.style.setProperty('top', '-45vh');
        searchbarContainer.style.setProperty('top', '-55vh');
        searchbarFeatures.style.animation = "searchbarDisplayOff .2s forwards";
        searchbarFeatures.style.animationDelay = "";
        searchbarFeaturesCloseIcon.style.animation = "rotateCloseIconClose .5s";
        searchbarFeaturesCloseIcon.style.animationDelay = ".2s";
        searchbarForm.style.animation = "searchbarDisplayOff .5s forwards";
        searchbarForm.style.animationDelay = "";
    }
})

searchbarFreeSpace.addEventListener("click", function () {
    searchbarFreeSpace.style.setProperty('top', '-45vh');
    searchbarContainer.style.setProperty('top', '-55vh');
})