import React from 'react';
import { Link } from 'react-router-dom';
import InstagramLogo from '../../img/basics/logo_text.png';
import LoginInputEnter from '../Login/LoginComponents/LoginInputEnter';
import './Login.css';

class Login extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          opacity: 0.3,
          id: '',
          pw: '',
      }
      this.handleButtonColor = this.handleButtonColor.bind(this);
  }

  handleButtonColor(e){
      this.setState({
          [e.target.name]: e.target.value
      }, () => {
          this.setState(
              {opacity: (this.state.id && this.state.pw) ? 1 : 0.3})
      })
  }

  render(){
    return (
      <div className="App">
                <div id='loginMain'>
                  <div id='logo'>
                      <img src={InstagramLogo} alt="Instagram_Logo" style={{width:175, height:51}} />
                  </div>
                    {/* <LoginInput /> */}
                    <LoginInputEnter 
                        name = 'id'
                        value = {this.state.id}
                        onChange = {this.handleButtonColor} 
                        placeholder = "ID"/>
                    <LoginInputEnter 
                        name = 'pw'                     
                        value = {this.state.pw}
                        onChange = {this.handleButtonColor}
                        placeholder = "PW"/>
                    <div>
                        <Link to='/main' id='loginButton' style ={{opacity: this.state.opacity}}>Login</Link>
                    </div>
                </div>
            </div>
    );
  }
}

export default Login;
