// import functions and grab DOM elements
import { getBears, getFish, getGoblin, getSnake } from './fetch-utils.js';

import { renderBear, renderSnake, renderFish, renderGoblin } from './render-utils.js';




// let state

// set event listeners 

const listEl = document.querySelector('.bear-list', '.fish-list');
window.addEventListener('load', async () => {
    fetchAndDisplayBears();
    fetchAndDisplayFish();
    fetchAndDisplayGoblins();
    fetchAndDisplaySnake();
});




async function fetchAndDisplayBears(){

    const bears = await getBears();
    for (let bear of bears) {

        const bearEl = renderBear(bear);
        listEl.append(bearEl);
    }
}


async function fetchAndDisplayFish(){
    const fishes = await getFish();
    for (let fish of fishes) {

        const fishEl = renderFish(fish);
        listEl.append(fishEl);
    }
}
async function fetchAndDisplayGoblins(){
    const goblins = await getGoblin();
    for (let goblin of goblins) {

        const goblinEl = renderGoblin(goblin);
        listEl.append(goblinEl);
    }
}
async function fetchAndDisplaySnake(){
    const snakes = await getSnake();
    for (let snake of snakes) {

        const snakeEl = renderSnake(snake);
        listEl.append(snakeEl);
    }
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
