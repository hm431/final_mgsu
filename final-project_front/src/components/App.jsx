
import React, { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Jobs from './Jobs';
import Machines from './Machines';
import Login from './LogIn';
import ProtectedRoute from './ProtectedRoute';
import InfoTooltip from './InfoTooltip';
import MachineList from './MachineList';


const App = () => {

  const [loggedIn, setLoggedIn] = React.useState(true);// useState(localStorage.getItem('jwt'));
  const handleLogin = () => {
    setLoggedIn(true);
  }


  const [requestStatus, changerequestStatus] = React.useState(false);
  const [isInfoPopupOpen, changeInfoPopupOpen] = React.useState(false);


  const [textPopup, changeTextPopup] = React.useState('');

  function closePopup() {
    changeInfoPopupOpen(false);
  }


  return (


    <>

      <InfoTooltip isSucsess={requestStatus} isOpen={isInfoPopupOpen} onClose={closePopup} textPopup={textPopup} />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={loggedIn ? <Navigate to="/jobs" replace /> : <Navigate to="/login" replace />} />

          <Route
            path="/jobs"
            element={<ProtectedRoute
              loggedIn={loggedIn}
              element={Jobs} />} />
          <Route
            path="/machines"
            element={<ProtectedRoute
              loggedIn={loggedIn}
              element={Machines} />} />
          <Route
            path="/MachineList"
            element={<ProtectedRoute
              loggedIn={loggedIn}
              element={MachineList} />} />


          <Route
            path="/login"
            element={<Login
              handleLogin={handleLogin}
              changerequestStatus={changerequestStatus}
              changeTextPopup={changeTextPopup}
              changeInfoPopupOpen={changeInfoPopupOpen} />} />
              
        </Routes>

      </BrowserRouter>



    </>
  );

}


export default App;


