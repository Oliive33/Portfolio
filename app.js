//Menu Navigation Left

const btnMenu = document.querySelector(".btn-rond-menu");
const nav = document.querySelector(".nav-left");
const allItemNav = document.querySelectorAll(".nav-menu-item");
const ligne = document.querySelector(".cont-ligne");

btnMenu.addEventListener("click", () => {
  ligne.classList.toggle("active");
  nav.classList.toggle("menu-visible");
});

if (window.matchMedia("(max-width: 1300px)")) {
  allItemNav.forEach((item) => {
    item.addEventListener("click", () => {
      nav.classList.toggle("menu-visible");
      ligne.classList.toggle("active");
    });
  });
}

//Animation écriture

const txtAnim = document.querySelector(".txt-animation");

let typewriter = new Typewriter(txtAnim, {
  loop: false,
  deleteSpeed: 20,
});

typewriter
  .pauseFor(1800)
  .changeDelay(30)
  .typeString("Hello, moi c'est Olivier")
  .pauseFor(300)
  .typeString("<strong>, Développeur Front-end</strong> 😃!!")
  .pauseFor(1000)
  .deleteChars(14)
  .typeString('<span style="color: #27ae60;"> CSS</span> !')
  .pauseFor(1000)
  .deleteChars(5)
  .typeString('<span style="color: #381DD9;"> Javascript</span> !')
  .pauseFor(1000)
  .deleteChars(52)
  .typeString("<span>Je vous souhaite une bonne visite sur mon site</span>!")
  .start();

//Animation contact

const input_fields = document.querySelectorAll("input");

for (let i = 0; i < input_fields.length; i++) {
  let field = input_fields[i];

  field.addEventListener("input", (e) => {
    if (e.target.value !== "") {
      e.target.parentNode.classList.add("animation");
    } else if (e.target.value == "") {
      e.target.parentNode.classList.remove("animation");
    }
  });
}

//Anim GSAP & ScollMagic

const navbar = document.querySelector(".nav-left");
const titre = document.querySelector("h1");
const btn = document.querySelectorAll(".btn-acc");
const btnMedias = document.querySelectorAll(".media");
const btnRondAccueil = document.querySelector(".btn-rond");

const TL1 = gsap.timeline({ paused: true });

TL1.to(navbar, { left: "0px", ease: Power3.easeOut, duration: 0.3 })
  .from(titre, { y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.6 })
  .staggerFrom(btn, 1, { opacity: 0 }, 0.2, "-=0.30")
  .staggerFrom(btnMedias, 1, { opacity: 0 }, 0.2, "-=0.75")
  .from(
    btnRondAccueil,
    { y: -50, opacity: 0, ease: Power3.easeOut, duration: 0.5 },
    "-=1"
  );

window.addEventListener("load", () => {
  TL1.play();
});

// Animation ScrollMagic GSAP presentation

const presentationContainer = document.querySelector(".presentation");
const titrePres = document.querySelector(".titre-pres");
const presGauche = document.querySelector(".pres-gauche");
const listePres = document.querySelectorAll(".item-liste");

const tlpres = new TimelineMax();

tlpres
  .from(titrePres, { y: -200, opacity: 0, duration: 0.6 })
  .from(presGauche, { y: -20, opacity: 0, duration: 0.6 }, "-=0.5")
  .staggerFrom(listePres, 1, { opacity: 0 }, 0.2, "-=0.5");

const controller = new ScrollMagic.Controller();

const scene = new ScrollMagic.Scene({
  triggerElement: presentationContainer,
  triggerHook: 0.5,
  reverse: false,
})
  .setTween(tlpres)
  // .addIndicators()
  .addTo(controller);

// Anim portfolio

const projetsContainer = document.querySelector(".projets");
const titreProjet = document.querySelector(".titre-projet");
const itemProjets = document.querySelectorAll(".vague1");

const tlProjets = new TimelineMax();

