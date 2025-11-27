const reservation = document.querySelector(".reservetion");
type Reservetion = {
  roomname:string,
  guestname:string,
  checkin:string,
  checkout:string
  payment: number,
  currency:string,
  number:number,
  status: "confrimed" | "pending" | "cencelled"
};

const reservations: Reservetion[] = [
{
  roomname:"Standard King Room with Forest View",
  guestname:"Alexandra Kasarkina",
  checkin:"2021-03-08",
  checkout:"2021-03-08",
  payment: 2500,
  currency:"GEL",
  number: 12348,
  status:"confrimed"

},
{
  roomname:"Standard King Room with Forest View",
  guestname:"Alexandra Kasarkina",
  checkin:"2021-03-08",
  checkout:"2021-03-08",
  payment: 2500,
  currency:"GEL",
  number: 12348,
  status:"confrimed"

},
{
  roomname:"Standard King Room with Forest View",
  guestname:"Alexandra Kasarkina",
  checkin:"2021-03-08",
  checkout:"2021-03-08",
  payment: 2500,
  currency:"GEL",
  number: 12348,
  status:"confrimed"

},

]
console.log(reservations)
