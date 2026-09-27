import React, { useRef, useState } from "react";
import Button from "../Components/Button";
import img from "../assets/react.png";
import { Link, NavLink } from "react-router-dom";
import Card from "../Components/Card";
import Sidebar from "../Components/Sidebar";
import { SocialIcon } from "react-social-icons";
import Footer from "../Components/Footer";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const Portfolio = () => {
  const [first, setfirst] = useState([
    {
      name: "React Js",
      img: "https://static.cdnlogo.com/logos/r/85/react.svg",
    },
    {
      name: "JavaScript",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Css",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
    {
      name: "Express Js",
      img: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original",
    },
  ]);
  


  return (
    <div
     
      className="w-screen min-h-screen   "
     
     
    >
      <nav className="navbar flex justify-between border  shadow-2xl border-b-green-200/40 items-center container mx-auto rounded-full h-20  sticky top-4 mx-4  backdrop-blur-md left-0 right-0 p-6 z-50 ">
        <h5 className="text-white text-2xl">Umakant</h5>

        <div className=" navbar gap-4 cursor-pointer hidden md:flex  ">
          <Link className="a text-white  px-4 py-2 transition hover:bg-blue-400 rounded-4xl ease-in-out duration-100 ">
            Home
          </Link>
          <Link className="a text-white  px-4 py-2 hover:bg-blue-400 rounded-4xl ease-in-out duration-100 ">
            Contact
          </Link>
          <Link className=" a text-white  px-4 py-2 hover:bg-blue-400 rounded-4xl ease-in-out duration-100 ">
            Skill
          </Link>
          <Link className="a text-white  px-4 py-2 hover:bg-blue-400 rounded-4xl ease-in-out duration-100">
            About
          </Link>
        </div>
        <div>
          <Button className="min-w-32 min-h-8 rounded-full bg-[#3B82F6]  ">
            Resume
          </Button>
        </div>
      </nav>

      <hr />
      <section className="w-full min-h-[30vh] container mx-auto mt-20 grid grid-cols-1 md:grid-cols-2  text-white ">
        <div className=" p-6 ">
          <div className="content">
            <p className=" text-sm text-white/40 ">Hi I'm</p>
            <h1 className="text-[3rem] font-extrabold  md:text-[4rem]  lg:font-extrabold">
              Umak<span className=" text-blue-400">ant</span>
            </h1>
            <h3 className="text-sm md:text-lg">Full Stack Developer</h3>
            <p className="text-[clamp(1rem,2vw,1.25rem)] text-white/40 mt-2">
              I’m a Full Stack Developer who enjoys building modern, responsive,
              and user-friendly web applications. I turn ideas into clean,
              functional digital experiences using React , JavaScript, and
              modern web technologies.
            </p>
          </div>

          <div className="flex gap-6 mt-4 sticky left-0 top-4">
            <Button className="min-w-32 min-h-4  px-4 py-2 bg-teal-200 text-black  rounded-full transition cursor-pointer hover:scale-90 ">
              View My Work
            </Button>
            <Button className="w-32 min-h-4 bg-teal-200 text-black    px-4 py-2 rounded-full transition cursor-pointer  hover:scale-90">
              Contact Me
            </Button>
          </div>
          <div className="mt-6 flex gap-4">
            <SocialIcon
              className=" transition hover:scale-105"
              url="https://twitter.com"
            />
            <SocialIcon
              className=" transition hover:scale-105"
              url="https://github.com"
            />
            <SocialIcon
              className=" transition hover:scale-105"
              url="https://facebook.com"
            />
            <SocialIcon
              className=" transition hover:scale-105"
              url="https://instagram.com"
            />
          </div>
        </div>
        <Card className="mx-10 my-20 h-1/2  ">
          <img
            className="w-full max-h-full object-cover object-center rounded-3xl transition-all ease-in-out hover:scale-105 "
            src="https://i.pinimg.com/originals/2f/c9/a7/2fc9a796ac83f03d905728f6fef8c746.gif"
            alt=""
          />
        </Card>
      </section>
      <hr className="h-2  text-white mx-auto container" />

      <section className="w-screen min-h-[80vh] flex flex-col mx-auto container p-4 md:flex-row   ">
        <div className="w-full  flex-col md:flex   ">
          <p className="text-white/70 font-thin text-1xl  text-start">
            About Me
          </p>
          <h1 className="text-white text-[clamp(1vw,6vw,5rem)] font-extrabold tracking-normal leading-1xl md:text-7xl">
            Designing with <br />{" "}
            <span className="text-blue-400/80">
              purpose, building with code.
            </span>
          </h1>
          <p className="text-white font-light">
            I’m a UI/UX designer and frontend developer who enjoys turning ideas
            into intuitive and visually engaging digital experiences. My
            approach combines visual design, UX thinking, and frontend
            development. I care about hierarchy, typography, spacing,
            interaction, responsiveness, and the small details that make a
            product feel polished. I’m continuously improving my design process
            through real-world projects, experimentation, and hands-on
            development.
          </p>
        </div>

        <div className="w-full  mt-10 grid grid-cols-1 gap-6 grid-rows-3 md:grid-cols-2     ">
          <Card className="cursor-pointer  flex items-center justify-center font-bold text-center backdrop-blur-3xl bg-amber-50/10 h-52 hover:scale-105">
            <h1 className="text-white text-3xl "> 10+ Design Projects</h1>
          </Card>
          <Card className="cursor-pointer flex items-center justify-center font-bold text-center w-full  backdrop-blur-3xl bg-amber-50/10 h-52 hover:scale-105 ">
            <h1 className="text-white text-3xl "> 5+ Development Projects</h1>
          </Card>
          <Card className="cursor-pointer flex items-center justify-center font-bold text-center w-full backdrop-blur-3xl bg-amber-50/10  h-52 hover:scale-105">
            <h1 className="text-white text-3xl "> UI/UX Design</h1>
          </Card>
          <Card className="cursor-pointer flex items-center justify-center font-bold text-center w-full  backdrop-blur-3xl  bg-amber-50/10 h-52 hover:scale-105">
            <h1 className="text-white text-3xl "> React Development</h1>
          </Card>
        </div>
      </section>

      <hr className="h-2  text-white mx-auto container" />

      <section className=" card w-screen min-h-[80vh] flex flex-col    text-white  gap-6 rounded-b-2xl m-2  container mx-auto   ">
        <div className=" ">
          <p className="text-white/70">Projects</p>
          <h4>Some of my work</h4>
        </div>
        <div className="flex gap-4">
          <Card className="border cursor-pointer w-1/2 h-62 hover:scale-105  ">
            <img
              className="max-w-full "
              src="https://i.pinimg.com/1200x/ea/45/e9/ea45e9331e123d8d3f26d69e8577a6de.jpg"
              alt=""
            />
          </Card>

          <Card className="border cursor-pointer  w-1/2  h-62 hover:scale-105  ">
            <img
              className="max-w-full "
              src="https://i.pinimg.com/1200x/ea/45/e9/ea45e9331e123d8d3f26d69e8577a6de.jpg"
              alt=""
            />
          </Card>

          <Card className="border flex items-center justify-center h-62  w-1/2 cursor-pointer hover:scale-105">
            <img
              className="max-w-full "
              src="https://i.pinimg.com/1200x/ea/45/e9/ea45e9331e123d8d3f26d69e8577a6de.jpg"
              alt=""
            />
          </Card>

          <Card className="border  w-1/2  h-62  cursor-pointer hover:scale-105">
            <img
              className="max-w-full "
              src="https://i.pinimg.com/1200x/ea/45/e9/ea45e9331e123d8d3f26d69e8577a6de.jpg"
              alt=""
            />
          </Card>
        </div>
      </section>

      <hr className="h-2  text-white mx-auto container" />

      <section className="w-full min-h-[70vh] mx-auto container flex flex-col md:flex-col">
        <div className="w-full flex flex-col ">
          <p className="text-blue-400/70">Skills</p>
          <h4 className="text-white">Some of my work</h4>
        </div>

        <div className=" card w-full flex flex-col border gap-4 items-center justify-between p-4 md:flex-row">
          {first.map((item) => {
            return (
              <Card className=" border-2 border-amber-50 cursor-pointer w-1/2 h-62 hover:scale-105  ">
                <img
                  className="min-w-full min-h-32 max-h-full object-cover"
                  src={item.img}
                />
                <h1 className="bg-zinc-50 p-4">{item.name}</h1>
              </Card>
            );
          })}
        </div>
      </section>
      <hr className="h-2  text-white mx-auto container" />

      <Footer className="w-full px-5 py-8">
        <div className="container mx-auto flex flex-col items-center gap-6 md:flex-row">
          {/* Footer Info */}
          <div className="w-full md:w-1/2">
            <h1 className="text-lg font-extrabold text-white">
              UMA
              <span className="text-blue-400">KANT®</span>
              <span className="ml-2 font-medium">
                UI/UX Designer · Frontend Developer
              </span>
            </h1>

            <p className="mt-3 text-sm text-white/60">
              © 2026 Umakant. All rights reserved.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex w-full items-center justify-start gap-4 md:w-1/2 md:justify-end ">
            <SocialIcon
              url="https://twitter.com"
              className="transition duration-300 hover:scale-105  "
            />

            <SocialIcon
              url="https://github.com"
              className="transition duration-300 hover:scale-105"
            />

            <SocialIcon
              url="https://facebook.com"
              className="transition duration-300 hover:scale-105"
            />

            <SocialIcon
              url="https://instagram.com"
              className="transition duration-300 hover:scale-105 "
            />
          </div>
        </div>
      </Footer>
    </div>
  );
};

export default Portfolio;
