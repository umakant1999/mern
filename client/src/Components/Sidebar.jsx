import React from "react";

const Sidebar = () => {
  return (
    <aside className="w-64 h-screen bg-zinc-900 text-white p-6">
      
      <h2 className="text-xl font-bold mb-8">
        Dashboard
      </h2>

      <nav>
        <ul className="space-y-2">
          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-3 hover:bg-zinc-800"
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-3 hover:bg-zinc-800"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#"
              className="block rounded-lg px-4 py-3 hover:bg-zinc-800"
            >
              Settings
            </a>
          </li>
        </ul>
      </nav>

    </aside>
  );
};

export default Sidebar;