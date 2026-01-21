import { motion } from "motion/react";

export default function Rotate(props) {
  const ball = {
    width: 100,
    height: 60,
    backgroundImage: "linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)",
    borderRadius: 5,
    marginRight: 15,
    marginBottom: 0,
    display: "flex",
    alignItems: "center",  
    justifyContent: "center",
    color: "white", 
    fontWeight: "bold",
    fontSize: "18px",
    textAlign: "center",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)"
  };
  return (
    <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.4,
                scale: { type: "spring", visualDuration: 0.5, bounce: 0.7 },
            }}
            style={ball}
       
    >{props.name}</motion.div>
  );
}
