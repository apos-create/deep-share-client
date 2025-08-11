import './App.css'
import Login from './auth/Login';
import Register from './auth/Register';
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyProfile from "./pages/MyProfile";
import Notifications from "./pages/Notifications";
import People from "./pages/People";

import { useSelector } from 'react-redux';
import Chats from './pages/Chats';

const App = () => {
const {isAuthenticated} = useSelector(state=>state.user);
// console.log(isAuthenticated)
  return (
    <>
      <Routes>
        <Route path="/" element={isAuthenticated ? (<Home />) : (<Login />)} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/feeds" element={<Home />} />
        <Route path="/chats" element={<Chats/>} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/notifications" element={<Notifications />} />
        <Route path="/people" element={<People />} />
       
      </Routes>
    </>
  )
};

export default App;
