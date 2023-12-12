import React, { useState } from 'react';
import Form3 from './Form3';

const Main3 = () => {

  const [showViewForm3, setShowViewForm3] = useState(false)
  const toggleForm3 = () => {
    setShowViewForm3((prevShowViewForm2) => !prevShowViewForm2);
  };
  const buttonStyle = {
    backgroundColor: showViewForm3 ? 'red' : 'blue',
    color: showViewForm3 ? 'white' : 'white',
  };
        

  return (
    <div>
      <h2>Main3: With Toggle</h2>
         <button onClick={toggleForm3} style={buttonStyle}>
          {showViewForm3 ? 'Close Form3'  : 'Open Form3'}
         </button>
         {showViewForm3 && <Form3 handleForm={toggleForm3}/>}
   </div>
  );
};

export default Main3;