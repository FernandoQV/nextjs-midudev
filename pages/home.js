import Head from "next/head";
import React, { useEffect, useState } from "react";
import AppLayout from "../components/appLayout/appLayout";
import Button from "../components/button/button";
import GitHub from "../components/Icon/gitHub";
import { loginWithGitHub, onAuthStateChanged } from "../firebase/client";
import { colors } from "../styles/theme";

/* en vercel se maneja tres estado undefined logeado noLogado,para evitar el salto del boton si colocamos el estado inicial como null */
const Home = () => {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    onAuthStateChanged(setUser);
  }, []);
  const handleLogin = () => {
    loginWithGitHub()
      .then(setUser)
      .catch((e) => console.log(e));
  };
  return (
    <>
      <Head>
        <title>APP Devter</title>
        <link rel="favicon" icon="/favicon.ico" />
      </Head>
      <AppLayout>
        <section>
          <img src="/vercel.svg" />
          <h1>DEVTER</h1>
          <h2>Talk about development</h2>
          <div>
            {user === null && (
              <Button onClick={handleLogin}>
                <GitHub fill="#fff" />
                Login on GitHub
              </Button>
            )}
            {user && (
              <div>
                <img src={user.photoURL} />
                <p>{user.email}</p>
              </div>
            )}
          </div>
        </section>
      </AppLayout>
      <style jsx>{`
        section {
          display: grid;
          place-items: center;
          place-content: center;
          height: 100%;
          margin: 1rem;
          gap: 0.5rem;
        }
        img {
          width: 120px;
        }
        h1 {
          color: ${colors.primary};
          fontt-weight: 800;
          margin: 0;
        }
        h2 {
          color: ${colors.secondary};
          font-size: 20px;
        }
      `}</style>
    </>
  );
};

export default Home;
