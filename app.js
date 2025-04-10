const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// Setup
app.use(bodyParser.urlencoded({extended: false}));

let comments = [];

app.get('/', (req, res) => {
    res.send(`
    <h1>XSS Demo</h1>
    <ul>
      <li><a href="/stored">Stored XSS</a> (Comments)</li>
      <li><a href="/search">Reflected XSS</a> (Search)</li>
      <li><a href="/dom">DOM-Based XSS</a></li>
    </ul>
  `);
});
// Übung 1
app.get('/stored', (req, res) => {
    let commentsList = comments.map(comment =>
        `<li>${comment.content}</li>`
    ).join('');

    res.send(`
    <h1>Comments</h1>
    <form method="POST" action="/stored">
      <input type="text" name="comment">
      <button>Post</button>
    </form>
    <ul>${commentsList}</ul>
    <a href="/">Back to home</a>
  `);
});

app.post('/stored', (req, res) => {
    comments.push({content: req.body.comment});
    res.redirect('/stored');
});
// Übung 2
app.get('/search', (req, res) => {
    const query = req.query.q || '';

    res.send(`
    <h1>Search</h1>
    <form>
      <input type="text" name="q">
      <button>Search</button>
    </form>
    ${query ? `<p>Results for: ${query}</p>` : ''}
    <a href="/">Back to home</a>
  `);
});
// Übung 3
app.get('/dom', (req, res) => {
    res.send(`
    <h1>DOM-Based XSS</h1>
    <p id="output"></p>
        <input id="inputField" type="text" >
        <button id="submitBU" type="submit">Submit</button>
        </br>
    <a href="/">Back to home</a>

<script>
    document.getElementById("submitBU").addEventListener("click", function() {
        
        document.getElementById("output").innerHTML = document.getElementById("inputField").value;

        const scripts = document.getElementById("output").getElementsByTagName('script');
        for (let script of scripts) {
            const newScript = document.createElement('script');
            newScript.textContent = script.textContent;
            document.body.appendChild(newScript).remove();
        }
    });
</script>
  `);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});