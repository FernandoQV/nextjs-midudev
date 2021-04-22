import Head from "next/head";
import React from "react";

import Link from "next/link";
import AppLayout from "../components/appLayout/appLayout";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Devter</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <div>
          <Link href="/">
            <a>Devter</a>
          </Link>
          <Link href="/timeline">
            <a>Timeline</a>
          </Link>
        </div>
      </AppLayout>

      <style jsx>{`
        h1 {
          color: cyan;
        }
      `}</style>
    </div>
  );
}
