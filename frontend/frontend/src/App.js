import React, { useState } from "react";
import Navbar from "./components/Navbar";
import RegisterForm from "./components/RegisterForm";

import Verify from "./components/UserForm";
import { motion } from "framer-motion";

function App() {
  const [page, setPage] = useState("register");

  return (
    <div>
      <Navbar onRouteChange={setPage} currentPage={page} />

      <motion.div
        key={page}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -30 }}
        transition={{ duration: 0.4 }}
      >
        {page === "register" ? <RegisterForm /> : <Verify />}
      </motion.div>
    </div>
  );
}

export default App;
