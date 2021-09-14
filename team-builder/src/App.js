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

function App() {
  const [members, setMembers] = useState(teamList);

  return (
    <div className="App">
      <h1>List of Team Members</h1>
      {members.map((member, idx) => (
        <div key={idx}>
          {member.name} is {member.age} years old and loves to eat {member.favFood}
        </div>
      ))}
    </div>
  );
}

export default App;
