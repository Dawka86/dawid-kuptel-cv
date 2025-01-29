import { motion } from "motion/react";

export default function Rotate() {
    const box = {
        width: 40,
        height: 40,
        backgroundColor: "#ff0088",
        borderRadius: 5,
        margin: 10,
    }
  return (
    <motion.div
    style={box}
    animate={{ rotate: 360 }}
    transition={{ duration: 3 }}
    />
  );
}
