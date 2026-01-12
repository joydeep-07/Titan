import React from "react";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <nav
      className="
       w-full flex items-center py-4 px-10 fixed top-0
        text-[var(--text-primary)]
      "
      style={{ fontFamily: "var(--font-body)" }}
    >
      {/* Left links */}
      <div className="flex-1">
        <ul className="flex items-center gap-10 text-sm">
          {["Collection", "Our Story", "Article", "More"].map((item) => (
            <li
              key={item}
              className="
                cursor-pointer
                text-[var(--text-secondary)]
                hover:text-[var(--text-primary)]
                transition-[var(--transition-smooth)]
              "
            >
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Center logo */}
      <div className="absolute left-1/2 -translate-x-1/2">
        <img className="h-14" src={logo} alt="Logo" />
      </div>

      {/* Right links */}
      <div className="flex-1 flex justify-end">
        <ul className="flex items-center gap-10 text-sm">
          <li className="cursor-pointer text-[var(--text-secondary)]">
            English
          </li>

          <li
            className="
              cursor-pointer px-4 py-2
              border border-[var(--border-light)]/70
              rounded-md
              text-[var(--text-primary)]
             bg-white
              
            
            "
          >
            Find Your Retailer
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
