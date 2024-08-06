import React from "react";
import "./Rename.css";

const Details = ({ rename, data }) => {
  return (
    <div className={`details ${rename ? "show" : ""}`}>
      <h3>
        {data?.name} {data?.profession}
      </h3>

      <h4>{data?.age} years old</h4>
      <h4>Tel: {data?.number}</h4>
      <h4>Location: {data?.location}</h4>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
        odit deleniti distinctio, ratione temporibus mollitia aspernatur
        eligendi aperiam, ducimus laboriosam quibusdam nihil. Reiciendis, sunt.
        Iure distinctio blanditiis tempore corporis assumenda excepturi quis
        sequi, quasi velit? Vel itaque fugit minima accusantium.
      </p>
    </div>
  );
};

export default Details;
