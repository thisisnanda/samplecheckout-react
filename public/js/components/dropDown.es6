import React from 'react';

const dropDown = (props) => {
  let className = ['right', 'dropdown']
      className.push(props.className);
    let classes = className.join(" ");
  return (
    <select className={classes}>
      {props.values.map(value => <option>{value}</option>)}
    </select>
  )
}

export default dropDown;
