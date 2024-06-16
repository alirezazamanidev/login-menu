"use client";
import React from "react";
import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const validationSchema = Yup.object({
  title: Yup.string().required("عنوان اجباری میباشد"),
  category: Yup.string().required("انتخاب  دسته بندی اجباری میباشد"),
  price: Yup.string().required("قیمت اجباری میباشد"),
  content: Yup.string().required("مضمون اجباری میباشد"),
  time: Yup.string().required("زمان اجباری میباشد"),
  packagetype: Yup.string().required("انتخاب نوع پکی اجباری میباشد"),
});

export default function Packages() {
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
                  name="title"
                  placeholder="عنوان"
                />
                <ErrorMessage
                  name="title"
                  className="text-red-600 text-xs font-medium mt-1"
                  component="div"
                />
              </div>
              <div>
                <Field
                  className="text-xs placeholder:text-black bg-[#E9FFE7]  px-3 rounded-md w-full h-14"
                  type="text"
                  name="content"
                  placeholder="مضمون"
                />
                <ErrorMessage
                  name="content"
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
                  <option value="no">مسکن </option>
                  <option value="yes">تجهیزات </option>
                  <option value="no">بهداشتی </option>
                </Field>
                <ErrorMessage
                  name="category"
                  className="text-red-600 text-xs font-medium mt-1"
                  component="div"
                />
              </div>
              <div>
                <Field
                  className="text-xs placeholder:text-black bg-[#E9FFE7]  px-3 rounded-md w-full h-14"
                  type="number"
                  name="price"
                  placeholder="قیمت"
                />
                <ErrorMessage
                  name="price"
                  className="text-red-600 text-xs font-medium mt-1"
                  component="div"
                />
              </div>
              <div>
                <Field
                  className="text-xs placeholder:text-black bg-[#E9FFE7]  px-3 rounded-md w-full h-14"
                  type="text"
                  name="time"
                  placeholder="زمان"
                />
                <ErrorMessage
                  name="time"
                  className="text-red-600 text-xs font-medium mt-1"
                  component="div"
                />
              </div>
              <div className="w-full h-full">
                <Field
                  as="select"
                  name="packagetype"
                  className="custom-select  placeholder:text-black  rounded-md w-full h-14 bg-[#E9FFE7] text-xs  p-3 "
                >
                  <option value="" disabled selected>
                    نوع پکیج
                  </option>
                  <option value="yes">برنزی</option>
                  <option value="no">طلایی </option>
                  <option value="yes">ویژه</option>
                  <option value="no">تخقیف </option>
                </Field>
                <ErrorMessage
                  name="packagetype"
                  className="text-red-600 text-xs font-medium mt-1"
                  component="div"
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
