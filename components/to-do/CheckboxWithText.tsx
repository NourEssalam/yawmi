"use client";

import { Checkbox } from "@/components/ui/checkbox";

export default function CheckboxWithText() {
  return (
    <div className="items-top flex space-x-2 bg-sky-400">
      <Checkbox id="terms1" />
      <div className="grid gap-1.5 leading-none">
        <label
          htmlFor="terms1"
          className="text-xl font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Accept terms and conditions
        </label>
      </div>
    </div>
  );
}
