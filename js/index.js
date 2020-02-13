const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

//images
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

let cirImg = document.getElementById("cta-img");
cirImg.setAttribute("src", siteContent["cta"]["img-src"]);

let midImg = document.getElementById("middle-img");
midImg.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

//nav
let links = document.querySelectorAll("a");
links[0].textContent = siteContent["nav"]["nav-item-1"];
links[1].textContent = siteContent["nav"]["nav-item-2"];
links[2].textContent = siteContent["nav"]["nav-item-3"];
links[3].textContent = siteContent["nav"]["nav-item-4"];
links[4].textContent = siteContent["nav"]["nav-item-5"];
links[5].textContent = siteContent["nav"]["nav-item-6"];

Array.from(links).forEach(link => {
  link.style.color = "green";
});

//WHY DOESN'T THIS WORK???
// let links = document.querySelectorAll("nav a");
// links.forEach((a, index) => {
//   a.textContent = siteContent(["nav"][`nav-item-${index + 1}`]);
// });

//cta-section
let ctaH1 = document.querySelector("h1");
ctaH1.textContent = "DOM \n Is \n Awesome";
ctaH1.setAttribute("style", "white-space: pre;");

let ctaBtn = document.querySelector("button");
ctaBtn.textContent = siteContent["cta"]["button"];

//main-content & headers
let mainHeaders = document.querySelectorAll(".top-content h4");
mainHeaders[0].textContent = siteContent["main-content"]["features-h4"];
mainHeaders[1].textContent = siteContent["main-content"]["about-h4"];

let mainP = document.querySelectorAll(".top-content p");
mainP[0].textContent = siteContent["main-content"]["features-content"];
mainP[1].textContent = siteContent["main-content"]["about-content"];

//bottom-content
let bottomHeaders = document.querySelectorAll(".bottom-content h4");
bottomHeaders[0].textContent = siteContent["main-content"]["services-h4"];
bottomHeaders[1].textContent = siteContent["main-content"]["product-h4"];
bottomHeaders[2].textContent = siteContent["main-content"]["vision-h4"];

let bottomP = document.querySelectorAll(".bottom-content p");
bottomP[0].textContent = siteContent["main-content"]["services-content"];
bottomP[1].textContent = siteContent["main-content"]["product-content"];
bottomP[2].textContent = siteContent["main-content"]["vision-content"];

//contact
let contactH4 = document.querySelector(".contact h4");
contactH4.textContent = siteContent["contact"]["contact-h4"];

let contactP = document.querySelectorAll(".contact p");
contactP[0].textContent = "123 Way 456 Street \n Somewhere, USA";
contactP[0].setAttribute("style", "white-space: pre;");
contactP[1].textContent = siteContent["contact"]["phone"];
contactP[2].textContent = siteContent["contact"]["email"];

//footer
let footerP = document.querySelector("footer p");
footerP.textContent = siteContent["footer"]["copyright"];

//TASK 3: Add new content
let nav = document.querySelector("nav");
const Devs = document.createElement("a");
Devs.textContent = "Devs";
nav.appendChild(Devs);
Devs.style.color = "green";
Devs.style.cursor = "pointer";

const Home = document.createElement("a");
Home.textContent = "Home";
nav.prepend(Home);
Home.style.color = "green";
Home.style.cursor = "pointer";
