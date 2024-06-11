import logo from './logo.svg';
import './App.css';
import { Add } from './Components/Add';
import Search from './Components/Search';
import Viewall from './Components/Viewall';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
      <Route path="/" element={<Add/>}/>
      <Route path="/search" element={<Search/>}/>
      <Route path="/Viewall" element={<Viewall/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
