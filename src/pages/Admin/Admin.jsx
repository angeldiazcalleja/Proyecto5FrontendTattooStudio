import { useEffect, useState } from "react";
import { useSelector } from "react-redux"; // Eliminé el import innecesario de useDispatch
import { getAllUsers } from "../../services/apiCalls";
import { userData } from "../userSlice";
import "./Admin.css";

const Admin = () => {
  const user = useSelector(userData);
  const adminToken = user.token;

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getAllUsers(adminToken);
        setUsers(usersData);
      } catch (error) {
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, [adminToken]);


  return (
    <div className="adminContainer">
      <h2 className="titleAdmin"> || User List ||</h2>
      <table className="userTable" >
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
    </div>
  );
};

export default Admin;
