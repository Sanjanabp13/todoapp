import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const HeaderSection = ({ setTodoList, filterVal, setFilterVal, todoList }) => {
  const [task, setTask] = useState("");

  const selectValue = [
    { value: "all", name: "All" },
    { value: "completed", name: "COMPLETED" },
    { value: "uncompleted", name: "UNCOMPLETED" },
  ];

  const handleAddTask = () => {
    if (todoList && todoList.length > 0) {
      setTodoList((pre) => [
        ...pre,
        { task, id: uuidv4(), isCompleted: false },
      ]);
    } else {
      setTodoList(() => [{ task, id: uuidv4(), isCompleted: false }]);
    }
    // reset the input value
    setTask("");
  };

  return (
    <div className="mb-8">
      <h1 className="text-grey-darkest text-3xl">Todo List</h1>
      <div className="flex mt-4 gap-5">
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3  text-grey-darker"
          placeholder="Add task"
          value={task}
          onChange={(e) => setTask(e.target.value)}
        />
        <button
          className="p-2 w-[20%] border-2 rounded text-teal-900 border-teal hover:text-white hover:bg-teal-700 bg-teal disabled:text-gray-800 disabled:bg-gray-400"
          onClick={() => handleAddTask()}
          disabled={task === ""}
        >
          Add
        </button>
      </div>
      <select
        className="shadow appearance-none border rounded mt-6 w-20px text-center bg-teal-900 py-2 px-3  text-white font-bold flex-no-grow"
        onChange={(e) => setFilterVal(e.target.value)}
        value={filterVal}
      >
        {selectValue.map((item, index) => (
          <option value={item.value} key={`filter_option${index}`}>
            {item.name}
          </option>
        ))}
        {/* <option value='all'>
            All
          </option>
          <option value='completed'>Completed</option>
          <option value='uncompleted'>Uncompleted</option> */}
      </select>
    </div>
  );
};

export default HeaderSection;
