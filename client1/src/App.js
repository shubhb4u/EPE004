import React, { useState, useEffect } from 'react';
import './App.scss';
import axios from 'axios';
import Header from './components/Header.js';
import List from './components/List.js';

function App() {
  const [records, setRecords] = useState([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resourceSiteCode: '',
    resourceSiteName: '',
    county: ''
  });
  const [editIndex, setEditIndex] = useState(-1); // To track the index of the record being edited
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAddRecord = (event) => {

    event.preventDefault();
    setRecords([...records, formData]);
    console.log('records saved !!');
    setFormData({
      name: '',
      email: '',
      resourceSiteCode: '',
      resourceSiteName: '',
      county: ''
    });

  };

  const handleEditRecord = (index) => {
    setEditIndex(index);
    setFormData(records[index]);
    setIsEditing(true);
  };

  const handleSaveEdit = () => {

    const updatedRecords = [...records];
    updatedRecords[editIndex] = formData;
    setRecords(updatedRecords);
    setFormData({
      name: '',
      email: '',
      resourceSiteCode: '',
      resourceSiteName: '',
      county: ''
    });
    setIsEditing(false);
    setEditIndex(-1);

  };

  const handleDeleteRecord = (index) => {
    const updatedRecords = [...records];
    updatedRecords.splice(index, 1);
    setRecords(updatedRecords);
    setFormData({
      name: '',
      email: '',
      resourceSiteCode: '',
      resourceSiteName: '',
      county: ''
    });
    setIsEditing(false);
    setEditIndex(-1);
  };

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="formContainer">
        <form className="material-form">
          <div className="material-form__container">
            <input className="material-form__input" type="text" name="name" placeholder="Name" value={formData.name} onChange={handleInputChange} />
            <div class="material-form__focus-animation"></div>
          </div>
          <div className="material-form__container">
            <input className="material-form__input" type="email" name="email" placeholder="Email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}" value={formData.email} onChange={handleInputChange} />
            <div class="material-form__focus-animation"></div>
            <p class="material-form__error">Please enter valid email address</p>
          </div>
          <div className="material-form__container">
            <input className="material-form__input" type="text" name="resourceSiteCode" placeholder="Resource Site Code " value={formData.resourceSiteCode} onChange={handleInputChange} />
            <div class="material-form__focus-animation"></div>
          </div>
          <div className="material-form__container">
            <input className="material-form__input" type="text" name="resourceSiteName" placeholder="Resource Site Name" value={formData.resourceSiteName} onChange={handleInputChange} />
            <div class="material-form__focus-animation"></div>
          </div>
          <div className="material-form__container">
            <input className="material-form__input" type="text" name="county" placeholder="County" value={formData.county} onChange={handleInputChange} />
            <div class="material-form__focus-animation"></div>
          </div>
          

          {isEditing ? (
            <div>
              <button className="material-form__button"onClick={handleSaveEdit}>Save Edit</button>
              <button className="material-form__button"onClick={() => setIsEditing(false)}>Cancel Edit</button>
            </div>
          ) : (
            <button className="material-form__button" onClick={handleAddRecord}>Submit</button>
          )}

        </form>
      </div>


      <List records={records} handleDeleteRecord={handleDeleteRecord}
      handleEditRecord={handleEditRecord}/>
    </>
  );
}

export default App;
