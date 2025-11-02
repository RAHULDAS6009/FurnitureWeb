import React, { useEffect } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

export const OrderConfirmation = () => {
  useEffect(() => {
    // Fire confetti animation on load
    confetti({
      particleCount: 120,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff9a9e", "#fad0c4", "#ffecd2", "#fcb69f"],
    });
  }, []);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-orange-200 via-pink-200 to-pink-300 text-gray-800 p-6">
      {/* Animated Circle Check */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1.2 }}
        transition={{ type: "spring", stiffness: 100, damping: 10 }}
        className="relative bg-white rounded-full shadow-lg w-24 h-24 flex justify-center items-center mb-6"
      >
        <motion.svg
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          xmlns="http://www.w3.org/2000/svg"
          className="w-12 h-12 text-pink-500"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 13l4 4L19 7"
          />
        </motion.svg>
      </motion.div>

      {/* Thank You Message */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-orange-400 bg-clip-text text-transparent mb-2"
      >
        Order Confirmed!
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="text-lg text-gray-700 text-center max-w-md"
      >
        Thank you for shopping with us 💖 Your order has been successfully
        placed. We’ll send you an update once it’s on the way.
      </motion.p>

      {/* Button */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="mt-8 px-6 py-3 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold shadow-md hover:shadow-lg transition"
        onClick={() => (window.location.href = "/shop")}
      >
        Continue Shopping
      </motion.button>
    </div>
  );
};
