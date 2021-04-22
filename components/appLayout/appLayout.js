import React from "react";
import { global, styled } from "./styles";
import PropTypes from "prop-types";
const AppLayout = ({ children }) => {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      <style jsx>{styled}</style>
      <style jsx global>
        {global}
      </style>
    </>
  );
};
AppLayout.propTypes = {
  children: PropTypes.children,
};
export default AppLayout;
