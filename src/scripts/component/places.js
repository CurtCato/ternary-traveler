import {
  postPlaceData,
  deletePlaceData,
  putPlaceData
} from "../api-handler/places-api";

let placesContainer = document.querySelector("#container");

//Places factory function
function placeFactory(name, visa) {
  return {
    name: name,
    visa_required: visa
  };
}

//create places of interest form
function createPlaces() {
  placesContainer.innerHTML = `
    <fieldset>
    <label for="placeName">Place</label>
    <input type="text" name="placeName" id="place">
    </fieldset>
    <fieldset>
    <label for="visaReq">Is a Visa required? Check yes or no</label>
    <div>
    <input type="checkbox" value="true|false" id="checkbox" >
    </div>
    </fieldset>
    <button id="savePlace" type="button">Save Place</button>
    <div id="displayPlaces"></div>
    `;
  savePlaceListener();
}

//post places to the DB. event listener on savePlace button

function savePlaceListener() {
  let saveBtn = document.querySelector("#savePlace");
  saveBtn.addEventListener("click", () => {
    console.log("save");
    let nameOfPlace = document.querySelector("#place").value;
    let checkbox = document.querySelector("#checkbox").checked;
    let inputPlace = placeFactory(nameOfPlace, checkbox);
    console.log(inputPlace);
    postPlaceData(inputPlace).then(() => {
      createPlaces()
    });
  });
}

// get the place data from DB


//list places

const listPlaces = (placesArr) => {
    let placeDisplay = document.querySelector("#displayPlaces")
    placeDisplay.innerHTML = ""
    placesArr.forEach(place => {
        displayPlaces(place)
    })
}

//function display places of interest
function displayPlaces(place) {
    console.log(place)
    let placesDisplay = document.querySelector("#displayPlaces")
    placesDisplay.innerHTML += `
        <section id=${place.id}>
        <h2>${place.name}<h2>
        <h3>Visa Required: ${place.visa_required}</h3>
        <button id="placeEditBtn"
        </section>
    `
}



export { createPlaces, listPlaces };
