const allListProfiles = document.querySelectorAll(
  ".allInfo .text-list .lists ul li"
);

document.getElementById("birth").addEventListener("click", () => {
  remove();
  document.getElementById("birth").classList.add("active");
  document.querySelector(".info").classList.add("right");
});

document.getElementById("general").addEventListener("click", () => {
  remove();
  document.getElementById("general").classList.add("active");
  document.querySelector(".about").classList.add("right");
});

document.getElementById("over").addEventListener("click", () => {
  remove();
  document.getElementById("over").classList.add("active");
  document.querySelector(".overview").classList.add("right");
});
function remove() {
  allListProfiles.forEach((ele) => {
    ele.classList.remove("active");
  });
  document.querySelectorAll(".allInfo .text-list .text div").forEach((ele) => {
    ele.classList.remove("right");
  });
}

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
    -- content for about section
*/

const allBtnResults = document.querySelectorAll("[data-result]");
const allCardsResults = document.querySelectorAll(".card-about-btn-info .card");
allBtnResults.forEach((ele) => {
  ele.addEventListener("click", () => {
    allBtnResults.forEach((ele) => {
      ele.classList.remove("active");
    });
    ele.classList.add("active");
    if (ele.getAttribute("data-result") === "vision") {
      allCardsResults.forEach((ele) => {
        ele.classList.add("hidden");
      });
      document.querySelector(".vision").classList.remove("hidden");
    }
    if (ele.getAttribute("data-result") === "strategy") {
      allCardsResults.forEach((ele) => {
        ele.classList.add("hidden");
      });
      document.querySelector(".strategy").classList.remove("hidden");
    }
    if (ele.getAttribute("data-result") === "mission") {
      allCardsResults.forEach((ele) => {
        ele.classList.add("hidden");
      });
      document.querySelector(".mission").classList.remove("hidden");
    }
  });
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
    window.location.href = "../home.html";
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
    -- delete card in user awesome
*/
document.getElementById("delete").addEventListener("click", () => {
  localStorage.setItem("name-1", "");
  window.location.reload();
});
