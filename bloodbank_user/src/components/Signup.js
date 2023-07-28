import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
    let navigate = useNavigate();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [email, setEmail] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [user_type, setUserType] = useState('');
    const [message, setMessage] = useState("");
     let handleSubmit = async (e) => {
    e.preventDefault();
    try {
      let res = await fetch("/en/api/v1/register", {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          username: username,
          password: password,
          password2: password2,
          email: email,
          first_name: first_name,
          last_name: last_name,
          user_type: user_type
        }),
      });
      let resJson = await res.json();
      debugger;
      if (res.status === 201) {
        setUserName("");
        setPassword("");
        setPassword2("");
        setUserType("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setMessage("Registration successfully");
        navigate('../login', { replace: true })
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
        <input
          type="password"
          value={password2}
          placeholder="Confirm password"
          onChange={(e) => setPassword2(e.target.value)}
        />
        <input
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          value={user_type}
          placeholder="user Type"
          onChange={(e) => setUserType(e.target.value)}
        />
        <input
          type="text"
          value={first_name}
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          value={last_name}
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />
        <button type="submit">Create</button>

        <div className="message">{message ? <p>{message}</p> : null}</div>
      </form>
    </div>
  );
}

export default Signup;