import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import {Link} from "react-router-dom"

const Signup = () => {
  const [first, setfirst] = useState({
    email: "",
    password: "",
  });
  const [forms, setforms] = useState(()=>JSON.parse(localStorage.getItem("signup") )||[]);
  useEffect(() => {
      localStorage.setItem("signup", JSON.stringify(forms));
   
  }, [forms])
  

  const handler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setfirst((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submithandle = (e) => {
    e.preventDefault();
    setforms((prev) => [...prev, first]);

    setfirst({
      email: "",
      password: "",
    });
  };
  return (
    <div className="w-screen h-screen">
      <form
        action=""
        className="flex items-center justify-center flex-col w-full  h-full  gap-4  "
        onSubmit={submithandle}
      >
        <input
          name="email"
          value={first.email}
          placeholder="Enter email"
          onChange={handler}
          className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
        <input
          value={first.password}
          name="password"
          placeholder="Enter password"
          onChange={handler}
          className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
        <div className="flex gap-4">
          <input
            className="bg-zinc-900 text-white px-4 py-2 rounded-md"
            type="submit"
            name="submit"
            value="submit"
          />
      <Link
      to="/login"
      >
      hello
      </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
