fetch("/api/reservations")
.then(response => response.json())
.then(data => console.log(data));