import React, {useState, useEffect} from 'react';

export default function BookFinder(props) {
    const [user, setUser] = useState(props.userName);
    const [search, setSearch] = useState('');
    
    const saveSearch = async () => {
        console.log('Saving search: ' + search + " for user: " + user);
        await fetch('/api/search/save', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ user: user, search: search }),
        })
    }

    return (
        <>
            <main>
                <form method="get" action="book_finder.html">
                    <div>
                        <span>📚</span>
                        <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="Search for books"/>
                    </div>
                    <button type="button">Search</button>
                    <button type="button" onClick={() => saveSearch()}>Save Search</button> 
                </form>
                <div>Third party service</div>
                <div id="results">
                    <h2>Results</h2>
                    <ul>
                        <li>
                            <h4>Book 1</h4>
                            <a href="">Where to find it</a>
                            <div>Book Description</div>
                        </li>
                        <li>
                            <h4>Book 2</h4>
                            <a href="">Where to find it</a>
                            <div>Book Description</div>
                        </li>
                        <li>
                            <h4>Book 3</h4>
                            <a href="">Where to find it</a>
                            <div>Book Description</div>
                        </li>
                    </ul>
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