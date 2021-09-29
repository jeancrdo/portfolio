var openMenu = document.querySelector(".hamburguer");

openMenu.addEventListener("click", function(){
   document.querySelector(".container").classList.toggle("showMenu");
});




var closeMenu = document.querySelector(".container");

closeMenu.addEventListener("click", function(){
   document.querySelector(".container").classList.toggle("closeMenu");
});


