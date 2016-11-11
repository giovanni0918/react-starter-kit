const express = require('express')
const path = require('path')
const compression = require('compression')

const app = express();

app.use(compression());

// serve our static stuff like index.css
app.use(express.static(path.join(__dirname, 'public')));

// send all requests to index.html so browserHistory works
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 8080;
process.env.NODE_ENV = "production";
app.listen(PORT, () => console.log(`Listening at localhost:${PORT}`));
