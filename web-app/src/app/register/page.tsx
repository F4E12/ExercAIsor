"use client";

import Navbar from "@/components/ui/navbar";
import ParticleBackground from "@/components/ui/particles";
import React, { useState } from "react";

const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navbar Page="login" />
      <div className="min-h-screen relative flex items-center justify-center z-20 px-4 sm:px-0">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg max-w-sm sm:max-w-md w-full">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
            Register
          </h2>
          <form onSubmit={handleRegister}>
            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Name</label>
              <input
                type="text"
                className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Email</label>
              <input
                type="email"
                className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-gray-700 mb-2">Password</label>
              <input
                type="password"
                className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* Confirm Password Input */}
            <div className="mb-6">
              <label className="block text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                className="w-full p-3 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-primary text-white rounded-lg hover:bg-primary/80 transition"
            >
              Register
            </button>
          </form>

          <p className="text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-primary font-semibold">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
