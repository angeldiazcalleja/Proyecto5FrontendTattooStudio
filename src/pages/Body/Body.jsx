import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../Home/Home";
import { Login } from "../Login/Login";
import { Header } from "../../common/Header/Header";
import { RegisterUser } from "../Register/Register";
import { Studio } from "../Studio/Studio";
import { StudioGallery } from "../StudioGallery/StudioGallery";
import { Profile } from "../Profile/Profile";
import { Artists } from "../Artists/Artists";
import Tattoos from "../Tattoos/Tattoos";

export const Body = () => {

  return (
    <>
      <Routes>
        <Route
          path="*"
          element={
            <>
              <Header showHeader={true} /> 
              <Navigate to="/" />
            </>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Header showHeader={true} /> 
              <Home />
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Header showHeader={false} /> 
              <Login />
            </>
          }
        />
         <Route
          path="/register"
          element={
            <>
              <Header showHeader={false} /> 
              <RegisterUser />
            </>
          }
        />
        <Route
          path="/studio"
          element={
            <>
              <Header showHeader={false} /> 
              <Studio />
            </>
          }
        />
        <Route
          path="/studioGallery"
          element={
            <>
              <Header showHeader={true} /> 
              <StudioGallery />
            </>
          }
        />
        <Route
          path="/profile"
          element={
            <>
              <Header showHeader={true} /> 
              <Profile />
            </>
          }
        />
        <Route
          path="/artists"
          element={
            <>
              <Header showHeader={false} /> 
              <Artists />
            </>
          }
        />
         <Route
          path="/artists/:id/tattoos"
          element={
            <>
              <Header showHeader={true} /> 
              <Tattoos/>
            </>
          }
        />
      </Routes>
    </>
  );
};




