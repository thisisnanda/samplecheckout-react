import React from 'react';
import Button from './button.es6';

const address = (props) => {

  const link = false;
  return (
    <div className="address">
      <div>
        <h2>{props.fullName}</h2>
        <p>{props.address}</p>
      </div>
      <div>
        <Button name="Change >" button={link} />
      </div>
    </div>
  )
}

address.defaultProps = {
  fullName: 'Adeline Jason',
  address: 'Headquarters 1120 N Street Sacramento 916-654-5266, Headquarters 1120 N Street Sacramento 916-654-5266'
}
export default address;
