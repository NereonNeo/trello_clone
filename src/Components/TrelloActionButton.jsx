import React, { useState } from 'react';
import { Button, Card } from '@material-ui/core';
import AddSharpIcon from '@material-ui/icons/AddSharp';
import CloseSharpIcon from '@material-ui/icons/CloseSharp';
import TextareaAutosize from 'react-textarea-autosize';
import {useDispatch} from "react-redux";
import {addList,addCards} from "../store/Actions/";

const TrelloActionButton = ({ list,listID }) => {
    const dispatch = useDispatch();
  const [form, setForm] = useState(false);
  const [input, setInput] = useState('');
  const buttonText = list ? 'Add another list' : 'Add another card';
  const buttonTextOpacity = list ? 1 : 0.5;
  const buttonTextColor = list ? 'white' : 'inherit';
  const buttonTextBackground = list ? 'rgba(0,0,0,.15)' : 'inherit';
  const formPlaceHolder = list
    ? 'Enter the list title'
    : 'Enter a title for this card';
  const formButtonTitle = list ? 'add list' : 'add card';
  const handleAddList =()=>{
    if(input){
        dispatch(addList(input))
        setInput('')
    }
    return
  }
  const handleAddCard = ()=>{
      if(input){
          dispatch(addCards(listID,input))
          setInput('')
      }
  }

  const renderButton = () => {
    return (
      <div
        onClick={openForm}
        style={{
          ...styles.openFormButtonGroup,
          opacity: buttonTextOpacity,
          color: buttonTextColor,
          background: buttonTextBackground,
        }}
      >
        <AddSharpIcon />
        <p>{buttonText}</p>
      </div>
    );
  };

  const renderForm = () => {
    return (
      <div className="">
        <Card
          style={{
            minHeight: 80,
            minWidth: 272,
            padding: '6px 8px 6px',
          }}
        >
          <TextareaAutosize
            placeholder={formPlaceHolder}
            autoFocus
            onBlur={closeForm}
            value={input}
            onChange={handleInputChange}
            style={{
              resize: 'none',
              width: '100%',
              overflow: 'hidden',
              outline: 'none',
              border: 'none',
            }}
          />
        </Card>
        <div
          className=""
          style={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'center',
            width: '100%',
            height: 50,
          }}
        >
          <Button
              onMouseDown={list ? handleAddList : handleAddCard}
            variant="contained"
            style={{ color: 'white', background: '#5aac44' }}
          >
            {formButtonTitle}
          </Button>
          <CloseSharpIcon style={{ cursor: 'pointer' }} />
        </div>
      </div>
    );
  };
  const closeForm = (e) => {
    setForm(false);
  };
  const openForm = () => {
    return setForm(true);
  };
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  return form ? renderForm() : renderButton();
};
const styles = {
  openFormButtonGroup: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    borderRadius: 3,
    height: 36,
    width: 272,
    padding: 10,
  },
};

export default TrelloActionButton;
