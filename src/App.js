import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import TrelloList from './Components/TrelloList';
import TrelloActionButton from './Components/TrelloActionButton';
import {DragDropContext} from "react-beautiful-dnd";
function App() {
  const list = useSelector((state) => state.List);
  console.log(list)
  function onDragEnd () {
    //Todo render Logic
  }
  return (
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="App">
          <header className="App-header">
            <div style={styles.container} className="container">
              {list.map((element) => {
                return (
                    <TrelloList
                        key={element.id}
                        title={element.title}
                        cards={element.cards}
                        lisID={element.id}
                    />
                );
              })}
              <TrelloActionButton list />
            </div>
          </header>
        </div>
      </DragDropContext>
  );
}
const styles = {
  container: {
    gridTemplateColumns: 'repeat(5 , 1fr)',
    display: 'grid',
    gridArea: 'center',
    gridGap: 20,

  },
};

export default App;
