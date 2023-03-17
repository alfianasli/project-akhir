import React from "react";
import Rail from "../Component/Rail";

const AddResep = () => {
  return (
    <div className="flex">
      <Rail />
      <div className="sebelah left-[367px] relative width-content  h-screen">
        <div className="judul flex flex-col">
          <h2 className="text-2xl text-white mt-4 ml-6">Resep name</h2>
          <input
            type="text"
            className="rounded-md px-3 py-1 ml-6 mr-10 mt-2 opacity-25"
          />
        </div>
        <div className="ingredients flex flex-col">
          <h2 className="text-2xl text-white mt-4 ml-6">Ingredients</h2>
          <input
            type="text"
            className="rounded-md px-3 py-10 ml-6 mr-10 mt-2 opacity-25"
          />
        </div>

        <div className="how flex flex-col">
          <h2 className="text-2xl text-white mt-4 ml-6">How to make</h2>
          <input
            type="text"
            className="rounded-md px-3 py-10 ml-6 mr-10 mt-2 opacity-25"
          />
        </div>

        <div className="add h-48 w-96 mt-3 ml-3 ">
          <input type="file" className="px-3" />
        </div>
        <div className="flex rounded-md items-center ml-6">
          <div className="add w-96 flex justify-center  h-10 ">
            <button className="w-96 bg-white rounded-md ">ADD Recipe</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddResep;
