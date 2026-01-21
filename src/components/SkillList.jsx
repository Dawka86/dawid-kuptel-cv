const skills = {
  frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "React.js","GSAP (basic)","Angular"],
  backend: ["Express.js", "Node.js"],
  database: ["PostgreSQL"],
  tools: ["Git", "VS Code","Figma - (Basic)", "CodeSandbox"]
};

export default function SkillList() {
  return (
    <div className="list">
      <ul className="list-group list-group-flush">
        {Object.entries(skills).map(([category, items]) => (
          <li key={category} className="list-group-item d-flex justify-content-between align-items-start py-2">
            <div className="ms-2 me-auto">
              <strong>{category.charAt(0).toUpperCase() + category.slice(1)}</strong>:
              <ul>
                {items.map((skill, index) => (
                  <li key={index}>{skill}</li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}