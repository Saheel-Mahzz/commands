import React, { useState } from "react";
import "../Styles/task.css";
const Home = () => {
  const [task, setTask] = useState({
    desc: "",
    name: "",
  });
  const handleInputChange = () => {};

  return (
    <>
      <section className="task-section">
        <div className="container">
          <div className="task-box">
            <h1>Task Management System</h1>
            <div className="input-box">
              <label> Title:</label>
              <input
                type="text"
                placeholder="Enter task"
                onChange={(e) => handleInputChange(e)}
                name="title"
              />

              <label>Description:</label>
              <textarea
                placeholder="Enter a Description"
                name="desc"
                onChange={(e) => {
                  handleInputChange(e);
                }}
              ></textarea>
              <button>Add a task</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
