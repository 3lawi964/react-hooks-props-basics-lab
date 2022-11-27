import React from "react";
import Links from "./Links";
import user from "../data/user";

function About({ bio }) {
  // let bioCheck;
  // if (bio) {
  //   bioCheck = bio;
  // } else {
  //   bioCheck = "";
  // }
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* <p>{bioCheck}</p> */}
      {bio ? <p>{bio}</p> : ""}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links linkedin={user.links.linkedin} github={user.links.github} />
    </div>
  );
}

export default About;
