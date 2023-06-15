const password =document.getElementById("password")
const prePass = document.getElementById("prepasword")
const logoutBtn = document.getElementById("logout")
const email = document.getElementById("email")
const text = document.querySelector(".text")
const text2 = document.querySelector(".text2")

logoutBtn.addEventListener("click",(e)=>{
    e.preventDefault();
    if(password.value !== prePass.value || password.value == "" || prePass.value == ""){
        document.querySelector(".passDone").style.color="red";
        document.querySelector(".passDone").textContent="wrong password"
    }else{
        document.querySelector(".passDone").style.color="green";
        document.querySelector(".passDone").textContent="valid password"
    }
    if(!testMail(email.value)){
        document.querySelector(".email").style.color="red";
        document.querySelector(".email").textContent="wrong mail"

    }else{
        document.querySelector(".email").style.color="green";
        document.querySelector(".email").textContent="valid email"

    }
    if(text.value !=""  && text2.value !="" && password.value === prePass.value && password.value != "" && prePass.value != ""  && testMail(email.value) ){
        localStorage.setItem("email", email.value)
        localStorage.setItem("password", password.value)
        setTimeout(function(){
            window.location.href="index.html";
        },1000)
    }
    
})

function testMail(value){
    let regex = /[a-z0-9]+@(yahoo|gmail|mail|must|hotmail).com/gim;
    return regex.test(value);

}
