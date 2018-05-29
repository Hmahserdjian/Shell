import React from "react";

export const Footer = ({ fluid, children }) => (
  <div className={`footer${fluid ? "-fluid" : ""}`}>
    {children}
  </div>
)

export default Footer;