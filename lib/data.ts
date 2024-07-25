import { Toddo } from "./types";

export const todoData: Toddo[] = [
  {
    id: "1",
    description: "Go to the market",
    completed: false,
  },
  {
    id: "2",
    description: "Cooking some italian meals and baking some breads for my mom",
    completed: true,
  },
  {
    id: "3",
    // > 150 characters
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
    completed: false,
  },
];
