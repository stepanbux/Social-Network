import React, { Component } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import ProfileContainer, { withRouter } from './components/Content/ProfileContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import Nav from './components/Nav/Nav';
import UsersContainer from './components/Users/UsersContainer';
import { initialize } from './components/redux/app-reducer'
import { connect } from 'react-redux';
import { compose } from 'redux';
import Preloaded from './components/common/Prereloaded';

class App extends Component {
  componentDidMount() {
    this.props.initialize();
  }
  render() {
    if (!this.props.initialized) {
      return <Preloaded />
    }
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
}

const mapStateToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}

export default compose(
  withRouter,
  connect(mapStateToProps, { initialize }))(App)

