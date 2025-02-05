import { FaGithub } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
export default function Footer() {
  return (
    <div className="container py-4 ">
      <div className="container footer">
        <a href="https://github.com/Dawka86" target="blank"><FaGithub style={{ fontSize: "35px", marginRight:"10px",  }}/></a>
        <a href="https://www.linkedin.com/in/dawid-kuptel-0178b7231/" target="blank"><CiLinkedin style={{ fontSize: "35px",  }} /></a>
      </div>
    </div>
  );
}
