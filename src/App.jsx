import './App.css'
import Login from './auth/Login';
import Register from './auth/Register';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar'
import Loader from './components/Loader';

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* other routes... */}
      </Routes>
      <Navbar />

     <Loader/>
    </>
  )
};

export default App;
