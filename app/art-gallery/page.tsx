"use client";

import React from "react";
import { ArtGallery } from "../../components/ArtGallery";
import Layout from "../../components/Layout";

const Page: React.FC = () => {
  const isBrowser = typeof window !== "undefined";

  if (!isBrowser) {
    return null;
  }
  return (
    <Layout>
      <ArtGallery />
    </Layout>
  );
};

export default Page;
