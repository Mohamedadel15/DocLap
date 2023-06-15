/*
    -- calculate time
*/
const countDownDate = new Date("jun 5, 2024 15:37:25").getTime();

function getTimeNow() {
  const now = new Date().getTime();

  const distance = countDownDate - now;

  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);
  /*
    -- Display the result in an element with id="demo
  */

  document.getElementById(
    "demo"
  ).innerHTML = `${days} D : ${hours} H : ${minutes} M : ${seconds} S`;

  /*
    --  If the count down is finished, write some text
  */
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}
const calcTime = setInterval(getTimeNow, 1000);

/*
    --  all cards doctors specialists 
*/

const allSpecialists = document.querySelectorAll("[data-specialist]");
allSpecialists.forEach((ele) => {
  ele.addEventListener("click", () => {
    document
      .getElementById(`${ele.getAttribute("data-specialist")}`)
      .scrollIntoView();
  });
});

/*
    --  all cards doctors specialists 
*/

const doctorsProfilePages = document.querySelectorAll("[data-location]");
doctorsProfilePages.forEach((page) => {
  page.addEventListener("click",()=>{
    window.location.href=`./profileDocors/${page.getAttribute("data-location")}`
  })
})


/*
    --  close and start btn 
*/

const closeBtn = document.getElementById("close-btn")
closeBtn.addEventListener("click",()=>{
  document.querySelector(".fixed-book").classList.add("hidden-book")
});

const goToBookAppointment = document.getElementById("go-to-doctor")
goToBookAppointment.addEventListener("click",()=>{
  document.querySelector(".fixed-book").classList.remove("hidden-book")

})


/*
    --  make appointments available in assign card 
*/

const inptBookAppointment = document.querySelectorAll("[data-input]")
const btnFormAppointment = document.getElementById("send-appoinment")
btnFormAppointment.addEventListener("click",()=>{
  let count = 0;
  inptBookAppointment.forEach(ele=>{
    ++count;
    console.log(count)
    localStorage.setItem(`name-${count}`,ele.value)
  })

  
})







