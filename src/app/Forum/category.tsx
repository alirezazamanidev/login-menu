"use client";
import React from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";

const validationSchema = Yup.object({
  name: Yup.string().required("نام اجباری میباشد"),

  category: Yup.string()
    .oneOf(["yes", "no"], "انتخاب  نوع دسته بندی لازم است")
    .required(" فیلد دسته اجباری است"),
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
            <Form className="flex flex-col gap-y-2 ">
              <div>
                <Field
                  className="text-xs placeholder:text-black bg-[#E9FFE7]  px-3 rounded-md w-full h-14"
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
                <Field
                  className="text-xs placeholder:text-black bg-[#E9FFE7]  px-3 rounded-md w-full h-14"
                  type="text"
                  name="slog"
                  placeholder="اسلاگ"
                />
                <ErrorMessage
                  name="slog"
                  className="text-red-600 text-xs font-medium mt-1"
                  component="div"
                />
              </div>
              <div className="w-full h-full">
                <Field
                  as="select"
                  name="category"
                  className="custom-select  placeholder:text-black  rounded-md w-full h-14 bg-[#E9FFE7] text-xs  p-3 "
                >
                  <option value="" disabled selected>
                    نوع دسته بندی
                  </option>
                  <option value="yes">خودرو</option>
                  <option value="no">آپارتمان </option>
                  <option value="yes">بهداشتی</option>
                  <option value="no">الکتریکی </option>
                </Field>
                <ErrorMessage
                  name="category"
                  component="div"
                  className="text-red-600 text-xs font-medium mt-1"
                />
              </div>
              <div className="bg-[#E9FFE7] p-2 rounded-xl flex flex-col justify-between gap-4">
                <label htmlFor="pictures" className="text-xs ">
                  تصویر
                </label>
                <div className="grid grid-cols-5 gap-2">
                  <div className="bg-zinc-500 rounded-xl flex justify-center">
                    <label
                      htmlFor="pictures"
                      className="flex justify-center items-center"
                    >
                      <Image
                        src="/icons/download.svg"
                        alt=""
                        width={20}
                        height={20}
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
