import { Header } from "../../common/Header/Header";
import  InfoAppointment from "../infoAppointments/infoAppointments";
import { PriceList } from "../PriceList/PriceList";



export const InfoComponent = () => {
  return (
    <div className="principalView">
      <Header showHeader={true} />

      <div id="infoAppointment">
        <InfoAppointment />
      </div>

      <div id="pricelist">
        <PriceList />
      </div>
    </div>
  );
};


export default InfoComponent



