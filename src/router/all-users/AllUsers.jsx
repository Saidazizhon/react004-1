import React from "react";
import "./AllUsers.css";
import Users from "../../components/users/Users";
import Empty from "../../components/empty/Empty";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

function AllUsers() {
  let users = useSelector((state) => state.users.value);
  return (
    <motion.div
      initial={{ transform: "scale(.5)", transformOrigin: "top" }}
      animate={{ transform: "scale(1)" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="all__users"
    >
      {users.length ? <Users data={users} /> : <Empty />}
    </motion.div>
  );
}

export default AllUsers;
