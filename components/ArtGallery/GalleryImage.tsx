"use client";

import _ from "lodash";
import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { GalleryImageProps } from "./galleryImageData";
import Dialog from "@mui/material/Dialog";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "./styles.css";

interface GalleryImageComponentProps extends GalleryImageProps {
  selected: boolean;
}

const GalleryImage: React.FC<GalleryImageComponentProps> = ({
  url,
  title,
  award,
  description,
  selected,
}) => {
  // We need to register that an image has been selected from the home page and also only open the modal once due to the selection
  const [isFirstRender, setIsFirstRender] = useState<boolean>(true);
  const [open, setOpen] = useState<boolean>(selected);

  useEffect(() => {
    if (isFirstRender && selected) {
      setOpen(true);
      setIsFirstRender(false);
    }
  }, [isFirstRender, selected, setOpen]);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <img className="gallery-image" onClick={handleOpen} src={url} />
      <Dialog open={open} onClose={handleClose} maxWidth="lg">
        <div className="dialog-container">
          <div className="dialog-header">
            <h2>{title}</h2>
            <div className="close-button" onClick={handleClose}>
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </div>
          </div>
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
