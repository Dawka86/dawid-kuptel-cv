import "./App.css";
import SkillList from "./components/SkillList";
import CourseList from "./components/CourseList";
import Rotate from "./components/RotatePoints";
import Footer from "./components/Footer";
import ProjectList from "./components/Projects";
import EducationList from "./components/Education";
import NameDrawing from "./components/DrawName";
import QR from "./components/QR";
import GsapAnime from "./components/Gsap";

export default function App() {
  return (
    <div className="main-container">
      <div className="container py-4 ">
        <header>
          <NameDrawing />
        </header>

        <div className="p-5 mb-4 main-tiles rounded-3 shadow-lg">
          <div className="container py-5">
            <h1 className="display-5 fw-bold">Frontend Developer</h1>
            <div className="row">
              <div className="col-md-6 fs-4">
                I am a beginner frontend developer with a passion for creating
                modern web applications. I am independently developing my skills
                by working on personal projects in React, JavaScript, and
                Node.js. I am looking for my first professional experience that
                will allow me to continue growing and gain practical skills.
              </div>
              <div className="col-md-6 fs-4 text-center">
                <div className="qr-section">
                  <p>Scan to see all my projects. </p>
                  <GsapAnime />
                </div>

                <img
                  src="./pictures/moje.png"
                  className="my_photo"
                  alt="My photo"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 main-tiles rounded-3 shadow-lg">
              <section>
                <h2 className="skills-header">
                  <span>
                    <Rotate name="Skills" />
                  </span>
                </h2>
              </section>
              <p>
                <SkillList />
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 main-tiles rounded-3 shadow-lg">
              <section>
                <h2 className="skills-header">
                  <span>
                    <Rotate name="Courses" />
                  </span>
                </h2>
              </section>
              <p>
                <CourseList />
              </p>
            </div>
          </div>
        </div>
        <div className="row align-items-md-stretch mt-4">
          <div className="col-md-6">
            <div className="h-100 p-5 main-tiles rounded-3 shadow-lg">
              <section>
                <h2 className="skills-header">
                  <span>
                    <Rotate name="Projects" />
                  </span>
                </h2>
              </section>
              <p>
                <ProjectList />
              </p>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 main-tiles rounded-3 shadow-lg">
              <section>
                <h2 className="skills-header">
                  <span>
                    <Rotate name="Education" />
                  </span>
                </h2>
              </section>
              <p>
                <EducationList />
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
