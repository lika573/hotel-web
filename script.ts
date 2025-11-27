const reservation = document.querySelector(".reservation") as HTMLDivElement;

type Reservetion = {
  roomname: string;
  guestname: string;
  checkin: string;
  checkout: string;
  payment: number;
  currency: string;
  number: number;
  status: "confrimed" | "pending" | "cencelled";
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
console.log(reservations.map((res) => console.log(res)));

if (reservation) {
  reservation.innerHTML = reservations
    .map((reservation) => {
      return `
       <div class="card-res">
          <h3>${reservation.roomname}</h3>
          <p>Guest: ${reservation.guestname}</p>
          <p>Check-in: ${reservation.checkin}</p>
          <p>Check-out: ${reservation.checkout}</p>
          <p>Payment: ${reservation.payment} ${reservation.currency}</p>
          <p>Reservation #: ${reservation.number}</p>
          <p>Status: ${reservation.status}</p>
        </div>
    
      
  `;
    })
    .join(" ");
} else {
  console.log("error ");
}
