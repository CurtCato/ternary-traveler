import {
  getInterestData,
  postInterestData,
  deleteInterestData,
  putInterestData
} from "../api-handler/interests-api";

let interestsContainer = document.querySelector("#interestsContainer");


//Places factory function
function ineterestsFactory(placeId, name, description, cost, review ) {
  return {
    placeId: id,
    name: name,
    description: describe,
    cost: cost,
    review: review
  };
}

//create places of interest form
function createInterest() {
  interestsContainer.innerHTML = `
    <fieldset>
    <label for="placeId">Place Id</label>
    <input type="text" name="placeId" id="place">
    </fieldset>
    <fieldset>
    <label for="name">Name of Interest</label>
    <input type="text" name="name" id="interestName">
    </fieldset>
    <fieldset>
    <label for="description">Description of Interest</label>
    <input type="text" name="description" id="interestDescription">
    </fieldset>
    <fieldset>
    <label for="cost">Cost</label>
    <input type="text" name="cost" id="interestCost">
    </fieldset>
    <fieldset>
    <label for="review">Review of Interest</label>
    <input type="text" name="review" id="interestReview">
    </fieldset>
    <button id="saveInterest" type="button">Save Interest</button>
    <div id="displayInterests"></div>
    `;
  saveInterestListener();
}

//post interests to the DB. event listener on savePlace button

function saveInterestListener() {
  let saveBtn = document.querySelector("#saveInterest");
  saveBtn.addEventListener("click", () => {
    console.log("save");
    let placeID = document.querySelector("#placeId").value;
    let intName = document.querySelector("#interestName").value;
    let intDesc = document.querySelector("#interestDescription")
    let intCost = document.querySelector("#interestCost")
    let intRev = document.querySelector("#interestReview")
    let inputInterest = placeFactory(placeID, intName, intDesc, intCost, intRev);
    console.log(inputInterest);
    postPlaceData(inputInterest).then(() => {
      createInterest()
    });
  });
}

// get the place data from DB


//list places

const listInterests = (interestsArr) => {
    let interestDisplay = document.querySelector("#displayInterests")
    interestDisplay.innerHTML = ""
    interestsArr.forEach(interest => {
        displayInterest(interest)
    })
}

//function display places of interest
function displayInterest(interest) {
    console.log(interest)
    let interestDisplay = document.querySelector("#displayInterests")
    interestDisplay.innerHTML += `
        <section id=${interest.id}>
        <h2>${interest.name}<h2>
        <h3>${interest.description}</h3>
        <p>${interest.cost}</p>
        <p>${interest.review}</p>
        <button id="placeEditBtn" type="button">Edit Interests</button>
        </section>
    `
}

export { createInterest, listInterests }