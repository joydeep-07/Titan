import React from "react";
import watch from "../assets/images/watch1.png";
import Right from "./Right";

const Hero = () => {
  return (
    <div className="relative flex justify-center items-center min-h-screen overflow-hidden">
      {/* Decorative background text with low z-index */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -left-16 top-1/4 opacity-[0.03]">
          <span
            className="text-[18rem] font-bold tracking-widest text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            PRAELUDIUM
          </span>
        </div>
        <div className="absolute -right-16 top-1/3 opacity-[0.02]">
          <span
            className="text-[15rem] font-bold tracking-widest text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            CHRONOGRAPH
          </span>
        </div>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-1/4 opacity-[0.015]">
          <span
            className="text-[20rem] font-bold tracking-widest text-white"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            2024
          </span>
        </div>
      </div>

      <section
        className="
        relative z-10
        flex items-center justify-between      
        bg-[var(--bg-card)]
        w-7xl my-25 
        backdrop-blur-sm
        "
      >
        {/* LEFT CONTENT */}
        <div className="relative z-20 max-w-xl">
          <p className="text-sm text-[var(--text-muted)] mb-4 tracking-widest uppercase">
            Praeludium collection
          </p>

          <div className="relative">
            <h1
              className="text-7xl leading-[1.1] mb-6 tracking-tight"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              The <br />
              <span className="relative inline-block">
                Praeludium
                <span className="absolute -bottom-3 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></span>
              </span>
              <br />
              Chronograph
            </h1>

            {/* Decorative number */}
            <div className="absolute -left-20 -top-10 z-0 opacity-10">
              <span className="text-[10rem] font-bold">01</span>
            </div>
          </div>

          <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-8 max-w-md tracking-wide">
            The watch combines the typical sleek design of the Praeludium
            collection with the sportiness, robustness and functionality of a
            chronograph.
          </p>

          {/* CTA */}
          <div className="flex items-center gap-6">
            <button
              className="
              relative
              px-8 py-4
              bg-white
              border border-white/30
              rounded-sm
              text-sm
              tracking-widest
              uppercase
              transition-all
              duration-300
              
            
              "
            >
              Find your retailer
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-12 h-px bg-white/50 transition-all duration-300 group-hover:w-full"></span>
            </button>

            <button
              className="
              text-sm
              tracking-widest
              uppercase
              text-[var(--text-secondary)]
              
              transition-all
              duration-300
              group
              "
            >
              <span className="relative">
                Configure
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all duration-300 group-hover:w-full"></span>
              </span>
            </button>
          </div>

          {/* Color options */}
          <div className="flex items-center gap-4 mt-12 text-sm text-[var(--text-secondary)] tracking-wide">
            <span className="uppercase">Available in</span>
            <div className="flex items-center gap-3 ml-4">
              <span className="relative group">
                <span className="w-4 h-4 rounded-full bg-black cursor-pointer block"></span>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  Black
                </span>
              </span>
              <span className="relative group">
                <span className="w-4 h-4 rounded-full bg-gray-400 cursor-pointer block"></span>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  Silver
                </span>
              </span>
              <span className="relative group">
                <span className="w-4 h-4 rounded-full bg-[var(--accent-primary)] cursor-pointer block"></span>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-opacity">
                  Blue
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="relative z-20">
         

          {/* Watch image */}
          <div className="relative z-30">
            <img
              src={watch}
              alt="Praeludium Chronograph Watch"
              className="w-[480px] drop-shadow-2xl transform duration-700"
            />
          </div>

          {/* Decorative text */}
          <div className="absolute -right-20 top-1/2 -translate-y-1/2 opacity-10 z-0">
            <span className="text-[8rem] font-bold tracking-widest whitespace-nowrap vertical-rl">
              SWISS MADE
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
