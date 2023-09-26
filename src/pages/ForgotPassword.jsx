import { sendPasswordResetEmail } from "firebase/auth";
import React from "react";
import { auth } from '../firebase.config';
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';
import '../styles/reset.css'

function ForgotPassword (){
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const emailVal = e.target.email.value;
        sendPasswordResetEmail(auth, emailVal)
          .then(() => {
            toast("Check your email for password reset instructions.");
            navigate("/");
          })
          .catch(err => {
            toast.error(err.message);
          });
    }

    return (
        <div className="App">
            <h1>Forgot Password</h1>
            <form className="reset__form" onSubmit={(e) => handleSubmit(e)}>
                <input className="reset__input" name="email" placeholder="Enter your email" />
                <button className="buy__btn" type="submit">Reset Password</button>
            </form>
        </div>
    )
}

export default ForgotPassword;
