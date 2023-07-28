import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


function Login() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  let navigate = useNavigate();


  let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("/en/login/", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      let resJson = await res.json();
      if (res.status === 202) {
        setUserName("");
        setPassword("");
        localStorage.setItem('username', JSON.stringify(username));
        localStorage.setItem('password', JSON.stringify(password));
        setMessage("Logged in successfully");
        navigate('../read', { replace: true })
      } else {
        setMessage("Some error occurred");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          placeholder="UserName"
          onChange={(e) => setUserName(e.target.value)}
        />
        <input
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default Login;
