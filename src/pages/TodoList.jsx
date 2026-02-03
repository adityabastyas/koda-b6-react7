import React from "react";
import { useForm } from "react-hook-form";

import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

function TodoList() {
  const [todo, setTodo] = React.useState([]);
  const [edit, setEdit] = React.useState(null);

  const { register, handleSubmit, reset, setValue } = useForm();

  const onSubmit = (data) => {
    setTodo([...todo, data.todo]);

    reset();
  };

  const handleDelete = (index) => {
    const newTodo = todo.filter((_, i) => i !== index);
    setTodo(newTodo);
  };

  const handleEdit = (index) => {
    setEdit(index);
  };

  const handleChangeTodo = (e, index) => {
    const newTodo = [...todo];
    newTodo[index] = e.target.value;
    setTodo(newTodo);
  };

  const isChecked = React.useRef([]);

  const textRef = React.useRef([]);

  const handleCheck = (index) => {
    isChecked.current[index] = !isChecked.current[index];

    if (isChecked.current[index]) {
      textRef.current[index].style.textDecoration = "line-through";
    } else {
      textRef.current[index].style.textDecoration = "none";
    }
  };
  return (
    <>
      <div>
        <div className='bg-blue-400'>
          <div className='bg-amber-50 p-5'>
            <h1>ToDo List</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
              {/* penambahan */}
              <div className='bg-gray-300 border rounded-full w-full flex justify-between items-center pl-5 text-base mb-5'>
                <input
                  {...register("todo")}
                  className='outline-none'
                  type='text'
                />
                <button
                  type='submit'
                  className='bg-green-300 text-black p-2 rounded-full text-2xl cursor-pointer'
                >
                  +
                </button>
              </div>
            </form>

            {/* list */}
            <section>
              {todo.map((item, index) => (
                <div
                  key={index}
                  className='bg-gray-300 border rounded w-full flex justify-between items-center px-5 py-2 text-base gap-4'
                >
                  <div className='flex items-center gap-2'>
                    <input
                      onChange={() => handleCheck(index)}
                      className='outline-none'
                      type='checkbox'
                    />
                    <input
                      ref={(i) => (textRef.current[index] = i)}
                      readOnly={edit !== index}
                      onChange={(e) => handleChangeTodo(e, index)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          setEdit(null);
                        }
                      }}
                      value={item}
                      type='text'
                      className={`outline-none ${
                        edit === index
                          ? "border-b border-black bg-white"
                          : "bg-transparent"
                      }`}
                    />
                  </div>
                  <div className='flex gap-2'>
                    <FaPencilAlt
                      className='cursor-pointer'
                      onClick={() => handleEdit(index)}
                    />
                    <FaRegTrashAlt
                      className='cursor-pointer'
                      onClick={() => handleDelete(index)}
                    />
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
