import aboutImg from "../assets/about2.png";
import { ABOUT_TEXT } from "../constants";
import { motion } from "framer-motion";  // ✅ Import Framer Motion

const About = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      
      {/* Title Animation - Appears on Scroll */}
      <motion.h2 
        initial={{ opacity: 0, y: -30 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="my-20 text-center text-4xl"
      >
        About <span className="text-neutral-500">Me</span>
      </motion.h2>

      {/* Container */}
      <div className="flex flex-wrap">
        
        {/* Left Side - Image Animation (Only on Scroll) */}
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full lg:w-1/2 lg:p-8"
        >
          <div className="flex items-center justify-center">
            <img className="rounded-2xl shadow-lg" src={aboutImg} alt="about2" />
          </div>
        </motion.div>

        {/* Right Side - Text Animation (Only on Scroll) */}
        <motion.div 
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
          className="w-full lg:w-1/2"
        >
          <div className="flex justify-center lg:justify-start">
            <p className="my-2 max-w-xl py-6 text-justify">{ABOUT_TEXT}</p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};

export default About;
