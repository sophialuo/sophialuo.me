"use client";

import _ from "lodash";
import React, { useState } from "react";
import "./styles.css";
import ExpandedButton from "./ExpandedButton";
import CollapsedButton from "./CollapsedButton";
import Bracket from "./Bracket";

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
          <CollapsedButton setExpanded={setExpanded} />
          <span className="color-1">{`${
            isArray ? "[ ... ]" : "{ ... }"
          }`}</span>
        </>
      )}
      {expanded && (
        <>
          <span>
            <ExpandedButton setExpanded={setExpanded} />
          </span>
          <Bracket open={true} isHardBracket={isArray ?? false} />
          <div className="tabbed">
            {Object.keys(data).map((key) => {
              const value = data[key];

              if (typeof value === "object") {
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
                    <span
                      className={
                        typeof value === "string" ? "color-2" : "color-3"
                      }
                    >
                      {typeof value === "string" ? withQuotes(value) : value}
                    </span>
                  </div>
                );
              }
            })}
          </div>
          <Bracket open={false} isHardBracket={isArray ?? false} />
        </>
      )}
    </>
  );
};

export default JSONObj;
