import React from 'react';
import Lines from './WavyLines/AWaves';

const Experience = () => {
  return (
    <>
      <div className="experience overlay-projects">
        <div className="empty-cont"></div>
        <div className="empty-cont"></div>
        <Lines />

        <div className="projects">
          <div className="empty-cont"></div>
          <h1 className="title-pro share-tech">EXPERIENCE</h1>
          <p className="text-pro share-tech">
            A glimpse into my professional journey — working with scalable backends, intuitive UIs,
            and collaborative Agile environments to deliver impactful software solutions.
          </p>

          {/* dsaStats Internship */}
          <div className="full-card">
            <div className="flex-div">
              <img
                src="https://res.cloudinary.com/di7vwjgbq/image/upload/v1762190748/dsaStatsLogo_omdoqk.png"
                preload="auto"
                alt="dsaStats"
                className="logo-exp"
              />
              <div className="line"></div>
              <div>
                <p className="full-card-title share-tech">dsaStats</p>
                <p className="role share-tech">Full Stack Developer Intern</p>
                <p className="role share-tech">Aug 2024 – Jan 2025 | Remote</p>
                <p className="card-text share-tech">
                  • Built REST APIs in Node.js/Express with MongoDB; reduced latency by 20% using
                  indexes and lean queries. <br />
                  • Developed responsive React UI with reusable components, boosting task completion
                  by 15%. <br />
                  • Implemented request validation, error handling, logging, and integration tests
                  ensuring zero major regressions. <br />
                  • Collaborated in Agile sprints; ranked in <b>Top 3 interns</b> for code quality
                  and reliability.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="empty-cont"></div>
      </div>
    </>
  );
};

export default Experience;
