export default function Skills({title, skills}) {
  return (
    <div>
      <div className="fw-bold">{title}:</div>
      <ul className="m-0 ps-3 pb-3">
       {skills.map((skill, index) =>(
        <li key={index}>{skill}</li>
       ))}
      </ul>
    </div>
  );
}
