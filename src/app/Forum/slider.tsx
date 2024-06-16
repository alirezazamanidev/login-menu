"use client";
import React from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";

// Adjusted validation schema
const validationSchema = Yup.object({
  picture: Yup.mixed().nullable().required("بارگذاری تصویر اجباری است"),
});

export default function Slider() {
  return (
    <div className="my-5 mx-4 flex flex-col ">
      <div className="flex flex-col text-center gap-5 z-10">
        <h1 className="text-lg  font-IranBakhMedium">فرم ایجاد اسلاید</h1>
      </div>
      <div className="mt-8 flex flex-col gap-3 w-full">
        <h1 className="text-sm ">کاربر گرامی لطفا موارد زیر را تکمیل نمایید</h1>
        <Formik
          initialValues={{
            title: "",
            description: "",
            isAvailable1: true,
            isAvailable2: true,
            picture: null,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
          }}
        >
          {({ setFieldValue, isSubmitting, errors }) => (
            <Form className="flex flex-col gap-y-2 ">
              <div>
                <Field
                  className="text-xs placeholder:text-black bg-[#E9FFE7]  px-3 rounded-md w-full h-14"
                  type="text"
                  name="name"
                  placeholder="url"
                />
              </div>
              <div className="bg-[#E9FFE7] p-2 rounded-xl flex flex-col justify-between gap-4">
                <label htmlFor="pictures" className="text-xs bg-[#E9FFE7]">
                  تصویر
                </label>
                <div className="grid grid-cols-5 gap-2 bg-[#E9FFE7] ">
                  <div className="bg-zinc-500 rounded-xl flex justify-center">
                    <label
                      htmlFor="pictures"
                      className="flex justify-center items-center bg-zinc-500  "
                    >
                      <Image
                        src="/icons/download.svg"
                        alt=""
                        width={20}
                        height={0}
                        className="bg-zinc-500 "
                      />
                    </label>
                    <Field
                      id="picture"
                      name="picture"
                      type="file"
                      multiple
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        if (event.currentTarget.files)
                          setFieldValue("picture", event.currentTarget.files);
                      }}
                      className="hidden file:border-0 file:bg-transparent text-transparent file:text-transparent"
                    />
                  </div>
                  <div className="col-span-1 flex gap-2">
                    {/* Placeholder images for uploaded pictures */}
                    <Image
                      className="bg-[#0F360A] w-full h-fw-full flex rounded-xl"
                      width={200}
                      height={200}
                      src=""
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {errors.picture && (
                <p className="text-red-600 text-xs font-medium mt-1">
                  {errors.picture}
                </p>
              )}
              <button
                type="submit"
                disabled={isSubmitting}
                className=" bg-slate-400 hover:bg-slate-500 p-3 rounded-xl  items-center gap-2    justify-end   text-sm  hover:font-thin "
              >
                ثبت
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
}
