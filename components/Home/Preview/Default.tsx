import React from "react";
import _ from "lodash";
import { useRouter } from "next/navigation";
import "./styles.css";

const Default: React.FC<{
  itemProps?: { path: string; name: string };
}> = ({ itemProps }) => {
  const router = useRouter();

  return (
    <div className="preview-container">
      <div
        className="coming-soon-block"
        onClick={() => {
          if (itemProps?.path) {
            router.push(itemProps.path);
          }
        }}
      >
        {itemProps?.name ?? "Coming Soon"}
      </div>
    </div>
  );
};

export default Default;
