import React, { useState } from "react";
import "./CreateUser.css";
import { useDispatch } from "react-redux";
import { addUser } from "../../redux/usersSlice";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

function CreateUser() {
  let dispatch = useDispatch();
  const [name, setName] = useState("");
  const [profession, setProferssion] = useState("");
  const [age, setAge] = useState("");
  const [number, setNumber] = useState("");
  const [location, setLocation] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let regex = /^\+998\s\d{2}\s\d{3}\s\d{2}\s\d{2}$/;
    if (regex.test(number)) {
      let user = {
        id: new Date().getTime(),
        name,
        profession,
        age: +age,
        gender,
        number,
        location,
      };
      toast.success(
        `User added successfully ${gender === "male" ? "🙍‍♂️ " : "🙍‍♀️"} `
      );
      dispatch(addUser(user));
      setAge("");
      setGender("");
      setName("");
      setProferssion("");
      setNumber("");
      setLocation("");
    } else {
      return toast.error("Please enter a number");
    }
  };
  return (
    <motion.div
      initial={{ transform: "scale(0)", transformOrigin: "left" }}
      animate={{ transform: "scale(1)" }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="create__user"
    >
      <h2>Create User</h2>
      <form onSubmit={handleSubmit} className="create__user-form" action="">
        <input
          value={name}
          required
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder="name"
        />
        <input
          value={profession}
          required
          onChange={(e) => setProferssion(e.target.value)}
          type="text"
          placeholder="profession"
        />
        <input
          value={age}
          required
          onChange={(e) => setAge(e.target.value)}
          type="number"
          placeholder="age"
        />
        <input
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          type="tel"
          placeholder="+998 12 345 67 89"
          required
        />
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          type="text"
          placeholder="location"
          required
        />
        <select
          value={gender}
          required
          onChange={(e) => setGender(e.target.value)}
          name=""
          id=""
        >
          <option value="">gender</option>
          <option value="male">male</option>
          <option value="female">female</option>
        </select>
        <button type="submit">Create</button>
      </form>
    </motion.div>
  );
}

export default CreateUser;
