import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import useAuthStore from '../../store/store';
import axios from 'axios';

// styles
import loginImage from '../../assets/login.png'
import classes from './LoginIndUserComp.module.css';

const url = "http://localhost:5000/auth/logininduser";

const LoginIndUserComp = () => {

  const { addUser } = useAuthStore();

  const [userDetails, setUserDetails] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [condition, setCondition] = useState(true);

  const loginIndividualUser = async (user) => {
    try {
      const details = await axios.post(url, user);
      if (details.status === 200) {
        addUser(details.data[0]);
        setCondition(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleChange = (e) => {
    setUserDetails({ ...userDetails, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginIndividualUser(userDetails);
    console.log("log in successfully");
  }


  return (
    <div className={classes.login}>
      <div className={classes.header}>
        <h1 className={classes.heading}>Welcome back!</h1>
      </div>


      <div className={classes.formContainer}>
        <img className={classes.image} src={loginImage} alt="login" />
        {condition ?
          <form className={classes.form} onSubmit={handleSubmit}>
            {/* user email */}
            <div className={classes.inputwrapper}>
              <p className={classes.label}>Email : </p>
              <div className={classes.form__group}>
                <input
                  type="email"
                  className={classes.form__email}
                  name='email'
                  placeholder='Enter your email'
                  value={userDetails.email}
                  onChange={handleChange}
                  autoComplete='on' />
              </div>
            </div>

            {/* user password */}
            <div className={classes.inputwrapper}>
              <p className={classes.label}>Password : </p>
              <div className={classes.form__group}>
                <input
                  type="password"
                  className={classes.form__password}
                  name='password'
                  placeholder='Enter your password'
                  value={userDetails.password}
                  onChange={handleChange}
                  autoComplete='on'
                />
              </div>
            </div>

            {/* confirm passowrd */}
            <div className={classes.inputwrapper}>
              <p className={classes.label}>Confirm passowrd : </p>
              <div className={classes.form__group}>
                <input
                  type="password"
                  className={classes.form__password}
                  name='confirmPassword'
                  placeholder='Enter your password'
                  value={userDetails.confirmPassword}
                  onChange={handleChange}
                  autoComplete='on'
                />
              </div>
            </div>

            <Link to='/signupinduser'>
              <p>Don't have an account - signup page</p>
            </Link>
            {/* details submit */}
            <div className={classes.form__group}>
              <button className={classes.form__submit} type='submit'>Login</button>
            </div>
          </form>
          :
          <div className={classes.successfullContainer}>
            <p>You have succesfully logged in</p>
            <Link to='/DashboardUser/'>
              <p>click here to go to your - DASHBOARD</p>
            </Link>
          </div>
        }
      </div>

    </div>
  )
}

export default LoginIndUserComp