// // import { Route, Routes } from "react-router-dom";
//  import { Header } from "../../common/Header/Header";
// import { Artists } from "../Artists/Artists";
// import { Home } from "../Home/Home";
// import { Studio } from "../Studio/Studio";
// import "./MainView.css"


// export const MainView = () => {

//   return (
//     <div className="principalView">
//       <Header showHeader={true} />
//       <Home />
//       <Studio />
//       <Artists />
//     </div>
//   );
// };




import { Header } from "../../common/Header/Header";
import { Artists } from "../Artists/Artists";
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





// export const MainView = () => {
//   return (
//     <div className="principalView">
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/studio" element={<Studio />} />
//         <Route path="/artists" element={<Artists />} />
//       </Routes>
//     </div>
//   );
// };