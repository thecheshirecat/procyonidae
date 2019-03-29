import React, { Component } from 'react'
import { USER_AREA, SIGN_IN_URL, LOG_IN_URL } from '../constants';
import SmallForm from '../components/SmallForm';
import FormInput from '../components/FormInput';
import Button from '../components/Button';
import FormMessages from '../components/FormMessages';

class UserArea extends Component {
    constructor(props) {
        super(props)
        this.props.changeSection(USER_AREA)
        this.props.setCurrentPage(1)

        this.state = {
            tab: "login",
            username: '',
            password: '',
            email: '',
            tabs: {
                "login": "Log in",
                "signin": "Sign in"
            },
            formMessages: '',
            formError: false,
            disableSignIn: false
        }
    }
    setTab(tab) {
        this.setState({
            tab,
            username: '',
            password: ''
        })
    }
    setInputValue = (inputName, value) => {
        this.setState({
            [inputName]: value
        })
    }
    handleSignIn = (e) => {
        e.preventDefault();
        this.setState({
            FormMessages: '',
            disableSignIn: true
        }, () => {
            let data = `username=${this.state.username}&password=${this.state.password}&email=${this.state.email}`;
            fetch(SIGN_IN_URL, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
                body: data
            })
            .then(response => response.json())
            .then(data => {
                if(data.message) {
                    let Messages = data.message.map( (message, index) => {
                        return <p key={index}>{message}</p>
                    })
                    this.setState({
                        formMessages: Messages,
                        formError: data["error"],
                        disableSignIn: false
                    })
                }
            })
        })
    }
    handleLogin = (e) => {
        e.preventDefault();
        this.setState({
            FormMessages: '',
            disableSignIn: true
        }, () => {
            var data = `username=${this.state.username}&password=${this.state.password}`;
            fetch(LOG_IN_URL, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
                body: data
            })
            .then(response => response.json())
            .then(data => {
                let user = data[0]
                this.props.setLogin(user["id"], user["username"], user["email"])
            })
        });
    }
    render () {
        return (
            <div className="mainContainer">
                {
                    this.props.logged
                    ? <div>Hello {this.props.usernameLogin}</div>
                    : <div className="SmallFormContainer">
                    <div className="tabContent">
                        <div className="tabs">
                            {
                                Object.keys(this.state.tabs).map( (key) => {
                                    let active = '';
                                    if(key === this.state.tab)
                                        active = 'active'
                                    return (<div
                                        onClick={() => this.setTab(key)}
                                        key={key}
                                        className={`tab ${active}`}>
                                        {this.state.tabs[key]}
                                    </div>)
                                })
                            }
                        </div>
                        <div className="tabBody">
                            <p>This area is a work still in progress.</p>
                            <div className="bugFormBody">
                                { this.state.tab === "login"
                                    ? <SmallForm submit={this.handleLogin}>
                                        <FormInput
                                            type={"text"}
                                            name={"username"}
                                            value={this.state.username}
                                            placeholder={"Username"}
                                            changeValue={this.setInputValue} />
                                        <FormInput
                                            type={"password"}
                                            name={"password"}
                                            value={this.state.password}
                                            placeholder={"Password"}
                                            changeValue={this.setInputValue} />
                                        <Button 
                                            handleClick={() => null}
                                            text={'Log in'}/>
                                    </SmallForm>
                                    : <SmallForm submit={this.handleSignIn}>
                                        <FormInput
                                            type={"text"}
                                            name={"username"}
                                            value={this.state.username}
                                            placeholder={"Username"}
                                            changeValue={this.setInputValue} />
                                            <FormInput
                                                type={"password"}
                                                name={"password"}
                                                value={this.state.password}
                                                placeholder={"Password"}
                                                changeValue={this.setInputValue} />
                                            <FormInput
                                                type={"email"}
                                                name={"email"}
                                                value={this.state.email}
                                                placeholder={"email@domain.com"}
                                                changeValue={this.setInputValue} />
                                        <Button 
                                            handleClick={() => null}
                                            text={'Sign in'}
                                            isDisabled={this.state.disableSignIn}/>
                                        <FormMessages error={this.state.formError}>{this.state.formMessages}</FormMessages>
                                    </SmallForm>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                }
            </div>
        )
    }
}

export default UserArea