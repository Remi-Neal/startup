import React from 'react';

export default function BookFinder() {
    return (
        <>
            <main>
                <form method="get" action="book_finder.html">
                    <div>
                        <span>📚</span>
                        <input type="text" placeholder="Search for books"/>
                    </div>
                    <button type="submit">Search</button>
                </form>
                <dii>Third party service</dii>
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