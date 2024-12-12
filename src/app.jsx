import React from 'react';
import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import History from './history/history';
import BookFinder from './book_finder/book_finder';
import MessageBoard from './message_board/message_board';
import Login from './login/login';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './app.css';
import { logout, checkAuth } from '../service/authorization';



export default function App() {
    const [currentUser, setCurrentUser] = React.useState(localStorage.getItem('userName') || '');
    const [authState, setAuthState] = currentUser !== '' ? React.useState(true) : React.useState(false);
   {/*} 
    React.useEffect(() => {
        const fetchAuth = async () => {
            const auth = await checkAuth(); {/* TODO: error being thrown here in browser console *
            console.log(auth);
            if(auth.state) {
                setCurrentUser(auth.userName);
                setAuthState(true);
                isLoggedIn();
            } else {
                setCurrentUser('');
                setAuthState(false);
                isLoggedIn();
            }
            console.log('Auth State: ' + authState);
        };
        fetchAuth();
    }, []);
    */}

    function isLoggedIn(){
        if(authState){
            return (
                <>
                    <li className="nav-item dropdown">
                        <div className="nav-link dropdown-toggle" to="book_finder" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Welcome Master {currentUser}
                        </div>
                        <ul className="dropdown-menu">
                            <li>
                                <NavLink className="dropdown-item" to="profile">Profile</NavLink>
                            </li>
                            <li>
                                <button type="button" className="dropdown-item btn btn-dark" onClick={() => updateLogin(false)}>Logout</button>
                            </li>
                        </ul>
                    </li>
                </>
            )
        } else {
            return <NavLink className="nav-link" to="login">Login</NavLink>
        }
    }

    function messageLink() {
        if(authState){
            return <NavLink className="nav-link" to="message_board">Message Board</NavLink>
        } else { return }
    }

    async function updateLogin(state) {
        if(state) {
            setAuthState(true);
            console.log('Auth State: ' + authState);
            isLoggedIn();
        } else if(!!!state) {
            logout();
            setAuthState(false);
            isLoggedIn();
        } else { return } {/* Add create account and already logged in situation */}
    }
    



    function unknownPath() {
        return (
            <>
                <div>
                    <h1>404: Page Not Found</h1>
                    <p>Sorry, the page you are looking for does not exist.</p>
                    <p>Click <NavLink to='home'>here</NavLink> to return to the home page or <NavLink to="login">here</NavLink> to login.</p>
                </div>
            </>
        );
    }    

  return (
    <>
    <BrowserRouter>
        <header> 
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <NavLink className="navbar-brand" to="home">Codex Vivit</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link active" aria-current="home" to="home">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="history">History</NavLink>
                            </li>
                            <li className="nav-item dropdown">
                                <NavLink className="nav-link dropdown-toggle" to="book_finder" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Book List
                                </NavLink>
                                <ul className="dropdown-menu">
                                <li>
                                    <NavLink className="dropdown-item" to="https://archive.org/">Internet Archive</NavLink>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="https://www.abebooks.com/">AbleBooks</NavLink>
                                </li>
                                <li>
                                    <hr className="dropdown-divider"></hr>
                                </li>
                                <li>
                                    <NavLink className="dropdown-item" to="book_finder">All</NavLink>
                                </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                {messageLink()}
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        {isLoggedIn()}
                    </div>
                </div>
            </nav>
        </header>
        
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='home' element={<Home />} />
            <Route path='history' element={<History />} />
            <Route path='book_finder' element={<BookFinder userName={currentUser} />} />
            <Route path='message_board' element={<MessageBoard />} />
            <Route 
                path='login' 
                element={
                    <Login updateLogin={updateLogin}/>
                }
            />
            <Route path='*' element={unknownPath()} />
        </Routes>

        <footer className='footer fixed-bottom bg-light'>
            <p><strong>About: </strong>This site was originally created for the completion of BYU's C S 260: Web Programming course</p>
            <div className="author-repo">
                <p><strong>Author: </strong>Remi Manning-Neal</p>
                <p><strong>Repo: </strong><a href="https://github.com/Remi-Neal/startup">GitHub</a></p>
            </div>
        </footer>
    </BrowserRouter>
    </>
  );
}