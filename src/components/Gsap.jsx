import QR from "./QR";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function GsapAnime() {
  gsap.registerPlugin(useGSAP);
  const container = useRef(null);
  useGSAP(
    () => {
      // gsap code here...
      gsap.from(container.current, { y: -100, duration: 2, ease: "bounce.out", opacity: 0, rotateZ: 100, }); 
    },
    { scope: container }
  ); 
  return (
    <div ref={container}>
      <QR />
    </div>
  );
}
