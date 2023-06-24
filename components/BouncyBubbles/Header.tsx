import _ from "lodash";
import React from "react";
import { Button, Switch } from "@mui/material";

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
  return (
    <div className="banner" style={{ height: 60 }}>
      <Button
        variant="contained"
        className="reset-button"
        onClick={handleReset}
      >
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
