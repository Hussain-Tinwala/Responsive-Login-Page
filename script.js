const body= document.getElementById('form-box');
console.log(body);

const wrapper= document.querySelector('.wrapper');
const btnpopup= document.querySelector('.login-popup');
const closebutton=document.querySelector('.closeicon');
// console.log(btnpopup);

btnpopup.addEventListener('click',()=>{
    wrapper.classList.add('active-popup');
});

closebutton.addEventListener('click',()=>{
    wrapper.classList.remove('active-popup');
    body.reset();
});