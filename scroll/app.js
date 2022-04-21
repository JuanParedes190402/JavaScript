const date = document.getElementById("date");
//Seleccionar el año presente para el footer
date.innerHTML = new Date().getFullYear();

const navtoggle = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const links = document.querySelector(".links");

navtoggle.addEventListener("click", function(){
    //aparecer los links de las secciones
    //linksContainer.classList.toggle("show-links");
    const linksHeight = links.getBoundingClientRect().height;
    const containerHeight = linksContainer.getBoundingClientRect().height;
    if(containerHeight===0){
        //trae el tamaño total de los links para evitar no verlos 
        linksContainer.style.height = `${linksHeight}px`;

    }
    else{
        linksContainer.style.height =0;
    }

});
const navbar =document.getElementById("nav");
const topLink =document.querySelector(".top-link");

//peso a navbar
window.addEventListener("scroll", function(){
    //console.log(this.window.pageYOffset);
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if(scrollHeight > navHeight ){
        navbar.classList.add("fixed-nav");
    }
    else{
        navbar.classList.remove("fixed-nav");
    }
    //condicion para aparecer la flecha en un tamaño dado
    if(scrollHeight >500){
        topLink.classList.add("show-link");
    }
    else{
        topLink.classList.remove("show-links");
    }

});
//Funcion para que el link te lleve exactamente a la seccion dada
const scrollLinks =document.querySelectorAll(".scroll-link");
scrollLinks.forEach(function(link){
    link.addEventListener("click",function(e){
        //Prevent default
        e.preventDefault();
        //slice trae el nombre de la seccion
        const id = e.currentTarget.getAttribute("href").slice(1);
        const element = document.getElementById(id);
        //trae los pixeles
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        let position = element.offsetTop - navHeight;
        const fixedNav = navbar.classList.contains("fixed-nav");
        if (!fixedNav) {
            position = position - navHeight;
        }
        if (navHeight > 82) {
            position = position + containerHeight;
        }
          window.scrollTo({
            left: 0,
            top: position,
          });
          linksContainer.style.height = 0;
    });
});