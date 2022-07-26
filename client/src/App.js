import './App.css';
import {Routes, Route} from 'react-router-dom'
import MainPage from './components/MainPage/MainPage';
import Reg from './components/Reg/Reg';

function App() {
  return (
   <>
    <Routes>
      <Route path='/' element={<MainPage/>} />
      <Route path='/reg' element={<Reg/>} />
    </Routes>
   </>
  );
}

export default App;
