import React from "react";
import _ from "lodash";
import { useRouter } from "next/navigation";
import Link from "next/link";

const PATH = "/bouncy-bubbles";

const BouncyBubbles: React.FC = () => {
  const router = useRouter();

  return (
    <div className="preview-container">
      <Link
        href={PATH}
        onClick={() => {
          router.push(PATH);
        }}
      >
        <div
          className="coming-soon-block"
          onClick={() => {
            router.push(PATH);
          }}
        >
          BOUNCY BUBBLES
        </div>
      </Link>
    </div>
  );
};

export default BouncyBubbles;
