const express = require('express');
const path = require('path');
const compression = require('compression');

const app = express();

// enable gzip compression on the server
app.use(compression());

// serve our static stuff like styles/app.css
app.use('/react-starter-kit/static', express.static(path.join(__dirname, 'static')));

// send all requests to index.html so browserHistory works
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

const PORT = process.env.PORT || 8080;
process.env.NODE_ENV = "production";
app.listen(PORT, () => console.log(`Listening at localhost:${PORT}`));
