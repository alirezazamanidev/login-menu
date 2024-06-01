import Image from "next/image";
import React from "react";

export default function page() {
  const categories = [
    {
      title: "کاربران",
      buttons: [
        "کاربر شماره 1",
        "کاربر شماره 2",
        "کاربر شماره 3",
        "کاربر شماره 4",
      ],
      icon: "/icons/users.svg",
    },
    {
      title: "آگهی ها",
      buttons: ["آگهی شماره 1", "آگهی شماره 2", "آگهی شماره 3", "آگهی شماره 4"],
      icon: "/icons/ads.svg",
    },
    {
      title: "مالی",
      buttons: [" شماره 1", " شماره 2", " شماره 3", " شماره 4"],
      icon: "/icons/wallet.svg",
    },
    {
      title: "اسلایدرها",
      buttons: [
        "اسلایدر شماره 1",
        "اسلایدر شماره 2",
        "اسلایدر شماره 3",
        "اسلایدر شماره 4",
      ],
      icon: "/icons/slider.svg",
    },
    {
      title: "پکیج ها",
      buttons: ["پکیج شماره 1", "پکیج شماره 2", "پکیج شماره 3", "پکیج شماره 4"],
      icon: "/icons/package.svg",
    },
    {
      title: "دسته بندی ها",
      buttons: ["دسته شماره 1", "دسته شماره 2", "دسته شماره 3", "دسته شماره 4"],
      icon: "/icons/category.svg",
    },
  ];
  return (
    <div className=" text-white ">
      <div className="w-1/4 h-full absolute  bg-red-700   text-opacity-100 bg-opacity-95  py-4">
        <h1 className=" font-Rubik  text-center lg:text-3xl text-2xl">
          JAAP Media
        </h1>
        <div className="flex flex-col gap-3 mt-10">
          {categories.map((category, index) => (
            <details key={index} className="group px-3  ">
              <summary className="flex justify-between items-center  font-medium cursor-pointer">
                <span className="list-none flex gap-2 text-base items-center ">
                  <Image
                    src={category.icon}
                    alt=""
                    width={40}
                    height={40}
                    className=" bg-slate-800 p-2 rounded-full "
                  />
                  <li>{category.title}</li>
                </span>
                <span className="transition group-open:rotate-180">
                  <svg
                    fill="none"
                    height="24"
                    shape-rendering="geometricPrecision"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    viewBox="0 0 24 24"
                    width="24"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </summary>
              <div className="  gap-2 px-8 flex text-sm flex-col justify-start items-start group-open:animate-fadeIn ">
                {category.buttons.map((button, buttonIndex) => (
                  <button key={buttonIndex}>{button}</button>
                ))}
              </div>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
