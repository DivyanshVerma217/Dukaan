import React from "react";
import Data from "../data/dummy.json";

function Main() {
  return (
    <div className="p-2">
      <div className="flex flex-row justify-between max-w-5xl m-auto z-20 -mt-28 p-4 bg-white rounded-md shadow-md ">
        <div className=" max-w-xl m-auto mt-10 ">
          <h1 className="font-bold text-4xl">Free slogan maker</h1>
          <p className="mt-4">
            Simply enter a term that describes your business, and get up to
            1,000 relevant slogans for free.
          </p>

          <div className="mt-8">
            <p>Word for your slogan</p>
            <input
              type="text"
              className="
        mt-6      
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              placeholder="Search example 'cozy'"
            />
            <button className="bg-[#146EB4] h-14 w-34 rounded-sm p-2 mt-8 text-white ">
              Generate Slogans
            </button>
            <hr className="mt-10" />
            <div className="mt-10 flex justify-between">
              <p className="mt-10">
                We have generated 1,023 slogans for “cozy”
              </p>
              <button className="m-6 text-xl bg-white p-2 hidden  lg:flex font-medium text-[#146EB4] rounded-md border-2">
                Download all{" "}
              </button>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2  gap-4 mt-10">
              {Data.map((item, index) => {
                return (
                  <>
                    <div className="">
                      <div className="border-2 bg-[#f2f2f2] p-2 h-16 rounded-sm">
                        {item.about}
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
            <hr className="mt-10" />
            <div >
                <ul className="flex justify-center mt-2 cursor-pointer">
                    <li className="p-2 h-10 w-10 text-white text-center rounded-full bg-[#146EB4]">
                        1
                    </li>
                    <li className="p-2 h-10 w-10">
                        2
                    </li>
                    <li className="p-2 h-10 w-10">
                        3
                    </li>
                    <li className="p-2 h-10 w-10">
                    .....
                    </li>
                    <li className="p-2 h-10 w-10">
                    21
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
