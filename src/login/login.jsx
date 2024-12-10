import React from 'react';
import { createAccount, login } from './authorization.js';

export default function Login({updateLogin}) {
    return (
        <main className='container-fluid text-center'>
          <div>
            <form>
                <label>Username</label><br/>
                <input type="text" id="username"></input><br/>
                <label>Password</label><br/>
                <input type="password" id="password"></input><br/>
            </form>
            <button id = 'login-button' className="btn btn-outline-success" type="submit" onClick={() => {
                                                                                        login(document.getElementById('username').value, document.getElementById('password').value);
                                                                                        updateLogin(T);
                                                                                    }}>
                                                                                        Login
                                                                                      </button>
            <button id = 'create-account-button' className="btn btn-outline-success" type="submit" onClick={() => {
                                                                                        createAccount(document.getElementById('username').value, document.getElementById('password').value);
                                                                                        login(document.getElementById('username').value, document.getElementById('password').value);
                                                                                        updateLogin(T)
                                                                                        console.log("Button Clicked");
                                                                                    }}>
                                                                                        Create Account
                                                                                    </button>
          </div>
        </main>
      );
}