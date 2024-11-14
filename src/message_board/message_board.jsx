import React from 'react';

export function MessageBoard () {
    return (
        <>
            <main>
                <div className="container">
                    <h1>Message Board</h1>
                    <form className="message-form" id="messageForm">
                        <div>Username</div>
                        <textarea id="message" placeholder="Your message" required></textarea>
                        <button type="submit">Post Message</button>
                    </form>
                </div>
                <ul className="message-board">
                    <div>WebSocket</div>
                    <li className="message">
                        <div>Username placeholder</div>
                        <p>
                            Message placeholder. Can be a whole paragraph or more.
                        </p>
                    </li>
                    <li className="message">
                        <div>Username placeholder</div>
                        <p>
                            Message placeholder. Can be a whole paragraph or more.
                        </p>
                    </li>
                </ul>
            </main>
        </>
    )
}