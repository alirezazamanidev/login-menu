"use client";
import React from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";

const validationSchema = Yup.object({
  name: Yup.string().required("نام اجباری میباشد"),
  cv: Yup.string().required("انتخاب وضغیت رزومه اجباری میباشد"),
});

export default function Category() {
  return (
    <div className="my-5 mx-4 flex flex-col ">
      <div className="flex flex-col text-center gap-5 z-10">
        <h1 className="text-lg  font-IranBakhMedium">فرم ایجاد دسته بندی</h1>
      </div>
      <div className="mt-8 flex flex-col gap-3 w-full">
        <h1 className="text-sm ">کاربر گرامی لطفا موارد زیر را تکمیل نمایید</h1>
        <Formik
          initialValues={{
            title: "",
            description: "",
            isAvailable1: true,
            isAvailable2: true,
          }}
          validationSchema={validationSchema}
          onSubmit={(values, { setSubmitting }) => {
            setSubmitting(false);
          }}
        >
          {({ setFieldValue, isSubmitting }) => (
            <Form className="flex flex-col gap-y-5 ">
              <div>
                <label
                  htmlFor="name"
                  className="block  mb-1 text-base text-gray-700"
                >
                  نام:
                </label>
                <Field
                  className="text-xs  bg-[#E9FFE7]  px-3 rounded-md w-full h-14"
                  type="text"
                  name="name"
                  placeholder="نام"
                />
                <ErrorMessage
                  name="name"
                  className="text-red-600 text-xs font-medium mt-1"
                  component="div"
                />
              </div>
              <div>
                <label
                  htmlFor="slog"
                  className="block  mb-1 text-base text-gray-700"
                >
                  اسلاگ:
                </label>
                <Field
                  className="text-xs  bg-[#E9FFE7]  px-3 rounded-md w-full h-14"
                  type="text"
                  name="slog"
                  placeholder="اسلاگ"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block  mb-1 text-base text-gray-700"
                >
                  توضیحات:
                </label>
                <Field
                  className=" rounded-md w-full h-24 bg-[#E9FFE7] text-xs  p-3"
                  as="textarea"
                  name="description"
                  placeholder="توضیحات"
                />
              </div>
              <div className="bg-[#E9FFE7] p-2   rounded-xl flex flex-col justify-between gap-4">
                <label
                  htmlFor="pictures"
                  className="text-base bg-[#E9FFE7] block  mb-1 mb-2"
                >
                  تصویر:
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
                      id="pictures"
                      name="pictures"
                      type="file"
                      multiple
                      onChange={(
                        event: React.ChangeEvent<HTMLInputElement>
                      ) => {
                        if (event.currentTarget.files)
                          setFieldValue("pictures", event.currentTarget.files);
                      }}
                      className="hidden file:border-0 file:bg-transparent text-transparent file:text-transparent"
                    />
                  </div>
                  <div className="col-span-1 flex gap-2">
                    {/* Placeholder images for uploaded pictures */}
                    <img
                      className="bg-[#0F360A] w-full h-fw-full flex rounded-xl"
                      width={200}
                      height={200}
                    />
                  </div>
                </div>
              </div>
              <div className="w-full h-full">
                <label
                  htmlFor="category"
                  className="block  mb-1 text-base text-gray-700"
                >
                  نوع دسته بندی :
                </label>
                <Field
                  as="select"
                  name="category"
                  className="custom-select    rounded-md w-full h-14 bg-[#E9FFE7] text-xs  p-3 "
                >
                  <option value="" disabled selected>
                    نوع دسته بندی (parent id)
                  </option>
                  <option value="yes">خودرو</option>
                  <option value="no">آپارتمان </option>
                  <option value="yes">بهداشتی</option>
                  <option value="no">الکتریکی </option>
                </Field>
              </div>
              <div className="w-full h-full">
                <label
                  htmlFor="cv"
                  className="block  mb-1 text-base text-gray-700"
                >
                  ارسال رزومه:
                </label>
                <Field
                  as="select"
                  name="cv"
                  className="custom-select    rounded-md w-full h-14 bg-[#E9FFE7] text-xs  p-3 "
                >
                  <option value="" disabled selected>
                    ارسال رزومه
                  </option>
                  <option value="yes">بله</option>
                  <option value="no">خیر </option>
                </Field>
                <ErrorMessage
                  name="cv"
                  component="div"
                  className="text-red-600 text-xs font-medium mt-1"
                />
              </div>
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
