import React, { Component } from 'react'
import Button from '../components/Button';
import { FEEDBACK_URL } from '../constants';
import SmallForm from '../components/SmallForm';
import FormInput from '../components/FormInput';
import FormTextarea from '../components/FormTextarea';

class BugForm extends Component {
    state = {
        username: '',
        feedback: '',
        disabled: false,
        feedbackSent: null
    }
    newBugForm = () => {
        this.setState({
            username: '',
            feedback: '',
            disabled: false,
            feedbackSent: null
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.setState({
            disabled: true,
            feedbackSent: "SENDING"
        }, () => {
            var data = `username=${this.state.username}&feedback=${this.state.feedback}`
            fetch(FEEDBACK_URL, {
                method: 'POST',
                headers: new Headers({
                    'Content-Type': 'application/x-www-form-urlencoded'
                }),
                body: data
            })
            .then(response => response.json())
            .then(data => {
                this.setState({
                    disabled: false,
                    feedbackSent: data.recieved
                })
            })
        })
    }
    closeBugForm = () => {
        this.props.closeBugForm()
    }
    setInputValue = (inputName, value) => {
        this.setState({
            [inputName]: value // Use [ ] to set the value to the key, in this case, the input name
        })
    }
    render () {
        return (
            <div className="bugForm">
                <div className="bugFormContainer">
                    <div className="bugFormHeader">
                        <h2>Bug form</h2>
                        <span onClick={this.closeBugForm}>X</span>
                    </div>
                    <div className="bugFormBody">
                        {
                            this.state.feedbackSent === null
                            ? <div>
                                <p>Did you found a bug while navigating our site?</p>
                                <p>Do you know a way to improve it?</p>
                                <p>Leave me your feedback to improve the site!</p>
                                <SmallForm submit={this.handleSubmit}>
                                    <FormInput
                                        type={"text"}
                                        name={"username"}
                                        placeholder={"Username"}
                                        changeValue={this.setInputValue} />
                                    <FormTextarea
                                        name={"feedback"}
                                        placeholder={"Your feedback here"}
                                        text={this.state.feedback}
                                        changeValue={this.setInputValue} />
                                    <Button 
                                        handleClick={() => null}
                                        text={'Send your feedback'}
                                        isDisabled={this.state.disabled} />
                                </SmallForm>
                            </div>
                            : this.state.feedbackSent === "OK"
                                ? <div>
                                    <p>Your feedback has been sent.</p>
                                    <p>Click <span onClick={this.newBugForm} className="sendNew">here</span> to send a new one.</p>
                                </div>
                                : this.state.feedbackSent === "KO"
                                    ? <div>
                                        <p>We couldn't send the feedback. Click <span onClick={this.handleSubmit} className="sendNew">here</span> to try again.</p>
                                    </div>
                                    : <div>
                                        <p>We are sending the feedback...</p>
                                    </div>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default BugForm