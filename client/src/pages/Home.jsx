let apikey = "893f688785a90855bb65a78d96086abe";
import { LucideAlbum, Search, Sun } from "lucide-react";
import React, { useEffect, useState } from "react";

const Home = () => {
  const [weather, setWeather] = useState([]);
  const [city, setcity] = useState("Delhi");
  const [loading,setLoading] =useState(false)

  useEffect(() => {
    const getWeather = async () => {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`,
      );

      const data = await response.json();

      setWeather(data);
    };

    getWeather();
  }, [city]);

  // temp_max
  console.log(weather);
  console.log(weather?.main?.humidity);
  console.log(weather?.name);
  console.log(weather?.main?.temp);
  console.log(weather?.weather?.[0]?.main);
  console.log(weather?.name);
  console.log(weather?.sys);

  const searchhandler =(e)=>{

    setcity(e.target.value)
    

  }
  

  return (
    <div className="w-screen h-auto bg-[#F8F9FE] ">
      <nav className="w-full h-32  flex items-center justify-between p-4  ">
        <div className="left ">
          <h1>Azra</h1>
        </div>
        <div className="right  flex items-center justify-end shadow hidden md:block  ">
          <input onChange={searchhandler} className="px-4 py-2 outline-none  bg-[#FEFFFF]  rounded-l-2xl" type="text" />
          <button className="border-none outline-none bg-[#FEFFFF] px-4 py-2 text-black   rounded-r-full">
           <Search/>
          </button>
        </div>
      </nav>
      {/* IMAGE */}
      <div className="w-full h-full  overflow-hidden relative p-4 ">
        <div
          className="relative w-full h-[300px] bg-cover bg-center rounded-4xl overflow-hidden flex "
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1528164344705-47542687000d?q=80&w=2092&auto=format&fit=crop')",
          }}
        >
          {/* LEFT */}
          <div className="w-1/2 h-full flex flex-col justify-end p-6 text-white">
          <Sun/>
            <h1 className="text-[6rem]">{weather?.main?.temp}°c</h1>

            <h5 className="font-bold text-2xl">{weather?.name}</h5>

            <h5 className="text-cyan-400 text-2xl font-semibold">
              {weather?.sys?.country}
            </h5>
          </div>

          {/* RIGHT */}
          <div className="w-1/2 h-full flex flex-col justify-end items-end p-6 text-white">
            <h5 className="font-bold text-2xl">{weather?.name}</h5>

            <h5 className="text-cyan-400 text-2xl font-semibold">
              {weather?.sys?.country}
            </h5>
          </div>
        </div>

        {/* //parent */}
        <div className="grid grid-cols-1 gap-4 p-4  bg-[#FFFFFF] rounded-2xl mt-10 md:grid-col-3 lg:grid-cols-4 ">
          <div className="w-full h-32 rounded-3xl bg-zinc-200 p-4 bg-[#4858ce] p-4 md:h-62 hover:bg-[#6174ff] ease-in-out duration-75">
            <h1 className="font-extrabold">Humidity</h1>
            <p className="text-2xl">{weather?.main?.humidity}%</p>
          </div>

          <div className="w-full h-32 rounded-3xl bg-zinc-200 p-4 bg-[#4858ce] p-4 md:h-62 hover:bg-[#6174ff] ease-in-out duration-75">
            <h1 className="text-[16px] font-extrabold">Sunrise</h1>
            <p>{weather?.sys?.sunrise}</p>
          </div>

          <div className="w-full h-32 rounded-3xl bg-zinc-200 p-4 bg-[#4858ce] p-4 md:h-62 hover:bg-[#6174ff] ease-in-out duration-75">
            <h1 className="text-[16px] font-extrabold">Sunset</h1>
            <p>{weather?.sys?.sunset}</p>
          </div>

          <div className="w-full h-32 rounded-3xl bg-zinc-200  p-4 hover:bg-[#6174ff] md:h-62 ease-in-out duration-75  ">
            <h1 className="text-[16px] font-extrabold">Wind</h1>
            <p>{weather?.wind?.speed} m/s</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
