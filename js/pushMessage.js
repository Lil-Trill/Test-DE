const btnSubmit = document.getElementById("submit");
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
                
            }
        }
    }

});

// async function formSend(formData){
//     let response = await fetch("api/receiveMessage.php",{
//         method:'POST',
//         body: formData
//     });
//     if(response.ok) {
//         console.log("данные отпавлены");
//     }
// }

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
