import _ from "lodash";
import React, { useEffect } from "react";
import { Alert, Snackbar } from "@mui/material";

import "./styles.css";

interface WarningProps {
  message: string;
  openSnackbar: boolean;
  setOpenSnackbar: (val: boolean) => void;
}

const Warning: React.FC<WarningProps> = ({
  message,
  openSnackbar,
  setOpenSnackbar,
}) => {
  useEffect(() => {
    if (message) {
      setOpenSnackbar(true);
    }
  }, [message]);

  if (!message) {
    return null;
  }
  return (
    <Snackbar
      open={openSnackbar}
      autoHideDuration={6000}
      onClose={() => setOpenSnackbar(false)}
      anchorOrigin={{ vertical: "top", horizontal: "center" }}
      style={{ height: 40, justifyContent: "center" }}
    >
      <Alert
        className="primary alert"
        onClose={() => setOpenSnackbar(false)}
        severity="warning"
        sx={{ "& .MuiAlert-icon": { color: "darkblue" } }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};

export default Warning;
