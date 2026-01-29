//Drop down menu
const btn = document.querySelector(".menu-btn");
const menu= document.querySelector("nav");

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide');
    btn.classList.toggle('change');
}

//Image focus and exit

const gallery = document.getElementsByClassName('gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');


document.querySelectorAll('main.gallery img').forEach(img => {
    img.addEventListener('click', openModal);
});
function openModal(e) {
    console.log(e.target);//gives alot of info on what where was clicked
    //even which image was clicked (target:img)

// Code to show modal  - Use event parameter 'e'   
    const img = e.target;
    const src = img.getAttribute('src'); //gets file path to img
    const alt = img.getAttribute('alt'); //alt name from HTML

    modalImage.src = src; //adds image to dialog>img
    modalImage.alt = alt;

    modal.showModal();
}


// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
