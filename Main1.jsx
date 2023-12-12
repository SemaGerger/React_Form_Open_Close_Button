import React, { useState } from 'react';
import Form1 from './Form1';
import '../component/form.css';


const Main1 = () => {

  const [showViewForm, setShowViewForm] = useState(false)
   
    const handleOpenForm = () => {
        setShowViewForm(true)
    }
    const handleCloseForm = () => {
        setShowViewForm(false)
    }

  return (
    <div> 
      <h2>Main1: Separate </h2>
      <button onClick={handleOpenForm}>Open Form1</button>
      {showViewForm && <Form1 handleClose={handleCloseForm}/>}
    </div>
  );
};

export default Main1;