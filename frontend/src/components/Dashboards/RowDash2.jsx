import ButtonMini from "../Boutons/ButtonMini";

const UserDash = [
  {
    id: 1,
    lastname: "Gondry",
    firstname: "Henri",
    tel: "0611589643",
    email: "blabla@gmail.com",
  },
  {
    id: 2,
    lastname: "Gondry",
    firstname: "Henri",
    tel: "0611589643",
    email: "blabla@gmail.com",
  },
  {
    id: 3,
    lastname: "Gondry",
    firstname: "Henri",
    tel: "0611589643",
    email: "blabla@gmail.com",
  },
  {
    id: 4,
    lastname: "Gondry",
    firstname: "Henri",
    tel: "0611589643",
    email: "blabla@gmail.com",
  },
  {
    id: 5,
    lastname: "Gondry",
    firstname: "Henri",
    tel: "0611589643",
    email: "blabla@gmail.com",
  },
];

function RowDash2() {
  return (
    <div className="rowDash-container">
      {UserDash.map((user) => (
        <div key={user.tel} className="offerDash-item">
          <p className="array-box">{user.id}</p>
          <p className="array-box">{user.lastname}</p>
          <p className="array-box">{user.firstname}</p>
          <p className="array-box">{user.tel}</p>
          <p className="bigArray-box">{user.email}</p>
          <ButtonMini textBtn="Envoyer" />
        </div>
      ))}
    </div>
  );
}

export default RowDash2;
