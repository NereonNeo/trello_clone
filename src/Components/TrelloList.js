import React from 'react';
import TrelloActionButton from './TrelloActionButton';
import TrelloCard from './TrelloCard';
import {Droppable}  from "react-beautiful-dnd";

const TrelloList = ({ title, cards,lisID }) => {
  return (
      <Droppable droppableId={String(lisID)}>
        {provided=>(
            <div {...provided.droppableProps} ref={provided.innerRef} style={styles.container}>
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

  );
};
const styles = {
  container: {
    backgroundColor: 'gray',
    borderRadius: '5px',
    width: 300,
    padding: 8,
    marginRight: 8,
    height:' 100%'
  },
};

export default TrelloList;
