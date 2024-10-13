'use client';
import axios from 'axios';
import { useState } from 'react';
import { json } from 'stream/consumers';

export function Signup() {
  const [state, setState] = useState({
    username: '',
    password: '',
  });

  function handleOnChange(event) {
    const { name, value } = event.target;

    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  const handleFunction = async () => {
    const responce = await axios.post(
      'http://localhost:3000/api/user/signup/',
      {
        username: state.username,
        password: state.password,
      }
    );

    console.log(state.username, state.password);

    const data = responce.data;
  };

  return (
    <div className="flex flex-col justify-evenly items-center h-1/2 w-1/5">
      <input type="username" name="username" onChange={handleOnChange} />
      <input type="password" name="password" onChange={handleOnChange} />
      <button onClick={handleFunction}>signup</button>
    </div>
  );
}
