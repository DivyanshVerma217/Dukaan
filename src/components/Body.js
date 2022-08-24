import React from "react";
import rect1 from "../img/Rectangle 124.png";
import rect2 from "../img/Rectangle 125.png";
import rect3 from "../img/Rectangle 126.png";
import rect4 from "../img/Rectangle 127.png";

function Body() {
  return (
    <div className="max-w-5xl m-auto mt-10 p-2">
        <h1 className="text-4xl font-bold">Try our other free products</h1>
        <div className="grid grid-cols-2 p-2 lg:grid-cols-3 gap-2  max-w-5xl m-auto mt-10">
      <div className="mt-2">
        <img src={rect1} alt="" />
        <h1 className="font-bold mt-2">Privacy Policy Generator</h1>
        <p>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
      </div>
      <div className="mt-2">
        <img src={rect2} alt="" />
        <h1 className="font-bold mt-2">Terms & Conditions Generator</h1>
        <p>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
      </div>
      <div className="mt-2">
        <img src={rect3} alt="" />
        <h1 className="font-bold mt-2">Domain Name Generator</h1>
        <p>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
      </div>
      <div className="mt-2">
        <img src={rect4} alt="" />
        <h1 className="font-bold mt-2" >Invoice Generator</h1>
        <p>Stock your store with 100s of products and start selling to customers in minutes, without the hassle of inventory or packaging.</p>
      </div>
    </div>
    </div>
  );
}

export default Body;
