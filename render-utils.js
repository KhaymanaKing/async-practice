export function renderBear(bear){
    const bearEl = document.createElement ('div');
    const typeEl = document.createElement ('h3');
    const colorEl = document.createElement ('p');
    const locationEl = document.createElement('p');
    const famousBearsEl = document.createElement('p');
    const willEatYouEl = document.createElement('p');


    bearEl.classList.add('bear');

    typeEl.textContent = bear.type;
    colorEl.textContent = bear.color;
    locationEl.textContent = bear.location;
    famousBearsEl.textContent = bear.famousBears;
    willEatYouEl.textContent = bear.

        bearEl.append(typeEl, colorEl, locationEl, famousBearsEl, willEatYouEl);



}