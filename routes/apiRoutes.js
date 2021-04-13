const data = require("../data")

module.exports = app => {
    app.get('/api/reservations', (req, res) => res.json(data.reservationArray));

    app.get('/api/waitlist', (req, res) => res.json(data.waitlistArray));

    app.post('/api/clear', (req, res) => {
        data.reservationArray = [];
        data.waitlistArray = [];
        res.json("Clear!")
    });

    app.post('/api/reservations', (req, res) => {
        const newReservations = req.body;

        if(data.reservationArray.length < 5) {
            data.reservationArray.push(newReservations);
        } else {
            data.waitlistArray.push(newReservations);
        };
        
        res.json(newReservations);

    });
};
