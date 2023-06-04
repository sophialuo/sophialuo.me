import React from "react";
import "./IntroRow.css";

const IntroRow: React.FC = () => {
  return (
    <div className="horizontal">
      <div className="me-pic-cropper">
        <img
          className="me-pic"
          src={require("../assets/images/me.jpg")}
          alt="me"
        />
      </div>
      <div className="vertical">
        <div className="name">Sophia Luo</div>
        <a href="https://www.linkedin.com/in/syluo/">
          <img
            className="linkedin"
            src={require("../assets/icons/linkedin.png")}
            alt="linkedin"
          />
        </a>
        <div>
          This is a blurb. This is a blurb. This is a blurb. This is a blurb.
          This is a blurb. This is a blurb. This is a blurb. This is a blurb.
          This is a blurb. This is a blurb. This is a blurb. This is a blurb.
          This is a blurb. This is a blurb. This is a blurb. This is a blurb.
          This is a blurb. This is a blurb. This is a blurb. This is a blurb.
        </div>
      </div>
    </div>
  );
};

export default IntroRow;
