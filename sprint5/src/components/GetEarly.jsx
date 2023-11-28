import React, { useState } from "react";
import "./getearly.css";

function GetEarly() {
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const validateEmail = (email) => {
        const re = /\S+@\S+\.\S+/;
        return re.test(email);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!validateEmail(email)) {
            setEmailError("Please enter a valid email");
        } else {
            setEmailError("");
            
        }
    };

    return (
        <div className="form1">
            <h1>Get early access today</h1>
            <p>It only takes a minute to sign up and our free starter tier is extremely generous. If you have any <br/>
            questions, our support team would be happy to help you.
            </p>
            <form className="form_get"  onSubmit={handleSubmit}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                />
                {emailError && <p>{emailError}</p>}
                <button className="form_button" type="submit">Get Started For Free</button>
            </form>
        </div>
    );
}

export default GetEarly;