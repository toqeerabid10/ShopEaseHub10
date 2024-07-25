import {   Routes, Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/HomePage.js';
import Aboutus from './pages/Aboutus.js';
import Policy from './pages/Policy';
import Contact from './pages/Contact';
import Notfound from './pages/Notfound';
import Register from './components/Auth/Register.js';
import { Toaster } from "react-hot-toast";
import Login from './components/Auth/Login.js';
 
function App() {
  return (
    <> {/* React fragment       imp : we can add routes in app.js for centralize location of routes
     it good practice ,, also we can add routes all in other js component and then add it to app.js
     
     BrowserRoute use in once in application only so i used in index.js and not again on app.js */}
      
     
        <Routes>
        <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register/>} />
          <Route path='/' element={<HomePage />} />
          <Route path='/about' element={<Aboutus />} />
          <Route path='/policy' element={<Policy />} />
          <Route path='/contact' element={<Contact />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
     <Toaster />
 
    </>
  );
}

export default App;
