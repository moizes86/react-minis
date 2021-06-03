import React from "react";

const NameListUl = ({ names, removeName }) => {
  return (
    <div className="name-list-ul">
      <ul className="">
        {names.map((name, i) => (
          <li key={i}>
            <p className="d-inline-block ml-n3 pr-4">
              {name}{" "}
              <span className="badge badge-danger" id={name} onClick={removeName}>
                X
              </span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NameListUl;
