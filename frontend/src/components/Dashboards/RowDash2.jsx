import React, { useState, useEffect } from "react";
import "./RowDash.css";
import { useGlobalContext } from "../../contexts/GlobalContext";

function RowDash2() {
  const { apiService } = useGlobalContext();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await apiService.get(
          "http://localhost:3310/api/users"
        );
        setUsers(response.data);
        // console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div className="rowDash-container">
      {users.map((user) => (
        <div key={user.tel} className="offerDash-item">
          <p className="array-box">{user.id}</p>
          <p className="array-box">{user.lastname}</p>
          <p className="array-box">{user.firstname}</p>
          <p className="array-box">{user.tel}</p>
          <p className="bigArray-box">{user.email}</p>
          <p>{user.is_admin}</p>
        </div>
      ))}
    </div>
  );
}

export default RowDash2;
