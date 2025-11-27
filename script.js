var reservation = document.querySelector(".reservation");
var reservations = [
    {
        roomname: "Standard King Room with Forest View",
        guestname: "Alexandra Kasarkina",
        checkin: "2021-03-08",
        checkout: "2021-03-08",
        payment: 2500,
        currency: "GEL",
        number: 12348,
        status: "confrimed",
    },
    {
        roomname: "Standard King Room with Forest View",
        guestname: "Alexandra Kasarkina",
        checkin: "2021-03-08",
        checkout: "2021-03-08",
        payment: 2500,
        currency: "GEL",
        number: 12348,
        status: "confrimed",
    },
    {
        roomname: "Standard King Room with Forest View",
        guestname: "Alexandra Kasarkina",
        checkin: "2021-03-08",
        checkout: "2021-03-08",
        payment: 2500,
        currency: "GEL",
        number: 12348,
        status: "confrimed",
    },
];
console.log(reservations.map(function (res) { return console.log(res); }));
if (reservation) {
    reservation.innerHTML = reservations
        .map(function (reservation) {
        return "\n       <div class=\"card-res\">\n          <h3>".concat(reservation.roomname, "</h3>\n          <p>Guest: ").concat(reservation.guestname, "</p>\n          <p>Check-in: ").concat(reservation.checkin, "</p>\n          <p>Check-out: ").concat(reservation.checkout, "</p>\n          <p>Payment: ").concat(reservation.payment, " ").concat(reservation.currency, "</p>\n          <p>Reservation #: ").concat(reservation.number, "</p>\n          <p>Status: ").concat(reservation.status, "</p>\n        </div>\n    \n      \n  ");
    })
        .join(" ");
}
else {
    console.log("error ");
}
