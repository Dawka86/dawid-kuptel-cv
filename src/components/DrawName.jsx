import { motion } from "framer-motion";

const textVariants = {
  hidden: { opacity: 0 },
  visible: (i) => ({
    opacity: 1,
    transition: { delay: i * 0.2 }, 
  }),
};

export default function NameTyping() {
  const name = "Dawid Kuptel"; 

  return (
    <div style={containerStyle}>
      {name.split("").map((letter, index) => (
        <motion.span
          key={index}
          custom={index}
          variants={textVariants}
          initial="hidden"
          animate="visible"
          style={textStyle}
        >
          {letter === " " ? "\u00A0" : letter} {/* Obsługa spacji */}
        </motion.span>
      ))}
    </div>
  );
}


const containerStyle = {
    display: "flex",
    justifyContent: "left",
    alignItems: "center",
    height: "10vh",
  };
  
  const textStyle = {
    fontSize: "22px", 
    fontFamily: "Arial, sans-serif",
    fontWeight: "bold",
    color: "black",
    display: "inline-block",
    marginRight: "2px",
  };