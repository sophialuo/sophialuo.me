"use client";

import React from "react";
import _ from "lodash";
import Image from "next/image";

const ExternalLink: React.FC<{
  imagePath: string;
  externalLink: string;
  altName: string;
  width: number;
  height: number;
}> = ({ imagePath, externalLink, altName, width, height }) => {
  return (
    <div
      id={`preview-${imagePath}`}
      key={`preview-${imagePath}`}
      className="preview-container"
      onClick={() => {
        window.open(externalLink);
      }}
    >
      <Image src={imagePath} alt={altName} width={width} height={height} />
    </div>
  );
};

export default ExternalLink;
