import React from "react";
// import { Dropdown, DropdownButton } from "react-bootstrap";
import { BsFillBriefcaseFill, BsStopwatchFill } from "react-icons/bs";

import { listExperience } from "./DummyExperience";

const Experience = () => {
  return (
    <section className="listExperience">
      {listExperience.map((exp) => (
        <div key={exp.no} className="experienceItem">
          <div className="wrapperCompany">
            <BsFillBriefcaseFill className="iconExperience" />
            <h1 className="namaPerusahaan">{exp.namaPerusahaan}</h1>
          </div>
          <div className="detail">
            <div className="tahun">
              <BsStopwatchFill className="icon" />
              {exp.tahun}
            </div>
            <div className="jobdesk">
              <ol>
                {exp.jobdesk.map((task, idx) => (
                  <li key={idx}>{task}</li>
                ))}
              </ol>
            </div>
            <br />
            <div className="gallery"><span>SKILLS : </span>{exp.gallery}</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Experience;
