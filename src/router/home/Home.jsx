import React from "react";
import "./Home.css";
import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      initial={{ transform: "scale(0)", transformOrigin: "top" }}
      animate={{ transform: "scale(1)" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="home"
    >
      <h2>
        Odam Qoshish <br /> Amaliyot
      </h2>
    </motion.div>
  );
}

export default Home;
