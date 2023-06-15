

/*
    -- event handlers to return hte first page
*/

document
  .querySelector("#nav-header .container .logo")
  .addEventListener("click", () => {
    window.location.href = "../home.html";
  });


  /*
    -- preloader
*/
const preloader = document.getElementById("preloader");
window.addEventListener("load", () => {
  preloader.classList.add("loaded-hidden");
});

/*
    -- reveal element transform 
*/
const revealElements = document.querySelectorAll("[data-transform]");
revealElements.forEach((revealElement) => {
  window.addEventListener("load", transform(revealElement));
  window.addEventListener("scroll", () => {
    transform(revealElement);
  });
});

function transform(revealElement) {
  if (revealElement.getBoundingClientRect().top < window.innerHeight / 1.1) {
    revealElement.classList.add("show");
  } else {
    revealElement.classList.remove("show");
  }
}

/*
    -- change bg color for nav bar
*/

const navHeader = document.getElementById("nav-header");
window.addEventListener("scroll", () => {
  if (window.scrollY >= 80) navHeader.style.background = `hsl(0, 0%, 0%)`;
  else navHeader.style.background = "none";
});



/*
    -- menu bar
*/

const menuIcone = document.getElementById("barsIcone");
menuIcone.addEventListener("click", () => {
  document
    .querySelector("#nav-header .menu-header")
    .classList.toggle("hidden-nav");
});

/*
    -- event handlers to return hte first page
*/

document
  .querySelector("#nav-header .container .logo")
  .addEventListener("click", () => {
    window.location.href = "./home.html";
  });


/*
    -- show user card
*/

document.getElementById("userIcone").addEventListener("click", () => {
  console.log("userIcone");
  document.querySelector(".menuListUser").classList.toggle("activeUSer");
});

document.getElementById("close-menuListUser").addEventListener("click", () => {
  document.querySelector(".menuListUser").classList.toggle("activeUSer");
});

const menuListNavUser = document.querySelector(".menuListUser .box-user .info");

/*
    -- check if the info is empty or no 
*/

if (
  localStorage.getItem("name-1") === "" ||
  localStorage.getItem("name-5") === "" ||
  localStorage.getItem("name-4") === ""
) {
  document.querySelector(".box-user").removeChild(menuListNavUser);
} else if (
  localStorage.getItem("name-1") === null ||
  localStorage.getItem("name-5") === null ||
  localStorage.getItem("name-4") === null
) {
  document.querySelector(".box-user").removeChild(menuListNavUser);
} else {
  menuListNavUser.innerHTML += `
<div class="time"><p>${localStorage.getItem("name-5")}</p></div>
<div class="name"><p>${localStorage.getItem("name-1")}</p></div>
<div class="doctor-name"><h2>${localStorage.getItem("name-4")}</h2></div>
<div class="price"><h1>20$</h1></div>
<div class="button">
  <button id="delete">
      <p>delete</p>
  </button>
</div>
`;
}

/*
    -- increase the number above user awesome
*/

document
  .getElementById("countNumber")
  .setAttribute(
    "data-number",
    document.querySelector(".box-user").childElementCount
  );



/*
    -- log out 
*/

document.querySelector("#login-btn1").addEventListener("click", () => {
  window.location.href = "../index.html";
  history.replaceState(null, null, "/");

});
document.querySelector("#login-btn").addEventListener("click", () => {
  window.location.href = "../index.html";
  history.replaceState(null, null, "/");
});