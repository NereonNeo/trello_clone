import React from 'react';
import TrelloActionButton from './TrelloActionButton';
import TrelloCard from './TrelloCard';

const TrelloList = ({ title, cards }) => {
  return (
    <div>
      <div style={styles.container}>
        <h1>{title}</h1>
        {cards.map((element) => {
          return (
            <div>
              <TrelloCard text={element.text} key={element.id} />
            </div>
          );
        })}
        <TrelloActionButton />
      </div>
    </div>
  );
};
const styles = {
  container: {
    backgroundColor: 'gray',
    borderRadius: '5px',
    width: 300,
    padding: 8,
    marginRight: 8,
  },
};

export default TrelloList;
