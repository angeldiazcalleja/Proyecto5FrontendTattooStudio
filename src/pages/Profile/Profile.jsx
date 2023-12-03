/* eslint-disable no-unused-vars */
// /* eslint-disable no-unused-vars */
// import  { useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { Header } from "../../common/Header/Header";
// import "./Profile.css";

// export const Profile = () => {
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.user);
//   const [editMode, setEditMode] = useState(false);
//   const { name, email, phone, role } = user.credentials;

//   const [editedName, setEditedName] = useState(name);
//   const [editedEmail, setEditedEmail] = useState(email);
//   const [editedPhone, setEditedPhone] = useState(phone);

//   const handleMenuItemClick = (menuItem) => {
//     navigate(`/profile/${menuItem.toLowerCase()}`);
//   };

//   const handleEditProfile = () => {
//     setEditMode(!editMode);
//   };

//   const handleSaveChanges = () => {
//     // Aquí puedes enviar los cambios a tu backend y actualizar el perfil del usuario
//     setEditMode(false);
//     // Agrega la lógica para enviar los cambios al backend
//   };

//   const renderProfileInfo = () => (
//     <>
//       <div className="inputContainer">
//         <div>
//           <label className="labelProfile">Name</label>
//           <p className="infoProfile">{name}</p>
//         </div>
//         <div>
//           <label className="labelProfile">Role</label>
//           <p className="infoProfile">{role}</p>
//         </div>
//       </div>
//       <div className="inputContainer1">
//         <div>
//           <label className="labelProfile">Email</label>
//           <p className="infoProfile">{email}</p>
//         </div>
//         <div>
//           <label className="labelProfile">Phone</label>
//           <p className="infoProfile">{phone}</p>
//         </div>
//       </div>
//     </>
//   );

//   const renderEditProfileForm = () => (
//     <form className="inputContainer">
//       <div>
//         <label className="labelProfile">Name</label>
//         <input
//           type="text"
//           value={editedName}
//           onChange={(e) => setEditedName(e.target.value)}
//         />
//       </div>
//       <div>
//         <label className="labelProfile">Email</label>
//         <input
//           type="email"
//           value={editedEmail}
//           onChange={(e) => setEditedEmail(e.target.value)}
//         />
//       </div>
//       <div>
//         <label className="labelProfile">Phone</label>
//         <input
//           type="text"
//           value={editedPhone}
//           onChange={(e) => setEditedPhone(e.target.value)}
//         />
//       </div>
//       <button type="button" onClick={handleSaveChanges}>
//         Save Changes
//       </button>
//     </form>
//   );

//   return (
//     <div className="profileView">
//       <Header showHeader={true} />
//       <div className="profileContainer">
//         <div className="profileSidebar">
//           <div
//             className="sidebarItem"
//             onClick={() => handleMenuItemClick("Profile")}
//           >
//             <p className="sidebarText">Profile</p>
//           </div>
//           <div
//             className="sidebarItem"
//             onClick={() => handleMenuItemClick("MyOrders")}
//           >
//             <p className="sidebarText"> My Orders</p>
//           </div>
//         </div>
//         <div className="profileContent">
//           <div className="profileHeader">
//             <p className="titleProfile">My Account</p>
//             <button
//               className="buttonEditProfile"
//               onClick={handleEditProfile}
//             >
//               {editMode ? "Cancel" : "Edit Profile"}
//             </button>
//           </div>
//           <div className="informationEditProfile">
//             {editMode
//               ? "Edit your personal info"
//               : "Your personal information"}
//           </div>
//           <div className="lineProfile"></div>
//           {editMode ? renderEditProfileForm() : renderProfileInfo()}
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Header } from "../../common/Header/Header";
import { userProfile, updateUserProfile } from "../../services/apiCalls";

import "./Profile.css";
import Inputs from "../../common/Input/Input";

export const Profile = () => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user);
  const [editMode, setEditMode] = useState(false);
  const { name, email, phone, role } = user.credentials;

  // Estados para los inputs editables
  const [editedName, setEditedName] = useState(name);
  const [editedEmail, setEditedEmail] = useState(email);
  const [editedPhone, setEditedPhone] = useState(phone);

  useEffect(() => {
    // Cuando el componente carga o cuando cambias al modo de edición, establece los valores iniciales

    setEditedName(name);
    setEditedEmail(email);
    setEditedPhone(phone);
  }, [name, email, phone, editMode]);

  const handleMenuItemClick = (menuItem) => {
    navigate(`/profile/${menuItem.toLowerCase()}`);
  };

  const handleEditProfile = () => {
    setEditMode(!editMode);
  };

  const handleSaveChanges = async () => {
    try {
      await updateUserProfile(
        user.credentials.token,
        {
          name: editedName,
          email: editedEmail,
          phone: editedPhone,
        },
        user.credentials._id
      );

      setEditMode(false);
      window.location.reload();
      navigate("/profile");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
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
    <>
      <div className="infoChangeProfile">
        <p>Your Login email cant be changed</p>
        <p>Contact us for that modification</p>
      </div>
      <form className="inputContainer">
        <Inputs
          text="Name"
          type="text"
          name="name"
          value={editedName}
          handler={(e) => setEditedName(e.target.value)}
        />
        <Inputs
          text="Email"
          type="email"
          name="email"
          value={editedEmail}
          handler={(e) => setEditedEmail(e.target.value)}
          isDisabled={true} 
        />
        <Inputs
          text="Phone"
          type="text"
          name="phone"
          value={editedPhone}
          handler={(e) => setEditedPhone(e.target.value)}
        />
      </form>
      <button
        className="buttonSaveChanges"
        type="button"
        onClick={handleSaveChanges}
      >
        Save Changes
      </button>
    </>
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
            <button className="buttonEditProfile" onClick={handleEditProfile}>
              {editMode ? "Cancel" : "Edit Profile"}
            </button>
          </div>
          <div className="informationEditProfile">
            {editMode ? "Update your personal info" : "Your personal information"}
          </div>
          <div className="lineProfile"></div>
          {editMode ? renderEditProfileForm() : renderProfileInfo()}
        </div>
      </div>
    </div>
  );
};

