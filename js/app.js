/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const menuArray = ['Section 1', 'Section 2', 'Section 3', 'Section 4'];
let i = 1;
const ul = document.getElementById('navbar__list');
const aMenus = document.getElementsByTagName('a');
/**
 * End Global Variables
*/


// Build menu / Scroll to section on link click

for(const menuItem of menuArray){
    const li = document.createElement('li');
    const a = document.createElement('a');
    a.href = `#section${i}`;
    a.textContent = menuItem;
    a.addEventListener("click", function(event) {
        for(const aItem of aMenus){
            aItem.classList.remove('active');
        }
       a.classList.add('active');
       event.preventDefault();
       menuScroll(a.getAttribute("href"));
      });
      
    ul.appendChild(li);
    li.appendChild(a);
    i++;
}



// Scroll to anchor ID using scrollTO event
function menuScroll(sectionId){
    $('html, body').animate({
		scrollTop: $(sectionId).offset().top
	}, 1000);
}


// Set sections as active
const anchor1 = document.querySelector("#section1");
const anchor2 = document.querySelector("#section2");
const anchor3 = document.querySelector("#section3");
const anchor4 = document.querySelector("#section4");

const anchorList = [anchor1, anchor2, anchor3, anchor4];

window.addEventListener("scroll", () => {
  for (const anchor of anchorList) {
   
    if (window.scrollY + 50 > anchor.offsetTop) {
        for (const restAnchor of anchorList){
            restAnchor.classList.remove('active')
        }
        anchor.classList.add('active')
       
        for(const aItem of aMenus){
            aItem.classList.remove('active');
            if(aItem.getAttribute('href').substr(1)===anchor.getAttribute('id')){
                aItem.classList.add('active');
            }
        }
       
    }
  }
});


