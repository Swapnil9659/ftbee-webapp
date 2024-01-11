import React, {useState}  from 'react';
import axios from 'axios';
import { setUserSession } from '../Utils/Common';

export default function Login(props) {
  const username = useFormInput('');
  const password = useFormInput('');
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
//const cors = require('cors');
 
  // handle button click of login form
  const handleLogin = () => {
    setError(null);
    setLoading(true);
    axios.post('http://localhost:8080/users/signin', { username: username.value, password: password.value }).then(response => {
      setLoading(false);
      setUserSession(response.data.token, response.data.user);
      props.history.push('/dashboard');
    }).catch(error => {
      setLoading(false);
      if (error.response.status === 401) setError(error.response.data.message);
      else setError("Something went wrong. Please try again later.");
    });
  }

  

  return (
    <div>
      <section className="rcontainer login">

        <div className="row pt-3">
        <div className="col-lg-1 col-md-1 col-sm-2 justify-content-start">
        </div> 
        <div className="col-lg-10 col-md-10 col-sm-8  justify-content-center">
            <h4 className="text-darkblue"><b>Login</b></h4>
        </div>
        <div className="col-lg-1 col-md-1 col-sm-2 justify-content-end">
        </div>
        </div> 
        <section className=" shadow-lg contact rounded px-4 mcontainer">
            <div className="row mt-4">
                <div className=" p-4 mb-5 rounded col-lg-12 col-md-12 col-sm-12 mt-4 mx-5 mt-5">
                    <form action="#">
                        <div className="row">
                            <label className="text-white" htmlform="name"><b>Username</b></label>
                            <input type="text" className="inputbox" placeholder="Enter Username" name="username" id="username" {...username} autoComplete="new-password" />
                        </div>
                        <div className="row mt-4">
                            <label className="text-white" htmlform="passward"><b>Password</b></label>
                            <input type="password" className="inputbox" placeholder="Enter Password" name="password" id="password" {...password} autoComplete="new-password"/>
                        </div>
                        <div className="row mt-4 text-white">
                            <b>Forgot Password</b>
                        </div>
                        <div className="my-4"> 
                        {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
                        <input className="py-2 px-5 rounded border-0" type="button" value={loading ? 'Loading...' : 'Login'} onClick={handleLogin} disabled={loading} />
                        </div>
                    </form>
                </div>
            </div>
        </section>
        </section>
    </div>
  )
}
const useFormInput = initialValue => {
  const [value, setValue] = useState(initialValue);
 
  const handleChange = e => {
    setValue(e.target.value);
  }
  return {
    value,
    onChange: handleChange
  }
}