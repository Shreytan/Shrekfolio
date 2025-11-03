import { useEffect } from "react";
import DigitalRain from "./DigitalRain";

const Projects = () => {
  return (
    <div className="projects-container relative w-full min-h-screen overflow-hidden">
      {/* Digital Rain Background */}
      <DigitalRain />

      {/* Projects Content */}
      <div className="projects-content relative z-10 px-6 py-20">
        <div className="projects text-center max-w-6xl mx-auto">
          <h1 className="title-pro share-tech text-4xl font-bold mb-6">Projects</h1>
          <p className="text-pro share-tech text-gray-200 leading-relaxed mb-12 max-w-3xl mx-auto">
            A glimpse into my favorite projects that combine creativity, code, and problem-solving.
            Each one taught me something new — from building scalable APIs to crafting intuitive UIs.
          </p>

          {/* Cards Grid */}
          <div className="cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 justify-items-center">
            {projectsData.map((project, index) => (
              <div
                key={index}
                className="card bg-black/70 border border-green-400 rounded-2xl overflow-hidden shadow-[0_0_25px_rgba(0,255,100,0.2)] hover:shadow-[0_0_35px_rgba(0,255,100,0.4)] transition-all duration-300 transform hover:-translate-y-2 w-full max-w-md"
              >
                <div className="screen">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-56 object-cover rounded-t-2xl"
                  />
                </div>

                <div className="screen-content p-6 text-left">
                  <p className="card-title share-tech text-xl font-semibold text-green-400 mb-3">
                    {project.title}
                  </p>
                  <p className="card-text share-tech text-gray-300 text-sm leading-relaxed mb-5">
                    {project.description}
                  </p>
                  <div className="button-group flex justify-start gap-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-btn bg-green-400 text-black font-semibold px-4 py-2 rounded-lg hover:bg-white hover:text-black transition"
                    >
                      Live
                    </a>
                    <a
                      href={project.git}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="live-btn git-btn bg-transparent border border-green-400 text-green-400 font-semibold px-4 py-2 rounded-lg hover:bg-green-400 hover:text-black transition"
                    >
                      Git
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="empty-cont-transparent h-24"></div>
        </div>
      </div>
    </div>
  );
};

// Shortened project descriptions
const projectsData = [
  {
    image: "https://res.cloudinary.com/dn07sxmaf/image/upload/v1731676049/3DPortfolio/web_h2ahod.gif",
    title: "Slack Connect — Advanced Messaging Platform",
    description:
      "Built a Slack-integrated messaging system with OAuth 2.0, scheduled sends, and delivery tracking. Optimized PostgreSQL and APIs.",
    live: "https://cobalt-slack-assessment.netlify.app/",
    git: "https://cobalt-slack-assessment.netlify.app/",
  },
  {
    image: "https://res.cloudinary.com/dn07sxmaf/image/upload/v1731676049/3DPortfolio/web_h2ahod.gif",
    title: "Decentralized Data Marketplace",
    description:
      "Developed a blockchain-powered platform for secure, tokenized data trading using Solidity, Web3.js, and MongoDB backend.",
    live: "https://my-marketplace-app.netlify.app/",
    git: "https://my-marketplace-app.netlify.app/",
  },
  {
    image: "https://res.cloudinary.com/dn07sxmaf/image/upload/v1731674569/3DPortfolio/terminal_mj4qmw.gif",
    title: "Social Media Analyzer",
    description:
      "AI-based analytics dashboard using Flask, React, and NLP for sentiment, engagement, and keyword insights in real time.",
    live: "https://social-media-analyzer-2e1wzn14o.vercel.app/",
    git: "https://github.com/Shreytan/Social-Media-Analyzer",
  },
  {
    image: "https://res.cloudinary.com/dn07sxmaf/image/upload/v1731674569/3DPortfolio/terminal_mj4qmw.gif",
    title: "Intern Portal — Hacktoberfest Project",
    description:
      "Led a 5-member team and 46 contributors to enhance an open-source intern portal with better auth, automation, and performance.",
    live: "https://github.com/Shreytan/intern-portal",
    git: "https://github.com/Shreytan/intern-portal",
  },
];

export default Projects;
