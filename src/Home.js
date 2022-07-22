import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB4286
              84220_,jpg"
          alt="2016 amazon background homepage"
        />
        <div className="home__row">
          <Product
            id="64036053"
            title="Nutricost Whey Protein"
            price={29.99}
            image="https://cdn.shopify.com/s/files/1/0222/4128/0074/products/NTC_WPC_Powder_UF_2LB_2750CC_Front_700x.jpg?v=1652215637"
            rating={3}
          />

          <Product
            id="30445043"
            title="Wilson Evolution Basketball"
            price={59.99}
            image="https://m.media-amazon.com/images/I/91vdgs5FY4L._AC_SX522_.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id="53968443"
            title="Dell 27 Monitor - S2721HSX"
            price={259.99}
            image="https://i.dell.com/is/image/DellContent//content/dam/ss2/product-images/dell-client-products/peripherals/monitors/s-series/s2721hsx/198-s-series-monitor-imagery-created-monitor-s2721hsx-5000x5000.jpg?fmt=pjpg&pscan=auto&scl=1&hei=402&wid=402&qlt=100,0&resMode=sharp2&size=402,402"
            rating={4}
          />
          <Product
            id="5657564"
            title="Apple AirPods Max"
            price={549.99}
            image="https://target.scene7.com/is/image/Target/GUEST_20a158aa-78a9-4752-ac52-33d79b82ebab?wid=325&hei=325&qlt=80&fmt=pjpeg"
            rating={5}
          />

          <Product
            id="98434543"
            title="L Shaped Gaming Desk, Home Office Desk with Round Corner, Computer Desk with Large Monitor Stand Desk Workstation"
            price={129.99}
            image="https://i5.walmartimages.com/asr/6f77fffa-3f89-4b08-b23e-eb2a892458c7.c64907e30590674a92edcfa921289c44.jpeg?odnHeight=612&odnWidth=612&odnBg=FFFFFF"
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="12353435"
            title="Vaske TV Stand for TVs up to 70'' with Fireplace Included"
            price="649.99"
            image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6481/6481727_sd.jpg;maxHeight=640;maxWidth=700"
            rating={3}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
