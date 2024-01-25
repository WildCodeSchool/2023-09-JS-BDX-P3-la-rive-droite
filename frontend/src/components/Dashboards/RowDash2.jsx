import React, { useState, useEffect } from "react";
import "./RowDash.css";
import { useGlobalContext } from "../../contexts/GlobalContext";
import { useAdminContext } from "../../contexts/AdminContext";

function RowDash2() {
  const { apiService } = useGlobalContext();
  const { goToEditUser } = useAdminContext();
  const [users, setUsers] = useState([]);

  const fetchUsers = async () => {
    try {
      const response = await apiService.get(
        `${import.meta.env.VITE_BACKEND_URL}/api/users`
      );
      setUsers(response.data);
      // console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteUser = async (id) => {
    try {
      await apiService.delete(
        `${import.meta.env.VITE_BACKEND_URL}/api/admin/users/${id}`
      );
      setUsers((previousOffer) =>
        previousOffer.filter((user) => user.id !== id)
      );
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="rowDash-container">
      {users.map((user) => (
        <div key={user.id} className="offerDash-item">
          <p className="array-box">{user.id}</p>
          <p className="array-box">{user.lastname}</p>
          <p className="array-box">{user.firstname}</p>
          <p className="array-box">{user.phone}</p>
          <p className="bigArray-box">{user.email}</p>
          <p>{user.is_admin}</p>
          <div className="icon-dash">
            <button
              type="button"
              aria-label="editeuser"
              onClick={() => goToEditUser(user.id)}
              className="invisible-button"
            >
              <i className="fa-solid fa-pen" />
            </button>
            <button
              type="button"
              aria-label="deleteuser"
              onClick={() => deleteUser(user.id)}
              className="invisible-button"
            >
              <i className="fa-solid fa-trash" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default RowDash2;
