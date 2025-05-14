document.getElementById('animateBtn').addEventListener('click', function (){
const boxx = document.getElementById('boxx');
boxx.classList.toggle('animate');
});

document.getElementById('startAnimation').addEventListener('click', function(){
    const circle = document.getElementById('circle');
    circle.style.animation = 'expand 3s ease-in-out forwards';
});

const styleSheet = document.styleSheets[0];
styleSheet.insertRule(`
@keyframes expand {
    0% {
        transform: scale(1);
    }
    100% {
        transform: scale(2);
    }
}`, styleSheet.cssRules.length);