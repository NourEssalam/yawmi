import { z } from "zod";

export const signUpSchema = z.object({
  firstName: z.string().min(2).max(50),
  lastName: z.string().min(2).max(50),
  username: z.string().min(2).max(50),
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(32, "Password must be at most 32 characters long"),

  confirmPassword: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(32, "Password must be at most 32 characters long"),
});

export const loginSchema = z.object({
  email: z.string().email(),
  password: z
    .string()
    .min(8, "Password must be at least 8 characters long")
    .max(32, "Password must be at most 32 characters long"),
});
