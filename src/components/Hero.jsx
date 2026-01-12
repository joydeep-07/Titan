import React from "react";
import watch from "../assets/images/watch1.png";
import Right from "./Right";

const Hero = () => {
  return (
    <div className="flex justify-center items-center">
        
      <section
        className="
        flex items-center justify-between      
        bg-[var(--bg-card)]
       w-7xl my-25 
      "
      >
        {/* LEFT CONTENT */}
        <div className="max-w-xl">
          <p className="text-sm text-[var(--text-muted)] mb-4">
            Praeludium collection
          </p>

          <h1
            className="text-6xl leading-tight mb-6"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            The <br />
            Praeludium <br />
            Chronograph
          </h1>

          <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8">
            The watch combines the typical sleek design of the Praeludium
            collection with the sportiness, robustness and functionality of a
            chronograph.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-6">
            <button
              className="
              px-6 py-3
              bg-white
              border border-[var(--border-light)]
              rounded-md
              text-sm
             
              transition-[var(--transition-smooth)]
            "
            >
              Find your retailer
            </button>

            <button
              className="
              text-sm
              text-[var(--text-secondary)]
              hover:text-[var(--text-primary)]
              transition-[var(--transition-smooth)]
            "
            >
              Configure
            </button>
          </div>

          {/* Color options */}
          <div className="flex items-center gap-4 mt-8 text-sm text-[var(--text-secondary)]">
            <span>Color</span>
            <span className="w-3 h-3 rounded-full bg-black cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-gray-400 cursor-pointer"></span>
            <span className="w-3 h-3 rounded-full bg-[var(--accent-primary)] cursor-pointer"></span>
            <span>Blue</span>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative">
          <img src={watch} alt="Watch" className="w-[420px] drop-shadow-xl" />
        </div>
      </section>
    </div>
  );
};

export default Hero;
