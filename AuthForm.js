import { useState,useRef } from 'react';

import classes from './AuthForm.module.css';

const AuthForm = () => {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const [isLoading,setIsLoading] = useState(false);

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler =(event)=>{
    event.preventDefault();
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword =passwordInputRef.current.value;
    setIsLoading(true);

    if(isLogin){

    }
    else{
      fetch('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyA8jC_2up80A28QVJNpih7SA93Ffc_82NQ',
      {
        method: 'POST',
        body: JSON.stringify({
          email: enteredEmail,
          password:enteredPassword,
          returnSecureTokken:true
        }),
        headers:{
          'Content-Type' : 'application/json'
        }
      }).then(res =>{
        setIsLoading(false);
        if(res.ok){
          emailInputRef.current.value = '';
          passwordInputRef.current.value = '';

        }else{
          return res.json().then(data =>{
            let errorMessage = 'Authentication failed';
            if(data && data.error && data.error.message){
              errorMessage = data.error.message;
              alert(errorMessage);
            }
            console.log(data);
          });
        }
      });

    }
  }

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required ref={emailInputRef}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input type='password' id='password' required ref={passwordInputRef}/>
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login' : 'Create Account'}</button>}
          {isLoading && <p>Signing Up</p>}
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
