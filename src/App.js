
import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('')
  const [lastName, setLastName] = useState('')

  const handleClick = (event) => {
    console.log(name)
    // console.log(e.target.value)
    switch(event.target.id) {
      case 'lastname':
        setLastName(event.currentTarget.value)
        break;
      case 'name':
        setName(event.currentTarget.value)
        break;
    }
    // if(event.target.id === 'lastname'){
    //   setLastName(event.currentTarget.value)
    // }
    // if(event.target.id === 'name'){
    //   setName(event.currentTarget.value)
    // }
  }

  return (
    <div className="App">
      <input placeholder='Фамилия' id='lastname' onChange={(event) => setLastName(event.target.value)}></input>
      <input  placeholder='Имя' id='name' onChange={(event) => setName(event.currentTarget.value)} ></input>
      <p> Фамилия: {lastName} </p>
      <p>Имя: {name} </p>
    </div>
  );
}

export default App;
