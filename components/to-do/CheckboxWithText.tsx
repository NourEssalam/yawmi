"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { shortenMedium } from "@/lib/utils";
import { Toddo } from "@/lib/types";

export default function CheckboxWithText({
  id,
  description,
  completed,
}: Toddo) {
  return (
    <div className="items-top flex  space-x-4  ">
      <Checkbox id={id} className="" />
      <div className="grid gap-1.5 leading-none">
        <label className="md:font-medium capitalize text-xs  text-justify  leading-relaxed  peer-disabled:cursor-not-allowed peer-disabled:opacity-70 block md:hidden">
          <div dangerouslySetInnerHTML={shortenMedium(description, 80)} />
        </label>
        <label className="hidden md:block capitalize md:font-medium text-xs md:text-lg text-justify  leading-relaxed  peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
          <div dangerouslySetInnerHTML={shortenMedium(description, 150)} />
        </label>
      </div>
    </div>
  );
}
