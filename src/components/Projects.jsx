const project = {
  name: "Login-and-Registration",
  description:
    "This is a simple login and registration app built using React, Express, and PostgreSQL.",
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
  repository: "https://github.com/Dawka86/Login-and-Registration",
  liveDemo: "https://dawka86.github.io/Login-and-Registration/",
};

export default function ProjectList() {
  return (
    <div className="list">
      <ul className="list-group list-group-flush">
        {project.map((projec, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-start py-2"
          >
            <div className="ms-2 me-auto">
              <strong>{projec.name}</strong> – {projec.description} (
              {projec.technologies})
              <br />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
