import React from 'react';
import { connect } from 'react-redux';
import { setUserData, setUserName, authMe } from '../redux/auth-reduce';
import Header from './Header';
class HeaderContainer extends React.Component {

    componentDidMount() {
        this.props.authMe();
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        login: state.auth.login
    }
}

export default connect(mapStateToProps, { setUserData, setUserName, authMe })(HeaderContainer);