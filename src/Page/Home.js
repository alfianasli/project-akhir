import React from "react";
import Rail from "../Component/Rail";
import "../App.css";

const Home = () => {
  return (
    <div className="flex">
      <Rail />
      <div className="sebelah left-[367px] relative width-content  ">
        <div className="mt-7 ml-10 flex justify-between ">
          <h2 className=" text-white text-2xl">Recomendation Menu</h2>
          <button className="text-white mr-10 mt-1">View All</button>
        </div>

        <div className="flex gap-5 px-7 mt-5">
          <div class="flex justify-center">
            <div class="block w-60 h-72 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
              <a href="#!">
                <img
                  class="rounded-t-lg"
                  src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="mb-2  font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Gulai kambing
                </h5>
                <p class="mb-4 text-xs text-neutral-600 dark:text-neutral-200">
                  Vegetarian
                </p>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="block w-60 h-72 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
              <a href="#!">
                <img
                  class="rounded-t-lg"
                  src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="mb-2  font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Gulai kambing
                </h5>
                <p class="mb-4 text-xs text-neutral-600 dark:text-neutral-200">
                  Vegetarian
                </p>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="block w-60 h-72 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
              <a href="#!">
                <img
                  class="rounded-t-lg"
                  src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="mb-2  font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Gulai kambing
                </h5>
                <p class="mb-4 text-xs text-neutral-600 dark:text-neutral-200">
                  Vegetarian
                </p>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="block w-60 h-72 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
              <a href="#!">
                <img
                  class="rounded-t-lg"
                  src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="mb-2  font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Gulai kambing
                </h5>
                <p class="mb-4 text-xs text-neutral-600 dark:text-neutral-200">
                  Vegetarian
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="produk mt-7 ml-10 flex justify-between">
          <h2 className=" text-white text-2xl"> Produk</h2>
          <button className="text-white mr-10 mt-1">View All</button>
        </div>
        <div className="flex gap-5 px-7 mt-5">
          <div class="flex justify-center">
            <div class="block w-60 h-72 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
              <a href="#!">
                <img
                  class="rounded-t-lg"
                  src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="mb-2  font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Salad
                </h5>
                <p class="mb-4 text-xs text-neutral-600 dark:text-neutral-200">
                  Vegetarian
                </p>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="block w-60 h-72 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
              <a href="#!">
                <img
                  class="rounded-t-lg"
                  src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="mb-2  font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Salad
                </h5>
                <p class="mb-4 text-xs text-neutral-600 dark:text-neutral-200">
                  Vegetarian
                </p>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="block w-60 h-72 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
              <a href="#!">
                <img
                  class="rounded-t-lg"
                  src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="mb-2  font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Salad
                </h5>
                <p class="mb-4 text-xs text-neutral-600 dark:text-neutral-200">
                  Vegetarian
                </p>
              </div>
            </div>
          </div>
          <div class="flex justify-center">
            <div class="block w-60 h-72 rounded-lg bg-white shadow-lg dark:bg-neutral-700">
              <a href="#!">
                <img
                  class="rounded-t-lg"
                  src="https://tecdn.b-cdn.net/img/new/standard/nature/184.jpg"
                  alt=""
                />
              </a>
              <div class="p-6">
                <h5 class="mb-2  font-medium leading-tight text-neutral-800 dark:text-neutral-50">
                  Gulai kambing
                </h5>
                <p class="mb-4 text-xs text-neutral-600 dark:text-neutral-200">
                  Vegetarian
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
