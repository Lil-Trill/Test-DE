const btnSubmit = document.getElementById("submit");
const formFedback = document.getElementById("form-feddback");
const filedFullName = document.querySelector(".full-name");
const email = document.querySelector(".email");
const message = document.querySelector(".message");

formFedback.addEventListener('submit',(event)=>{
    event.preventDefault();
    let formData = new FormData(formFedback);
    let result = checkFields(formData);
    
    if(result) {
        let xhr = new XMLHttpRequest();
        xhr.open("POST","./receiveMessage.php");
        xhr.send(formData);
        xhr.onload = () => {
            console.log(xhr.response);
        }
    }

});

function checkFields(formData){
    let flag = true;


    if(formData.get('full-name')==""){
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
