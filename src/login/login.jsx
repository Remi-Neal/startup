import React from 'react';

export default function Login({updateLogin}) {
    function login() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        alert("Welcome back Master " + username);
        updateLogin(username, true);
      }

    return (
        <main className='container-fluid text-center'>
          <div>
            <form>
                <label>Username</label><br/>
                <input type="text" id="username"></input><br/>
                <label>Password</label><br/>
                <input type="password" id="password"></input><br/>
            </form>
            <button className="btn btn-outline-success" type="submit" onClick={login}>Login</button>
          </div>
        </main>
      );
}