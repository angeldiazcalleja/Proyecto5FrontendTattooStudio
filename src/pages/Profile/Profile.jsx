import "./Profile.css";

import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Header } from "../../common/Header/Header";
import "./Profile.css";

export const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [editMode, setEditMode] = useState(false);
  const { name, email, phone, role } = user.credentials;

  const handleMenuItemClick = (menuItem) => {
    navigate(`/profile/${menuItem.toLowerCase()}`);
  };

  const renderProfileInfo = () => (
    <>
  <div className="inputContainer">
    <div>
      <label className="labelProfile">Name</label>
      <p className="infoProfile">{name}</p>
    </div>
    <div>
      <label className="labelProfile">Role</label>
      <p className="infoProfile">{role}</p>
    </div>
  </div>
  <div className="inputContainer1">
    <div>
      <label className="labelProfile">Email</label>
      <p className="infoProfile">{email}</p>
    </div>
    <div>
      <label className="labelProfile">Phone</label>
      <p className="infoProfile">{phone}</p>
    </div>
  </div>
</>
  );

  const renderEditProfileForm = () => (
  <form className="inputContainer">
    <div>
      <label className="labelProfile">Name</label>
      <input type="text" value={name} />
    </div>
    <div>
      <label className="labelProfile">Email</label>
      <input type="email" value={email} />
    </div>
    <div>
      <label className="labelProfile">Phone</label>
      <input type="text" value={phone} />
    </div>
    <button type="submit">Save Changes</button>
  </form>
);

  return (
    <div className="profileView">
      <Header showHeader={true} />
      <div className="profileContainer">
        <div className="profileSidebar">
          <div
            className="sidebarItem"
            onClick={() => handleMenuItemClick("Profile")}
          >
            <p className="sidebarText">Profile</p>
          </div>
          <div
            className="sidebarItem"
            onClick={() => handleMenuItemClick("MyOrders")}
          >
            <p className="sidebarText"> My Orders</p>
          </div>
        </div>
        <div className="profileContent">
          <div className="profileHeader">
            <p className="titleProfile">My Account</p>
            <button
              className="buttonEditProfile"
              onClick={() => setEditMode(!editMode)}
            >
              Edit Profile
            </button>
          </div>
          <div className="informationEditProfile">
           Edit your personal info
          </div>
          <div className="lineProfile"></div>
          {editMode ? renderEditProfileForm() : renderProfileInfo()}
        </div>
      </div>
    </div>
  );
};

// Profile.jsx

// import  { useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { Header } from "../../common/Header/Header";
// import "./Profile.css";

// export const Profile = () => {
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.user);
//   const [editMode, setEditMode] = useState(false);

//   // Datos del usuario
//   const { name, email, phone, role} = user.credentials;

//   const handleMenuItemClick = (menuItem) => {
//     // Puedes manejar la lógica de redirección aquí
//     navigate(`/profile/${menuItem.toLowerCase()}`);
//   };

//   return (
//     <div className="profileView">
//       <Header showHeader={true} />
//       <div className="profileContainer">
//         <div className="profileSidebar">
//           <div className="sidebarItem" onClick={() => handleMenuItemClick("Profile")}>
//             <p className="sidebarText">Profile</p>
//           </div>
//           <div className="sidebarItem" onClick={() => handleMenuItemClick("MyOrders")}>
//             <p className="sidebarText"> My Orders</p>
//           </div>
//         </div>
//         <div className="profileContent">
//           <div className="profileHeader">
//             <p className="titleProfile">My Account</p>
//             <button className="buttonEditProfile" onClick={() => setEditMode(!editMode)}>Edit Profile</button>
//           </div>
//           <div className="lineProfile"></div>
//           {editMode ? (
//             // Mostrar el formulario de edición cuando está en modo de edición
//             <form>
//               <label>Name:</label>
//               <input type="text" value={name} disabled={!editMode} />
//               <label>Email:</label>
//               <input type="email" value={email} disabled={!editMode} />
//               <label>Phone:</label>
//               <input type="text" value={phone} disabled={!editMode} />
//               {/* Otros campos del formulario según necesites */}
//               <button type="submit">Save Changes</button>
//             </form>
//           ) : (
//             // Mostrar la información del perfil cuando no está en modo de edición
//             <div>
//               <p className="infoProfile">Name: {name}</p>
//               <p className="infoProfile">Email: {email}</p>
//               <p className="infoProfile">Phone: {phone}</p>
//               <p className="infoProfile">Role: {role}</p>
//               {/* Otra información del perfil según necesites */}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
