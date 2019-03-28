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
            email: ''
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
        return (
            <div className="SmallFormContainer">
                <div className="tabContent">
                    <div className="tabs">
                        <div className="tab" onClick={() => this.setTab("login")}>Log in</div>
                        <div className="tab" onClick={() => this.setTab("signin")}>Sign in</div>
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
        )
    }
}

export default UserArea