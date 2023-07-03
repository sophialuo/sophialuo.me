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

const isValidArray = (json: string) => Array.isArray(json);

const withQuotes = (value: string) => `"${value}"`;

const JSONObj: React.FC<{ data: any; isArray?: boolean }> = ({
  data,
  isArray,
}) => {
  const [expanded, setExpanded] = useState<boolean>(true);

  return (
    <>
      {!expanded && (
        <>
          <button
            className="json-button color-1"
            onClick={() => setExpanded(true)}
          >
            {"▶"}
          </button>
          <span className="color-1">{`${
            isArray ? "[ ... ]" : "{ ... }"
          }`}</span>
        </>
      )}
      {expanded && (
        <>
          <span>
            <button
              className="json-button color-1"
              onClick={() => setExpanded(false)}
            >
              {"▼"}
            </button>
          </span>
          <span className="color-1">{`${isArray ? "[" : "{"}`}</span>
          <div className="tabbed">
            {Object.keys(data).map((key) => {
              const value = data[key];
              if (typeof value === "string") {
                return (
                  <div>
                    <span className="bolded">
                      {`${isArray ? withQuotes(key) : key}: `}
                    </span>
                    <span className="color-2"> {withQuotes(value)}</span>
                  </div>
                );
              } else if (typeof value === "object") {
                return (
                  <div>
                    <span className="bolded">{`${
                      isArray ? withQuotes(key) : key
                    }: `}</span>
                    <JSONObj data={value} isArray={isValidArray(value)} />
                  </div>
                );
              } else {
                return (
                  <div>
                    <span className="bolded">
                      {`${isArray ? withQuotes(key) : key}: `}
                    </span>
                    <span className="color-3"> {`${value}`}</span>
                  </div>
                );
              }
            })}
          </div>
          <div className="color-1">{`${isArray ? "]" : "}"}`}</div>
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
      <div className="json-viewer-content">
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
