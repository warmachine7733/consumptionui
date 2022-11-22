import React, { useState,useEffect } from "react";
import "../App.css"
import axios from 'axios';

const Counter = () => {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const  fetchDataFromBackend=()=>{
    axios.get('https://testcookieapp7733.herokuapp.com',{withCredentials:true})
  }
  useEffect(() => {
    fetchDataFromBackend();
  }, []);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
      <nav>
        <ul className="nav">
          <li>
            <a href="#">
              <span className="icon-home"></span>
              <span className="screen-reader-text">Home</span>
            </a>
          </li>
          <li>
            <a href="#">
              <span className="icon-cog"></span>
              <span className="screen-reader-text">Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );

};


export default Counter;
