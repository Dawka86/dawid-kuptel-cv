import { PiCertificateLight } from "react-icons/pi";

const courses = [
    {
        title:`"The Complete Full-Stack Web Development Bootcamp"`,
        institution:"",
        paltforma:"Udemy",
        link:"https://www.udemy.com/certificate/UC-a961e4dd-56c4-4dff-b493-e4e675f369ef/",
    },
    {
        title:`"Website Design"`,
        institution:"Akademia Ekonomiczno-Humanistyczna w Warszawie",
        paltforma:"Navoica",
        link:"https://navoica.pl/certificates/eb3c31bdc5ad4ff0a846ead8f71932a7",
    },
    {   title:`"JavaScript Programming Basics"`,
        institution:"Uniwersytet Szczeciński",
        paltforma:"Navoica",
        link:"https://navoica.pl/certificates/9b6aa671a332408fa463434f653d654a",

    },
    {   title:`"Angular - The Complete Guide"`,
      institution:"",
      paltforma:"Udemy",
      link:"Currently learning",

  }
];

export default function CourseList() {
    return (
      <div className="list">
        <ul className="list-group list-group-flush">
          {courses.map((course, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-start py-2">
              <div className="ms-2 me-auto">
                <strong>{course.title}</strong> – {course.institution} ({course.paltforma})  
                <br />
                <PiCertificateLight style={{fontSize:"25px"}}/> <a href={course.link} target="_blank" rel="noopener noreferrer">Certificate</a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
