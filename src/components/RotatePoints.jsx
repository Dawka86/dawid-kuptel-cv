import { motion } from "motion/react";

export default function Rotate() {
  const ball = {
    width: 100,
    height: 60,
    backgroundColor: "#dd00ee",
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
       
    >Skills</motion.div>
  );
}
