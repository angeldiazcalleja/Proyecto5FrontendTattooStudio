import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { userData } from "../userSlice";
 import { getAllUsers } from "../../services/apiCalls";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faForward } from "@fortawesome/free-solid-svg-icons";
import "./Admin.css";

const Admin = () => {
  const user = useSelector(userData);
  const adminToken = user.token;

  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers(adminToken, currentPage);
        setAllUsers(usersData);
        applyFiltersAndSort(allUsers);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [adminToken, currentPage]);


  const applyFiltersAndSort = () => {
    const filteredAndSortedUsers = allUsers.filter((user) => {
      // Filtrar por rol
      if (searchRole && user.role.toLowerCase() !== searchRole.toLowerCase()) {
        return false;
      }
  
      return true;
    });

    
    if (sortOrder === "ASC") {
      filteredAndSortedUsers.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortOrder === "DSC") {
      filteredAndSortedUsers.sort((a, b) => b.name.localeCompare(a.name));
    }
    setFilteredUsers(filteredAndSortedUsers);
  };

  const [searchRole, setSearchRole] = useState("");
  const [sortOrder, setSortOrder] = useState("ASC");

  useEffect(() => {
    applyFiltersAndSort();
  }, [searchRole, sortOrder, currentPage]);

  return (
    <div className="adminContainer">
      <h2 className="titleAdmin"> || User List ||</h2>

      <div className="searchControls">
        <input
          type="text"
          placeholder="Search by role..."
          value={searchRole}
          onChange={(e) => setSearchRole(e.target.value)}
        />
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="ASC">Ascending</option>
          <option value="DSC">Descending</option>
        </select>
      </div>

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
          {filteredUsers.map((user) => (
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
