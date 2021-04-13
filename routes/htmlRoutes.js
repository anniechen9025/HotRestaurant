const path = require("path")

module.exports = app => {
    app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
    app.get('/home', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));
    
    app.get('/view', (req, res) => res.sendFile(path.join(__dirname, 'view.html')));
    
    app.get('/make', (req, res) => res.sendFile(path.join(__dirname, 'make.html')));
    
    app.get('*', (req, res) => res.sendFile(path.join(__dirname, '404.html')));
    // Say page not found
}
