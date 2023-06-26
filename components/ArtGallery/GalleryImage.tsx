"use client";

import _ from "lodash";
import React, { useState } from "react";
import ReactMarkdown from "react-markdown";
import { GalleryImageProps } from "./galleryImageData";
import Dialog from "@mui/material/Dialog";
import "./styles.css";

const GalleryImage: React.FC<GalleryImageProps> = ({
  url,
  title,
  award,
  description,
}) => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="img-container">
      <img className="gallery-image" onClick={() => setOpen(true)} src={url} />
      <Dialog open={open} onClose={() => setOpen(false)}>
        <div className="dialog-container">
          <h2>{title}</h2>
          <div className="dialog-img-wrapper">
            <img className="dialog-img" src={url} />
          </div>
          <div>
            <h3>Description</h3>
            <div className="description">
              <ReactMarkdown>{`${
                description ?? "Coming soon!"
              }`}</ReactMarkdown>
            </div>
          </div>
          {award && (
            <div>
              <h3>Notes</h3>
              <ReactMarkdown>{award}</ReactMarkdown>
            </div>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default GalleryImage;
