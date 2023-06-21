import Image from "next/image";

import React from "react";
import "./IntroRow.css";

const IntroRow: React.FC = () => {
  return (
    <div className="horizontal">
      <div className="me-pic-cropper">
        <Image src="/me.jpg" alt="me" width="380" height="380" />
      </div>
      <div className="vertical">
        <div className="name">Sophia Luo</div>
        <a href="https://www.linkedin.com/in/syluo/">
          <Image
            className="linkedin"
            src="/linkedin.png"
            alt="linkedin"
            width="20"
            height="20"
          />
        </a>
        <p>
          Hello! I'm a product manager and software engineering hybrid based in
          San Francisco, California. At the workplace, I am also involved in
          recruiting and event planning. In another life, I might have been a
          visual artist. Other hobbies I enjoy include learning Japanese,
          playing chess (especially bullet and bughouse), playing tractor, going
          to Barry's, dancing, listening to EDM, and consuming boba.
        </p>
      </div>
    </div>
  );
};

export default IntroRow;
