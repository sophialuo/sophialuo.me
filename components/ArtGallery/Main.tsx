"use client";

import _ from "lodash";
import React from "react";
import { GALLERY_IMAGE_DATA } from ".";
import Header from "./Header";
import GalleryImage from "./GalleryImage";
import Link from "next/link";
import "./styles.css";

const ArtGallery: React.FC = () => {
  return (
    <div className="wrapper">
      <Link href="/">Back</Link>
      <Header />
      <div className="gallery-container">
        {GALLERY_IMAGE_DATA.map((image) => (
          <GalleryImage
            url={image.url}
            title={image.title}
            award={image.award}
            description={image.description}
            formattingStyle={image.formattingStyle}
          />
        ))}
      </div>
    </div>
  );
};

export default ArtGallery;
