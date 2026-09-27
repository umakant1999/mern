import { NavLink } from "react-router-dom";

function HomeNavbar() {
  return (
    <nav className="fixed top-4 left-1/2 z-50 left-1/2 -translate-x-1/2  ">
      <div className="flex items-center gap-1 rounded-full border border-zinc-200 bg-zinc-50 p-2 shadow-sm ">

        <NavLink to="/about" className="rounded-full px-5 py-2 text-sm font-medium text-black">
          Expenses
        </NavLink>

        <button className="rounded-full px-5 py-2 text-sm text-zinc-500 transition hover:bg-zinc-200 hover:text-zinc-900">
          Analytics
        </button>

        <button className="rounded-full px-5 py-2 text-sm text-zinc-500 transition hover:bg-zinc-200 hover:text-zinc-900">
          Budget
        </button>
           <NavLink to="/login" className="rounded-full px-5 py-2 text-sm text-zinc-500 transition hover:bg-zinc-200 hover:text-zinc-900">
          Login
        </NavLink>

      </div>
    </nav>
  );
}

export default HomeNavbar;