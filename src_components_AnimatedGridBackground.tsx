import { motion } from "framer-motion";

export default function AnimatedGridBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-[#f6f8fc]">
      {/* Base soft gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f6f8fc] to-[#eef2f9]" />

      {/* Animated grid layer */}
      <motion.div
        className="absolute inset-0 opacity-[0.25]"
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(30,58,138,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(30,58,138,0.08) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Soft floating glow (AI energy feel) */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full blur-[120px] opacity-30"
        style={{
          background: "radial-gradient(circle, rgba(30,58,138,0.35), transparent 60%)",
        }}
        animate={{
          x: ["10%", "30%", "10%"],
          y: ["10%", "40%", "10%"],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}