import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';


export default function BookFinder(props) {
    const [user, setUser] = useState(props.userName);
    const [search, setSearch] = useState('');
    
    const saveSearch = async (userName, userSearch) => {
        console.log('Saving search: ' + userSearch + " for user: " + userName);
        await fetch('/api/search/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: userName, search: userSearch }),
        })
    }

    const deleteSavedSearch = async (userName, userSearch) => {
        console.log('Deleting search: ' + userSearch + " for user: " + userName);
    }
    
    const getSavedSearches = async (userName) => {
        console.log('Getting saved searches for user: ' + userName);
        fetch('/api/search/get')
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('results').innerHTML = '<oi>';
            if(data[userName]) {
                for (let i = 1; i < Object.keys(data[userName]).length + 1; i++) {
                    let ret = data[userName][i];
                    let el = (
                        '<li>' + ret + '</li>'
                    )
                    document.getElementById('results').innerHTML += el;
                }
            }
            console.log(data[userName]);
        });
    }

    return (
        <>
            <main>
                <form method="get" action="book_finder.html">
                    <div>
                        <span>Username?</span>
                        <input className="form-control me-2" id="user" type="text" placeholder="Username"/>
                    </div>
                    <div>
                        <span>📚</span>
                        <input className="form-control me-2" id="search" type="text" placeholder="Search for books"/>
                    </div>
                    <button className="btn btn-outline-success" type="button">Search</button>
                    <button className="btn btn-outline-success" type="button" onClick={() => {
                            let userSearch = document.getElementById('search').value;
                            let userName = document.getElementById('user').value;
                            setSearch(userSearch);
                            setUser(userName);
                            saveSearch(userName, userSearch);
                        }}>Save Search</button> 
                </form>
                <div>Saved Searches
                     <span>
                        <button className="btn btn-outline-success" onClick={() => {
                            let userName = document.getElementById('user').value;
                            setUser(userName);
                            getSavedSearches(userName);
                        }} id="get-saved-searches">Go</button>
                    </span>
                </div>
                <div id="results" className="container">
                        
                </div>
                <div id="store-links">
                    <h2>Find Books at These Locations</h2>
                </div>
                <table>
                    <tr>
                        <td>
                            <a href="">Amazon</a>
                        </td>
                        <td>
                            <a href="">Barnes & Noble</a>
                        </td>
                        <td>
                            <a href="">Books-A-Million</a>
                        </td>
                    </tr>
                </table>
            </main>
        </>
    );
}