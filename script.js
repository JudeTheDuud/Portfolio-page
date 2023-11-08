const arrow = document.querySelector('#arrow');


arrow.addEventListener('click', () =>{
window.location.href = "#about";
} 
)


function toggle (){
const blur = document.querySelector("#overlay");
blur.classList.toggle("active");

const contact = document.querySelector("#contact-form");
contact.classList.toggle("active")



}

function close(){
    const close = document.querySelector("#close");
    const contact = document.querySelector("#contact-form");
    const blur = document.querySelector("#overlay");
    close.addEventListener('click', () =>{
        contact.classList.remove("active");
        blur.classList.remove("active");
    })


}

document.addEventListener("DOMContentLoaded", () => {
    close();
});