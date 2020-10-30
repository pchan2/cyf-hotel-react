import React from "react";

const Footer = props => {
  return (
    <ul>
      {props.ContactInfo.map(item => {
        return <li key={item}>{item}</li>;
      })}
    </ul>
  );
};

export default Footer;
