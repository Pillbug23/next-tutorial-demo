import React from "react";
import Navbar from "./Navbar";

//children are all the props nested inside our component in _app.js

const Layout = ({ children }) => {
  console.log(children);
  return (
    <div className="content">
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
