import React, { useState } from 'react';

function Read() {
  const [data, setData] = useState(null);
  const usernamepass = JSON.parse(localStorage.getItem('username'));
  const passwordpass = JSON.parse(localStorage.getItem('password'));

  function handleClick() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', '/en/api/v1/users/', true);
    xhr.setRequestHeader("Authorization", "Basic " + btoa(usernamepass + ":" + passwordpass));
    xhr.onload = function() {
      if (xhr.status === 200) {
        setData(JSON.parse(xhr.responseText));
      }
    };
    xhr.send();
  }

  return (
    <div>
      <button onClick={handleClick}>Get Data</button>
      {data ? <div>{JSON.stringify(data)}</div> : <div>Loading...</div>}
    </div>
  );
}

export default Read;