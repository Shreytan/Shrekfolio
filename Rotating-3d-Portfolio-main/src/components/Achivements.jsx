import { Line } from "@react-three/drei";
import React from "react";
import Lines from "./WavyLines/AWaves";

const Achievements = () => {
  return (
    <>
      <div className="achievements overlay-projects">
        <Lines />
        <div className="empty-cont"></div>
        <div className="empty-cont"></div>

        <div className="projects share-tech">
          <h1 className="title-pro">Leadership & Activities</h1>

          <p className="text-pro">
            A collection of impactful leadership roles, hackathon achievements, and community
            initiatives showcasing innovation, collaboration, and technical excellence.
          </p>

          {/* Krishi Sanyog Hackathon Project (kept as original) */}
          <div className="full-card">
            <div className="flex-div">
              <img
                src="https://res.cloudinary.com/dn07sxmaf/image/upload/v1733297732/3DPortfolio/sih_n26rwa.jpg"
                preload="auto"
                alt="Hackathon"
                className="logo-exp"
              />
              <div className="line"></div>
              <div>
                <p className="full-card-title">College Hackathon Winner – Krishi Sanyog</p>
                <p className="card-text">
                  • Built a full-stack web platform to promote sustainable farming by optimizing
                  fertilizer use through real-time soil data and AI-based recommendations. <br />
                  • Developed modules for authentication, soil data management, fertilizer and crop
                  recommendations, cost estimation, and dashboard insights. <br />
                  • Used PHP (Procedural), MySQL, and Bootstrap 5 for development, with planned
                  integration of Python ML models and Arduino-based IoT soil sensors. <br />
                  • Designed features for offline usability, data visualization, and multilingual
                  farmer support. <br />
                  • Project won a <b>college-level hackathon</b>, earned{" "}
                  <b>certificates of excellence</b>, and was{" "}
                  <b>proposed for Smart India Hackathon (SIH)</b> recognition.
                </p>
              </div>
            </div>
          </div>

          {/* E-Cell Member (no image) */}
          <div className="full-card">
            <div className="flex-div">
              <div className="line"></div>
              <div>
                <p className="full-card-title">E-Cell Member – Entrepreneurship Cell</p>
                <p className="card-text">
                  • Organized entrepreneurship workshops and hackathons, fostering a strong startup
                  culture on campus. <br />
                  • Coordinated mentorship sessions with founders and investors to encourage student
                  innovation. <br />
                  • Collaborated with cross-department teams to streamline event logistics and
                  participant experience. <br />
                  • Helped increase participation by 40% through improved outreach and engagement
                  strategies.
                </p>
              </div>
            </div>
          </div>

          {/* Competitive Programming */}
          <div className="full-card">
            <div className="flex-div">
              <img
                src="https://res.cloudinary.com/dn07sxmaf/image/upload/v1733297722/3DPortfolio/leetcode_tgwhbs.png"
                preload="auto"
                alt="Competitive Programming"
                className="dce logo-exp"
              />
              <div className="line"></div>
              <div>
                <p className="full-card-title">
                  Competitive Programming – LeetCode & HackerRank
                </p>
                <p className="card-text">
                  • Solved 380+ LeetCode problems across arrays, trees, graphs, and dynamic
                  programming. <br />
                  • Earned <b>10K+ Hackos</b> on HackerRank and achieved multiple daily streak
                  milestones. <br />
                  • Improved logical reasoning, time optimization, and code efficiency across
                  contests. <br />
                  • Profiles:{" "}
                  <a
                    href="https://leetcode.com/u/shreyansh_shukla1612/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LeetCode
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://leetcode.com/u/Shreytan/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Leetcode Profile
                  </a>
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

export default Achievements;
