import React from 'react';
import '../component/form.css';

const Form1 = ({ handleClose }) => {
  return (
    <div className='formContainer'> 
      <div className='formContent'>

        <button onClick={handleClose} className='formCloseButton'>
          X
        </button>

        <form className='formShow'>
          <input className='formInput' type="text" />
          <button disabled>Submit</button>
        </form>

      </div>
    </div>
  );
};

export default Form1;