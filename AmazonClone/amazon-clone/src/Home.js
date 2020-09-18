import React from "react";
import "./home.css";
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
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/61mhy8eQGEL._AC_SL1000_.jpg"
            rating={5}
          />

          <Product
            id={2}
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/41aFYRhjD5L._SL1000_.jpg"
            rating={5}
          />

        </div>

        <div className="home__row">
          <Product
            id={3}
            title="Philips Hue White and Colour Ambiance Starter Kit: Smart Bulb 3x Pack LED [E27 Edison Screw] Includes, Bridge (Works with Alexa, Google Assistant and Apple HomeKit) [Energy Class A+]"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71CLO1n-iPL._AC_SL1500_.jpg"
            rating={4}
          />

          <Product
            id={4}
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71CLO1n-iPL._AC_SL1500_.jpg"
            rating={3}
          />
          <Product
            id={5}
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71CLO1n-iPL._AC_SL1500_.jpg"
            rating={1}
          />
        </div>

        <div className="home__row">
          <Product
            id={6}
            title="The lean startup"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/811JZ5p0AuL._AC_SL1500_.jpg"
            rating={1}
          />
        </div>

        <div className="home__row">{/* product */}</div>
      </div>
    </div>
  );
}

export default Home;
