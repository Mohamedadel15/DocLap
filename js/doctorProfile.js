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
