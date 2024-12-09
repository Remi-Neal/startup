// Create Account
export async function createAccount(userName, password){
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
            if(data.userName) {
                alert("Account created for " + data.userName);
                localStorage.setItem('userName', data.userName);
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

// Login
export async function login(currentUser, userPassword){
    try {
        fetch('/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ userName: currentUser, password: userPassword }),
        })
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            if(data.userName) {
                alert("Welcome Master " + data.userName);
                localStorage.setItem('userName', data.userName);
                console.log('Auth State changed to: true');
            } else {
                alert("Invalid login");
            }
        });
    }
    catch (error) {
        console.error('Error:', error);
        alert("Error logging in: " + error +"\n Please try again");
    }
}

// Logout
export async function logout(){   
    throw error = new Error('Not implemented');
}

// Check cookie token
export async function checkAuth(){
    throw error = new Error('Not implemented');
}

