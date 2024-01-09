import React, { useState } from 'react';
import './login.scss';

const Login = () => {

    const [isSignIn, setIsSignIn] = useState(false);


    return (
        <div>
            <div className="loginPage">
                <div className="heading">
                    <h1></h1>
                    <h1>{isSignIn ? "Sign In Now" : "Log In Now"}</h1>
                </div>

                <form action="">

                    {isSignIn && <div>
                        <label htmlFor="">Name</label>
                        <input type="text" />
                    </div>
                    }

                    <div>
                        <label htmlFor="">Email</label>
                        <input type="text" />
                    </div>

                    <div>
                        <label htmlFor="">Password</label>
                        <input type="text" />
                        <div>
                            <input type="checkbox" />
                            <label htmlFor="">Show Password</label>
                        </div>
                    </div>

                    <button>{isSignIn ? "SIGN IN" : "LOGIN IN"}</button>
                </form>

                <div className="or">
                    <p>or</p>
                </div>

                <button onClick={() => setIsSignIn((pre) => !pre)}>{isSignIn ? "HAVE AN ACCOUNT " : "CREATE AN ACCOUNT"}</button>




            </div>
        </div>
    );
};

export default Login;