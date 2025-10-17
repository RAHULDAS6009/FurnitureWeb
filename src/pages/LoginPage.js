import React, { useState } from "react";

const LoginPage = ({ onClose, onLogin }) => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !password) {
      alert("Please enter name and password");
      return;
    }

    const user = { name, password };
    localStorage.setItem("user", JSON.stringify(user));
    onLogin(user);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center "
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md  rounded-xl shadow-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-gray-800">
          Welcome to UsedStuff
        </h2>

        <form  onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder="Email or Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="  border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg p-3 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500 w-full"
            required
          />
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold w-full"
          >
            Continue
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
