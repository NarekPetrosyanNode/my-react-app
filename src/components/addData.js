import React, { useState } from 'react';

export default function NameForm() {
    const [name, setName] = useState('');

    const handleChange = (event) => {
        setName(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission, for example, send the name to an API or perform some action.
        console.log('Submitted name:', name);
    };

    return (
        <form onChange={handleSubmit}>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={handleChange}
                />
            </label>
        </form>
    );
}
