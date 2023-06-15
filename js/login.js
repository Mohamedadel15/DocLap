const mail =document.getElementById("mail")
const password = document.getElementById("password")
const submit = document.querySelector(".submit")

submit.addEventListener("click",(e)=>{
    e.preventDefault();
    if(mail.value === localStorage.getItem("email")  && password.value === localStorage.getItem("password")){
        window.location.href="./home.html"
    }else{
        document.querySelector(".notvalid").classList.add("active")
        setTimeout(function(){
            document.querySelector(".notvalid").classList.remove("active")
        },2000)
    }
})
