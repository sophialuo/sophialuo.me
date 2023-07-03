"use client";

import _ from "lodash";
import React, { useState, useMemo } from "react";
import { Button, TextField } from "@mui/material";
import "./styles.css";
import Link from "next/link";
import JSONObj from "./JSONObj";
import { SAMPLE_JSONS } from "./constants";

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

const JSONViewer: React.FC<JSONViewerProps> = () => {
  const [json, setJson] = useState<string>(SAMPLE_JSONS["Deeply Nested"]);
  const isValid = useMemo(() => isValidJson(json), [json]);

  return (
    <div className="json-viewer-container">
      <Link href="/">Back</Link>
      <h1>JSON Viewer</h1>
      <div className="aside-text">
        {"(I thought this was a pretty fun recursive component exercise)"}
      </div>
      <div className="json-viewer-content">
        <h2>Copy and paste your JSON here</h2>

        <div className="sample-json-container">
          <span className="bolded">Sample JSONs: </span>
          <span className="sample-json-buttons">
            {Object.keys(SAMPLE_JSONS).map((jsonName) => {
              return (
                <button
                  className="sample-json-button"
                  onClick={() => setJson(SAMPLE_JSONS[jsonName])}
                >
                  {jsonName}
                </button>
              );
            })}
          </span>
        </div>
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
