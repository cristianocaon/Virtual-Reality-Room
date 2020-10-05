let covidBtn = document.querySelector('#covidBtn');

covidBtn.addEventListener('click', function () {
    console.log("Covid button clicked!!!");
    let covid = document.querySelector('#covid_group');
    console.log(covid.getAttribute('visible'));

    if (covid.getAttribute('visible') == false) {
        covid.setAttribute('visible', true);
    } else {
        covid.setAttribute('visible', false);
    }
});

let fanBtn = document.querySelector('#fanBtn');
let flag = true;

fanBtn.addEventListener('click', function () {
    console.log("Fan button clicked!!!");
    let fan1 = document.querySelector('#fan1');
    let fan2 = document.querySelector('#fan2');

    if (fan1.getAttribute("loop") == "true" && fan2.getAttribute("loop") == "true") {
        console.log("Works")
        fan1.setAttribute('loop', "false");
        fan2.setAttribute('loop', "false");
        fan1.setAttribute('to', "0 0 0");
        fan2.setAttribute('to', "0 90 0");
    } else {
        console.log(fan1.getAttribute("loop"), fan2.getAttribute("loop"))
        fan1.setAttribute('loop', "true");
        fan2.setAttribute('loop', "true");
        fan1.setAttribute('to', "0 360 0");
        fan2.setAttribute('to', "0 450 0");
    }
});

let hearthBtn = document.querySelector('#hearthBtn');

hearthBtn.addEventListener('click', function () {
    console.log("Hearth button clicked!!!");
    let fire = document.querySelector('#fire');
    // console.log(fire.getAttribute('visible'));

    if (fire.getAttribute('visible') == false) {
        fire.setAttribute('visible', true);
    } else {
        fire.setAttribute('visible', false);
    }
});