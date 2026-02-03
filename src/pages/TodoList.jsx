import React from "react";
import { useForm } from "react-hook-form";

import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

function TodoList() {
  const [todo, setTodo] = React.useState([]);

  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    setTodo([...todo, data.todo]);
    reset();
  };

  const isChecked = React.useRef(false);

  const handleCheck = () => {
    isChecked;
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

              {/* list */}
              <section>
                {todo.map((item, index) => (
                  <div
                    key={index}
                    className='bg-gray-300 border rounded w-full flex justify-between items-center px-5 py-2 text-base gap-4'
                  >
                    <div className='flex items-center gap-2'>
                      <input className='outline-none' type='checkbox' />
                      <input
                        value={item}
                        type='text'
                        className='outline-none'
                      />
                    </div>
                    <div className='flex gap-2'>
                      <FaPencilAlt className='cursor-pointer' />
                      <FaRegTrashAlt className='cursor-pointer' />
                    </div>
                  </div>
                ))}
              </section>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
