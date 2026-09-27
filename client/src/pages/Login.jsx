import React, { useState } from 'react'
import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [logindata, setlogindata] = useState(()=>JSON.parse(localStorage.getItem("signup")))
      const [first, setfirst] = useState({
    email: "",
    password: "",
  });


  const navigate = useNavigate()



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
  
    const login = logindata.some(
    (item) =>
      item.email === first.email &&
      item.password === first.password
  );

  if (login) {
    console.log("Login successful");
    navigate("/about")
  } else {
    console.log("Invalid email or password");
    navigate("/signup")
  }

    setfirst({
      email: "",
      password: "",
    });
  };

  return (
    <div className='mt-20'>
         <form
        action=""
        className="flex items-center justify-center flex-col w-1/3  h-full mx-auto gap-4  mt-4"
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
          <input
            className="bg-zinc-900 text-white px-4 py-2 rounded-md"
            type="submit"
            name="submit"
            value="Signup"
          />
        </div>
      </form>


    </div>
  )
}

export default Login