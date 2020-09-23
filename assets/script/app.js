const btn = document.getElementById("toggle-nav");
const nav = document.getElementById("nav");
const togline = document.getElementsByClassName("line");

btn.addEventListener("click", function () {
  nav.classList.toggle("nav-active");
  togline[0].classList.toggle("l1");
  togline[0].classList.toggle("l2");
  togline[2].classList.toggle("l2-2");
  togline[2].classList.toggle("l1-1");
});

const card = document.querySelectorAll(".card-icn");

card.forEach((e) => {
  e.addEventListener("mouseenter", function () {
    this.classList.add("hovered");
  });
  e.addEventListener("mouseleave", function () {
    this.classList.remove("hovered");
  });
});

// Category filter

function myFunction() {
  // Declare variables
  var input, filter, li, a, i, txtValue;
  input = document.getElementById("searchValue");
  filter = input.value.toUpperCase();
  li = document.getElementsByClassName("card-classes");
  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < li.length; i++) {
    a = li[i].getElementsByTagName("h1")[0];
    h3 = li[i].getElementsByTagName("h3")[0];
    h3val = h3.textContent || h3.innerText;
    txtValue = a.textContent || a.innerText;
    if (
      txtValue.toUpperCase().indexOf(filter) > -1 ||
      h3val.toUpperCase().indexOf(filter) > -1
    ) {
      li[i].style.display = "";
      document.getElementById("cmn-soon").style.display = "block"
    } else {
      li[i].style.display = "none";
      document.getElementById("cmn-soon").style.display = "none"
    }
    h3 = li[i].getElementsByTagName("h3")[0];
    h3val = h3.textContent || h3.innerText;
  }
}

const submitBtn = document.querySelector("button.submit-email");
const emailVal = document.getElementById("email-value");
const emailUser = document.getElementById("email-user");
const modalCard = document.querySelector(".modal-join");

submitBtn.addEventListener("click", function () {
  function emailIsValid(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  if (emailVal.value == "") {
    return false;
  } else if (!emailIsValid(emailVal.value)) {
    modalCard.style.display = "";
    const button = document.querySelectorAll(".modal-join button");
    document.getElementById("ifError").innerHTML = "Email Tidak Valid";
    document.querySelector(".modal-join p").innerHTML =
      "Masukkan format email yang valid.";

    button.forEach((e) => {
      e.addEventListener("click", function () {
        modalCard.style.display = "none";
        emailVal.value = "";
      });
    });
  } else {
    modalCard.style.display = "flex";
    emailUser.style.fontWeight = "bold";
    emailUser.innerHTML = emailVal.value;

    const button = document.querySelectorAll(".modal-join button");

    button.forEach((e) => {
      e.addEventListener("click", function () {
        modalCard.style.display = "none";
        emailVal.value = "";
      });
    });
  }
});

// ref
function toClassPage() {
  window.location.href = "./class/";
}

function toBlogPage() {
  window.location.href = "./blogs/";
}

function toHomePage() {
  window.location.href = "/";
}

// Redirect

function toAbout() {
  window.location.href = "./about"
}

document.onkeydown = function (evn) {
  evn = evn || window.event;
  if (evn.keyCode == 27) {
    modalCard.style.display = "none";
    emailVal.value = "";
  }
  if (evn.keyCode == 13) {
    function emailIsValid(email) {
      return /\S+@\S+\.\S+/.test(email);
    }

    if (emailVal.value == "") {
      return false;
    } else if (!emailIsValid(emailVal.value)) {
      modalCard.style.display = "";
      const button = document.querySelectorAll(".modal-join button");
      document.getElementById("ifError").innerHTML = "Email Tidak Valid";
      document.querySelector(".modal-join p").innerHTML =
        "Masukkan format email yang valid.";

      button.forEach((e) => {
        e.addEventListener("click", function () {
          modalCard.style.display = "none";
          emailVal.value = "";
        });
      });
    } else {
      modalCard.style.display = "flex";
      emailUser.style.fontWeight = "bold";
      emailUser.innerHTML = emailVal.value;

      const button = document.querySelectorAll(".modal-join button");

      button.forEach((e) => {
        e.addEventListener("click", function () {
          modalCard.style.display = "none";
          emailVal.value = "";
        });
      });
    }
  }
};

window.addEventListener('scroll', function (e) {
  const scrollBtn = document.getElementById("pop-scroll-up");
  scrollBtn.addEventListener('click', function () {
    window.location.href = "#"
  })
  yPos = window.scrollY;
  if (yPos > 600) {
    scrollBtn.style.display = "flex"
    scrollBtn.classList.add("fadeIn");
  } else {
    scrollBtn.classList.add("fadeIn");
    scrollBtn.style.display = "none"
  }
});