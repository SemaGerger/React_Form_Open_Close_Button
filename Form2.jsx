import React from 'react';
import '../component/form.css';

const Form2 = () => {
  return (
    <div className='formContainer2'>
      <div className='formContent2'>

        <form action="">
          <input className='formInput' type="text" />
          <button disabled>Submit</button>
        </form>

      </div>
    </div>
  );
};

export default Form2;