import React from "react";
import { Image } from "react-bootstrap";
import me from "../images/me.jpg";

const Profile = () => {
  return (
    <div>
      {}
      <div className="photoofme">
        <Image src={me} alt="Picture of me" fluid />
      </div>
      <div>
        <a
          href="https://github.com/trashpanda20"
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
          href="resume.pdf"
          rel="noopener noreferrer"
          className="fa fa-file"
        ></a>
      </div>
    </div>
  );
};

export default Profile;
