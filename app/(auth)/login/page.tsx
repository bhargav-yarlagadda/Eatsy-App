"use client";

import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa"; // Importing the Google icon from react-icons
import { FaMoon, FaSun } from "react-icons/fa"; // Importing the Moon and Sun icons

const Login = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (status === "authenticated" && session?.user) {
      router.push("/");
    }
  }, [status, session]);

  return (
    <div
      className={`flex flex-col items-center justify-center min-h-screen p-4 transition-all ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gradient-to-br from-blue-50 to-blue-100 text-gray-800"
      }`}
    >
      {/* Theme Toggle */}
      <div className="absolute top-4 right-4">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="p-2 bg-gray-200 dark:bg-gray-700 rounded-full shadow-md transition-all hover:scale-105"
          aria-label="Toggle Dark Mode"
        >
          {darkMode ? (
            <FaSun className="w-6 h-6 text-yellow-400" /> // Light mode icon
          ) : (
            <FaMoon className="w-6 h-6 text-gray-800 dark:text-gray-200" /> // Dark mode icon
          )}
        </button>
      </div>

      {/* Logo Section */}
      <div className="flex flex-col items-center">
        <Image src="/logo.png" alt="logo" width={120} height={120} />
        <h1
          className="text-4xl font-bold mt-4"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Welcome to Eatsy
        </h1>
        <p
          className="text-center mt-2"
          style={{ fontFamily: "'Roboto', sans-serif" }}
        >
          Discover your favorite food spots effortlessly.
        </p>
      </div>

      {/* Login Button */}
      <div className="mt-10">
        <button
          type="button"
          onClick={() => signIn("google")}
          className={`flex items-center gap-3 justify-center px-6 py-3 rounded-lg shadow-lg text-lg font-medium transition-all ${
            darkMode
              ? "bg-blue-600 hover:bg-blue-700 text-white"
              : "bg-blue-600 text-white hover:bg-blue-700"
          } hover:scale-105 focus:ring-4 ${
            darkMode ? "focus:ring-blue-500" : "focus:ring-blue-300"
          }`}
        >
          <FaGoogle className="w-6 h-6" /> {/* Using the FaGoogle icon */}
          Sign in with Google
        </button>
      </div>

      {/* Footer */}
      <footer
        className="mt-16 text-sm transition-all"
        style={{ fontFamily: "'Roboto', sans-serif" }}
      >
        © 2024 Eatsy. All rights reserved.
      </footer>
    </div>
  );
};

export default Login;
