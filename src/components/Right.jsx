import React from "react";

const Right = () => {
  return (
    <div
      className="
        absolute top-0 right-0 h-screen w-14
        flex items-center justify-center
      
      "
    >
      <div className="flex items-center gap-4 rotate-90 whitespace-nowrap">
        {/* Center Numbers */}
        <ul
          className="
          absolute top-1/2 -rotate-90 -translate-y-1/2
          flex flex-col gap-4
          text-xs
          text-[var(--text-muted)]
        "
        >
          <li className="text-[var(--text-primary)]/80 cursor-pointer font-medium ">01</li>
          <li className="text-[var(--text-primary)]/80 cursor-pointer font-medium ">02</li>
          <li className="text-[var(--text-primary)]/80 cursor-pointer font-medium ">03</li>
        </ul>

        <p
          className="absolute left-50
            text-xs tracking-widest uppercase
            text-[var(--text-secondary)]
            hover:text-[var(--text-primary)]
            cursor-pointer
            transition-[var(--transition-smooth)]
            font-medium
          "
        >
          Discover more
        </p>
      </div>
    </div>
  );
};

export default Right;
