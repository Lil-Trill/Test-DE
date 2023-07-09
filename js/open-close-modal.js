const letTalking = document.querySelector('.lets-talk');
const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');
const modalWindow = document.querySelector('.popup');

let unlock = true;

const timeout = 800;

letTalking.addEventListener('click',function(event){
    modalWindow.classList.add('open');
    document.body.style.overflow ='hidden';
});

document.getElementById("popup").addEventListener('click',(event)=>{
    let object = event.target;
    if(!object.closest(".popup__content")) Close();
});

document.querySelector('.popup__close').addEventListener('click',Close);

function Close(){
    modalWindow.classList.remove('open');
    document.body.style.overflow ='scroll';
}

document.getElementById("submit").addEventListener('click',(event)=>{
    
});