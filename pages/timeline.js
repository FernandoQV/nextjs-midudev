import Head from "next/head";
import Link from "next/link";
import React from "react";
import PropTypes from "prop-types";
import AppLayout from "../components/appLayout/appLayout";

export default function Timeline({ userName }) {
  return (
    <div>
      <Head>
        <title>Devter || Timeline</title>
      </Head>
      <AppLayout>
        <h1>This is TimeLine of {userName}</h1>
        <Link href="/">
          <a>Go Home</a>
        </Link>
      </AppLayout>
    </div>
  );
}
Timeline.propTypes = {
  userName: PropTypes.string,
};
Timeline.getInitialProps = () => {
  return fetch("http://localhost:3000/api/hello")
    .then((res) => res.json())
    .then((r) => {
      console.log(r);
      return r;
    });
};
