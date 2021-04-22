import React from "react";
import { colors } from "../../styles/theme";
import PropTypes from "prop-types";
const Button = ({ children, onClick }) => {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{`
        button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: ${colors.black};
          border: 0;
          color: #fff;
          border-radius: 9999px;
          font-size: 1rem;
          font-weight: 700;
          padding: 0.5rem 1.5rem;
          transition: opacity 0.3s ease;
        }
        button:hover {
          opacity: 0.8;
          cursor: pointer;
        }
         {
          /* estilos para componentes que estan en los children */
        }
        button > :global(svg) {
          height: 20px;
          width: 20px;
        }
        path {
          fill: red;
        }
      `}</style>
    </>
  );
};
Button.propTypes = {
  children: PropTypes.children,
  onClick: PropTypes.func,
};
export default Button;
