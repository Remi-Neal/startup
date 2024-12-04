import React, {useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default async function getSavedSearches(userName) {
    console.log('Getting saved searches for user: ' + userName);
    fetch('/api/search/get')
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('results').innerHTML = '';
        for (let i = 0; i < data[userName].length; i++) {
            document.getElementById('results').innerHTML += '<p>' + data[userName][i] + '</p>';
        }
        console.log(data[userName]);
    });
    return<></>;
}