export default Profile;

// import  { useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { Header } from "../../common/Header/Header";
// // eslint-disable-next-line no-unused-vars
// import { userProfile, updateUserProfile } from "../../services/apiCalls";
// import "./Profile.css";
// import Inputs from "../../common/Input/Input";

// export const Profile = () => {
//   const navigate = useNavigate();
//   const user = useSelector((state) => state.user);
//   const [editMode, setEditMode] = useState(false);
//   const { name, email, phone, role } = user.credentials;

//   const [editedName, setEditedName] = useState(name);
//   const [editedEmail, setEditedEmail] = useState(email);
//   const [editedPhone, setEditedPhone] = useState(phone);

//   const handleMenuItemClick = (menuItem) => {
//     navigate(`/profile/${menuItem.toLowerCase()}`);
//   };

//   const handleEditProfile = () => {
//     setEditMode(!editMode);
//   };

//   const handleSaveChanges = async () => {
//     if (user.credentials && user.credentials.token) {
//       console.log(user.credentials.token, "MIREMOS");
//       try {
//         await updateUserProfile(user.credentials.token, {
//           name: editedName,
//           email: editedEmail,
//           phone: editedPhone,
//         }, user.credentials._id);

//         setEditMode(false);
//         window.location.reload();
//         navigate("/profile");
//       } catch (error) {
//         console.error("Error updating profile:", error);
//       }
//     } else {
//       console.error("User credentials or token not available.");
//     }
//   };

//   const renderProfileInfo = () => (
//     <>
//       <div className="inputContainer">
//         <div>
//           <label className="labelProfile">Name</label>
//           <p className="infoProfile">{name}</p>
//         </div>
//         <div>
//           <label className="labelProfile">Role</label>
//           <p className="infoProfile">{role}</p>
//         </div>
//       </div>
//       <div className="inputContainer1">
//         <div>
//           <label className="labelProfile">Email</label>
//           <p className="infoProfile">{email}</p>
//         </div>
//         <div>
//           <label className="labelProfile">Phone</label>
//           <p className="infoProfile">{phone}</p>
//         </div>
//       </div>
//     </>
//   );

//   const renderEditProfileForm = () => (
//     <form className="inputContainer">
//       <Inputs
//         text="Name"
//         type="text"
//         name="name"
//         handler={(e) => setEditedName(e.target.value)}
//       />
//       <Inputs
//         text="Email"
//         type="email"
//         name="email"
//         handler={(e) => setEditedEmail(e.target.value)}
//       />
//       <Inputs
//         text="Phone"
//         type="text"
//         name="phone"
//         handler={(e) => setEditedPhone(e.target.value)}
//       />
//       <button type="button" onClick={handleSaveChanges}>
//         Save Changes
//       </button>
//     </form>
//   );

//   return (
//     <div className="profileView">
//       <Header showHeader={true} />
//       <div className="profileContainer">
//         <div className="profileSidebar">
//           <div
//             className="sidebarItem"
//             onClick={() => handleMenuItemClick("Profile")}
//           >
//             <p className="sidebarText">Profile</p>
//           </div>
//           <div
//             className="sidebarItem"
//             onClick={() => handleMenuItemClick("MyOrders")}
//           >
//             <p className="sidebarText"> My Orders</p>
//           </div>
//         </div>
//         <div className="profileContent">
//           <div className="profileHeader">
//             <p className="titleProfile">My Account</p>
//             <button
//               className="buttonEditProfile"
//               onClick={handleEditProfile}
//             >
//               {editMode ? "Cancel" : "Edit Profile"}
//             </button>
//           </div>
//           <div className="informationEditProfile">
//             {editMode
//               ? "Edit your personal info"
//               : "Your personal information"}
//           </div>
//           <div className="lineProfile"></div>
//           {editMode ? renderEditProfileForm() : renderProfileInfo()}
//         </div>
//       </div>
//     </div>
//   );
// };
