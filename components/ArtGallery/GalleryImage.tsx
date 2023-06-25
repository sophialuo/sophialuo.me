"use client";

import _ from "lodash";
import React from "react";
import { GalleryImageProps } from "./galleryImageData";
import "./styles.css";

const GalleryImage: React.FC<GalleryImageProps> = ({
  url,
  formattingStyle,
  title,
  award,
  description,
}) => {
  return (
    <div className="img-container">
      <img className="gallery-image" src={url} />
    </div>
  );
};

export default GalleryImage;
