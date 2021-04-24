import { CardContent, Card, Typography } from '@material-ui/core';
import React from 'react';

const TrelloCard = ({ text }) => {
  return (
    <div>
      <Card style={styles.cardContainer}>
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {text}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};
const styles = {
  cardContainer: {
    marginBottom: 8,
  },
};

export default TrelloCard;
