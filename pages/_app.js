import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{`
          a{
            color:red
          }
      `}</style>
    </>
  );
}

export default MyApp;
