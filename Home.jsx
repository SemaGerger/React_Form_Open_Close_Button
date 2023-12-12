import React from 'react';
import Main1 from './Main1';
import Main2 from './Main2';
import Main3 from './Main3';
import '../component/form.css';

const Home = () => {
  return (
    <div className='homeContainer'>
      <h2>Open Close Form</h2>
         <Main1 />
         <Main2 />
         <Main3 />

    </div>
  );
};

export default Home;