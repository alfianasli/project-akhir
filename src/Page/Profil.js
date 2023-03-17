import React from "react";
import Rail from "../Component/Rail";
import AvatarMaker from "../Aset/AvatarMaker.png";
import "../App.css";

const Profil = () => {
  return (
    <div className="flex ">
      <Rail />
      <div className=" sebelah left-[367px] relative width-content  h-screen">
        <div className=" flex mt-20 ml-32">
          <img className="profil h-48 w-48 " src={AvatarMaker} alt="gambar" />
          <div className="flex-col ml-24">
            <h2 className="text-2xl ">eezzyy_zz</h2>
            <h2>Bio</h2>
            <h5>
              <i class="fa-solid fa-location-crosshairs pt-28 mr-4"></i>
              live in planet mars
            </h5>
          </div>
        </div>
        <div className=" w-full flex mt-20">
          <div className=" w-full flex justify-around">
            <button
              className="text-center hover:text-white text-1xl"
              onClick="open content1()"
            >
              Your Menu
            </button>
            <button
              className="text-center hover:text-white text-1xl"
              onClick="open content2()"
            >
              Your Favorite
            </button>
          </div>
        </div>
        <div className="border-b-2 border-black w-10/12 ml-24 mt-4"></div>
        <div className="content ">
          <div className="flex-col text-justify absolute " id="content1">
            <h1 className="mx-52 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, vel.
            </h1>
          </div>
          <div className="flex-col text-justify absolute " id="content2">
            <h1 className="mx-52 mt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus, vel.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profil;
