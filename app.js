// import functions and grab DOM elements
import { getBears } from './fetch-utils.js';
import { getFish } from './fetch-utils.js';
import { getgoblin } from './fetch-utils.js';
import { renderBear } from './render-utils.js';
import { renderFish } from './render-utils.js';

// let state

// set event listeners 

const listEl = document.querySelector('.bear-list', '.fish-list');
window.addEventListener('load', async () => {
    fetchAndDisplayBears();
    fetchAndDisplayFish();
    fetchAndDisplayGoblins()
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
    const goblins = await getgoblin();
    for (let goblin of goblins) {

        const goblinEl = renderGoblin(Goblin);
        listEl.append(goblinEl);
    }
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
