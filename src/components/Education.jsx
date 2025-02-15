const eduction = [
  {
    institution: "Politechnika Białostocka",
    direction: `"Logistics"`,
    year: "2011 - 2012",
    titlle: "Postgraduate",
  },
  {
    institution: "Wyższa Szkoła Ekonomiczna w Białymstoku",
    direction: `"Economics"`,
    year: "2005 - 2010",
    titlle: "Master of Science in Economics",
  },
];

export default function CourseList() {
  return (
    <div className="list">
      <ul className="list-group list-group-flush">
        {eduction.map((eduction, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-start py-2"
          >
            <div className="ms-2 me-auto">
              {eduction.year} | {eduction.titlle}{" "}
              <strong> - {eduction.direction}</strong> – {eduction.institution}
              <br />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
