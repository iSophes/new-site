// Select all "know more" buttons
const knowMoreButtons = document.querySelectorAll('.know-more');
const popups = document.querySelectorAll('.popup');
const content = [document.getElementById('everything'), document.getElementById('about'), document.getElementById('study'), document.getElementById('stats'), document.getElementById('base'), document.getElementById('footer')];

var currentOpenID = "";

function blur() {
    for (let i = 0; i < content.length; i++){
        content[i].classList.add('blur');
        setTimeout(400)
        content[i].classList.remove('noblur');
    };
  }

function removeBlur(){
    for (let i = 0; i < content.length; i++){
        content[i].classList.add('noblur');
        setTimeout(400)
        content[i].classList.remove('blur');
    };
}

// Function to open a popup
function openPopup(popupId) {
    if (currentOpenID != ""){
        document.getElementById(currentOpenID).style.display = 'none';
    };
    currentOpenID = popupId;
    document.getElementById(popupId).style.display = 'flex'; // Show the popup
    blur();
}

// Function to close all popups
function closeAllPopups() {
    currentOpenID = ""
    popups.forEach((popup) => {
        popup.style.display = 'none'; // Hide all popups
    });
    removeBlur();
}

// Add event listeners to "know more" buttons
knowMoreButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const popupId = button.getAttribute('data-popup'); // Get the target popup ID
        closeAllPopups(); // Close any open popup
        openPopup(popupId); // Open the selected popup
    });
});

// Add event listeners to close buttons and outside popup clicks
popups.forEach((popup) => {
    const closeButton = popup.querySelector('.popup-box-close');
    closeButton.addEventListener('mousedown', closeAllPopups);
 
    // Close popup when clicking outside the popup box
    popup.addEventListener('mousedown', (e) => {
        const popupBox = popup.querySelector('.popup-box');
        const galleryPopupBox = popup.querySelector('.gallery-popup-box');
        if (popupBox){
            if (!popupBox.contains(e.target)) {
                closeAllPopups();
            }
        };

        if (galleryPopupBox){
            if (!galleryPopupBox.contains(e.target)) {
                closeAllPopups();
            }
        };
    });
});