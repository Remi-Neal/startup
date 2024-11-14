import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
  return (
    <>
        <header className=""> 
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                <a className="navbar-brand" href="#">Codex Vivit</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="history.html">History</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Book List
                            </a>
                            <ul className="dropdown-menu">
                            <li><a className="dropdown-item" href="https://archive.org/">Internet Archive</a></li>
                            <li><a className="dropdown-item" href="https://www.abebooks.com/">AbleBooks</a></li>
                            <li><hr className="dropdown-divider"></hr></li>
                            <li><a className="dropdown-item" href="book_finder.html">All</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="message_board.html">Message Board</a>
                        </li>
                    </ul>
                    <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <a className="nav-link" href="login.htm">Login</a>
                </div>
                </div>
            </nav>
        </header>

        <footer className='footer fixed-bottom bg-light'>
            <p><strong>About: </strong>This site was originally created for the completion of BYU's C S 260: Web Programming course</p>
            <div className="author-repo">
                <p><strong>Author: </strong>Remi Manning-Neal</p>
                <p><strong>Repo: </strong><a href="https://github.com/Remi-Neal/startup">GitHub</a></p>
            </div>
        </footer>
    </>
  );
}