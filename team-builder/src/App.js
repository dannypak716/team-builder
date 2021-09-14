import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const teamList = [
  { name: 'Danny', age: '24', favFood: 'tacos' },
  { name: 'Jared', age: '29', favFood: 'dirt' },
  { name: 'Lance', age: '22', favFood: 'pasta' },
  { name: 'Ryan', age: '25', favFood: 'water' },
  { name: 'Shane', age: '23', favFood: 'cheese' },
]

const initialFormValues = { name: '', age: '', favFood: '' }

function App() {
  const [members, setMembers] = useState(teamList);
  const [formValues, setFormValues] = useState(initialFormValues);

  return (
    <div className="App">
      <h1>List of Team Members</h1>
      {members.map((member, idx) => (
        <div key={idx}>
          {member.name} is {member.age} years old and loves to eat {member.favFood}
        </div>
      ))}
      <form>
        <input 
          type="text"
          name="name"
          placeholder="Wusyaname?"
          value={formValues.name}
        >
        </input>
        <input 
          type="text"
          name="age"
          placeholder="# of Sun revolutions"
          value={formValues.age}
        >
        </input>
        <input 
          type="text"
          name="favFood"
          placeholder="Favorite munchie"
          value={formValues.favFood}
        >
        </input>
      </form>
    </div>
  );
}

export default App;
