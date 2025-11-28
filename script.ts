const reservation = document.querySelector(".reservation") as HTMLDivElement;
const review = document.querySelector(".review") as HTMLDivElement;
const massage = document.querySelector(".massage") as HTMLDivElement;
const activities = document.querySelector(".activities") as HTMLDivElement;

type Reservetion = {
  roomname: string;
  guestname: string;
  checkin: string;
  checkout: string;
  payment: number;
  currency: string;
  number: number;
  status: string;
};

const reservations: Reservetion[] = [
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
    .map((reservation) => {
      return `
       <div class="card-res">
          <h3>${reservation.roomname}</h3>
          <p> name :${reservation.guestname}</p>
          <p>Check-in: ${reservation.checkin}</p>
          <p>Check-out: ${reservation.checkout}</p>
          <p>Payment: ${reservation.payment} ${reservation.currency}</p>
          <p>Reservation: ${reservation.number}</p>
          <p>Status:<img src="image/Frame 6418.png" alt="frame"></p>

        </div>
    
      
  `;
    })
    .join(" ");
} else {
  console.log("error ");
}

type Review = {
  guestname: string;
  avatar: string;
  tripstart: string;
  tripend: string;
  rating: number;
  comment: string;
  replay: boolean;
};
const view: Review[] = [
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
    .map((review) => {
      return ` <div class="reat">
            <div class="review-content">
             <img src="image/Screenshot 2021-03-06 at 00.07 3.png" alt="avatar">
                <div class="review-header">${review.guestname} | ${
        review.tripstart
      } - ${review.tripend}</div>
                <div class="rating">Rating: ${"★".repeat(review.rating)}</div>
                <div class="comment">${review.comment}</div>
                ${review.replay ? '<div class="replay">Replied</div>' : ""}
            </div>
     </div>
      
  `;
    })
    .join(" ");
} else {
  console.log("error ");
}

type Massage = {
  avatar: string;
  guestname: string;
  procces: string;
  date: string;
  massage: string;
};

const massages: Massage[] = [
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
  massage.innerHTML = massages.map((mes) => {
      return`   
     
      <div class="massage-card">
          <img src="${mes.avatar}" alt="avatar" class="avatar">
          <div class="massage-content">
            <div class="header">
              <span class="guestname">${mes.guestname}</span> | 
              <span class="procces">${mes.procces}</span>
            </div>
            <div class="date">${mes.date}</div>
            <div class="massage-text">${mes.massage}</div>
          </div>
        </div>
      
  `;
    })
    .join(" ");
} else {
  console.log("error ");
}
type Activities = {
  avatar:string,
  act:string,
  message:string,
  date:number,
  time:number,
}