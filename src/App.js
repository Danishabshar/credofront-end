import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
import Login from './Login';
import Signup from './Signup';
// import Protected from './protected';
import Dashboard1 from './dashboard';
// import Dashboard from './Dashboard';
// import Dashboard1 from './Dashboard2';
import Protected from './protected';
const App=()=> {
  return (
    <div >
      <BrowserRouter>
      <Routes>
      
      <Route path="data" element={<Protected> <Dashboard1/> </Protected>  }></Route>
      <Route path="/" element={    <Login/>}></Route>
      <Route path="/signup"element={<Signup/>}></Route>
      {/* <Route path="/data"element={<Protected><Dashboard/></Protected>}></Route>
      <Route path="/data2"element={<Protected><Dashboard1/></Protected>}></Route> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;