import { CardContent, Card, Typography } from '@material-ui/core';
import React from 'react';
import {Draggable} from "react-beautiful-dnd";
import styled from "styled-components";

const TrelloCard = ({ text,id,index }) => {
  return (
      <Draggable draggableId={String(id)} index={index}>
        {provided => (
            <TrelloCardContainer ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
              <div>
                <Card >
                  <CardContent >
                    <Typography color="textSecondary" gutterBottom>
                      <p style={{width:'100%'}}>{text}</p>
                    </Typography>
                  </CardContent>
                </Card>
              </div>
            </TrelloCardContainer>
        )}

      </Draggable>

  );
};
const TrelloCardContainer = styled.div`
  margin-bottom: 8px;
`




export default TrelloCard;
