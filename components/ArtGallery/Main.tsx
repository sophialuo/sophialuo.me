"use client";

import _ from "lodash";
import React, { useEffect, useState } from "react";
import { GALLERY_IMAGE_DATA } from ".";
import Header from "./Header";
import GalleryImage from "./GalleryImage";
import Link from "next/link";
import "./styles.css";

const ArtGallery: React.FC = () => {
  const [anchor, setAnchor] = useState<string | undefined>(undefined);

  useEffect(() => {
    if (!anchor) {
      setAnchor(window?.location.hash);
    }
  }, [window?.location.hash, anchor]);

  return (
    <div className="wrapper">
      <Link href="/">Back</Link>
      <Header />
      <div className="gallery-container">
        {GALLERY_IMAGE_DATA.map((image) => {
          return (
            <GalleryImage
              url={image.url}
              title={image.title}
              award={image.award}
              description={image.description}
              formattingStyle={image.formattingStyle}
              selected={anchor === `#${encodeURIComponent(image.title)}`}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ArtGallery;
