import React , { useState } from 'react';

export const Pagethree = (props) => {
  const username = props.location.state.username;
  const address = props.location.state.address;
  const [creditcard, setCreditcard] = useState("");
  console.log(props.location.state);
  console.log(props.location.state.username);

  const handleOnSubmit = () => {
    props.history.push("/pagefour", { username: username, address : address, creditcard : creditcard });
  }

  let page3 = (
    <div>
      <div>Username: {username}</div>
      <div>Address: {address}</div>
      <form>
        <h3>Page 3</h3>
        <div>
          Creditcard number
           <input
            type="text"
            placeholder="Address"
            value={creditcard}
            onChange={e => setCreditcard(e.target.value)} />
        </div>
        <button onClick={handleOnSubmit}>Next</button>
      </form>
    </div>
  );
  return page3;
}