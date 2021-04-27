import {ADD_CARD, ADD_LIST, DELETE_LIST, DRAG_HAPPENED} from "../types";
let listID = 1
let cardID = 4
const initialState = [
  {
    title: 'Good luck',
    id: `list-${0}`,
    cards: [
      {
        id: `card-${1}`,
        text: 'Yoo can anything just starting 1 ',
      },
        {
            id: `card-${2}`,
            text: 'Yoo can anything just starting 2',
        },
        {
            id: `card-${3}`,
            text: 'Yoo can anything just starting 3',
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
          id: `list-${listID}`
      }
      listID +=1
          return [
              ...state,newList
          ]
    case ADD_CARD:{
        const newCard = {
            text: action.payload.text,
            id: `card-${cardID}`
        }
        cardID += 1
        const NewState = state.map(list => {
            if (list.id === action.payload.listID) {
                return {
                    ...list,
                    cards: [...list.cards, newCard]
                }
            } else {
                return list
            }
        })
        return NewState
    }
    case DRAG_HAPPENED:
          const {
              droppableIdStart,
              droppableIdEnd,
              droppableIndexStart,
              droppableIndexEnd,
              type
          } = action.payload
          const newState = [...state];
          //dragging list around
          if(type === 'list'){
              const list = newState.splice(droppableIndexStart,1)
              newState.splice(droppableIndexEnd,0,...list)
              return newState
          }
          //in the same list
          if(droppableIdStart === droppableIdEnd){
            const list = state.find(list => droppableIdStart === list.id)
              const card = list.cards.splice(droppableIndexStart,1)
              list.cards.splice(droppableIndexEnd,0,...card)
          }

          //other list
          if(droppableIdStart !== droppableIdEnd){
              //find the list where drag happened
            const listStart = state.find(list => droppableIdStart === list.id)
              //pull out the card from this list
              const card = listStart.cards.splice(droppableIndexStart,1)
              //find the list where drag ended
              const listEnd = state.find(list => droppableIdEnd === list.id)
              //put the card in the new list
              listEnd.cards.splice(droppableIndexEnd,0,...card)
          }
          return  newState
      case DELETE_LIST:
          return  state.filter((x,)=> x.id !== action.payload)
    default:
      return state;
  }
};
