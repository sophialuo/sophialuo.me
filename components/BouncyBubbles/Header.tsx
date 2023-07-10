import _ from "lodash";
import React from "react";
import { Button, Switch } from "@mui/material";
import { useRouter } from "next/navigation";

import "./styles.css";

interface HeaderProps {
  handleReset: () => void;
  ovalAllowed: boolean;
  setOvalAllowed: (val: boolean) => void;
}

const Header: React.FC<HeaderProps> = ({
  handleReset,
  ovalAllowed,
  setOvalAllowed,
}) => {
  const router = useRouter();

  return (
    <div className="secondary banner">
      <Button
        variant="contained"
        className="primary button"
        onClick={() => router.push("/")}
      >
        Back
      </Button>
      <Button
        variant="contained"
        className="primary button"
        onClick={handleReset}
      >
        Reset
      </Button>
      <div className="primary switch">
        <Switch
          checked={ovalAllowed}
          onChange={() => setOvalAllowed(!ovalAllowed)}
          sx={{
            "& .MuiSwitch-thumb": { color: "darkblue" },
          }}
        />
        <div>{ovalAllowed ? "OVALS ALLOWED" : "CIRCLES ONLY"}</div>
      </div>
      <div className="instructions">Click and drag to create bubbles!</div>
    </div>
  );
};

export default Header;
