import { useState } from "react";

const AboutMe = () => {
  const [info] = useState([
    {
      head: "Jefferson Resurreccion",
      body: "Inspiring Front End Developer",
      id: 1,
    },
    {
      head: "Programming Language Skills Acquired",
      body: "HTML, CSS, JS",
      id: 2,
    },
    { head: "Currently Study", body: "ES6, REACT, REDUX", id: 3 },
    { head: "Date of Writing", body: "11 / 13 / 2022", id: 4 },
  ]);

  return (
    <div className="about-me">
      {info.map((infos) => (
        <div className="info-preview" key={infos.id}>
          <h2 className="state-head">{infos.head}</h2>
          <p className="state-body">{infos.body}</p>
        </div>
      ))}
    </div>
  );
};

export default AboutMe;
