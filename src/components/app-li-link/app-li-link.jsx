import React from "react";
import { useHistory } from "react-router-dom";
import './app-li-link.scss';

const AppLiLink = ({ linkText, linkUrl }) => {
  const history = useHistory();

  return (
    <li
      className="my-link link-box d-flex text-center align-items-center p-3 m-1 btn btn-primary"
      onClick={() => history.push(`/${linkUrl}`)}
    >
      {linkText}
    </li>
  );
};

export default AppLiLink;
