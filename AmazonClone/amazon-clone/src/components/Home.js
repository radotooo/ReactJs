import React from "react";
import "../styles/home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__img"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="advertise"
        />
        <div className="home__row first__row">
          <Product
            id={1}
            title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Charcoal Fabric"
            price={39.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61mhy8eQGEL._AC_SL1000_.jpg"
            rating={5}
          />
          <Product
            id={2}
            title="Amazon eero mesh Wi-Fi router"
            price={129.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41aFYRhjD5L._SL1000_.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id={3}
            title="Philips Hue White and Colour Ambiance Starter Kit: Smart Bulb 3x Pack LED [E27 Edison Screw] Includes, Bridge (Works with Alexa, Google Assistant and Apple HomeKit) [Energy Class A+]"
            price={82.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71CLO1n-iPL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id={4}
            title="Raspberry Pi 4 Modell B 4GB ARM-Cortex-A72 4x 1,50GHz, 4GB RAM, WLAN-ac, Bluetooth 5, LAN..."
            price={65.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71IOISwSYZL._AC_SL1400_.jpg"
            rating={5}
          />
          <Product
            id={5}
            title="Ring Video Doorbell 3"
            price={259.99}
            image="https://images-na.ssl-images-amazon.com/images/I/412yuVHY6OL._SL1000_.jpg"
            rating={4}
          />
        </div>

        <div className="home__row last">
          <Product
            id={6}
            title="Samsung LS34J550WQUXEN 34 Ultra Wide LED Monitor"
            price={329.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81VoHkKTTBL._AC_SL1500_.jpg"
            rating={4}
          />
          <Product
            id={5}
            title="Blue Microphone Yeti x Professional Condenser USB Microphone"
            price={209.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61yw%2BMkDwpL._AC_SL1500_.jpg"
            rating={1}
          />
        </div>
        <div className="home__row">{/* product */}</div>
      </div>
    </div>
  );
}

export default Home;
