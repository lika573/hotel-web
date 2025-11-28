var reservation = document.querySelector(".reservation");
var review = document.querySelector(".review");
var massage = document.querySelector(".massage");
var reservations = [
    {
        roomname: "Standard King Room with Forest View",
        guestname: "Alexandra Kasarkina",
        checkin: "2021-03-08",
        checkout: "2021-03-08",
        payment: 2500,
        currency: "GEL",
        number: 12348,
        status: "image/Frame 6418.png",
    },
    {
        roomname: "Standard King Room with Forest View",
        guestname: "Alexandra Kasarkina",
        checkin: "2021-03-08",
        checkout: "2021-03-08",
        payment: 2500,
        currency: "GEL",
        number: 12348,
        status: "image/Frame 6418.png",
    },
    {
        roomname: "Standard King Room with Forest View",
        guestname: "Alexandra Kasarkina",
        checkin: "2021-03-08",
        checkout: "2021-03-08",
        payment: 2500,
        currency: "GEL",
        number: 12348,
        status: "image/Frame 6418.png",
    },
];
if (reservation) {
    reservation.innerHTML = reservations
        .map(function (reservation) {
        return "\n       <div class=\"card-res\">\n          <h3>".concat(reservation.roomname, "</h3>\n          <p> name :").concat(reservation.guestname, "</p>\n          <p>Check-in: ").concat(reservation.checkin, "</p>\n          <p>Check-out: ").concat(reservation.checkout, "</p>\n          <p>Payment: ").concat(reservation.payment, " ").concat(reservation.currency, "</p>\n          <p>Reservation: ").concat(reservation.number, "</p>\n          <p>Status:<img src=\"image/Frame 6418.png\" alt=\"frame\"></p>\n\n        </div>\n    \n      \n  ");
    })
        .join(" ");
}
else {
    console.log("error ");
}
var view = [
    {
        guestname: "Harry Johnson",
        avatar: "image/Screenshot 2021-03-06 at 00.07 3.png",
        tripstart: "2020-08-17",
        tripend: "2020-08-25",
        rating: 5,
        comment: "The place was very spacious and cozy…",
        replay: true,
    },
    {
        guestname: "Harry Johnson",
        avatar: "image/Screenshot 2021-03-06 at 00.07 3.png",
        tripstart: "2020-08-17",
        tripend: "2020-08-25",
        rating: 5,
        comment: "The place was very spacious and cozy…",
        replay: true,
    },
    {
        guestname: "Harry Johnson",
        avatar: "image/Screenshot 2021-03-06 at 00.07 3.png",
        tripstart: "2020-08-17",
        tripend: "2020-08-25",
        rating: 5,
        comment: "The place was very spacious and cozy…",
        replay: true,
    },
];
if (review) {
    review.innerHTML = view
        .map(function (review) {
        return " <div class=\"reat\">\n            <div class=\"review-content\">\n             <img src=\"image/Screenshot 2021-03-06 at 00.07 3.png\" alt=\"avatar\">\n                <div class=\"review-header\">".concat(review.guestname, " | ").concat(review.tripstart, " - ").concat(review.tripend, "</div>\n                <div class=\"rating\">Rating: ").concat("★".repeat(review.rating), "</div>\n                <div class=\"comment\">").concat(review.comment, "</div>\n                ").concat(review.replay ? '<div class="replay">Replied</div>' : "", "\n            </div>\n     </div>\n      \n  ");
    })
        .join(" ");
}
else {
    console.log("error ");
}
var massages = [
    {
        avatar: "image/ab3f8c1c431931473fea2814629b5f7f1843324e.jpg",
        guestname: "Harry",
        procces: "Trip completed",
        date: "Aug 17 2020 - Aug 24 2020",
        massage: "Scusa,mi signior",
    },
    {
        avatar: "image/ab3f8c1c431931473fea2814629b5f7f1843324e.jpg",
        guestname: "Harry",
        procces: "Trip completed",
        date: "Aug 17 2020 - Aug 24 2020",
        massage: "Scusa,mi signior",
    },
    {
        avatar: "image/ab3f8c1c431931473fea2814629b5f7f1843324e.jpg",
        guestname: "Harry",
        procces: "Trip completed",
        date: "Aug 17 2020 - Aug 24 2020",
        massage: "Scusa,mi signior",
    },
    {
        avatar: "image/ab3f8c1c431931473fea2814629b5f7f1843324e.jpg",
        guestname: "Harry",
        procces: "Trip completed",
        date: "Aug 17 2020 - Aug 24 2020",
        massage: "Scusa,mi signior",
    },
];
if (massage) {
    massage.innerHTML = massages.map(function (mes) {
        return "   \n     \n      <div class=\"massage-card\">\n          <img src=\"".concat(mes.avatar, "\" alt=\"avatar\" class=\"avatar\">\n          <div class=\"massage-content\">\n            <div class=\"header\">\n              <span class=\"guestname\">").concat(mes.guestname, "</span> | \n              <span class=\"procces\">").concat(mes.procces, "</span>\n            </div>\n            <div class=\"date\">").concat(mes.date, "</div>\n            <div class=\"massage-text\">").concat(mes.massage, "</div>\n          </div>\n        </div>\n      \n  ");
    })
        .join(" ");
}
else {
    console.log("error ");
}
