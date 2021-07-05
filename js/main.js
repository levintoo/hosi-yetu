document.getElementById("trademark-slang").innerHTML="Hi there";
document.getElementById("trademark-text").innerHTML="Hi there this is no lorem";


let toggleButton= document.getElementById("menu-toggle");
let links = document.querySelector(".links");


toggleButton.style.transform ="rotate(0deg)";
toggleButton.style.transition ="1s";


toggleButton.addEventListener ("click", function(){
    links.classList.toggle("flex-column");
    links.classList.toggle("show-links");
    toggleButton.style.transform ="rotate(240deg)";
    toggleButton.style.transition ="1s";
})