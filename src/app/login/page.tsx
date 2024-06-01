"use client";
import React from "react";

import * as Yup from "yup";
import { ErrorMessage, Field, Form, Formik } from "formik";

const validationSchema = Yup.object({
  email: Yup.string()
    .required("ایمیل اجباری میباشد")
    .email("فرمت ایمیل نامعتبر است"), // Adds email format validation
  password: Yup.string()
    .required("رمز عبور اجباری میباشد")
    .min(6, "رمز عبور باید حداقل 5 کاراکتر باشد"), // Ensures password is at least 5 characters long
});

export default function Login() {
  return (
    <div className=" flex justify-center ">
      <div className="  flex flex-col gap-2 my-28 lg:w-3/12  w-full mx-4   ">
        <h1 className=" flex justify-center  font-IranBakh_Heavy  text-lg">
          ورد به پنل کاربری
        </h1>
        <div>
          <Formik
            initialValues={{ email: "", password: "" }}
            validationSchema={validationSchema}
            onSubmit={(values, { setSubmitting }) => {
              console.log(values);
              setSubmitting(false);
            }}
          >
            <Form className=" flex flex-col gap-2">
              <div className=" flex flex-col">
                <label htmlFor="email" className=" font-IranBakh_Heavy">
                  ایمیل
                </label>
                <Field
                  type="email"
                  id="email"
                  name="email"
                  placeholder="example@gmail.com"
                  className="bg-slate-100 h-10  placeholder:text-left   pt-1  px-4 rounded-lg border border-slate-200"
                />
                <ErrorMessage
                  name="email"
                  className="text-red-600 text-xs font-medium mt-1"
                  component="div"
                />
              </div>
              <div className=" flex flex-col ">
                <label htmlFor="password" className=" font-IranBakh_Heavy">
                  رمز عبور
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="******"
                  className="bg-slate-100   px-4  h-10 pt-3 rounded-lg border border-slate-200 w-1/2"
                />
                <ErrorMessage
                  name="password"
                  className="text-red-600 text-xs font-medium mt-1"
                  component="div"
                />
              </div>

              <label className="    flex gap-2 items-center mr-2">
                <input type="checkbox" className="  accent-red-500 h-8 w-5 " />
                مرا به خاطر بسپار
              </label>

              <button
                type="submit"
                className=" bg-red-500  text-white p-2 rounded-md mt-2"
              >
                ورود
              </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}
