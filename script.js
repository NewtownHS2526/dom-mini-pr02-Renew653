console.log("Space Launch Dash running");


const moveTo = (item, spot) => (spot <= 6 ? item.style.setProperty("grid-column", spot) : null);


let apollo_spot = 1;
let nebula_spot = 1;
let comet_spot  = 1;


// Query Selectors
const apolloBtn   = document.querySelector("#apollo-btn");
const nebulaBtn   = document.querySelector("#nebula-btn");
const cometBtn    = document.querySelector("#comet-btn");


const apolloRocket = document.querySelector("#apollo-rocket");
const nebulaRocket = document.querySelector("#nebula-rocket");
const cometRocket  = document.querySelector("#comet-rocket");


const winnerBox = document.querySelector("#winner");


// Click Handlers
const boostApollo = () => {
    apollo_spot += 1;
    moveTo(apolloRocket,apollo_spot);
};


const boostNebula = () => {
    nebula_spot += 1;
    moveTo(nebulaRocket,nebula_spot);
};


const boostComet = () => {
    comet_spot += 1;
    moveTo(cometRocket,comet_spot);
};


// Winner Check


function checkwinner1  (spot, rocket) {
    spot = apollo_spot
    rocket = "apollo";
    if (spot > 5) {
        winnerBox.textContent = `the ${rocket} rocket has won the race!`;
    }
};
function checkwinner2  (spot, rocket) {
    spot = nebula_spot
    rocket = "nebula";
    if (spot > 5) {
        winnerBox.textContent = `the ${rocket} rocket has won the race!`;
    }
};
function checkwinner3  (spot, rocket) {
    spot = comet_spot
    rocket = "comet";
        if (spot > 5) {
        winnerBox.textContent = `the ${rocket} rocket has won the race!`;
    }
};


// Events
apolloBtn.addEventListener("click", boostApollo);
nebulaBtn.addEventListener("click", boostNebula);
cometBtn.addEventListener("click", boostComet);
apolloBtn.addEventListener("click", checkwinner1);
nebulaBtn.addEventListener("click", checkwinner2);
cometBtn.addEventListener("click", checkwinner3)

