import React, { useEffect, useState } from "react";
import imgd from "../assets/todo.png";
import Sidebar from "../Components/Sidebar";

const storagekey = "todo";

const Todo = () => {
  const [todo, setTodo] = useState({
    id: Date.now(),
    text: "",
    completed: false,
    date: "",
    urgent: false,
  });

  const [submitted, setsubmitted] = useState(() => {
    return JSON.parse(localStorage.getItem(storagekey)) || [];
  });
  console.log(submitted);
  const [isedit, setisEdit] = useState(null);

  useEffect(() => {
    localStorage.setItem(storagekey, JSON.stringify(submitted));
  }, [submitted]);

  const handler = (e) => {
    let { name, value } = e.target;

    setTodo((prev) => ({ ...prev, [name]: value }));
  };

  const submithandler = () => {
    if (todo.text.trim() === "") {
      return;
    }

    setsubmitted((prev) => [...prev, todo]);

    setTodo({
      id: Date.now(),
      text: "",
      completed: false,
      date: "",
      urgent: false,
    });
  };

  const checkhandler = (id) => {
    setsubmitted((prev) => {
      const updated = prev.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item,
      );

      return updated;
    });
  };

  const deletehandler = (id) => {
    setsubmitted((prev) => {
      return prev.filter((item) => item.id !== id);
    });
  };

  const editHandler = (id) => {
    const finditem = submitted.find((item) => item.id === id);

    setTodo(finditem);
    setisEdit(id);
  };

  const saveHandler = () => {
    setsubmitted((prev) =>
      prev.map((item) =>
        item.id === isedit ? { ...item, text: todo.text } : item,
      ),
    );

    setisEdit(null);

    setTodo({
      id: Date.now(),
      text: "",
      completed: false,
      date: "",
      urgent: false,
    });
  };

  const urgenthandler = (id) => {
    setsubmitted((prev) => {
      const updated = prev.map((item) =>
        item.id === id ? { ...item, urgent: !item.urgent } : item,
      );

      return updated;
    });
  };

  let p = submitted.filter((item) => item.completed).length;
  let percentage = (p / submitted.length) * 100;

  let todaytodo = submitted.filter(
    (item) =>
      new Date(item.date).toLocaleDateString() ===
      new Date().toLocaleDateString(),
  );

  let tomm = new Date();

  let b = tomm.getDate() + 1;

  let c = new Date();
  c.setDate(b);

  const fil = submitted.filter(
    (item) =>
      new Date(item.date).toLocaleDateString() === c.toLocaleDateString(),
  );

  return (
    <div className="w-screen h-fit bg-zinc-900 ">
      <div className="w-full flex  justify-between items-center  md:flex-row h-24 border border-amber-50  rounded-full backdrop-blur-2xl sticky top-4 p-4 ">
        <div className="left ">
          <h1 className="text-white/50">Hello ,Umakant</h1>
          <span className="text-white text-2xl">Todo Dashboard</span>
        </div>

        <div className="right bg-[#fee685] rounded-full">
          <p className=" text-black px-3 py-3">
            {new Date().toLocaleDateString()}
          </p>
        </div>
      </div>

      <div className="w-screen h-screen grid grid-rows-2  md:grid-cols-2 gap-3 rounded-2xl p-6 ">
        <div className="w-full h-fit left rounded-3xl bg-[#fee685]">
          <div className="w-full flex p-4 gap-2">
            <input
              onChange={handler}
              name="text"
              value={todo.text}
              type="text"
              placeholder="Enter your todo"
              className="flex-1 px-2 py-2 outline-none rounded-l-2xl bg-white"
            />
            <input
              name="date"
              onChange={handler}
              value={todo.date}
              type="date"
              className=" px-2 py-2 outline-none  bg-white"
            />
            <div>
              {isedit === null ? (
                <button
                  className=" bg-teal-200 px-6 py-4 rounded-r-2xl hover:bg-teal-400 cursor-pointer "
                  onClick={submithandler}
                >
                  Add
                </button>
              ) : (
                <button
                  className="button bg-teal-200 px-4 py-4  "
                  onClick={saveHandler}
                >
                  Save
                </button>
              )}
            </div>
          </div>

          <div className="w-full h-fit  ">
           
            <p>
              {submitted.length < 1 ? "You Dont Have Todos" : "Yours Todos"}
            </p>

            {submitted.map((item) => (
              <div
                key={item.id}
                className=" flex  bg-amber-100 rounded-[20px] m-6 p-4 "
              >
                <div className="flex items-center w-full  gap-2">
                  <input
                    type="checkbox"
                    name="completed"
                    checked={item.completed}
                    onChange={() => checkhandler(item.id)}
                    className="h-4 w-4 cursor-pointer accent-green-500"
                  />

                  <div className="w-fit item flex flex-col px-4 py-4 gap-4 ">
                    <h4
                      className={`${item.completed == true ? "line-through" : ""}`}
                    >
                      {item?.text?.toLowerCase()}
                    </h4>

                    <p className="text-[.7rem]">
                      Created at {new Date(item.date).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="  flex  items-center justify-center gap-4 m-2">
                  <button
                    className="flex  items-center justify-center p-2 rounded-1xl  bg-blue-50 text-blue-600 transition hover:bg-blue-100 "
                    onClick={() => urgenthandler(item.id)}
                  >
                    {item.urgent === true ? "Urgent " : "Urgent"}
                  </button>
                  <button
                    className="flex px-2 py-2  items-center justify-center  p-2 rounded-1xl  bg-red-500 text-white transition hover:bg-blue-100"
                    onClick={() => deletehandler(item.id)}
                  >
                    Delete
                  </button>

                  <button
                    className="flex px-2 py-2  items-center justify-center p-2 rounded-1xl bg-blue-100 text-blue-600 transition hover:bg-blue-100"
                    onClick={() => editHandler(item.id)}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT SECTION */}

        <div className="w-full min-h-screen right  ">
          {/* TODAY + TOMORROW */}

          <div className="flex gap-4 h-auto  p-4">
            {/* TODAY */}

            <div className="left flex-1  bg-[#BEDBFF] rounded-2xl p-4 ">
              <div className="flex items-center justify-between">
                <h4>Today</h4>

                <h6 className="bg-lime-200 rounded-full px-4 py-2">
                  {todaytodo.length}
                </h6>
              </div>

              <div className="flex flex-col gap-2 w-full p-2 flex-1 ">
                {todaytodo.length > 0 ? (
                  todaytodo.map((item) => {
                    return (
                      <h1
                        key={item.id}
                        className="bg-amber-50/70 p-4 text-sm rounded-2xl"
                      >
                        {item.text}
                      </h1>
                    );
                  })
                ) : (
                  <img className="w-full h-full " src={imgd} />
                )}
              </div>
            </div>

            {/* TOMORROW */}

            <div className="right h-auto grid grid-cols-1 lg:grid-cols-2 grid-rows-1 w-1/2 bg-[#fccee8] rounded-3xl">
              <div className=" h-auto flex flex-col  items-center justify-between p-4">
                <div className="flex justify-between w-full">
                  <h4>Tomorrow</h4>
                  <h6 className="px-4 py-2 bg-lime-200 rounded-full">
                    {fil.length}
                  </h6>
                </div>

                {fil.map((item) => {
                  return (
                    <>
                      {fil.length > 0 ? (
                        <div className="flex flex-col w-full  m-2 ">
                          <div className="w-full h-fit flex flex-col items-start justify-center rounded-2xl gap-1 ">
                            <div className="bg-white w-full rounded-2xl p-2 ">
                              <h1 className="w-full ">{item.text}</h1>
                              <p>{new Date(item.date).toLocaleDateString()}</p>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <h1> No tasks planned for tomorrow</h1>
                      )}
                    </>
                  );
                })}
              </div>
            </div>
          </div>

          {/* URGENT */}

          <div className="w-full m-2 p-2 bg-purple-200 h-fit rounded-2xl flex flex-col gap-2">
            <div className="flex items-center justify-between flex-wrap">
              <h1 className="text-[1rem]">Urgent Todos</h1>
              <h6 className=" text-sm px-4 py-2 bg-red-100 rounded-full">
                {submitted.filter((item) => item.urgent).length}{" "}
              </h6>
            </div>

            <div className="flex items-center justify-between gap-4">
              {submitted.length > 0
                ? submitted
                    .filter((item) => item.urgent === true)
                    .map((item) => {
                      return (
                        <>
                          <div className="left w-full bg-white/70 h-fit rounded-2xl p-2 flex-wrap flex ">
                            <div className="flex flex-col ">
                              <p>{item.text}</p>
                              <p className="text-red-500  rounded-4xl">
                                High priority
                              </p>
                            </div>
                          </div>
                        </>
                      );
                    })
                : "You Dont Have Urgent Todos"}
            </div>
          </div>

          <div className="w-full m-2 p-4 bg-purple-200 rounded-2xl flex flex-col gap-3">
            {/* Header */}
            <div className="flex flex-col items-center justify-between">
              <div className="w-full flex items-center justify-between m-2">
                <h4 className="font-semibold">You Have Completed</h4>
                <p className="bg-teal-100 px-4 py-2 rounded-full">
                  {Math.floor(percentage) || 0} %
                </p>
              </div>

              <div className="bg-teal-100 w-full h-3 rounded-full overflow-hidden ">
                <p
                  className="bg-teal-500 w-full h-3 transition-all"
                  style={{ width: `${percentage || 0}%` }}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
