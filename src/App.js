import React  from 'react';
import {useDispatch, useSelector} from 'react-redux';
import TrelloList from './Components/TrelloList';
import TrelloActionButton from './Components/TrelloActionButton';
import {DragDropContext, Droppable} from "react-beautiful-dnd";
import {sort} from "./store/Actions";
import styled from "styled-components";
function App() {
    const dispatch = useDispatch()
    const list = useSelector((state) => state.List);

  function onDragEnd (result) {
      const {destination,source,draggableId,type} = result
      if(!destination){
          return
      }
    dispatch(sort(
        source.droppableId,
        destination.droppableId,
        source.index,
        destination.index,
        draggableId,
        type
    ))
  }
  return (
      <DragDropContext onDragEnd={onDragEnd}>
          <div className="App">
          <AppHeader>
              <Droppable droppableId='all-lists' direction='horizontal' type='list'>
                  {provided =>(
                      <ListContainer {...provided.droppableProps} ref={provided.innerRef}>
                          {list.map((element,index) => {
                              return (
                                  <TrelloList
                                      key={element.id}
                                      title={element.title}
                                      cards={element.cards}
                                      lisID={element.id}
                                      index={index}
                                  />
                              );
                          })}
                          <TrelloActionButton list />
                      </ListContainer>
                  )}

              </Droppable>
          </AppHeader>
        </div>
      </DragDropContext>
  );
}
const ListContainer = styled.div`
        padding-top: 10px;
        max-width: 1900px;
        margin: 0 auto;
        max-height: 100vh;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-content: stretch;
        justify-content: space-around;
    `
const AppHeader = styled.div`
  color: black;
  min-height: 100vh;
  max-height: 200vh;
  user-select: none;
`

export default App;
