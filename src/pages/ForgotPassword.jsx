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
        
        // Formdan alınan e-posta değerini alın
        const emailVal = e.target.email.value;

        // Firebase ile şifre sıfırlama e-postası gönder
        sendPasswordResetEmail(auth, emailVal)
          .then(() => {
            // Başarılı bir şekilde gönderildiğinde kullanıcıya bilgilendirme mesajı gösterin
            toast("Check your email for password reset instructions.");
            navigate("/");
          })
          .catch(err => {
            // Hata durumunda kullanıcıya hata mesajı gösterin
            toast.error(err.message);
          });
    }

    return (
        <div className="App">
            <h1>Forgot Password</h1>
            {/* Şifre sıfırlama formu */}
            <form className="reset__form" onSubmit={(e) => handleSubmit(e)}>
                <input className="reset__input" name="email" placeholder="Enter your email" />
                <button className="buy__btn" type="submit">Reset Password</button>
            </form>
        </div>
    )
}

export default ForgotPassword;
