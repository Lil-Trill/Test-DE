const formFedback = document.getElementById("form-fedback");
const filedFullName = document.querySelector(".full-name");
const email = document.querySelector(".email");
const message = document.querySelector(".message");
const content = document.querySelector(".wrapper-content");

formFedback.addEventListener('submit',(event)=>{
    event.preventDefault();
    let formData = new FormData(formFedback);
    let xhr = new XMLHttpRequest();
    let result = checkFields(formData);
    if(result) {
        xhr.open("get","api/receiveMessage.php");
        xhr.send(formData);
        xhr.onload = () => {
            if(xhr.response==="ok"){
               sendMessage("Your message successfully sent");
            }
            else {
                sendMessage("your message was not sent");
            }
        }
    }
    document.querySelector('.submit-button').setAttribute('disabled', '');
});

function sendMessage(message){
    let info = document.createElement('p');
    info.classList.add("info")
    info.innerHTML = message;
    content.append(info);
}

function checkFields(formData){
    let flag = true;


    if(formData.get('fullName')==""){
        filedFullName.classList.add("error");
        flag = false;
    } 
    else{
        filedFullName.classList.remove("error");
        
    }

    if(formData.get('email')==""){
        email.classList.add("error");
        flag = false;
    }
    else email.classList.remove("error");
        
    

    if(formData.get('message')==""){
        message.classList.add("error");
        flag = false;
    }
    else message.classList.remove("error");
    

    return flag;
}
