
import {ADD_LIST, DRAG_HAPPENED} from "../types";

export  function addList(title) {
    return{
        type:ADD_LIST,
        payload:title
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