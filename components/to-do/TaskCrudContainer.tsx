import CheckboxWithText from "@/components/to-do/CheckboxWithText";
import { MdOutlineDeleteForever } from "react-icons/md";

import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import { Toddo } from "@/lib/types";

export default function TaskCrudContainer({
  id,
  description,
  completed,
}: Toddo) {
  const [actions, setActions] = useState(false);
  const [delDesc, setDelDesc] = useState(false);
  const [editDesc, setEditDesc] = useState(false);

  return (
    <div
      className="grid grid-cols-[85%_15%] gap-2  w-full border-b p-4"
      onMouseEnter={() => setActions(true)}
      onMouseLeave={() => setActions(false)}
    >
      {/* checkbox */}
      <CheckboxWithText
        id={id}
        description={description}
        completed={completed}
      />

      {/* crud actions */}
      <div
        className={`flex  flex-col md:flex-row justify-center space-y-2 md:space-x-4 md:space-y-0 items-center  ${
          actions ? "visible" : "hidden"
        }`}
      >
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
