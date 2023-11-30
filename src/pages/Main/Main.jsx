import { Header } from "../../common/Header/Header";
import { Artists } from "../Artists/Artists";
import { Home } from "../Home/Home";
import { Studio } from "../Studio/Studio";
import "./Main.css"

export const Main = () => {

  return (
    <div className="principalView">
      <Header showHeader={true} />
      <Home />
      <Studio />
      <Artists />
    </div>
  );
};
