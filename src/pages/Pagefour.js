import React from 'react';

export const Pagefour = (props) => {
  const username = props.location.state.username;
  const address = props.location.state.address;
  const creditcard = props.location.state.creditcard;
  
  console.log(props.location.state);
  console.log(props.location.state.username);


  let page4 = (
    <div>
      <h3>Thank you for your order!</h3>
      <div>Username: {username}</div>
      <div>Address: {address}</div>
      <div>Creditcard: {creditcard}</div>
    </div>
  );
  return page4;
}