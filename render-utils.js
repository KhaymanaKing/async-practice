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
    famousBearsEl.textContent = bear.famousbears;
    willEatYouEl.textContent = bear.willeatyou;

    bearEl.append(typeEl, colorEl, locationEl, famousBearsEl, willEatYouEl);

    return bearEl;

}

export function renderFish(fish){
    const fishEl = document.createElement ('div');
    const nameEl = document.createElement ('h3');
    const colorfulEl = document.createElement ('p');
    const saltwaterEl = document.createElement('p');
    const tasteGuessEl = document.createElement('p');
    


    fishEl.classList.add('fish');

    nameEl.textContent = `Fish name:  ${fish.name}`;
    colorfulEl.textContent = `Is it colorful:  ${fish.colorful}`;
    saltwaterEl.textContent = `Live in saltwater: ${fish.saltwater}`;
    tasteGuessEl.textContent = `How I think it would taste: ${fish.tasteguess}`;
    

    fishEl.append(nameEl, colorfulEl, saltwaterEl, tasteGuessEl,);

    return fishEl;

}

export function renderGoblin(goblin){
    const goblinEl = document.createElement ('div');
    const nameEl = document.createElement ('h3');
    const strengthEl = document.createElement ('p');
    const fearsEl = document.createElement('p');
    const houseMaterialEl = document.createElement('p');
    


    goblinEl.classList.add('goblin');

    nameEl.textContent = `Goblin name:  ${goblin.name}`;
    strengthEl.textContent = `Strength of  ${goblin.strength}`;
    fearsEl.textContent = `Afraid of ${goblin.fears}`;
    houseMaterialEl.textContent = `House is made of: ${goblin.housematerial}`;
    

    goblinEl.append(nameEl, strengthEl, fearsEl, houseMaterialEl,);

    return goblinEl;

}

export function renderSnake(snake){
    const snakeEl = document.createElement ('div');
    const nameEl = document.createElement ('h3');
    const colorfulEl = document.createElement ('p');
    const venomousEl = document.createElement('p');
    const locationEl = document.createElement('p');
    


    snakeEl.classList.add('snake');

    nameEl.textContent = `Snake name:  ${snake.name}`;
    colorfulEl.textContent = `Is colorful:  ${snake.colorful}`;
    venomousEl.textContent = `Is venomous: ${snake.venomous}`;
    locationEl.textContent = `House is made of: ${snake.location}`;
    

    snakeEl.append(nameEl, colorfulEl, venomousEl, locationEl);

    return snakeEl;

}


