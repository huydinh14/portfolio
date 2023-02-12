import React from "react";
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience_container">
        <div className="experience_fonend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail-icon"/>
              <div>
                <h4>HTLM</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail-icon"/>
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail-icon"/>
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail-icon"/>
              <div>
                <h4>.Net</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail-icon"/>
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience-backend">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail-icon"/>
              <div>
                <h4>C#</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail-icon"/>
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail-icon"/>
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail-icon"/>
              <div>
                <h4>SQL Server</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience_detail">
              <BsPatchCheckFill className="experience_detail-icon"/>
              <div>
                <h4>MySQL</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
