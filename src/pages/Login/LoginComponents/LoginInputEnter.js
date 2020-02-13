import React from 'react';

class LoginInputEnter extends React.Component {
    render() {
        // console.log(this.props.value)
        return (
            <div>
                <input 
                    className='loginEnter' 
                    type="text"
                    name = {this.props.name}
                    value = {this.props.value}
                    onChange = {this.props.onChange}
                    placeholder={this.props.placeholder} />
            </div>
        );
    }
};

export default LoginInputEnter;