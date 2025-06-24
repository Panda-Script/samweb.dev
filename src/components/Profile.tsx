import React from "react";
import { Image } from "react-bootstrap";
import me from "../images/me.jpg";
import resume from "../images/SamWoodall_Resume.pdf";

const Profile = () => {
  return (
    <div>
      {}
      <div className="photoofme">
        <Image src={me} alt="Picture of me" fluid />
      </div>
      <div>
        <a
          href="https://github.com/Panda-Script"
          target="_blank"
          rel="noopener noreferrer"
          className="fa fa-github"
        ></a>
        <a
          href="mailto:swoodall121@gmail.com"
          rel="noopener noreferrer"
          className="fa fa-envelope"
        ></a>
        <a
          href="resume"
          rel="noopener noreferrer"
          className="fa fa-file"
        ></a>
      </div>
    </div>
  );
};

export default Profile;
