import React from "react";

import { FaRegTrashAlt } from "react-icons/fa";
import { FaPencilAlt } from "react-icons/fa";

function TodoList() {
  const [todo, setTodo] = React.useState("");

  const isChecked = React.useRef(false);

  const handleCheck = () => {
    !isChecked;
  };
  return (
    <>
      <div>
        <div className='bg-blue-400'>
          <div className='bg-amber-50 p-5'>
            <h1>ToDo List</h1>

            <form>
              {/* penambahan */}
              <div className='bg-gray-300 border rounded-full w-full flex justify-between items-center pl-5 text-base mb-5'>
                <input className='outline-none' type='text' />
                <button className='bg-green-300 text-black p-2 rounded-full text-2xl cursor-pointer'>
                  +
                </button>
              </div>

              {/* list */}
              <section>
                <div className='bg-gray-300 border rounded w-full flex justify-between items-center px-5 py-2 text-base '>
                  <div className='flex items-center gap-2'>
                    <input type='checkbox' />
                    <input type='text' className='outline-none' />
                  </div>
                  <div className='flex gap-2'>
                    <FaPencilAlt className='cursor-pointer' />
                    <FaRegTrashAlt className='cursor-pointer' />
                  </div>
                </div>
              </section>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default TodoList;
