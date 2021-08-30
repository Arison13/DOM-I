const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

// nav-bar links
const links = document.querySelectorAll('a');
links.forEach((item, index) => {
  item.textContent = siteContent['nav'] [`nav-item-${[index + 1]}`];
});

//cta content
const snippetImg = document.getElementById('cta-img');
snippetImg.setAttribute('src', siteContent["cta"]["img-src"]);
const title = document.querySelector('.cta-text h1');
title.textContent = siteContent['cta']['h1'];
const btn = document.querySelector('.cta-text button:nth-of-type(1)');
btn.textContent = siteContent ['cta'] ['button'];

//main content
const h4 = document.querySelectorAll('.text-content h4');
h4[0].textContent = siteContent['main-content']['features-h4'];
h4[1].textContent = siteContent['main-content']['about-h4'];
h4[2].textContent = siteContent['main-content']['services-h4'];
h4[3].textContent = siteContent['main-content']['product-h4'];
h4[4].textContent = siteContent['main-content']['vision-h4'];

const pTags = document.querySelectorAll('.text-content p');
pTags[0].textContent =siteContent['main-content'] ['features-content'];
pTags[1].textContent =siteContent['main-content'] ['about-content'];
pTags[2].textContent =siteContent['main-content'] ['services-content'];
pTags[3].textContent =siteContent['main-content'] ['product-content'];
pTags[4].textContent =siteContent['main-content'] ['vision-content'];

const mainImg = document.getElementById('middle-img');
mainImg.setAttribute('src', siteContent['main-content']['middle-img-src']);

//contact section
const contactName = document.querySelector('.contact h4');
contactName.textContent = siteContent['contact']['contact-h4'];

const address = document.querySelector('.contact p');
address.textContent = siteContent['contact']['address']

const phone = document.querySelector('.contact p:nth-of-type(2)');
phone.textContent = siteContent ['contact']['phone'];

const email = document.querySelector('.contact p:nth-of-type(3)');
email.textContent = siteContent ['contact']['email'];

//footer section
const footer = document.querySelector('.contact');
footer.nextElementSibling.textContent = siteContent['footer']['copyright'];