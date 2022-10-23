import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Home';
import AboutUs from './About Us';
import Service from './Service';
import ContactUs from './Contact Us';
import Login from './Login';
import MyUsers from './My Users';
import ForgotPassword from './Forgot Password';

function App() {
  return (
    <div classNameName="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/home" element={<Home/>}/>
          <Route exact path="/about" element={<AboutUs/>}/>
          <Route exact path="/service" element={<Service/>}/>
          <Route exact path="/contact" element={<ContactUs/>}/>
          <Route exact path="/login" element={<Login/>}/>
          <Route exact path="/myusers" element={<MyUsers/>}/>
          <Route exact path="/forgotpassword" element={<ForgotPassword/>}/>
        </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
