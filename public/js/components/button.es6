import React from 'react';

const button = (props) => {

  let buttonElement = <button className="buttonClass">{props.name}</button>;

  if(!props.button) {
    buttonElement = <a href="" className="linkClass">{props.name}</a>;
  }

  return (
    buttonElement
  )
}

export default button;
