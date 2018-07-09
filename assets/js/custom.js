/*---------------------------------------------------------
|   |   |   |   1. NAVBAR HEADER BG APPEAR   |   |   |   |        
-----------------------------------------------------------*/
function myFnc() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.querySelector(".navbar__header").style.backgroundColor = "black";
    } else {
        document.querySelector(".navbar__header").style.backgroundColor = "transparent";
    }
}


/*---------------------------------------------------
|   |   |   |   2. MOBILE NAVIGATION   |   |   |   |        
-----------------------------------------------------*/
let val= "none";
document.getElementById("navbar__toggle").addEventListener("click", ()=>{
    
    if(val == "block") {
        document.getElementById("navbar__menu").style.display = "none";
        val = "none";
    } 
    else {
        document.getElementById("navbar__menu").style.display = "block";
        val = "block";
    }
});


/*-------------------------------------------------------
|   |   |   |   4. TRAVELINFO ACTIVE TAB   |   |   |   |        
---------------------------------------------------------*/
let navbar = document.getElementById("travelinfo__tab");
let travelHolder = document.getElementsByClassName("travelinfo__holder");
travelHolder[0].style.display = "block";

navbar.addEventListener("click", function(e){
    let navbarClass = document.getElementsByClassName(e.target.className);
    
    for(let i=0; i<navbarClass.length; i++) {
        navbarClass[i].classList.remove("active__tab");
    }

    let targetId = e.target.id;
    document.getElementById(targetId).classList.add("active__tab");

    for(let i=0; i<travelHolder.length; i++) {
        travelHolder[i].style.display = "none";
    }

    document.getElementById(targetId + "__tab").style.display = "block";

});



$(document).ready(function(){
/*-------------------------------------------------------
|   |   |   |   1. OWL CAROUSEL   |   |   |   |        
---------------------------------------------------------*/
    var owl = $('.testimonial__container');
    owl.owlCarousel({
        items:3,
        loop:true,
        margin:10,
        autoplay:true,
        dots: true,
        smartSpeed:1000,
        autoplayHoverPause:true,
        responsive : {
            0:{
                items:1
            },
            600:{
                items:2
            },
            762:{
                items: 3
            }
        }
    });

});


if (navigator.userAgent.indexOf("Firefox") !== -1){
    // YES, the user is suspected to support look-behind regexps 
    document.querySelector(".cta__btn").style.marginLeft = "-155px";
}