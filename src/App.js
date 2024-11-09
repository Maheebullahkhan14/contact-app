import './App.css';
import Home from './contact_us/pages/Home';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route element={<Home />} path='/'>
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
