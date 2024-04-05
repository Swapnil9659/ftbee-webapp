import React, {useState}  from 'react';
import {useNavigate } from 'react-router-dom';
import { UserAuth } from '../Context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const {signIn}  = UserAuth();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('')
    try {
      await signIn (email, password)
      navigate('/dashboard')
    } catch (e) {
      setError(e.message)
      console.log(e.message)
    }
  };

  return (
    <section className='min-vh-100'>
      <div className='row'>
        <div className="mx-auto col-lg-4 col-ms-8 col-11">
          <div className='mx-auto mt-5 p-5 shadow-lg bg-warning rounded'>
            <form onSubmit={handleSubmit}>
              <div className="row mt-2">
                <input type="email" onChange={(e) => setEmail(e.target.value)}  className="form-control px-3 mb-4 rounded w-100" placeholder="Enter Email Address" name="username" id="username" />
              </div>
              <div className="row mt-2 mb-4">
                <input onChange={(e) => setPassword(e.target.value)} type="password" className="form-control px-3 mb-4 rounded w-100" placeholder="Enter Password" name="password" id="password"/>
              </div>
              <button className='btn btn-sm border shadow-lg  start-50 translate-middle text-uppercase'>
                Sign In
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}