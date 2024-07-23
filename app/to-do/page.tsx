"use client";
import TaskCrudContainer from "@/components/to-do/TaskCrudContainer";
import { useState } from "react";
import { todoData } from "@/lib/data";
export default function ToDo() {
  const [current, setCurrent] = useState("");
  return (
    <div className="container flex  flex-col items-center justify-center">
      <h1 className="text-2xl md:text-4xl text-center font-bold mb-5 p-10">
        {current ? "" : "This title will change according to  the tasks state"}
      </h1>
      {/* our to do list here */}
      <div className="grid gap-2 w-full  p-2">
        {todoData.map((todo) => (
          <TaskCrudContainer
            key={todo.id}
            id={todo.id}
            description={todo.description}
            completed={todo.completed}
          />
        ))}
      </div>
    </div>
  );
}
