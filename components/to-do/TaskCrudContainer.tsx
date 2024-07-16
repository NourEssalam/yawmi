import CheckboxWithText from "@/components/to-do/CheckboxWithText";
import { MdOutlineDeleteForever } from "react-icons/md";

import { CiEdit } from "react-icons/ci";

export default function TaskCrudContainer() {
  return (
    <div className="w-full p-10 grid grid-cols-[80%_20%] grid-rows-2 gap-2 bg-gray-500 relative ">
      <p className="bg-green-300 py-0 max-w-full  rounded">Edit this task</p>
      <p className="bg-red-300 py-0 max-w-full  rounded">Delete this task</p>
      <CheckboxWithText />
      {/* crud actions */}
      <div className="crud flex gap-4 w-full  justify-end ">
        {/* edit */}

        <CiEdit
          className="text-sky-900 text-xl cursor-pointer"
          onClick={() => {
            alert("edit");
          }}
        />

        {/* delete */}
        <div className="delete">
          <MdOutlineDeleteForever
            className="text-red-900 text-xl cursor-pointer"
            onClick={() => {
              alert("delete");
            }}
          />
        </div>
      </div>
    </div>
  );
}
