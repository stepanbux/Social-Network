import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProfileContainer from './components/Content/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Nav from './components/Nav/Nav';
import UsersContainer from './components/Users/UsersContainer';


const App = (props) => {

  return (
      <div className='app-wrapper'>
        <HeaderContainer />
        <Nav />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/:userId' element={<ProfileContainer />} />
            <Route path='/profile/*' element={<ProfileContainer />} />
            <Route path="/messages/*" element={<DialogsContainer />} />
            <Route path="/users/*" element={<UsersContainer />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </div>
  );
}

export default App;
