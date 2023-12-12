import {Route, Routes} from 'react-router-dom';
import Home from './component/Home';
import Form1 from './component/Form1';
import Form2 from './component/Form2';
import Form3 from './component/Form3';
import Form4 from './component/Form4';
import Main1 from './component/Main1';
import Main2 from './component/Main2';
import Main3 from './component/Main3';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/main1' element={<Main1 />} />
        <Route path='/main2' element={<Main2 />} />
        <Route path='/main3' element={<Main3 />} />
        <Route path='/form1' element={<Form1 />} />
        <Route path='/form2' element={<Form2 />} />
        <Route path='/form3' element={<Form3 />} />
        <Route path='/form4' element={<Form4 />} />
        
      </Routes>
    </div>
  );
}

export default App;
