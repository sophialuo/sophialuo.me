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
    top: -60,
    left: 10,
    width: 50,
    height: 50,
    bubbleDelay: 0.15,
  },
  {
    position: "relative",
    top: -90,
    left: 70,
    width: 20,
    height: 20,
  },
  {
    position: "relative",
    top: -135,
    left: 80,
    width: 30,
    height: 30,
    bubbleDelay: 0.25,
  },
  {
    position: "relative",
    top: -130,
    left: 120,
    width: 10,
    height: 10,
    bubbleDelay: 0.5,
  },
  {
    position: "relative",
    top: -215,
    left: 130,
    width: 25,
    height: 25,
    bubbleDelay: 0.25,
  },
  {
    position: "relative",
    top: -180,
    left: 150,
    width: 15,
    height: 15,
  },
  {
    position: "relative",
    top: -225,
    left: 170,
    width: 50,
    height: 50,
    bubbleDelay: 0.45,
  },
  {
    position: "relative",
    top: -255,
    left: 210,
    width: 30,
    height: 30,
    bubbleDelay: 0.7,
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
            animationTime={3}
          />
        ))}
      </Link>
    </div>
  );
};

export default BouncyBubbles;
