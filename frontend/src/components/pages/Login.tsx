import React, { useState } from "react";
import { useRouter } from "next/router";
import NavBar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleLogin() {
    const res = await fetch("http://localhost:3000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (data.userId) {
      localStorage.setItem("userId", data.userId);
      router.push("/favs");
    } else {
      alert("Login failed");
    }
  }

  async function handleSignUp() {
    const res = await fetch("/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    const data = await res.json();
    if (data.userId) {
      localStorage.setItem("userId", data.userId);
      router.push("/favs");
    } else {
      alert("Sign up failed");
    }
  }

  return (
    <main>
      <NavBar />
      <Wrapper>
        <div className="flex flex-col items-center mt-10">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="border p-2 rounded-md w-full md:w-1/2 mb-4"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border p-2 rounded-md w-full md:w-1/2 mb-4"
          />
          <button
            onClick={handleLogin}
            className="bg-blue-500 text-white p-2 rounded-md mb-4"
          >
            Login
          </button>
          <button
            onClick={handleSignUp}
            className="bg-green-500 text-white p-2 rounded-md"
          >
            Sign Up
          </button>
        </div>
      </Wrapper>
    </main>
  );
};

export default LoginPage;
