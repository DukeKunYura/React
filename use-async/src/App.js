import './App.css';
import { Routes, Route, NavLink } from 'react-router-dom';
import Version1 from './components/Version1';
import Version2 from './components/Version2';

function App() {
  return (
    <div className="App">
      <nav>
        <NavLink to='/version1'>VERSION 1</NavLink><br />
        <NavLink to='/version2'>VERSION 2</NavLink><br /><br />
      </nav>
      <Routes>
        <Route path='/version1' element={<Version1 />} />
        <Route path='/version2' element={<Version2 />} />
      </Routes>
    </div>
  );
}

export default App;