tlProjets
  .from(titreProjet, { y: -50, opacity: 0, duration: 0.5 })
  .staggerFrom(itemProjets, 1, { opacity: 0 }, 0.3, "-=0.5");

const scene2 = new ScrollMagic.Scene({
  triggerElement: itemProjets,
  triggerHook: 0.5,
  reverse: false,
})

  .setTween(tlProjets)
  // .addIndicators()
  .addTo(controller);

//vague2

const itemProjets2 = document.querySelectorAll(".vague2");

const tlProjets2 = new TimelineMax();

tlProjets2.staggerFrom(itemProjets2, 1, { opacity: 0 }, 0.2, "-=0.5");

const scene3 = new ScrollMagic.Scene({
  triggerElement: itemProjets,
  triggerHook: 0.2,
  reverse: false,
})

  .setTween(tlProjets2)
  // .addIndicators()
  .addTo(controller);

// Vague 3

const itemProjets3 = document.querySelectorAll(".vague3");

const tlProjets3 = new TimelineMax();

tlProjets3.staggerFrom(itemProjets3, 1, { opacity: 0 }, 0.2, "-=0.5");

const scene4 = new ScrollMagic.Scene({
  triggerElement: itemProjets2,
  triggerHook: 0.2,
  reverse: false,
})

  .setTween(tlProjets3)
  // .addIndicators()
  .addTo(controller);

// Animation range
const sectionComp = document.querySelector(".section-range");
const titreComp = document.querySelector(".titre-exp");
const allLabel = document.querySelectorAll(".label-skill");
const allPourcent = document.querySelectorAll(".number-skill");
const allBarres = document.querySelectorAll(".barre-skill");
const allShadowBarres = document.querySelectorAll(".barre-grises");

const tlCompetences = new TimelineMax();

tlCompetences
  .from(titreComp, { opacity: 0, duration: 0.6 })
  .staggerFrom(allLabel, 0.5, { y: -50, opacity: 0 }, 0.2, "-=0.5")
  .staggerFrom(allPourcent, 0.5, { y: -10, opacity: 0 }, 0.2, "-=1")
  .staggerFrom(allShadowBarres, 0.5, { y: -10, opacity: 0 }, 0.2, "-=1")
  .staggerFrom(allBarres, 0.5, { y: -10, opacity: 0 }, 0.2, "-=1");

const scene5 = new ScrollMagic.Scene({
  triggerElement: sectionComp,
  reverse: false,
})

  .setTween(tlCompetences)
  .addTo(controller);

//Anim Slider
const btnRight = document.querySelector(".btn-next");
const btnLeft = document.querySelector(".btn-prev");
const container = document.querySelector(".container");
const allSlides = Array.from(document.querySelectorAll(".slide"));
const indexIndic = document.querySelector(".counter span:nth-child(1)");
let index = 0;

function animRight() {
  const TLRight = gsap.timeline();

  TLRight.set(indexIndic, {
    innerText: index + 1,
  }).to(allSlides[index], { duration: 0.6, x: 0 });
}

function animLeft() {
  const TLLeft = gsap.timeline();

  TLLeft.set(indexIndic, {
    innerText: index,
  }).to(allSlides[index], { duration: 0.6, x: "-100%" });
}

const negation = gsap.to(container, {
  paused: true,
  keyframes: [
    { duration: 0.1, x: -4 },
    { duration: 0.1, x: 4 },
    { duration: 0.1, x: -4 },
    { duration: 0.1, x: 0 },
  ],
});

function handleDirection(direction) {
  if (direction === "next") {
    if (index === 7) {
      negation.seek(0);
      negation.play();
      return;
    }

    index++;
    animRight();
  } else if (direction === "prev") {
    if (index === 0) {
      negation.seek(0);
      negation.play();
      return;
    }

    animLeft();
    index--;
  }
}

btnRight.addEventListener("click", () => {
  handleDirection("next");
});

btnLeft.addEventListener("click", () => {
  handleDirection("prev");
});
