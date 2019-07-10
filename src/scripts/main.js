import { createPlaces, listPlaces } from "./component/places";
import { getPlaceData } from "./api-handler/places-api"
import { getInterestData } from "./api-handler/interests-api"
import { createInterest, listInterests } from "./component/interests"

createPlaces()
getPlaceData().then(places => listPlaces(places))

createInterest()
getInterestData().then(interests => listInterests(interests))