import React from "react";
import {Button} from "./components/ui/button";
import { CarouselDemo } from "./components/base/CarouselDemo";


function Hero() {
  return (
    <section className="hero-section py-8 px-8">
      <div className="hero-container grid grid-cols-2 rounded-md min-h-[60vh] bg-[#f4f8f9]">
        <div className="hero-content flex flex-col justify-center p-16 gap-4">
          <span className="discount-badge inline-block rounded-full px-2 py-1 text-xs w-fit bg-[#febc26]">WEEKLY DISCOUNT</span>
          <h1 className="hero-title text-6xl font-semibold leading-none">Premium Product Online Shop</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quos
            suscipit est autem quia? Voluptatem?
          </p>
          <a to="/shop" className="shop-now-btn px-4 py-2 text-white font-medium bg-black rounded-md inline-block w-fit">
            Shop Now
          </a>
        </div>
        <div className="hero-image-container relative">
          <img
            src="https://fee-storefront.vercel.app/assets/hero/hero.jpg"
            alt=""
            className="hero-image w-full h-full object-cover"
          />
        </div>

      </div>

    </section>
  );
}

export default Hero;
