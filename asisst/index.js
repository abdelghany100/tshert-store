let searchBtn =document.querySelector('.searchBtn');
let  clossBtn =document.querySelector('.clossBtn');
let searchBox =document.querySelector('.searchBox');
let navbar = document.querySelector('.navbar')
let menuToggle =document.querySelector('.menuToggle')
let header =document.querySelector('header')

window.addEventListener('scroll', () =>{

    searchBox.classList.remove('active')
    clossBtn.classList.remove('active') 
    searchBtn.classList.remove('active')
    menuToggle.classList.remove('hide')
    
   


});

searchBtn.onclick = function(){
   searchBox.classList.add('active') 
   clossBtn.classList.add('active') 
   searchBtn.classList.add('active')
   menuToggle.classList.add('hide')
    header.classList.remove('open')

}
clossBtn.onclick = function(){
    searchBox.classList.remove('active') 
   clossBtn.classList.remove('active') 
   searchBtn.classList.remove('active')
   menuToggle.classList.remove('hide')




 }
 
 menuToggle.onclick = function() {
    header.classList.toggle('open')
    menuToggle.classList.toggle('fa-xmark')
  
 
 }


 const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1200,
    delay: 400,
   
})

sr.reveal('.backGroundImg .GerlImg, .frest, .p1, .tarmo .info, .search ',{origin:'right'})
sr.reveal('.backGroundImg .text,  .second, .p2, .tarmo .img ',{origin:'left'})
sr.reveal('.heading, .tarmo, .smothcolection, .subs, .subs .form, .subs h1, .subs p ',{delay:200})
sr.reveal('.logo, .product-grid .product, .revew .fas, .smothcolection .info , .navMenu ul li, .subs .social i, .navbar li ,navbar li a,  .menuToggle',{origin:'top', interval: 100})
sr.reveal('.thanks',{delay:500})
sr.reveal('.revew',{ interval: 150})
