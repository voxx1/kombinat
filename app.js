
let nav = document.querySelector('nav');
let logo = document.getElementById('navbar-logo');

window.addEventListener('scroll', function() {
    if (window.pageYOffset > 20) {
        nav.classList.add('bg-white');
        logo.classList.add('logo-upper-scroll');
    } else {
        nav.classList.remove('bg-white');
        logo.classList.remove('logo-upper-scroll');
    }
})

AOS.init();

let data = [
    {open:9.00, close:17.00},
    {open:7.30, close:19.00},
    {open:7.30, close:19.00},
    {open:7.30, close:19.00},
    {open:7.30, close:19.00},
    {open:7.30, close:19.00},
    {open:9.00, close:17.00}
];

let date = new Date();
let dayOfWeek = date.getDay(); // 0 is Sunday, 1 is Monday, etc...
let openingTimes = data[dayOfWeek];
let openClosed = false; // closed by default

// check that there are opening times for today
if (openingTimes.hasOwnProperty('open') && openingTimes.hasOwnProperty('close')){
    let hour = date.getHours()
    let minutes = date.getMinutes()
    openClosed = openingTimes.open <= hour + (minutes / 60) && hour + (minutes / 60) < openingTimes.close;
}
let msg =   function () { 
    if (openClosed == true){
        return  "Jesteśmy obecnie otwarci! Serdecznie zapraszamy!";
    } else { 
        return "Niestety, ale jesteśmy już zamknięci :( Zapraszamy jutro!";
    }
}
$( document ).ready(function() {
    $("#open_close").html(msg());
});


function myFunction() {
    let element = document.getElementById("navbarSupportedContent");
    element.classList.remove("show");
 }
   
