import { SiPython, SiRos, SiTensorflow, SiOpencv, SiDassaultsystemes, SiAutodesk, SiRaspberrypi } from "react-icons/si";
import { motion } from "framer-motion";  // ✅ Import Framer Motion

const techStack = [
  { icon: SiPython, name: "Python", color: "text-cyan-400 hover:text-cyan-300" },
  { icon: SiRos, name: "ROS & ROS2", color: "text-white hover:text-gray-400" },
  { icon: SiTensorflow, name: "TensorFlow", color: "text-yellow-800 hover:text-yellow-600" },
  { icon: SiOpencv, name: "OpenCV", color: "text-[#5C3EE8] hover:text-[#8366E8]" },
  { icon: SiDassaultsystemes, name: "SolidWorks", color: "text-red-800 hover:text-red-600" },
  { icon: SiAutodesk, name: "Rapid Prototyping", color: "text-orange-500 hover:text-orange-300" },
  { icon: SiRaspberrypi, name: "Raspberry Pi", color: "text-[#C51A4A] hover:text-[#E75480]" },
];

const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
      
      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="my-20 text-center text-4xl text-neutral-200"
      >
        Technologies
      </motion.h2>

      {/* Tech Stack */}
      <div className="flex flex-wrap items-center justify-center gap-8">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ y: -10, scale: 1.1 }}  // ✅ Floating effect on hover
            transition={{ duration: 0.3, type: "spring", stiffness: 200 }}
            viewport={{ once: true, amount: 0.2 }}
            className="flex flex-col items-center space-y-2"
          >
            <div className="rounded-2xl border-4 border-neutral-800 p-6">
              <tech.icon className={`text-7xl transition duration-300 ${tech.color}`} />
            </div>
            <p className="text-white text-lg">{tech.name}</p>
          </motion.div>
        ))}
      </div>

    </div>
  );
};

export default Technologies;
