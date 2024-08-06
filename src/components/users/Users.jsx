import React, { useState } from "react";
import "./Users.css";
import male from "../../assets/male-avatar-boy-face-man-user-9.svg";
import female from "../../assets/female-avatar-girl-face-woman-user-2.svg";
import { useDispatch } from "react-redux";
import { removeUser, renameUser } from "../../redux/usersSlice";
import Details from "../rename/Details";
import { toast } from "react-toastify";

function Users({ data }) {
  const [user, setUser] = useState(null);
  const [rename, setRename] = useState(false);
  let dispatch = useDispatch();
  let items = data?.map((el) => (
    <div key={el.id} className="users__card">
      <img src={el.gender == "male" ? male : female} alt="" />
      <h2>{el.name}</h2>
      <p>{el.profession}</p>
      <p>{el.age} years old</p>
      <button
        onClick={() => (
          dispatch(removeUser(el)), toast.success("User deleted successfully !")
        )}
      >
        Remove
      </button>
      <button
        onClick={() => (setUser(el), setRename(true))}
        style={{ background: "#000" }}
      >
        Details
      </button>
    </div>
  ));
  return (
    <>
      <div className="users__wrapper">{items}</div>
      <Details rename={rename} data={user} />
      <div
        onClick={() => setRename(false)}
        className={rename ? "black__bg" : ""}
      ></div>
    </>
  );
}

export default Users;
