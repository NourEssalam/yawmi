"use client";
import TaskCrudContainer from "@/components/to-do/TaskCrudContainer";
import { useState } from "react";

export default function ToDo() {
  const [current, setCurrent] = useState("");
  return (
    <main className="flex  flex-col items-center justify-between p-24">
      <h1 className="text-3xl font-bold">
        {current ? "" : "This title will change according to  the tasks state"}
      </h1>
      {/* our to do list here */}
      <div className="grid gap-10 p-10">
        <TaskCrudContainer />
        <TaskCrudContainer />
      </div>
    </main>
  );
}
