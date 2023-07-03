import React, { useState } from "react";
import _ from "lodash";
import { useRouter } from "next/navigation";
import "./styles.css";

const hoverCSS = (className: string, hover: boolean) =>
  hover ? className.replace("word", "word-hover") : className;

const JSONViewer: React.FC = () => {
  const router = useRouter();
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className="preview-container"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className="json-viewer-block"
        onClick={() => {
          router.push("/json-viewer");
        }}
      >
        <div
          className={`${hoverCSS("word", hover)} ${hoverCSS("word-1", hover)}`}
        >
          {"{"}
        </div>
        <div
          className={`${hoverCSS("word", hover)} ${hoverCSS("word-2", hover)}`}
        >
          {"JSON"}
        </div>
        <div
          className={`${hoverCSS("word", hover)} ${hoverCSS("word-3", hover)}`}
        >
          {"Viewer"}
        </div>
        <div
          className={`${hoverCSS("word", hover)} ${hoverCSS("word-4", hover)}`}
        >
          {"}"}
        </div>
      </div>
    </div>
  );
};

export default JSONViewer;
