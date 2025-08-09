import './App.css'
import Login from './auth/Login';
import Register from './auth/Register';
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import Notifications from "./pages/Notifications";
import People from "./pages/People";
import Settings from "./pages/Settings";

const App = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feeds" element={<Home />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/people" element={<People />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </>
  )
};

export default App;
