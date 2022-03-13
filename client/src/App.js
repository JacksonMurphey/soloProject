import './App.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <BrowserRouter >
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/signin' element={<Signin />} />
        <Route path='/register' element={<SignUp />} />
        <Route path='/dashboard' element={<Dashboard />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;
