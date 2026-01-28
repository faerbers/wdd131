
let selectElem = document.querySelector('#theme-select');
let pageContent = document.querySelector('body');
let img=document.getElementById("logo")
let box=document.querySelector(".box")
selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value; //gets value of ocean, forest, desert, or other
    if (current === 'dark') {
        pageContent.style.backgroundColor="#333";
        pageContent.style.color="white";
        img.setAttribute('src', 'images/byui-logo-white.png')
        box.style.borderColor="#999";
    } else if (current === 'light') {
        pageContent.style.backgroundColor="white";
        pageContent.style.color="#333";
        img.setAttribute("src", "images/byui-logo-blue.webp");
        box.style.borderColor="#000";
    } else {
        // default
        pageContent.style.backgroundColor="white";
        pageContent.style.color="#333";
        img.setAttribute("src", "images/byui-logo-blue.webp");
        box.style.borderColor="#000";
    }
}