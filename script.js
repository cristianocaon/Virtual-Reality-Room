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