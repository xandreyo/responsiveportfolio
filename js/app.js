particlesJS.load('particles-js','js/particles.json',function(){
    console.log('particles.json loadedd...');
    });

window.addEventListener("scroll",function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",window.scrollY > 0);
});

