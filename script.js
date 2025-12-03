var reservation = document.querySelector(".reservation");
var review = document.querySelector(".review");
var massage = document.querySelector(".massage");
var activities = document.querySelector(".activities");
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
        return "\n     \n       <div class=\"card-res\">\n          <h3>".concat(reservation.roomname, "</h3>\n          <p> name :").concat(reservation.guestname, "</p>\n          <p>Check-in: ").concat(reservation.checkin, "</p>\n          <p>Check-out: ").concat(reservation.checkout, "</p>\n          <p>Payment: ").concat(reservation.payment, " ").concat(reservation.currency, "</p>\n          <p>Reservation: ").concat(reservation.number, "</p>\n          <p>Status:<img src=\"image/Frame 6418.png\" alt=\"frame\"></p>\n\n        </div>\n    \n      \n  ");
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
        return " <div class=\"reat\">\n            <div class=\"review-content\">\n             <img src=\"image/Screenshot 2021-03-06 at 00.07 3.png\" alt=\"avatar\">\n            <div class=\"dis\">\n            <div class=\"reatname\">     \n             <div class=\"review-header\">".concat(review.guestname, "</div> \n              <div class=\"rating\">Rating: ").concat("★".repeat(review.rating), "</div>\n            </div>\n              <div class=\"comment\">").concat(review.comment, "</div>\n            </div>\n            <div class= \"rewiew-trip\">\n                ").concat(review.tripstart, " - ").concat(review.tripend, "</div>\n                ").concat(review.replay ? '<div class="replay">Replied</div>' : "", "\n            </div>\n     </div>\n      \n  ");
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
    massage.innerHTML = massages
        .map(function (mes) {
        return "   \n     \n      <div class=\"massage-card\">\n          <img src=\"".concat(mes.avatar, "\" alt=\"avatar\" class=\"avatar\">\n          <div class=\"massage-content\">\n            <div class=\"header\">\n              <span class=\"guestname\">").concat(mes.guestname, "</span> | \n              <span class=\"procces\">").concat(mes.procces, "</span>\n            </div>\n            <div class=\"date\">").concat(mes.date, "</div>\n            <div class=\"massage-text\">").concat(mes.massage, "</div>\n          </div>\n        </div>\n      \n  ");
    })
        .join(" ");
}
else {
    console.log("error ");
}
var activitie = [
    {
        avatar: "image/Ellipse 176.png",
        act: "Room with balcony needscleaning",
        message: "Lorem ipsum dolor sit ament",
        date: "April 22, 2022",
        time: "20:20 pm",
    },
    {
        avatar: "image/Ellipse 178.png",
        act: "Room with balcony needscleaning",
        message: "Lorem ipsum dolor sit ament",
        date: "April 22, 2022",
        time: "20:20 pm",
    },
    {
        avatar: "image/Ellipse 179.png",
        act: "Room with balcony needscleaning",
        message: "Lorem ipsum dolor sit ament",
        date: "April 22, 2022",
        time: "20:20 pm",
    },
    {
        avatar: "image/Rectangle 726.png",
        act: "Room with balcony needscleaning",
        message: "Lorem ipsum dolor sit ament",
        date: "April 22, 2022",
        time: "20:20 pm",
    },
];
if (activities) {
    activities.innerHTML = activitie
        .map(function (actt) {
        return "\n      <div class=\"activity-card\">\n        <img src=\"".concat(actt.avatar, "\" alt=\"avatar\" class=\"avatar\">\n        <div class=\"activity\">\n          <div class=\"header\">").concat(actt.act, "</div>\n          <div class=\"message\">").concat(actt.message, "</div>\n          <div class=\"meta\">\n            <span class=\"date\">").concat(actt.date, "</span> | \n            <span class=\"time\">").concat(actt.time, "</span>\n          </div>\n        </div>\n      </div>\n    ");
    })
        .join("");
}
else {
    console.error("Error");
}
var isOpen = false;
var button = document.querySelector(".button");
var nav = document.querySelector(".links-2");
button.addEventListener("click", function () {
    isOpen = !isOpen;
    if (nav) {
        nav.style.display = isOpen ? "flex" : "none";
    }
});
var switchbutton = document.querySelector(".switchbutton");
var body = document.body;
switchbutton === null || switchbutton === void 0 ? void 0 : switchbutton.addEventListener("click", function () {
    body.classList.toggle("dark-theme");
});
