import React from "react";
import "./style.css";
import {
  FaGithub,
  FaTwitter,
  FaFacebookF,
  FaLinkedin,
  FaYoutube,
  FaTwitch,
} from "react-icons/fa";
import { socialprofils } from "../../content_option";

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {socialprofils.github && (
          <li>
            <a target="_blank" href={socialprofils.github} style={{paddingRight:'1rem'}}>
              <FaGithub/>
            </a>
          </li>
        )}
        {socialprofils.linkedin && (
          <li>
            <a target="_blank" href={socialprofils.linkedin} style={{paddingRight:'1rem'}}>
              <FaLinkedin/>
            </a>
          </li>
        )}
      </ul>
      <p style={{paddingRight:'1rem', fontSize:'1.2rem'}}>Follow Me</p>
    </div>
  );
};
