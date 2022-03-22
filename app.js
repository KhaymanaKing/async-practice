// import functions and grab DOM elements
import { getBears } from './fetch-utils.js';
// let state

// set event listeners 

async function fetchAndDisplayBears(){

    const bears = await getBears();
    for (let bear of bears) {

        const bearEl = renderBear(bear);
        bearListEl.append(bearEl);
    }
}
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
