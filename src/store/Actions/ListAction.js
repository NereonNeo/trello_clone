
import {ADD_LIST, DELETE_LIST, DRAG_HAPPENED} from "../types";

export  function addList(title,allDate) {
    return{
        type:ADD_LIST,
        payload:{title,allDate}
    }
}
export  function sort(
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    droppableId,
    type
){
 return{
     type:DRAG_HAPPENED,
     payload:{
         droppableIdStart,
         droppableIdEnd,
         droppableIndexStart,
         droppableIndexEnd,
         droppableId,
         type
     }
 }
}
export function deleteList(num){
    return{
        type: DELETE_LIST,
        payload:num
    }
}