import React, { useState } from 'react';
import axios from 'axios';

const Input = ({ name, type, value, onChange }) => (
    <label>
        {name.charAt(0).toUpperCase() + name.slice(1)}:
        <input type={type} name={name} value={value} onChange={onChange} />
    </label>
);

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
    });

    const [signedUpUser, setSignedUpUser] = useState(null);
    const [error, setError] = useState(null);
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSignUp = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:3030/api/v1/auth/signUp', formData);

            console.log('Sign-up successful:', response.data);
            setSignedUpUser(response.data);
            // Handle the successful sign-up, such as redirecting the user or updating state
        } catch (error) {
            console.error('Error during sign-up:', error);
            setSignedUpUser(null);
            setError('Error during sign-up. Please check your input.');
            // Handle sign-up error, such as displaying an error message to the user
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            <form onSubmit={handleSignUp}>
                <Input
                    name="firstName"
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}
                />
                <br />
                <Input
                    name="lastName"
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}
                />
                <br />
                <Input
                    name="age"
                    type="number"
                    value={formData.age}
                    onChange={handleChange}
                />
                <br />
                <button type="submit">Sign Up</button>
            </form>
            {signedUpUser && (
                <h1>
                    My name is {signedUpUser.firstName} {signedUpUser.lastName} I am {signedUpUser.age} years old!
                </h1>
            )}

            {error && <p>{error}</p>}
        </div>
    );
};

export default SignUp;
