import React from 'react';
import DropDown from './dropDown.es6'

const header = (props) => {
  return (
    <div className="header">
      <div>
        Image
      </div>
        {props.showDropDown && <div>
        <DropDown values={["$50.00USD", "$100.00USD"]}/>
            <span className="right">cart</span>
        </div>
        }
    </div>
  )
}

header.defaultProps = {
    showDropDown: true
}

export default header;
