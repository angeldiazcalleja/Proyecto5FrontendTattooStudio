import { Header } from "../../common/Header/Header";
import  Artists  from "../Artists/Artists";
import { Home } from "../Home/Home";
import { Studio } from "../Studio/Studio";
import "./MainView.css";

export const MainView = () => {
  return (
    <div className="principalView">
      <Header showHeader={true} />

      <div id="home">
        <Home />
      </div>

      <div id="studio">
        <Studio />
      </div>

      <div id="artists">
        <Artists />
      </div>
    </div>
  );
};




