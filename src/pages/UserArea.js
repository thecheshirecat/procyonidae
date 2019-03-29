import React, { Component } from 'react'
import { USER_AREA } from '../constants';
import SmallForm from '../components/SmallForm';
import FormInput from '../components/FormInput';
import Button from '../components/Button';

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
            }
        }
    }
    setTab(tab) {
        this.setState({
            tab
        })
    }
    setInputValue = (inputName, value) => {
        this.setState({
            [inputName]: value
        })
    }
    render () {
        var tabs = [];
        return (
            <div className="mainContainer">
                <div className="SmallFormContainer">
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
                                    ? <SmallForm submit={this.handleSubmit}>
                                        <FormInput
                                            type={"text"}
                                            name={"username"}
                                            placeholder={"Username"}
                                            changeValue={this.setInputValue} />
                                        <FormInput
                                            type={"password"}
                                            name={"password"}
                                            placeholder={"Password"}
                                            changeValue={this.setInputValue} />
                                        <Button 
                                            handleClick={() => null}
                                            text={'Log in'}/>
                                    </SmallForm>
                                    : <SmallForm submit={this.handleSubmit}>
                                        <FormInput
                                            type={"text"}
                                            name={"username"}
                                            placeholder={"Username"}
                                            changeValue={this.setInputValue} />
                                            <FormInput
                                                type={"password"}
                                                name={"password"}
                                                placeholder={"Password"}
                                                changeValue={this.setInputValue} />
                                            <FormInput
                                                type={"email"}
                                                name={"email"}
                                                placeholder={"email@domain.com"}
                                                changeValue={this.setInputValue} />
                                        <Button 
                                            handleClick={() => null}
                                            text={'Sign in'}/>
                                    </SmallForm>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default UserArea