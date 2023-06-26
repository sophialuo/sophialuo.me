"use client";

import React from "react";
import BouncyBubbles from "../../components/BouncyBubbles";
import Layout from "../../components/Layout";

const Page: React.FC = () => {
  const isBrowser = typeof window !== "undefined";

  if (!isBrowser) {
    return null;
  }
  return (
    <Layout>
      <BouncyBubbles />
    </Layout>
  );
};

export default Page;
