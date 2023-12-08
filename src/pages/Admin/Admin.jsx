import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getAllUsers } from "../../services/apiCalls";
import { userData } from "../userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import "./Admin.css";

const Admin = () => {
  const user = useSelector(userData);
  const adminToken = user.token;

  const [users, setUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers(adminToken, currentPage, searchEmail);
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [adminToken, currentPage]);

  return (
    <div className="adminContainer">
      <h2 className="titleAdmin"> || User List ||</h2>
      <input
        type="text"
        placeholder="Search by Email"
        value={searchEmail}
        onChange={(e) => setSearchEmail(e.target.value)}
      />
      <table className="userTable">
        <thead className="theadAdmin">
          <tr className="theadAdmin">
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user._id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.role}</td>
              <td>{user.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className="buttonPage"
        onClick={() => setCurrentPage(currentPage - 1)}
        disabled={currentPage === 1}
      >
        <FontAwesomeIcon
          icon={faForward}
          rotation={180}
          style={{
            "--fa-primary-color": "#efb810",
            "--fa-secondary-color": "#efb810",
          }}
        />
      </button>
      <button
        className="buttonPage1"
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <FontAwesomeIcon icon={faForward} style={{ color: "#efb810" }} />
      </button>
    </div>
  );
};

export default Admin;
