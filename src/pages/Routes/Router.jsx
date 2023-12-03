import { Navigate, Route, Routes } from "react-router-dom";
import { MainView } from "../Main/MainView";
import { Login } from "../Login/Login";
import { Header } from "../../common/Header/Header";
import { RegisterUser } from "../Register/Register";
import { StudioGallery } from "../StudioGallery/StudioGallery";
import { Profile } from "../Profile/Profile";
// import ArtistDetails from "../ArtistsDetails/ArtistsDetails";
import TattooGallery from "../TattooGallery/TattooGallery";


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
          path="/tattooview"
          element={
            <>
            <Header showHeader={true} />
              <TattooGallery />
            </>
          }
        />
        
      </Routes>
    </>
  );
};
