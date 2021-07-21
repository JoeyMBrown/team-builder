import './App.css';
import React, { useState } from 'react';
import { teamsList } from './dummydata.js';
import Form from './Components/Form';
import TeamList from './Components/TeamList'

function App() {
  const [listOfTeams, setListOfTeams] = useState(teamsList);
  const [currentFormValues, setCurrentFormValues] = useState({
    name: "",
    email: "",
    role: ""
  })

  function onInputChange(event) {
    console.log(event.target.value);
      setCurrentFormValues({
        ...currentFormValues, [event.target.name]: event.target.value
      });
    console.log(currentFormValues);
  }

  function onSubmit(event) {
    event.preventDefault();
    const {name, email, role} = currentFormValues;
    const newTeamMember = {
      name: name,
      email: email,
      role: role
    }
    
     setListOfTeams(
       [...listOfTeams, newTeamMember]
     )

     setCurrentFormValues({
       name: '',
       email: '',
       role: ''
     })
  }
  return (
    <div className="App">
      <TeamList teamList={listOfTeams} />
      <Form setTeams={onSubmit} onInputChange={onInputChange} />
    </div>
  );
}

export default App;
