import React, { useState } from "react";
import _ from "lodash";
import { useRouter } from "next/navigation";
import "./styles.css";

const Art: React.FC<{
  imgUrl: string;
  formattingStyle: number;
  title: string;
}> = ({ imgUrl, formattingStyle, title }) => {
  const router = useRouter();

  return (
    <div
      id={`preview-${imgUrl}`}
      className="preview-container art"
      onClick={() => {
        router.push(`/art-gallery#${title}`);
      }}
    >
      <img
        src={imgUrl}
        className={`default formatting-style-${formattingStyle}`}
      />
    </div>
  );
};

export default Art;
