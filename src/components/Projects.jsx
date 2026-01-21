import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const project = [
  {
    name: "Login-and-Registration",
    description: "This is a simple login and registration app.",
    technologies: [
      "React",
      "React Router",
      "Bootstrap",
      "Express.js",
      "bcrypt",
      "body-parser",
      "PostgreSQL",
      "CodeSandbox",
    ],
    repository:  "https://github.com/Dawka86/Login-and-Registration",
    liveDemo: "https://dawka86.github.io/Login-and-Registration/",
  },
  {
    name: "dawid-kuptel-cv",
    description: "The React application presents my CV in a modern, interactive form.",
    technologies: ["React","React Router","Bootstrap","Visual Studio Code", "Framer Motion","react-icons", "GSAP"],
    repository: "https://github.com/Dawka86/dawid-kuptel-cv",
    liveDemo: "",
  },
];

export default function ProjectList() {
  return (
    <div className="list">
      <ul className="list-group list-group-flush">
        {project.map((project, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-start py-2"
          >
            <div className="ms-2 me-auto">
              <strong className="project_name">{project.name}</strong> – {project.description}
              <>
                <p className="mt-2 mb-1">
                  <strong>Technologies used:</strong>
                </p>
                <ul>
                  {project.technologies.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
                <p className="mt-2 mb-1">
                  <strong>Repository:</strong>
                </p>
                <a href={project.repository} target="blank" rel="noopener noreferrer"><FaGithub className="githubIcon"/><IoIosLink className="githubIcon"/></a>
              </>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
