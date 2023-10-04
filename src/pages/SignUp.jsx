import React, { useState } from 'react';
import Helmet from '../components/Helmet/Helmet';
import { Container, Row, Col, Form, FormGroup } from 'reactstrap';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/login.css';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { setDoc, doc } from 'firebase/firestore';
import { auth } from '../firebase.config';
import { storage } from '../firebase.config';
import { db } from '../firebase.config';
import { toast } from 'react-toastify';

// E-posta adresi doğrulama işlevi
function isEmailValid(email) {
  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return emailPattern.test(email);
}

const SignUp = () => {
  const [name, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigate = useNavigate();

  const signUp = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (!isEmailValid(email)) {
      setError('Please enter a valid email address');
      setLoading(false);
      return;
    }

    // Parola uzunluğu kontrolü
    if (password.length < 6) {
      setError('Password should be at least 6 characters long');
      setLoading(false);
      return;
    }

    // Parola içinde en az bir rakam kontrolü
    if (!/\d/.test(password)) {
      setError('Password should contain at least one number');
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const storageRef = ref(storage, `images/${Date.now() + username}`);
      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        'state_changed',
        (snapshot) => {},
        (uploadError) => {
          setError(uploadError.message);
          setLoading(false);
        },
        async () => {
          try {
            const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

            await updateProfile(user, {
              displayName: username,
              photoURL: downloadURL,
            });

            await setDoc(doc(db, 'users', user.uid), {
              uid: user.uid,
              displayName: username,
              email,
              photoURL: downloadURL,
              name, // Eklenen kullanıcı adı
            });

            setLoading(false);
            toast.success('Account created');
            navigate('/login');
          } catch (profileError) {
            setError(profileError.message);
            setLoading(false);
          }
        }
      );
    } catch (authError) {
      setError(authError.message);
      setLoading(false);
    }
  };

  return (
    <Helmet title='SignUp'>
      <section>
        <Container>
          <Row>
            {loading ? (
              <Col lg='12' className='text-center'>
                <h5 className='fw-bold'>Loading.....</h5>
              </Col>
            ) : (
              <Col lg='6' className='m-auto text-center'>
                <h3 className='fw-bold fs-4'>SignUp</h3>

                <Form className='auth__form' onSubmit={signUp}>
                  <FormGroup className='form__group'>
                    <input
                      type='text'
                      placeholder='Name'
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input
                      type='text'
                      placeholder='Username'
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input
                      type='email'
                      placeholder='Enter your email'
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input
                      type='password'
                      placeholder='Enter your password'
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </FormGroup>
                  <FormGroup className='form__group'>
                    <input type='file' onChange={(e) => setFile(e.target.files[0])} />
                  </FormGroup>

                  {error && <p className="text-danger">{error}</p>}

                  <button type='submit' className='buy__btn auth__btn'>
                    Create an Account
                  </button>
                  <p>
                    Already have an account? <Link to='/login'>Login</Link>
                  </p>
                </Form>
              </Col>
            )}
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default SignUp;
