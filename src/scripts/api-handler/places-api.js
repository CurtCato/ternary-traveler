import { getData, postData, deleteData, putData } from "./api-handler";

function getPlaceData() {
  return getData("places");
}

function postPlaceData(placeholder) {
  return postData("places", placeholder);
}

function deletePlaceData(id) {
  return deleteData("places", id);
}

function putPlaceData(data) {
  return putData("places", data);
}

export { getPlaceData, postPlaceData, deletePlaceData, putPlaceData };
