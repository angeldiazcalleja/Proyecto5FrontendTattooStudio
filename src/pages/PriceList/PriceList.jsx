import "./PriceList.css";

export const PriceList = () => {
  return (
    <>
    <div className="containerPrice">
      <div className="priceTitle">
        <p>-- Price List --</p>
      </div>

      <div className="priceItemsContainer">
        <div className="piercingsTitle">
            <p>Piercings</p>
        </div>
        <div className="earPrices">
           <p>Ear</p> 
        </div>
        <div className="priceItem">
          <div className="itemName">LOBES</div>
          <div className="itemPrice">$20 2 FOR $35</div>
        </div>
        <div className="line"></div>
        <div className="priceItem">
          <div className="itemName">HELIX</div>
          <div className="itemPrice">$30 2 FOR $50</div>
        </div>
        <div className="line"></div>
        <div className="priceItem">
          <div className="itemName">FLAT</div>
          <div className="itemPrice">$25</div>
        </div>
        <div className="line"></div>
        <div className="priceItem">
          <div className="itemName">TRAGUS / ANTI-TRAGUS</div>
          <div className="itemPrice">$25</div>
        </div>
        <div className="line"></div>
        <div className="priceItem">
          <div className="itemName">SURFACE TRAGUS</div>
          <div className="itemPrice">$25</div>
        </div>
        <div className="line"></div>
        <div className="priceItem">
          <div className="itemName">FAUX SNUG</div>
          <div className="itemPrice">$45</div>
        </div>
        <div className="line"></div>
        <div className="bodyPrices">
           <p>Body</p> 
        </div>
        <div className="priceItem">
          <div className="itemName">NIPPLE</div>
          <div className="itemPrice">$55</div>
        </div>
       
        <div className="priceItem">
          <div className="itemName">DERMAL ANCHOR</div>
          <div className="itemPrice">$45</div>
        </div>
        <div className="line"></div>
        <div className="priceItem">
          <div className="itemName">SURFACE</div>
          <div className="itemPrice">$25</div>
        </div>
        <div className="line"></div>
        <div className="bodyPrices">
           <p>Face</p> 
        </div>
        <div className="priceItem">
          <div className="itemName">SEPTUM</div>
          <div className="itemPrice">$45</div>
        </div>
        <div className="line"></div>
        <div className="priceItem">
          <div className="itemName">TONGUE</div>
          <div className="itemPrice">$50</div>
        </div>
        <div className="line"></div>
        <div className="priceItem">
          <div className="itemName">EYEBROW</div>
          <div className="itemPrice">$30</div>
        </div>
        <div className="line"></div>
        </div>
    </div>
    <div className="containerPrice2">
   
      <div className="priceItemsContainer">
      <div className="priceTitle">
        <p>-- Price List --</p>
      </div>
        <div className="LaserTitle">
            <p>Laser</p>
        </div>
        <div className="bodyPrices">
           <p>5cm x 5cm</p> 
        </div>
        <div className="priceItem">
          <div className="itemName"> 1 SESSION</div>
          <div className="itemPrice">$70</div>
        </div>
        <div className="lineLaser"></div>
        <div className="priceItem">
          <div className="itemName">5 SESSIONS</div>
          <div className="itemPrice"> $350</div>
        </div>
        <div className="lineLaser"></div>
        <div className="priceItem">
          <div className="itemName">10 SESSIONS</div>
          <div className="itemPrice">$500</div>
        </div>
        <div className="bodyPrices">
           <p>10cm x 10cm</p> 
        </div>
        <div className="priceItem">
          <div className="itemName">1 SESSION</div>
          <div className="itemPrice">$100</div>
        </div>
        <div className="lineLaser"></div>
        <div className="priceItem">
          <div className="itemName">5 SESSION</div>
          <div className="itemPrice">$400</div>
        </div>
        <div className="lineLaser"></div>
        
        <div className="priceItem">
          <div className="itemName">10 SESSION</div>
          <div className="itemPrice">$700</div>
        </div>
        
        <div className="bodyPrices">
           <p>15cm x 15cm</p> 
        </div>
        <div className="priceItem">
          <div className="itemName">1 SESSION</div>
          <div className="itemPrice">$130</div>
        </div>
        <div className="lineLaser"></div>
        
        <div className="priceItem">
          <div className="itemName">5 SESSION</div>
          <div className="itemPrice">$650</div>
        </div>
        <div className="lineLaser"></div>
        <div className="priceItem">
          <div className="itemName">10 SESSION</div>
          <div className="itemPrice">$850</div>
        </div>
        </div>
    </div>
    </>
  );
};


export default PriceList