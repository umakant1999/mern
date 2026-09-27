import React, { useEffect, useState } from "react";
import { CircleDollarSign, Edit, Plus, Trash, Wallet } from "lucide-react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";


const About = () => {
  const [expense, setexpense] = useState({
    id: Date.now(),
    text: "",
    price: "",
    category: "",
    date: "",
  });

  const [expenses, setexpenses] = useState(() =>
    JSON.parse(localStorage.getItem("expense") || "[]"),
  );

  const [budget, setBudget] = useState(14000);
  const [isediting, setisediting] = useState(null);

  const total = expenses.reduce((acc, item) => acc + item.price, 0);

  const remaining = budget - total;

  const handler = (e) => {
    const { name, value } = e.target;

    setexpense((prev) => ({
      ...prev,
      [name]: name === "price" ? Number(value) : value,
    }));
  };

  const addhandler = (e) => {
    e.preventDefault();
      if (remaining <= 0) {
    alert("Budget khatam ho gaya");
    return;
  }


    if (!expense.text.trim()) return;

    setexpenses((prev) => [...prev, expense]);

    setexpense({
      id: Date.now(),
      text: "",
      price: "",
      category: "",
      date: "",
    });
  };

  const deletehandler = (id) => {
    setexpenses((prev) => prev.filter((item) => item.id !== id));
  };

  const iseditnghandler = (id) => {
    const find = expenses.find((item) => item.id == id);
    setexpense(find);

    setisediting(id);
  };

  const savehandler = (e) => {
    e.preventDefault();
    setexpenses((prev) =>
      prev.map((item) => (item.id == isediting ? { ...expense } : item)),
    );
    setisediting(null);

    setexpense({
      id: Date.now(),
      text: "",
      price: "",
      category: "",
      date: "",
    });
  };

  useEffect(() => {
    localStorage.setItem("expense", JSON.stringify(expenses));
  }, [expenses]);

 

  const filteredhandler = (category) => {
    setexpenses((prev) => prev.filter((item) => item.category == category));
  };

  return (
    <div className="app h-screen mt-30   ">
      <main className="main flex flex-col w-full">
        <div className="stats w-screen  container grid grid-cols-3 gap-4 ">
          <div className="stat-card  bg-blue-300 p-2 rounded-2xl shadow-2xl cursor-pointer ">
            <div className="stat-top">
              <div>
                <button onClick={()=>filteredhandler("food")}>Filter</button>
                <p>Budget</p>

                <h3>₹{budget.toLocaleString()}</h3>
              </div>

              <div className="icon blue">
                <Wallet size={20} />
              </div>
            </div>

            <input
              type="number"
              value={budget}
              onChange={(e) => setBudget(Number(e.target.value))}
              placeholder="Set budget"
            />
          </div>

          <div className="stat-card  bg-blue-300 p-2 rounded-2xl shadow-2xl cursor-pointer">
            <div className="stat-top">
              <div>
                <p>Total Spent</p>

                <h3>₹{total.toLocaleString()}</h3>
              </div>

              <div className="icon orange">
                <CircleDollarSign size={20} />
              </div>
            </div>
          </div>

          <div className="stat-card  bg-blue-300 p-2 rounded-2xl shadow-2xl cursor-pointer " onMouseMove={(e)=>console.log(e.clientX,e.clientY)}>
            <div className="stat-top">
              <div>
                <p>Remaining</p>

                <h3 className={`${remaining < 10000 ? " bg-orange-600" : ""}`}>
                  ₹{remaining <= 0 ? remaining : ""}
                </h3>
              </div>

              <div className="icon green">
                <Wallet size={20} />
              </div>
            </div>
          </div>
        </div>

        <div className="add-expense container mx-auto mt-4 ">
          <div className="section-title">
            <h2>Add Expense</h2>
            <p>Enter your expense details</p>
          </div>

          <form onSubmit={addhandler} className="flex gap-4">
            <input
              name="text"
              value={expense.text}
              onChange={handler}
              placeholder="Expense name"
              className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <input
              name="price"
              value={expense.price}
              onChange={handler}
              type="number"
              placeholder="Amount"
              className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />

            <select
              name="category"
              value={expense.category}
              onChange={handler}
              className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            >
              <option value="" disabled>
                Category
              </option>
              <option value="food">Food</option>
              <option value="clothes">Clothes</option>
              <option value="travel">Travel</option>
              <option value="shopping">Shopping</option>
              <option value="bills">Bills</option>
              <option value="entertainment">Entertainment</option>
              <option value="health">Health</option>
            </select>

            <input
              name="date"
              value={expense.date}
              onChange={handler}
              type="date"
              className="w-full rounded-lg border border-gray-200 px-3 py-2.5 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
            {isediting ? (
              <button
                className="rounded-[50px] flex items-center w-full  border border-gray-300 p-3 text-sm outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
                onClick={savehandler}
              >
                save
              </button>
            ) : (
              <button
                type="submit"
                className="rounded-[50px] flex items-center w-full  border border-gray-300 p-3 text-sm outline-none "
              >
                <Plus size={18} />
                Add Expense
              </button>
            )}
          </form>
        </div>

        <section className="expense-list container mx-auto ">
          <div className="list-header">
            <div>
              <h2>Recent Expenses</h2>
              <p>Your latest transactions</p>
            </div>

            <span>{expenses.length} total</span>
          </div>

          {expenses.length === 0 && (
            <div className="empty">No expenses yet</div>
          )}

          {expenses.map((item) => (
            <div
              key={item.id}
              className="expense-item w-screen bg-blue-200 rounded-2xl p-2 m-2 grid col-auto"
            >
              <div className="expense-left">
                <div className="expense-icon">
                  <CircleDollarSign size={18} />
                </div>

                <div className="w-full h-32 ">
                  <h3>{item.text}</h3>

                  <p>{item.category}</p>
                  <p>{item.date}</p>
                </div>
              </div>

              <div className="expense-right flex gap-4">
                <strong>₹{item.price}</strong>

                <div className="actions flex gap-4 p-2">
                  <button
                    type="button"
                    onClick={() => iseditnghandler(item.id)}
                  >
                    <Edit size={26} />
                  </button>

                  <button type="button" onClick={() => deletehandler(item.id)}>
                    <Trash size={26} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>
    
      </main>
          <div className="bg-blue-500  min-h-screen ">
{/* <ResponsiveContainer width="100%" height={300}>
  <BarChart data={expenses}>
    <XAxis dataKey="category" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="price"/>
  </BarChart>
</ResponsiveContainer> */}
        </div>
    </div>
  );
};

export default About;
