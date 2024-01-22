// Start Up Button reveal
let Upspan = document.querySelector(".up");

window.onscroll = function () {
  if (this.scrollY >= 640) {
    Upspan.classList.add("show");
  } else if (this.scrollY > 4700) {
    Upspan;
  } else {
    Upspan.classList.remove("show");
  }
};

Upspan.onclick = function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
// End Up Button reveal


// ===================================================================================

// Start Popup Login

// 1. Popup
var openLgnBtn = document.getElementById('lgn-btn');
var loginPopub = document.querySelector('.login');

openLgnBtn.addEventListener('click',  ()=> {
  loginPopub.style.display='block';
});

// 1.1 Cancel Btn
var cancelBtn = document.querySelector('.cancel');

cancelBtn.addEventListener('click', () => {
  loginPopub.style.display='none';
});

// 2. Animation
const container = document.getElementById('lgn-container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click' , ()=>{
    container.classList.add("active")
});

loginBtn.addEventListener('click' , ()=>{
    container.classList.remove("active")
});
// End Popup Login

// ===================================================================================

// Start Search Popup
var openSearch = document.getElementById('showSearch');
var search = document.querySelector('.search-container');

openSearch.addEventListener('click', ()=>{
  search.style.display = 'flex';
});

// 1.1 Close Search Btn
var cancelBtn = document.querySelector('.closeSearch');

cancelBtn.addEventListener('click', () => {
  search.style.display='none';
});
// End Search  Popup


// ===================================================================================

// Start Home page Courses reveal
const boxes = document.querySelectorAll(".box");

window.addEventListener("scroll", checkBoxes);
checkBoxes();

function checkBoxes() {
  const triggerBottm = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottm) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}
// End Home page reveal

// ===================================================================================

// Start revealing elements
// Javascript for revealing elements on scroll and load
const divs = document.querySelectorAll("div");

divs.forEach((div) => {
  // Add active class to all divs on the page according to the position of the page scrolled so foron page load and scroll
  window.addEventListener("load", eventListener);
  window.addEventListener("scroll", eventListener);

  function eventListener() {
    let windowHeight = window.innerHeight;
    let divRectTop = div.getBoundingClientRect().top;

    if (divRectTop < windowHeight) {
      div.classList.add("active");
    }
  }

  // Revealing elements one by one on scroll
  window.addEventListener("scroll", () => {
    let reveals = div.querySelectorAll(".reveal");

    reveals.forEach((reveal, index) => {
      if (div.classList.contains("active")) {
        const delay = 600;

        setTimeout(() => {
          reveal.classList.add("active");
        }, index * delay);
      }
    });
  });

  // Reveal elements one by one on load (page reload)
  window.addEventListener("load", () => {
    let reveals = div.querySelectorAll(".reveal");

    reveals.forEach((reveal, index) => {
      let windowHeight = window.innerHeight;
      let revealRectTop = reveal.getBoundingClientRect().top;

      if (revealRectTop < windowHeight) {
        const delay = 600;

        setTimeout(() => {
          reveal.classList.add("active");
        }, index * delay);
      }
    });
  });
});
// End revealing elements

// ===================================================================================

// navbar 
document.addEventListener('DOMContentLoaded', function () {
  const toggleMenuButton = document.querySelector('.toggle-menu');
  const navMenu = document.querySelector('header nav ul');

  toggleMenuButton.addEventListener('click', function () {
    navMenu.classList.toggle('show-menu');
  });
});
// End navbar

// ===================================================================================

                              /* Start Search Bar */
const product = [
  {
      id: 0,
      image: 'images/courses-details/access.jpg',
      link: 'courses-details/1.html?image=../images/courses-details/access.jpg',
      title: 'Access A',
      content: 'have fun while learning',
  },
  {
      id: 1,
      image: 'images/courses-details/access.jpg',
      link: 'courses-details/1.html?image=../images/courses-details/access.jpg',
      title: 'Access B',
      content: 'have fun while learning',
  },
  {
      id: 2,
      image: 'images/courses-details/Basic.jpg',
      link: 'courses-details/1.html?image=../images/courses-details/Basic.jpg',
      title: 'Basic A',
      content: 'have fun while learning',
  },
  {
      id: 3,
      image: 'images/courses-details/Basic.jpg',
      link: 'courses-details/1.html?image=../images/courses-details/Basic.jpg',
      title: 'Basic B',
      content: 'have fun while learning',
  },
  {
      id: 4,
      image: 'images/courses-details/1.jpg',
      link: 'courses-details/1.html',
      title: 'Level 1A',
      content: 'have fun while learning',
  },
  {
      id: 5,
      image: 'images/courses-details/1.jpg',
      link: 'courses-details/1.html',
      title: 'Level 1B',
      content: 'have fun while learning',
  },
  {
      id: 6,
      image: 'images/courses-details/2.jpg',
      link: 'courses-details/1.html?image=../images/courses-details/2.jpg',
      title: 'Level 2A',
      content: 'have fun while learning',
  },
  {
      id: 7,
      image: 'images/courses-details/2.jpg',
      link: 'courses-details/1.html?image=../images/courses-details/2.jpg',
      title: 'Level 2B',
      content: 'have fun while learning',
  },
  {
      id: 8,
      image: 'images/courses-details/3.jpg',
      link: 'courses-details/1.html?image=../images/courses-details/3.jpg',
      title: 'Level 3A',
      content: 'have fun while learning',
  },
  {
      id: 9,
      image: 'images/courses-details/3.jpg',
      link: 'courses-details/1.html?image=../images/courses-details/3.jpg',
      title: 'Level 3B',
      content: 'have fun while learning',
  },
  {
      id: 10,
      image: 'images/courses-details/4.jpg',
      link: 'courses-details/1.html?image=../images/courses-details/4.jpg',
      title: 'Level 4A',
      content: 'have fun while learning',
  },
  {
      id: 11,
      image: 'images/courses-details/4.jpg',
      link: 'courses-details/1.html?image=../images/courses-details/4.jpg',
      title: 'Level 4B',
      content: 'have fun while learning',
  },
  {
      id: 12,
      image: 'images/courses-details/5.jpg',
      link: 'courses-details/1.html?image=../images/courses-details/5.jpg',
      title: 'Level 5A',
      content: 'have fun while learning',
  },
  {
      id: 13,
      image: 'images/courses-details/5.jpg',
      link: 'courses-details/1.html?image=../images/courses-details/5.jpg',
      title: 'Level 5B',
      content: 'have fun while learning',
  },
];

const categories = [...new Set(product.map((item) => { return item }))]

document.getElementById('searchBar').addEventListener('keyup', (e) => {
  const searchData = e.target.value.toLowerCase();
  const filteredData = categories.filter((item) => {
      return (
          item.title.toLowerCase().includes(searchData)
      )
  })
  displayItem(filteredData)
});

const displayItem = (items) => {
  document.getElementById('root').innerHTML = items.map((item) => {
      var { image, title, content, link } = item;
      return (
          `<div class='box'>
              <a href="${link}"><div class='img-box'>
                  <img class='images' src=${image}></img>
              </div></a>
              <div class='bottom'>
                  <h2>${title}</h2>
                  <p>${content}</p>
              
              </div>
          </div>`
      )
  }).join('')
};
displayItem(categories);
// End Search Bar