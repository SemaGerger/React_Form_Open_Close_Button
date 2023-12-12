import React, { useState } from 'react';
import Form2 from './Form2';

const Main2 = () => {
  const [showViewForm2, setShowViewForm2] = useState(false);

  const ifForm2 = () => {
    if (showViewForm2) {
      setShowViewForm2(false);
    } else {
      setShowViewForm2(true);
    }
  };

  const buttonBackgroundStyle = {
    backgroundColor: showViewForm2 ? 'red' : 'green',
    color: showViewForm2 ? 'white' : 'white',
  };

  return (
    <div>
      <h2>Main2: with If</h2>
        <button onClick={ifForm2} style={buttonBackgroundStyle}>
          {showViewForm2 ? 'Close Form2' : 'Open Form2 '}
        </button>
        
        {showViewForm2 && <Form2 handleIfCloseOpen={ifForm2} />}
    
    </div>
  );
};

export default Main2;
