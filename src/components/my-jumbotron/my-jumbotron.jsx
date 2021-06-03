import React from "react";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import {useHistory} from 'react-router-dom';

const MyJumbotron = ({title, text, btnText, link,bgColor}) => {
  let history = useHistory();
  return (
    <Jumbotron style={{backgroundColor: bgColor}}>
      <h1>{title}!</h1>
      <p>{text}</p>
      <p>
        {btnText && (
          <Button variant="primary" onClick={() => history.push(link)}>
            {btnText}
          </Button>
        )}
      </p>
    </Jumbotron>
  );
};

export default MyJumbotron;
