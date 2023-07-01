"use client";

import _ from "lodash";
import React, { useState, useMemo } from "react";
import { TextField } from "@mui/material";
import "./styles.css";
import Link from "next/link";

interface JSONViewerProps {}

const isValidJson = (json: string) => {
  try {
    const parsedJson = JSON.parse(json);
    if (parsedJson && typeof parsedJson === "object") {
      return true;
    }
  } catch (e) {}
  return false;
};

const JSONObj: React.FC<{ data: any }> = ({ data }) => {
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <>
      {!expanded && (
        <>
          <button onClick={() => setExpanded(true)}>{"▶"}</button>
          <span>{"{ ... }"}</span>
        </>
      )}
      {expanded && (
        <>
          <span>
            <button onClick={() => setExpanded(false)}>{"▼"}</button>
          </span>
          <span>{"{"}</span>
          <div className="tabbed">
            {Object.keys(data).map((key) => {
              const value = data[key];
              if (typeof value === "string") {
                return <div>{`${key}: "${value}"`}</div>;
              } else if (typeof value === "object") {
                return (
                  <div>
                    {`${key}: `}
                    <JSONObj data={value} />
                  </div>
                );
              } else {
                return <div>{`${key}: ${value}`}</div>;
              }
            })}
          </div>
          <div>{"}"}</div>
        </>
      )}
    </>
  );
};

const JSONViewer: React.FC<JSONViewerProps> = () => {
  const [json, setJson] = useState<string>("");
  const isValid = useMemo(() => isValidJson(json), [json]);

  return (
    <div className="json-viewer-container">
      <Link href="/">Back</Link>
      <h1>JSON Viewer</h1>

      <div>
        <h2>Copy and paste your JSON here</h2>
        <TextField
          className="json-text-input"
          value={json}
          onChange={(e) => setJson(e.target.value)}
          error={!isValid}
          helperText={"Please input a valid JSON"}
        />
        {isValid && <div>{<JSONObj data={JSON.parse(json)} />}</div>}
      </div>
    </div>
  );
};

export default JSONViewer;
