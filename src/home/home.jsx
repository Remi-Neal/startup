import React from 'react';

export default function Home() {
    return (
        <>
            <main>
                <h3 id="about-title">What is Codex Vivit?</h3>
                <p id="about-section">
                    Codex Vivit is a website designed to help you find books, learn about them, and explore new ideas. 
                    We have a history page where you can learn about the history of books, a message board where you can discuss books with others, 
                    and a book finder where you can find books that you might like.
                </p>

                /* Create Carousel with bootstrap */

                <img src="https://plus.unsplash.com/premium_photo-1664392455446-1e636959468b?q=80&w=3445&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" height="300" alt="Source: https://unsplash.com/photos/united-states-circa-1960s-man-in-library-XqePqNS5Kc4"/>
                <div className="link-display">
                    <button onclick="location.href='book_finder.html'">
                        <table>
                            <tr>
                                <td>
                                    <img src="../images/website-images/32px-Temp_plate.svg.png" alt="Book Finder"/>
                                </td>
                                <td>
                                    <h3>Book Finder</h3>
                                    <p>Find books that you might like based on your interests.</p>
                                </td>
                            </tr>
                        </table>
                    </button>
                    <button onclick="location.href='book_finder.html'">
                        <table>
                            <tr>
                                <td>
                                    <img src="../images/website-images/32px-Temp_plate.svg.png" alt="Codex History"/>
                                </td>
                                <td>
                                    <h3>History of the Codex</h3>
                                    <p>Learn more about the history of books and codecies</p>
                                </td>
                            </tr>
                        </table>
                    </button>   
                    <button onclick="location.href='message_board.html'">
                        <table>
                            <tr>
                                <td>
                                    <img src="../images/website-images/32px-Temp_plate.svg.png" alt="Message Board"/>
                                </td>
                                <td>
                                    <h3>Message Board</h3>
                                    <p>Discuss books with others on our message board.</p>
                                </td>
                            </tr>
                        </table>
                    </button>
                </div>
            </main>
        </>
    );
}