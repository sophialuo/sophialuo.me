import React from "react";
import _ from "lodash";
import { useRouter } from "next/navigation";

const JSONViewer: React.FC = () => {
  const router = useRouter();

  return (
    <div className="preview-container">
      <div
        className="coming-soon-block"
        onClick={() => {
          router.push("/json-viewer");
        }}
      >
        JSON Viewer
      </div>
    </div>
  );
};

export default JSONViewer;
