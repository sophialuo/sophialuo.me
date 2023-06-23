import React from "react";
import _ from "lodash";
import { useRouter } from "next/navigation";

const PATH = "/bouncy-bubbles";

const BouncyBubbles: React.FC = () => {
  const router = useRouter();

  return (
    <div className="preview-container">
      <div
        className="coming-soon-block"
        onClick={() => {
          router.push(PATH);
        }}
      >
        BOUNCY BUBBLES
      </div>
    </div>
  );
};

export default BouncyBubbles;
