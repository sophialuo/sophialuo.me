import _ from "lodash";
import React from "react";
import "./styles.css";
import Image from "next/image";

const Header: React.FC = () => {
  return (
    <div className="header">
      <h1>Welcome to My Art Gallery</h1>
      <div>
        Here are a few pieces that I'm particularly proud of! Hopefully, I'll
        add more here soon.
      </div>
      <div className="see-more">
        <div>Click here to see more:</div>
        <a href="https://www.flickr.com/photos/134613954@N05/?fbclid=PAAabcKScn207bJmYBSxfh5Umy7phlvSpgeZPVTdSVCiuyn7UrzqjY-KjhhDI">
          <Image
            className="flickr"
            src="/flickr.png"
            alt="flickr"
            width="20"
            height="20"
          />
        </a>
        <a href="https://www.instagram.com/sofaluo_art/?hl=en">
          <Image src="/instagram.png" alt="instagram" width="22" height="22" />
        </a>
      </div>
    </div>
  );
};

export default Header;
