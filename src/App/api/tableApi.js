import { API } from "../../constants";

export function getDataApi() {
    return fetch(API)
        .then((resp) => {
            return resp.json()})
        .then(function(data) {
            return data;
        });
}