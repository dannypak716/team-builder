import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const teamList = [
  { name: 'Danny', email: 'danny@gmail.com', role: 'Team Lead' },
  { name: 'Jared', email: 'jared@gmail.com', role: 'Front End Engineer' },
  { name: 'Lance', email: 'lance@gmail.com', role: 'Full Stack Engineer' },
  { name: 'Ryan', email: 'ryan@gmail.com', role: 'Back End Engineer' },
  { name: 'Shane', email: 'shane@gmail.com', role: 'Designer' },
]

const initialFormValues = { name: '', email: '', role: '' }

function App() {
  const [members, setMembers] = useState(teamList);
  const [formValues, setFormValues] = useState(initialFormValues);

  const change = (evt) => {
    const {name, value} = evt.target;
    setFormValues({...formValues, [name]: value })
  }

  const submit = (evt) => {
    evt.preventDefault();

    const newMember = {
      name: formValues.name.trim(),
      email: formValues.email.trim(),
      role: formValues.role.trim()
    }

    setMembers(members.concat(newMember));
    setFormValues(initialFormValues);
  }

  return (
    <div className="App">
      <h1>List of Team Members</h1>
      {members.map((member, idx) => (
        <div key={idx}>
          {member.name}: {member.role} <br/> {member.email}
        <br/></div>
      ))}
      <form onSubmit={submit}>
        <input 
          type="text"
          name="name"
          placeholder="Wusyaname?"
          value={formValues.name}
          onChange={change}
        >
        </input>
        <input 
          type="text"
          name="email"
          placeholder="Wusya-email"
          value={formValues.email}
          onChange={change}
        >
        </input>
        <input 
          type="text"
          name="role"
          placeholder="Wusyarole"
          value={formValues.role}
          onChange={change}
        >
        </input>
        <input type="submit" value="submit" />
      </form>
    </div>
  );
}

export default App;
