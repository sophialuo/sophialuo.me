import React, { useState } from "react";
import _ from "lodash";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Bubble, { BubbleProps } from "../../../BouncyBubbles/Bubble";
import "../../../BouncyBubbles/styles.css";
import "./styles.css";

const PATH = "/bouncy-bubbles";

const BUBBLE_PROPS: BubbleProps[] = [
  {
    position: "relative",
    top: -100,
    left: 10,
    width: 80,
    height: 80,
    bubbleDelay: 0.15,
    animationTime: 6,
  },
  {
    position: "relative",
    top: -180,
    left: 95,
    width: 50,
    height: 50,
  },
  {
    position: "relative",
    top: -185,
    left: 150,
    width: 30,
    height: 30,
    bubbleDelay: 0.3,
    animationTime: 4,
  },
  {
    position: "relative",
    top: -250,
    left: 200,
    width: 10,
    height: 10,
    bubbleDelay: 0.5,
    animationTime: 1,
  },
  {
    position: "relative",
    top: -305,
    left: 250,
    width: 60,
    height: 60,
    bubbleDelay: 0.25,
  },
  {
    position: "relative",
    top: -380,
    left: 150,
    width: 15,
    height: 15,
    bubbleDelay: 0.5,
    animationTime: 2,
  },
  {
    position: "relative",
    top: -310,
    left: 200,
    width: 50,
    height: 50,
    bubbleDelay: 0.45,
    animationTime: 4,
  },
  {
    position: "relative",
    top: -505,
    left: 200,
    width: 30,
    height: 30,
    bubbleDelay: 0.7,
    animationTime: 1.5,
  },
];

const BouncyBubbles: React.FC = () => {
  const router = useRouter();
  const [hover, setHover] = useState<boolean>(false);

  return (
    <div
      className="preview-container"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Link
        href={PATH}
        onClick={() => {
          router.push(PATH);
        }}
      >
        <div
          className="primary bubbles-container"
          onClick={() => {
            router.push(PATH);
          }}
        >
          Bouncy Bubbles
        </div>
        {BUBBLE_PROPS.map((prop) => (
          <Bubble
            key={`preview-${JSON.stringify(prop)}`}
            top={prop.top}
            left={prop.left}
            width={prop.width}
            height={prop.height}
            position={prop.position}
            animationKeyframe={!hover ? "" : undefined}
            animationTime={prop.animationTime ?? 3}
          />
        ))}
      </Link>
    </div>
  );
};

export default BouncyBubbles;
