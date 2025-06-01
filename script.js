const navs = document.querySelectorAll('.nav-list li');
const cubes = document.querySelectorAll('.box');
const sections = document.querySelectorAll('.section');

const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');

const portfolioLists = document.querySelectorAll('.portfolio-list');
const portfolioBoxs = document.querySelectorAll('.portfolio-box');


navs.forEach((nav, idx) => {
  nav.addEventListener('click', () => {
    
    const activenav = document.querySelector('.nav-list li.active');
    if (activenav) activenav.classList.remove('active');
    nav.classList.add('active');

    cubes.forEach(cube => {
      cube.style.transform = `rotateY(${idx * -90}deg)` ;
    


    });
    const activesection = document.querySelector('.section.active');
    if (activesection) activesection.classList.remove('active');
    if (sections[idx]) {
      sections[idx].classList.add('active');
    }
    
    const array = Array.from(sections);
    const arrSecs = array.slice(1, -1);
    arrSecs.forEach(arrSecs => {
      if (arrSecs.classList.contains('active')) {
        sections[4].classList.add('action-contact');
      }
    });
    if (sections[0].classList.contains('active')) {
      sections[4].classList.remove('action-contact');
    }
     
});
});








resumeLists.forEach((list, idx) => {
  list.addEventListener('click', () => {
    // Remove active class from previously active resume-list
    const activeList = document.querySelector('.resume-list.active');
    if (activeList) activeList.classList.remove('active');

    // Add active class to clicked resume-list
    list.classList.add('active');

    // Remove active class from previously active resume-box
    const activeBox = document.querySelector('.resume-box.active');
    if (activeBox) activeBox.classList.remove('active');

    // Add active class to the corresponding resume-box
    resumeBoxs[idx].classList.add('active');
  });
});

portfolioLists.forEach((list, idx) => {
  list.addEventListener('click', () => {
    
    const activeList = document.querySelector('.portfolio-list.active');
    if (activeList) activeList.classList.remove('active');

    list.classList.add('active');

     const activeBox = document.querySelector('.portfolio-box.active');
    if (activeBox) activeBox.classList.remove('active');
    portfolioBoxs[idx].classList.add('active');
  
});
});



setTimeout(() =>{
  sections[4].classList.remove('active');
}, 1500 );