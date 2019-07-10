import { getData, postData, deleteData, putData } from "./api-handler";

function getInterestData() {
  return getData("interests");
}

function postInterestData() {
  return postData("interests");
}

function deleteInterestData(id) {
  return deleteData("interests", id);
}

function putInterestData(data) {
  return putData("interests", data);
}

export {
  getInterestData,
  postInterestData,
  deleteInterestData,
  putInterestData
};
