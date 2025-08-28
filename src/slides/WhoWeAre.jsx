import React from "react";

const WhoWeAre = () => {
  return (
    <section
      id="about-us"
      className="bg-[#FFF9F2] w-full py-20 px-4 md:px-8 text-center"
    >
      {/* Main Heading */}
      <h1
        role="heading"
        aria-level="1"
        className="text-[1.5rem] md:text-[1.8rem] lg:text-[2.2rem] font-bold text-[#333] mb-6 md:mb-8 tracking-wide"
      >
        Who We Are
      </h1>

      {/* First Paragraph */}
      <p className="text-base md:text-lg lg:text-xl leading-relaxed text-[#3e3b3b] mb-6 md:mb-8 font-medium">
        At ModeThrive Limited, we are committed to building smart digital
        solutions that make everyday life easier and better. <br />
        We are the creators of Foodkart, a fast-growing food delivery platform
        that is transforming how people order and enjoy meals—conveniently,
        reliably, and quickly.
      </p>

      {/* Second Paragraph */}
      <p className="text-base md:text-lg lg:text-xl leading-relaxed text-[#3e3b3b] mb-8 md:mb-10 font-medium">
        From everyday convenience to long-term innovation, ModeThrive is shaping
        the future through technology that truly matters.
      </p>

      {/* Quote Section */}
      <div className="flex justify-center w-full">
        <div className="w-auto md:w-[600px] pl-4 md:pl-8 border-l-4 border-[#d32f2f] mt-8 md:mt-10">
          <blockquote className="font-poppins text-[1.2rem] md:text-[1.5rem] lg:text-[1.7rem] text-[#c1272d] font-normal tracking-wide leading-snug text-center m-0">
            Smart solutions. Simple living. That's the ModeThrive way.
          </blockquote>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;
