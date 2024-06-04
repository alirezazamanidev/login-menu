"use client";
import React, { useState, useRef, useEffect } from "react";

import Image from "next/image";

function ShowAds() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    };

    // Attach the listener to the document
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Clean up the event listener
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <div className=" flex justify-center min-h-screen from-purple-200 via-purple-300 to-purple-500 bg-gradient-to-br ">
      <div className="  w-2/5   mt-5 flex flex-col gap-4    ">
        <div className="bg-[#FFFFFF] rounded-lg mx-4 flex flex-col gap-2  ">
          <div className=" flex justify-between p-2">
            <h1 className=" text-base   ">لورم ایپسوم یک متن ساختگی </h1>
            <div className=" flex gap-1 items-center">
              <h1 className=" text-xs font-bold">۱۲۴.۰۰۰</h1>
              <h1 className=" text-[#A5A5A5] text-[10px] font-IranBakhMedium">
                تومان
              </h1>
            </div>
          </div>
          <div className="  grid grid-cols-3 justify-between p-2 ">
            <div className="  col-span-1 flex-col  justify-between flex truncate ">
              <div className=" flex flex-col  gap-1">
                <h1 className=" p-1 flex bg-[#F1F1F1] w-20 text-xs items-center rounded-xl gap-1 font-IranBakhMedium ">
                  <Image
                    src="./icons/account.svg"
                    alt=""
                    width={20}
                    height={20}
                  />{" "}
                  اسم شخص
                </h1>
                <h1 className=" text-[#FFB622] p-1 flex bg-[#F1F1F1] w-20 text-xs items-center rounded-xl gap-1 font-IranBakhMedium ">
                  <Image
                    src="./icons/flash.svg"
                    alt=""
                    width={20}
                    height={20}
                  />{" "}
                  نردبان شده
                </h1>
                <h1 className=" p-1 flex bg-[#F1F1F1] w-20 text-xs items-center rounded-xl gap-1 font-IranBakhMedium ">
                  <Image src="./icons/star.svg" alt="" width={20} height={20} />{" "}
                  همکار
                </h1>
              </div>
              <div>
                <h1 className="  font-IranBakhMedium  text-xs">
                  (۲۰-۲۵ اردیبهشت)
                </h1>
              </div>
            </div>
            <div className="  col-span-2 flex justify-end gap-1">
              <div className=" flex flex-col gap-1">
                {" "}
                <Image
                  className="  rounded-lg w-8 h-8"
                  src="/image/rectangle40.png"
                  alt=""
                  height={400}
                  width={400}
                />
                <Image
                  className="  rounded-lg w-8 h-8"
                  src="/image/rectangle40.png"
                  alt=""
                  height={400}
                  width={400}
                />
                <Image
                  className="  rounded-lg w-8 h-8"
                  src="/image/rectangle40.png"
                  alt=""
                  height={400}
                  width={400}
                />
                <Image
                  className="  rounded-lg w-8 h-8"
                  src="/image/rectangle40.png"
                  alt=""
                  height={400}
                  width={400}
                />
              </div>
              <Image
                className=" h-full w-8/12 rounded-lg"
                src="/image/rectangle40.png"
                alt=""
                height={800}
                width={800}
              />
            </div>
          </div>
          <div className=" flex flex-col gap-2 p-2">
            <h1 className=" flex items-center gap-1 text-xs font-IranBakhRegular text-black">
              <Image src="./icons/star.svg" alt="" width={20} height={20} />{" "}
              تهران - گیشا
            </h1>
            <div className=" px-2 flex flex-col gap-2 ">
              <Image
                className=" w-full h-full  rounded-lg"
                src="/image/map2.png"
                alt=""
                height={8000}
                width={8000}
              />
              <p className=" text-xs font-IranBakhMedium text-[#273270]">
                لورم ایپسوم چاپ، و با استفاده از طراحان گرافیک است...لورم ایپسوم
                چاپ، و با استفاده از طراحان گرافیک است...لورم ایپسوم چاپ، و با
                استفاده از طراحان گرافیک است...لورم ایپسوم چاپ، و با استفاده از
                طراحان گرافیک است...
              </p>
              <p className=" text-[#273270] text-xs font-IranBakhMedium ">
                متراژ : 110 متر
                <br /> اتاق : 2 <br />
                آسانسور : ندارد
                <br /> طبقه : 3<br /> ودیعه : 10 تومان
                <br /> اجاره : 300 تومان
              </p>
            </div>
          </div>
          <div className=" flex justify-around mb-5">
            <button className=" bg-blue-500 p-2 text-white rounded-xl hover:bg-blue-300">
              ویرایش
            </button>
            <button className=" bg-red-500 p-2 text-white rounded-xl hover:bg-red-300">
              بازگشت
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowAds;
