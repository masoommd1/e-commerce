import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Orders from "./pages/Orders";
import Login from "./components/Login";
import { ToastContainer } from 'react-toastify';

 export const backendUrl = import.meta.env.VITE_BACKEND_URL
 export const currency = '₹'

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token') ? localStorage.getItem('token'):'');
  // const [token, setToken] = useState('');

  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])

  return (
    <div className=" bg-gray-50 min-h-screen">
      <ToastContainer/>
      {token === "" ? (
        <Login setToken={setToken} />
      ) : (
        <>
          <NavBar setToken={setToken}/>
          {/* <hr />     */}
          <hr className="border-t border-gray-300 w-full " />
          <div className="flex w-full">
            <SideBar />
            <div className="w-[70%] mx-auto ml-[max(5vw,25px)] my-8 text-gray-600 text-base">
              <Routes>
                <Route path="/add" element={<Add token={token} />} />
                <Route path="/list" element={<List token={token} />} />
                <Route path="/Orders" element={<Orders token={token} />} />
              </Routes>
            </div>
          </div>
        </>
      )}
    </div>
  );
  
};

export default App;
