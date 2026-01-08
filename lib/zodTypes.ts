// Zod types for login and signup
import * as z from "zod";

const Player = z.object({
    username: z.string(),
    xp: z.number(),
});

// login has email and password

export const Login = z.object({
    email: z.string().email(),
    password: z.string().min(6),
});

export const Signup = z
    .object({
        fullName: z.string().min(1),
        email: z.string().email(),
        password: z.string().min(6),
        confirmPassword: z.string().min(6),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
    });

// signup has full name email, password, and confirmPassword
