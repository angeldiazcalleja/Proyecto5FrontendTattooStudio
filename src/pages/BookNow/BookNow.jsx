import { Header } from "../../common/Header/Header";
import CreateAppointment from "../CreateAppointments/CreateAppointments";
import { PriceList } from "../PriceList/PriceList";



export const BookNow = () => {
  return (
    <div className="principalView">
      <Header showHeader={true} />

      <div id="createappointment">
        <CreateAppointment />
      </div>

      <div id="pricelist">
        <PriceList />
      </div>
    </div>
  );
};


export default BookNow



