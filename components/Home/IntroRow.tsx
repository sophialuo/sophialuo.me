import Image from "next/image";
import ReactMarkdown from "react-markdown";
import React from "react";
import "./IntroRow.css";

const IntroRow: React.FC = () => {
  return (
    <div className="horizontal">
      <Image src="/me.png" alt="me" width="380" height="350" />
      <div className="vertical">
        <div className="name">Sophia Luo</div>
        <ReactMarkdown>
          {`Hello! I'm a software engineer and product manager hybrid based in San Francisco, California. After graduating from MIT with a B.S. in Computer Science, a B.S. in Mathematical Economics, and M. Eng in Computer Science (all in 4 years!), I started my career at [Scale AI](https://scale.com/) as an engineer. Here are a few highlights: 

- [Scale Catalog](https://scale.com/catalog) : founding engineer, transitioned to PM 
- [Scale Rapid](https://scale.com/rapid): founding PM, engineering hybrid
- [Scale Generative AI Data Engine](https://scale.com/rlhf): founding PM, engineering hybrid
- University Recruiting: hiring manager for two cohorts of software engineering new grads and interns

Feel free to check out my [LinkedIn](https://www.linkedin.com/in/syluo/) for more details on what I do. 

I also like to do some non-work things. In another life, I might have been a visual artist. Other hobbies I enjoy include learning Japanese, playing chess (especially bullet and bughouse), playing tractor, going to Barry's, dancing, listening to EDM, and consuming boba.`}
        </ReactMarkdown>
        <p className="bio"></p>
      </div>
    </div>
  );
};

export default IntroRow;
