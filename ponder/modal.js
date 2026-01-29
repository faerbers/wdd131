
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    console.log(e.target);//gives alot of info on what where was clicked
    //even which image was clicked (target:img)

// Code to show modal  - Use event parameter 'e'   
    const img = e.target;
    const src = img.getAttribute('src'); //gets file path to img
    const alt = img.getAttribute('alt'); //alt name from HTML
    const full = src.replace('sm', 'full');
    
    modalImage.src = full; //adds image to dialog>img
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
//change file name from img-sm to img-full, getting higher definition img          