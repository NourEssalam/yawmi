"use client";

import { Checkbox } from "@/components/ui/checkbox";

export default function CheckboxWithText() {
  return (
    <div className="items-top flex  space-x-4   bg-gray-100">
      <Checkbox id="" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor=""
          className="font-medium leading-relaxed  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
          perspiciatis ullam maxime suscipit unde quod facilis placeat non
          molestias laudantium, impedit accusamus explicabo sapiente iste earum!
          Veritatis iusto dolores eveniet!
        </label>
      </div>
    </div>
  );
}
