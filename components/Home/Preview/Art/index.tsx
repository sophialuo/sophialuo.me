import React from "react";
import _ from "lodash";
import { useRouter } from "next/navigation";
import "./styles.css";

const Art: React.FC<{
  imgUrl: string;
  formattingStyle: number;
}> = ({ imgUrl, formattingStyle }) => {
  const router = useRouter();

  return (
    <div
      className="preview-container centered"
      onClick={() => {
        router.push("/art-gallery");
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
