const port = process.argv.length > 2 ? process.argv[2] : 4000;
app.use(express.static('public'));

function callLitergicalCalAPI([lang, ...]) {
    if(lang) {
        fetch('http://calapi.inadiutorium.cz/api/v0/en/calendars/default/today')
    else {
        fetch('http://calapi.inadiutorium.cz/api/v0/en/calendars/default/today')
    }

}
