import './App.css';
import Home from './pages/Home';
import { Router } from '@reach/router';

import Signin from './pages/Signin';
import SignUp from './pages/SignUp';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Expenses from './pages/Expenses';

function App() {
  return (
    <Router>
      <Home path='/' exact />
      <Signin path='/signin' />
      <SignUp path='/register' />
      <Dashboard path='/dashboard' />
      <Expenses path='/dashboard/expenses/:username' />
      <Profile path='/user/:username' />
    </Router>


    // <BrowserRouter >
    //   <Routes>
    //     <Route path='/' element={<Home />} exact />
    //     <Route path='/signin' element={<Signin />} />
    //     <Route path='/register' element={<SignUp />} />
    //     <Route path='/dashboard' element={<Dashboard />} />
    //     <Route path='/user/:username' element={<Profile />} />
    //   </Routes>

    // </BrowserRouter>
  );
}

export default App;
