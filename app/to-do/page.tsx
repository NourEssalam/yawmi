"use client";
import TaskCrudContainer from "@/components/to-do/TaskCrudContainer";
import { useState } from "react";

export default function ToDo() {
  const [current, setCurrent] = useState("");
  return (
    <main className="flex  flex-col items-center justify-between px-10 py-10 max-w-[1200px] bg-sky-400 mx-auto ">
      <h1 className="text-3xl font-bold mb-5">
        {current ? "" : "This title will change according to  the tasks state"}
      </h1>
      {/* our to do list here */}
      <div className="grid gap-2 w-full bg-rose-300  ">
        <TaskCrudContainer />
        <TaskCrudContainer />
        <TaskCrudContainer />
        <TaskCrudContainer />
        <TaskCrudContainer />
        <TaskCrudContainer />
      </div>
    </main>
  );
}
