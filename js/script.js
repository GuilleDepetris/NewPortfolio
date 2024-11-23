let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// ===============================================================
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
  // ======================================================================
  let header = document.querySelector("header");

  header.classList.toggle("sticky", window.scrollY > 100);

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

ScrollReveal({
  reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(
  ".home-img, .services-container, .portfolio-box, .contact form",
  { origin: "bottom" }
);
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });


const toggleIconSun = document.getElementById('icon-sun');
const toggleIconMoon = document.getElementById('icon-moon');

// Al cargar la página, establece el estado inicial
window.addEventListener('DOMContentLoaded', () => {
  const savedMode = localStorage.getItem('darkMode') === 'true';

  if (savedMode) {
    document.body.classList.add('dark-mode');
    toggleIconSun.style.display = 'none';
    toggleIconMoon.style.display = 'inline';
  } else {
    toggleIconSun.style.display = 'inline';
    toggleIconMoon.style.display = 'none';
  }
});

toggleIconSun.addEventListener('click', () => {
  document.body.classList.add('dark-mode');
  toggleIconSun.style.display = 'none';
  toggleIconMoon.style.display = 'inline';

  // Guarda la preferencia en LocalStorage
  localStorage.setItem('darkMode', true);
});

toggleIconMoon.addEventListener('click', () => {
  document.body.classList.remove('dark-mode');
  toggleIconSun.style.display = 'inline';
  toggleIconMoon.style.display = 'none';

  // Guarda la preferencia en LocalStorage
  localStorage.setItem('darkMode', false);
});

// traductor 
const textsToChange = document.querySelectorAll("[data-section]");


const changeLanguage = async language => {
  const requestJson = await fetch(`./languages/${language}.json`)
  const texts = await requestJson.json()

  for (const textToChange of textsToChange){
    const section = textToChange.dataset.section
    const value = textToChange.dataset.value

    textToChange.innerHTML = texts[section][value];
  }
}
const flagsElement = document.getElementById('flags');

flagsElement.addEventListener('click', (e) => {
  changeLanguage(e.target.parentElement.dataset.language);
})

