import {ADD_CARD, ADD_LIST} from "../types";
let listID = 1
let cardID = 3
const initialState = [
  {
    title: 'Good luck',
    id: 0,
    cards: [
      {
        id: 0,
        text: 'Yoo can anything just starting ',
      },
        {
            id: 1,
            text: 'Yoo can anything just starting ',
        },
        {
            id: 2,
            text: 'Yoo can anything just starting ',
        },
    ],
  },

];
export const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST:
        const newList ={
          title:action.payload,
          cards:[],
          id: listID
      }
      listID +=1
          return [
              ...state,newList
          ]
    case ADD_CARD:
      const newCard = {
        text:action.payload.text,
        id:cardID
      }
      cardID +=1
     const NewState = state.map(list => {
         if(list.id === action.payload.listID){
           return {
             ...list,
             cards:[...list.cards,newCard]
           }
         }else {
           return list
         }
       })
          return NewState
    default:
      return state;
  }
};
