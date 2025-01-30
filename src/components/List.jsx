export default function List() {
  return (
    <>
      <div className="list">
        <ul className="list-group list-group-flush">
          <li className="list-group-item d-flex justify-content-between align-items-start py-2">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Frontend:</div>
              <ul className="m-0 ps-3 pb-3">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript (ES6+)</li>
                <li>React.js</li>
                <li>Bootstrap</li>
                <li>React Router</li>
              </ul>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start py-2">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Backend:</div>
              <ul className="m-0 ps-3 pb-3">
                <li>Express.js</li>
                <li>bcrypt</li>
                <li>body-parser</li>
              </ul>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start py-2">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Database:</div>
              <ul className="m-0 ps-3 pb-3">
                <li>PostgreSQL</li>
              </ul>
            </div>
          </li>
          <li className="list-group-item d-flex justify-content-between align-items-start py-2">
            <div className="ms-2 me-auto">
              <div className="fw-bold">Tools & Deployment:</div>
              <ul className="m-0 ps-3 pb-3">
                <li>GitHub</li>
                <li>VS Code</li>
                <li>CodeSandbox</li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}
