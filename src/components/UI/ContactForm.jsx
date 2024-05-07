import { useState } from 'react';

export default function ContactForm(){
    const [name, setName] = useState('');
    const [emailAddress, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const nameInputCheck = (e) => {
        const {input, value } = e.target;

        return input === setName(value)
    }

    const emailInputCheck = (e) => {
        const {input, value } = e.target;
        return input === setEmail(value)
    }

    const messageCheck = (e) => {
        const {input, value} = e.target;
        return input === setMessage(value)
    }

    const handleOnChange = ( email ) => {
        const { value } = email.target;
        let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/; 

        if (regex.test(value)){
            return setEmail(value)
        } else {
            alert('Please submit a valid email address.')
        }
    }

    const emptyField = (e) => {
        const {value} = e.target;
        if (value.length === 0){
            alert('This field is required. Please enter a value.')
        } 
    }

    return (
        <div className='container'>
            <form className='form'>
                <label>Name: </label>
                <input 
                    value = {name}
                    name = 'nameVal'
                    type = 'text'
                    placeholder='Name'
                    className='form-control'
                    size='30'
                    onChange={nameInputCheck}
                    onBlur={emptyField}
                />
                <label>Email Address:</label>
                <input 
                    value = {emailAddress}
                    name = 'emailVal'
                    type = 'email'
                    placeholder = 'Email Address'
                    className='form-control'
                    onChange={emailInputCheck}
                    onBlur={handleOnChange}
                />
                <label>Message:</label>
                <textarea
                    value = {message}
                    name = 'messageVal'
                    type = 'textarea'
                    placeholder = 'Message'
                    className='form-control'
                    rows='5'
                    cols='30'
                    onChange={messageCheck}
                    onBlur={emptyField}
                />
                <button type ='submit' className='btn btn-primary'>
                    Send Message
                </button>
            </form>
        </div>
    )
}