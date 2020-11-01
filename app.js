const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.5,
    rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
    entries,appearOnScroll){
        entries.forEach(entry =>{
            if(!entry.isIntersecting){
            return;
            }
            else{
                entry.target.classList.add('appear');
                appearOnScroll.unobserve(entry.target);
            }
        });

},appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

var f1 = document.getElementsByClassName("kg")[0];
var f2 = document.getElementsByClassName("preis3")[0];
    
f1.addEventListener("change",function(){
    f2.textContent = f1.value*7.5 +(" €");
})

var x=0;
var textEffect = "NAVETA AG";
var container = document.getElementById('effect');

function animate(){
    if(x<textEffect.length){
        container.innerHTML += textEffect.charAt(x);
        x++;
        setTimeout(animate,500);
    }
}
    animate();