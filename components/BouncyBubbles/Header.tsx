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
    <div className="banner" style={{ height: 60 }}>
      <Button
        variant="contained"
        className="button"
        onClick={() => router.push("/")}
      >
        Back
      </Button>
      <Button variant="contained" className="button" onClick={handleReset}>
        Reset
      </Button>
      <div className="switch">
        <Switch
          checked={ovalAllowed}
          onChange={() => setOvalAllowed(!ovalAllowed)}
          sx={{
            "& .MuiSwitch-thumb": { color: "darkblue" },
          }}
        />
        <div>{ovalAllowed ? "OVALS ALLOWED" : "CIRCLES ONLY"}</div>
      </div>
    </div>
  );
};

export default Header;
