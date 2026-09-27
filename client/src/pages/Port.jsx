import React, { useState } from "react";

const App = () => {
  const [columns, setColumns] = useState({
    todo: [
      { id: 1, title: "Learn React" },
      { id: 2, title: "Practice CSS" }
    ],
    progress: [],
    done: []
  });

  const [first, setfirst] = useState([]);

  const clickhandler = (task, columnName) => {

    console.log("Clicked task:", task);

    // task ko first mein store karo
    setfirst(prev => [
      ...prev,
      task
    ]);

    // task ko current column se remove karo
    setColumns(prev => ({
      ...prev,

      [columnName]: prev[columnName].filter(
        item => item.id !== task.id
      )
    }));
    
 progress: [
    ...prev.progress,
    task
  ][columnName] : prev[columnName]
  };

  return (
    <div style={{ display: "flex", gap: "50px" }}>

      {Object.entries(columns).map(([columnName, tasks]) => (
        <div key={columnName}>

          <h1>{columnName}</h1>

          {tasks.map(task => (
            <p
              key={task.id}
              onClick={() => clickhandler(task, columnName)}
            >
              {task.title}
            </p>
          ))}

        </div>
      ))}

    </div>
  );
};

export default App;