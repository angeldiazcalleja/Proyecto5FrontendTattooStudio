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

  const [allUsers, setAllUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchRole, setSearchRole] = useState("");
  const [sortOrder, setSortOrder] = useState("ASC");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers(adminToken, currentPage);
        setAllUsers(usersData);
        setFilteredUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [adminToken, currentPage]);

  const applyFiltersAndSort = () => {
    const filteredAndSortedUsers = allUsers.filter((user) => {
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
  useEffect(() => {
    applyFiltersAndSort();
  }, [searchRole, sortOrder, currentPage]);

  const handleSearch = async () => {
    try {
      const usersData = await getAllUsers(adminToken, currentPage, searchRole, sortOrder);
      setFilteredUsers(usersData);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  return (
    <div className="adminContainer">
      <h2 className="titleAdmin"> || User List ||</h2>

      <div className="searchControls">
        <select
          value={searchRole}
          onChange={(e) => setSearchRole(e.target.value)}
        >
          <option value="">All Roles</option>
          <option value="customer">Customer</option>
          <option value="tattooArtist">Tattoo Artist</option>
          <option value="admin">Admin</option>
        </select>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
        >
          <option value="ASC">Ascending</option>
          <option value="DSC">Descending</option>
        </select>
        <button onClick={handleSearch}>Search</button>
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
