import React, { useState } from 'react';

function App() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [response, setResponse] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('https://ajmal-react-function-01.azurewebsites.net/api/HttpTrigger1?code=ijE-xfOIDMZHI-0Jdjhou2awTo32hCdAoIHSWHbnpd1ZAzFunSQWUw==', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        });
        const data = await res.text();
        setResponse(data);
    };

    return (
        <div>
            <h1>Please Fill Contact Form </h1>
        <h2>Modified by ajmal86 here</h2>
            <form onSubmit={handleSubmit}>
                <input name="name" placeholder="Name" onChange={handleChange} />
                <input name="email" placeholder="Email" onChange={handleChange} />
                <textarea name="message" placeholder="Message" onChange={handleChange}></textarea>
                <button type="submit">Submit</button>
            </form>
            {response && <p>{response}</p>}
        </div>
    );
}

export default App;
