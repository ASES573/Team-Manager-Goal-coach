/*
 * @Author: Aswath MadhuBabu 
 * @Date: 2017-06-28 20:41:43 
 * @Last Modified by:   Aswath MadhuBabu 
 * @Last Modified time: 2017-06-28 20:41:43 
 */
import React, {Component} from 'react';
import {Link} from 'react-router';
import {firebaseApp} from '../firebase';
class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: {
                message: ''
            }
        }
    }
    signUp()
    {
        console.log('this.state', this.state);
        const email = this.state.email;
        const password = this.state.password;
        firebaseApp
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(error => {
                console.log("Error:", error);
                this.setState({error})
            });

    }
    render() {
        return (
            <div className="card">
                <div className="card-block">
                    <hr/>
                    <div className="form-header text-center">
                        <h3>
                            <i className="fa fa-user"></i>
                            Register:</h3>
                    </div>
                    <hr/>
                    <form id="signUpForm">
                        <div className="md-form">
                            <i className="fa  fa-envelope-open prefix"></i>
                            <input
                                type="text"
                                id="form2"
                                className="form-control"
                                placeholder="E-mail"
                                onChange={event => this.setState({email: event.target.value})}
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$"
                                title="Use valid email ID"
                                required/>

                        </div>
                        <hr/>
                        <div className="md-form">
                            <i className="fa fa-lock prefix"></i>
                            <input
                                type="password"
                                id="form4"
                                className="form-control"
                                placeholder="Password"
                                onChange={event => this.setState({password: event.target.value})}
                                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                                title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters"
                                required/>

                        </div>

                        <div className="text-center">
                            <button className="btn btn-indigo" type="button" onClick={() => this.signUp()}>Sign up</button>
                            <hr/>

                        </div>
                    </form>
                    <div className="well">{this.state.error.message}</div>
                    <div className="text-center">
                        <Link to={'/signin'}>Already a user ? Sign In here..</Link>
                    </div>
                </div>
            </div>

        )
    }
}

export default SignUp;