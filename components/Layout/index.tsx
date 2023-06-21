import "./styles.css";
import React from "react";

const Layout: React.FC<any> = ({ children }) => {
  return <div className="page-container">{children}</div>;
};

export default Layout;
