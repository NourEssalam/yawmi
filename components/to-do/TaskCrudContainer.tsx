import CheckboxWithText from "@/components/to-do/CheckboxWithText";
import { MdOutlineDeleteForever } from "react-icons/md";

import { CiEdit } from "react-icons/ci";
import { useState } from "react";

export default function TaskCrudContainer() {
  const [delDesc, setDelDesc] = useState(false);
  const [editDesc, setEditDesc] = useState(false);

  return (
    <div className="grid grid-cols-[80%_20%] gap-4  w-full">
      {/* checkbox */}
      <CheckboxWithText />

      {/* crud actions */}
      <div className="bg-yellow-300 flex justify-center space-x-4 items-center">
        {/* edit */}
        <div className="relative">
          <CiEdit
            className="text-sky-900 text-xl cursor-pointer"
            onClick={() => {
              alert("edit");
            }}
            onMouseEnter={() => setEditDesc(true)}
            onMouseLeave={() => setEditDesc(false)}
          />

          <p
            className={`absolute -top-10 text-white w-max bg-black/70 rounded px-4 py-1 ${
              editDesc ? "visible" : "hidden"
            }`}
          >
            Edit this task
          </p>
        </div>

        {/* delete */}
        <div className=" relative">
          <MdOutlineDeleteForever
            className="text-red-900 text-xl cursor-pointer"
            onClick={() => {
              alert("delete");
            }}
            onMouseEnter={() => setDelDesc(true)}
            onMouseLeave={() => setDelDesc(false)}
          />
          <p
            className={`absolute -top-10 text-white w-max bg-black/70 rounded px-4 py-1  ${
              delDesc ? "visible" : "hidden"
            } `}
          >
            Delete this task
          </p>
        </div>
      </div>
    </div>
  );
}
