//the  mobile nav bar 
window.onload = function(){
    window.addEventListener('scroll', function (e){
      if (window.pageYOffset > 100){
        document.querySelector("header").classList.add('is-scrolling');
      } else {
        document.querySelector("header").classList.remove('is-scrolling');
      }
    });
  const menu_btn = document.querySelector('.hamburger');
  
  const mobile_menu = document.querySelector('.mobile-nav');
  menu_btn.addEventListener('click', function () {
  menu_btn.classList.toggle('is-active');
  mobile_menu.classList.toggle('is-active');
  });
}
// the active border 
var header = document.getElementById("home");
var btns = header.getElementsByClassName("hom");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
  var current = document.getElementsByClassName("active");
  if (current.length > 0) { 
    current[0].className = current[0].className.replace(" active", "");
  }
  this.className += " active";
  });
}
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "23px 30px";
    document.getElementById("navbar").style.boxShadow = "0rem  1rem 1rem #1b1b1b70";
    document.getElementById("navbar").style.transition = "0.4s";
  } else {
    // document.getElementById("navbar").style.padding = "10px 20px";
    document.getElementById("navbar").style.padding = "15px 30px";
    document.getElementById("navbar").style.boxShadow = "0rem  0rem 0rem  gray";
  }
}


