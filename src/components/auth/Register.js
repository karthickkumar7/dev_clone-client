import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div className="w-screen h-[1000px] flex justify-center bg-slate-100">
      <div className="w-[1400px] h-full  flex justify-center items-center">
        <article className="w-[600px] h-[700px] p-4 bg-white rounded">
          <div className="my-2  flex flex-col items-center">
            <h1 className="text-4xl mb-2 font-semibold">
              Welcome to Dev Communitah!
            </h1>
            <p className="text-slate-700">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
            </p>
          </div>
          <div className="w-full my-4 flex flex-col">
            <button className="h-[50px] my-2 px-2 py-1 text-white rounded font-semibold bg-slate-800">
              Continue
            </button>
            <button className="h-[50px] my-2 px-2 py-1 text-white rounded font-semibold bg-red-600">
              Continue
            </button>
          </div>
          <form className="w-full flex flex-col">
            <div className="flex flex-col">
              <label htmlFor="username" className="mb-1">
                username
              </label>
              <input
                id="username"
                type="text"
                className="h-[50px] px-2 py-1 rounded outline-blue-600 border"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1">
                email
              </label>
              <input
                id="email"
                type="text"
                className="h-[50px] px-2 py-1 rounded outline-blue-600 border"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="password" className="mb-1">
                password
              </label>
              <input
                id="password"
                type="text"
                className="h-[50px] px-2 py-1 rounded outline-blue-600 border"
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="confirm" className="mb-1">
                confirm password
              </label>
              <input
                id="confirm"
                type="text"
                className="h-[50px] px-2 py-1 rounded outline-blue-600 border"
              />
            </div>
            <button className="h-[50px] my-4 px-2 py-1 text-white rounded font-semibold bg-sky-600 hover:bg-sky-500">
              Sign up
            </button>
          </form>
          <div className="text-center text-lg">
            <h4>
              Dont have an account?{" "}
              <Link
                to="/auth"
                className="font-semibold cursor-pointer hover:underline"
              >
                login
              </Link>
            </h4>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Register;
