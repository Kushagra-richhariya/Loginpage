const wrapper=document.querySelector('.wrapper');
const loginlink=document.querySelector('.Loginlink');
const registerlink=document.querySelector('.Registerlink');
const btnpopup=document.querySelector('.btn');
const iconclose=document.querySelector('.iconClose');

registerlink.addEventListener('click', () =>{
    wrapper.classList.add('active');
});

loginlink.addEventListener('click', () =>{
    wrapper.classList.remove('active');
});

btnpopup.addEventListener('click', () =>{
    wrapper.classList.add('activepopup');
});

iconclose.addEventListener('click', () =>{
    wrapper.classList.remove('activepopup');
});