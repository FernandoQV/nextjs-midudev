import React from "react";
import PropTypes from "prop-types";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
        a {
          color: red;
        }
      `}</style>
    </>
  );
}
MyApp.propTypes = {
  Component: PropTypes.any,
  pageProps: PropTypes.any,
};
export default MyApp;
