import React from 'react';

export default function MessageBoard () {
    const name = localStorage.getItem("userName");

    function sendMessage() {
        const msgEl = document.querySelector('#newMessage');
        const msg = msgEl.value;
        if (!!msg) {
            appendMsg('me', 'me', msg);
            socket.send(`{"name":"${name}", "msg":"${msg}"}`);
            msgEl.value = '';
        }
    }

    return (
        <>
            <main>
                <div className="container">
                    <h1>Message Board</h1>
                    <form className="message-form" id="messageForm">
                        <div>User Name: <span id="user-name">{name}</span></div>
                        <textarea id="newMessage" placeholder="Your message" required></textarea>
                        <button class="btn btn-outline-success" type="submit" onClick={sendMessage}>Post Message</button>
                    </form>
                </div>
                <div className="message-board"></div>
            </main>
            <script src="chatClient.js"></script>
        </>
    )
}