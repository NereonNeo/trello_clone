import {ADD_CARD} from "../types";

export function addCards(listID,text) {
    return{
        type:ADD_CARD,
        payload: {text,listID}
    }
}