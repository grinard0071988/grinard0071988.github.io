function contactForm(e) {
  e.preventDefault();
  const name = e.target.name.value;
  const email = e.target.email.value;
  const message = e.target.message.value;

  if (name && email && message) {
    alert(`Thank you, ${name}! Your message has been sent successfully!.`);
    e.target.reset();
  } else {
    alert("Please fill out all fields.");
  }
}
document.getElementById("contact-form").addEventListener("submit", contactForm);

/** MENU ICON JS CODE**/
const menuIcon = document.querySelector("#menu_icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header navbar a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector("header navbar a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};

menuIcon.onclick = () => {
  menuIcon.classList.toggle("fa-xmark");
  navbar.classList.toggle("active");
};

// Get DOM Elements
const modal = document.querySelector("#my-modal");
const contactModal = document.querySelector("#contact-modal");
const modalBtn = document.querySelector("#p_btn");
const linkProjectBtn = document.querySelector("#link_project");

const openContactModal = document.querySelector("#contact_btn");
const closeBtn = document.querySelector(".close");
const closeContactModal = document.querySelector("#c-close");

// Events
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

linkProjectBtn.addEventListener("click", openModal);

window.addEventListener("click", outsideClick);
window.addEventListener("click", contactOutClick);

function opencontactModal(e) {
  e.preventDefault();
  contactModal.style.display = "block";
}
function closecontactModal() {
  contactModal.style.display = "none";
}
openContactModal.addEventListener("click", opencontactModal);
closeContactModal.addEventListener("click", closecontactModal);

// Open
function openModal() {
  modal.style.display = "block";
}
// Close
function closeModal() {
  modal.style.display = "none";
}
// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = "none";
  }
}
function contactOutClick(e) {
  if (e.target == contactModal) {
    contactModal.style.display = "none";
  }
}

// Experiences Modal JS
const expModal = document.querySelector(".exp_modal");
const expOverlay = document.querySelector(".overlay");
const openExpBtn = document.querySelectorAll(".work_list");
const closeExpBtn = document.querySelector(".btn--close-modal");

const expModalopen = function (e) {
  e.preventDefault();
  expModal.classList.remove("hidden");
  expOverlay.classList.remove("hidden");
};
const expModalclose = function () {
  expModal.classList.add("hidden");
  expOverlay.classList.add("hidden");
};
for (let i = 0; i < openExpBtn.length; i++)
  openExpBtn[i].addEventListener("click", expModalopen);

closeExpBtn.addEventListener("click", expModalclose);
expOverlay.addEventListener("click", expModalclose);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !expModal.classList.contains("hidden")) {
    expModalclose();
  }
});

//Service section functionality
const serBox = document.getElementsByClassName("service-box");
const cirBoxActive = document.getElementsByClassName("circle-box");
const iconActive = document.querySelectorAll(".i_con");

function myServiceBoxFun(box) {
  box.style.backgroundColor = "#b4c369";
}
function removeServiceBox(box) {
  box.style.backgroundColor = "";
}
function myCircleFun(cir) {
  cir.style.backgroundColor = "#2d2852";
  cir.style.left = "20px";
}
function iconFun(i) {
  i.style.color = "#ededed";
}
function removeIconFun(i) {
  i.style.color = "";
}

function removeCircleFun(cir) {
  cir.style.backgroundColor = "";
  cir.style.left = "10px";
}

for (let i = 0; i < serBox.length; i++) {
  serBox[i].addEventListener("mouseover", () => myServiceBoxFun(serBox[i]));
  serBox[i].addEventListener("mouseout", () => removeServiceBox(serBox[i]));
  cirBoxActive[i].addEventListener("mouseover", () =>
    myCircleFun(cirBoxActive[i])
  );
  cirBoxActive[i].addEventListener("mouseout", () =>
    removeCircleFun(cirBoxActive[i])
  );
  iconActive[i].addEventListener("mouseover", () => iconFun(iconActive[i]));
  iconActive[i].addEventListener("mouseout", () =>
    removeIconFun(iconActive[i])
  );
}
