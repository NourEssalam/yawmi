import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// My Custom Utils

export function shortenMedium(str: string, len: number) {
  if (str.length > len) {
    return {
      __html: `${str.slice(
        0,
        len
      )} <span className="text-gray-500">&nbsp;...</span>`,
    };
  } else {
    return {
      __html: str,
    };
  }
}
