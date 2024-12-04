import React from 'react';

export default function Login({updateLogin}) {
    function createAccount() {
        const userName = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        try {
            fetch('/api/auth/create', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ user: userName, password: password}),
            })
            .then(response => response.json())
            .then(data => {
                if(data.token) {
                    alert("Account created for " + userName);
                    localStorage.setItem('userToken', data.token);
                    localStorage.setItem('userName', userName);
                    localStorage.setItem('userPassword', password);
                    {/*updateLogin(true);*/}
                } else {
                    alert("Username already exists");
                }
            });
        }
        catch (error) {
            console.error('Error:', error);
            alert("Error creating account: " + error +"\n Please try again");
        }
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
            <button id = 'login-button' className="btn btn-outline-success" type="submit" onClick={() => {
                                                                                      localStorage.setItem('userName', document.getElementById('username').value);
                                                                                      localStorage.setItem('userPassword', document.getElementById('password').value);}}>
                                                                                        Login
                                                                                      </button>
            <button id = 'create-account-button' className="btn btn-outline-success" type="submit" onClick={() => createAccount()}>Create Account</button>
          </div>
        </main>
      );
}