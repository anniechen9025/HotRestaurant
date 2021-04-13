const path = require("path")

module.exports = app => {
    app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/home.html')));
    app.get('/home', (req, res) => res.sendFile(path.join(__dirname, '../public/home.html')));
    
    app.get('/reserved', (req, res) => res.sendFile(path.join(__dirname, '../public/reserved.html')));
    
    app.get('/table', (req, res) => res.sendFile(path.join(__dirname, '../public/table.html')));
    
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, '../public/404.html')));
};
