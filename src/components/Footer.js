import React from "react";
import img1 from "../img/white.png";

function Footer() {
  return (
    <div className="bg-black text-white h-80 flex justify-center mt-20  py-3">
      <div className=" grid grid-cols-3  lg:grid-cols-6 gap-2 max-w-5xl m-20 border-b-2 ">
        <div className="mr-2">
          <img className="h-10 w-30" src={img1} alt="logo" />
        </div>
        <div>
          <h1>Contact</h1>
          <h1>FAQ's</h1>
        </div>
        <div>
          <h1>Tutorials</h1>
          <h1>Blogs</h1>
        </div>
        <div>
          <h1>Privacy</h1>
          <h1>Banned items</h1>
        </div>
        <div>
          <h1>About</h1>
          <h1>Jobs</h1>
        </div>
        <div>
          <h1>Facebook</h1>
          <h1>Twitter</h1>
          <h1>LinkedIn</h1>
        </div>
      </div>
    </div>
  );
}

export default Footer;
