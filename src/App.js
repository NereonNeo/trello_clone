import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import TrelloList from './Components/TrelloList';
import TrelloActionButton from './Components/TrelloActionButton';
function App() {
  const list = useSelector((state) => state.List);
  return (
    <div className="App">
      <header className="App-header">
        <div style={styles.container} className="container">
          {list.map((element) => {
            return (
              <div>
                <TrelloList
                  key={element.id}
                  title={element.title}
                  cards={element.cards}
                />
              </div>
            );
          })}
          <TrelloActionButton list />
        </div>
      </header>
    </div>
  );
}
const styles = {
  container: {
    display: 'flex',
  },
};

export default App;
