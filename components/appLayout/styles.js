import css from "styled-jsx/css";
import { breakPoints, colors } from "../../styles/theme";
export const styled = css`
  div {
    display: grid;
    place-items: center;
    min-height: 100vh;
    background: ${colors.primary};
  }
  main {
    background: #fff;
    border-radius: 10px;
    height: 100%;
    width: 100%;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.1);
  }
  @media (min-width: ${breakPoints.mobile}) {
    main {
      width: 375px;
      height: 90vh;
    }
  }
`;
export const global = css.global`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;
