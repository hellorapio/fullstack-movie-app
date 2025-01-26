"use server";

import { Login, Signup, User } from "@/types";

export async function login(values: Login) {
  const res = await fetch("http://localhost:3000/api/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...values,
    }),
  });

  const data = await res.json();
  if (data.data) {
    return data.data;
  } else {
    throw new Error("Login failed");
  }
}

export async function signup(values: Signup) {
  const res = await fetch("http://localhost:3000/api/auth/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...values,
    }),
  });

  const data = await res.json();
  console.log(data);
  if (data.data.userId) {
    return data.data as User;
  } else {
    throw new Error("Sign up failed");
  }
}
