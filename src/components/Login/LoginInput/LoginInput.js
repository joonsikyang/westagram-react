import React from 'react';
import LoginInputEnter from './LoginInputEnter/LoginInputEnter';
import LoginButton from './LoginButton/LoginButton';

class LoginInput extends React.Component{
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
        this.setState({ // setState 다시 공부하기
            [e.target.name]: e.target.value // 의미 파악 정확히 할 것
        }, () => {
            this.setState(
                {opacity: (this.state.id && this.state.pw) ? 1 : 0.3})
        })
    }

    // props state 관계
    render() {
        return (
            <div id='loginInput'>
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
                <LoginButton 
                    opacity = {this.state.opacity} />
            </div>        
        );
    }
}

export default LoginInput;