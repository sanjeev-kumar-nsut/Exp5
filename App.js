import logo from './logo.svg';
import './App.css';
import React,{useEffect,useState} from 'react';
import axios from 'axios';

function App() {
  let [name,setName] = useState('there!');
  const send= async ()=>{
    let inputName = document.getElementById('name').value;
    console.log("input name :",inputName);
    let data = await axios({
      method: 'post',
      url: 'http://localhost:5000/',
      data: {
        name : inputName
      }
    }).then((res)=> {
      setName(res.data);
    });

    console.log("data :",data)
  }
  return (
    <div className="App">
      <h1>Client</h1>
      <h1>Hello {name}</h1>
      <label for="name">Enter your name : </label>
      <input id="name" name="name" type="text"></input>
      <button onClick={send}>Submit</button>
    </div>
  );
}

export default App;
