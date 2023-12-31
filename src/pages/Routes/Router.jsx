import { Navigate, Route, Routes } from "react-router-dom";
import { MainView } from "../Main/MainView";
import { Login } from "../Login/Login";
import { Header } from "../../common/Header/Header";
import { RegisterUser } from "../Register/Register";
import { StudioGallery } from "../StudioGallery/StudioGallery";
import { Profile } from "../Profile/Profile";
import TattooGallery from "../TattooGallery/TattooGallery";
import InfoComponent from "../InfoComponent/InfoComponent";
import { Appointments } from "../Appointments/Appointments";
import Admin from "../Admin/Admin";

export const Router = () => {
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
              <MainView />
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
          path="/users"
          element={
            <>
              <Header showHeader={true} />
              <Admin />
            </>
          }
        />
        <Route
          path="/tattooview"
          element={
            <>
              <Header showHeader={true} />
              <TattooGallery />
            </>
          }
        />
          <Route
          path="/info"
          element={
            <>
              <InfoComponent />
            </>
          }
        />
         <Route path="/booknow" element={
          <>
          <Header showHeader={true} />
         <Appointments />
         </>
         } />

      </Routes>
    </>
  );
};
