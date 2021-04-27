import React from 'react';
import TrelloActionButton from './TrelloActionButton';
import TrelloCard from './TrelloCard';
import {Draggable, Droppable} from "react-beautiful-dnd";
import styled from "styled-components";

const TrelloList = ({ title, cards,lisID,index }) => {
  return (
      <Draggable draggableId={String(lisID)} index={index}>
          {provided => (
              <TrelloListContainer {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} >
              <Droppable droppableId={String(lisID)}>
                  {provided=>(
                      <div {...provided.droppableProps} ref={provided.innerRef}>
                          <h1>{title}</h1>
                          {cards.map((element,index) => {
                              return (
                                  <TrelloCard text={element.text} key={element.id} id={element.id} index={index}/>
                              );
                          })}
                          <TrelloActionButton listID={lisID} />
                          {provided.placeholder}
                      </div>
                  )
                  }
              </Droppable>
              </TrelloListContainer>
          )}
      </Draggable>

  );
};
const TrelloListContainer = styled.div`
  background:linear-gradient(135deg, #d1d5db 0%,#a5abb5 100%);
  border-radius: 5px;
  width: 300px;
  padding: 8px;
  margin-right: 8px;
  height: 100%;
  margin-bottom:8px;
`


export default TrelloList;
