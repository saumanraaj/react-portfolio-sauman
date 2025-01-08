import { HERO_CONTENT } from "../constants";
import profilePic from "../assets/pp2.png";
import { motion } from "framer-motion";  // ✅ Import Framer Motion

const Hero = () => {
  return (
    <motion.div 
      className="border-b border-neutral-900 pb-4 lg:b-35"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="flex flex-wrap items-center">
        
        {/* Left Side - Text Content */}
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            
            {/* Animated Name */}
            <motion.h1 
              initial={{ x: -100, opacity: 0 }}  
              whileInView={{ x: 0, opacity: 1 }}   
              transition={{ duration: 0.8, ease: "easeOut" }}  
              viewport={{ once: true, amount: 0.2 }}  
              whileHover={{ y: -5, scale: 1.05 }}  
              className="pb-16 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl"
            >
              Sauman Raaj
            </motion.h1>

            {/* Role Title */}
            <motion.span 
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent hover:text-purple-400 transition duration-300"
            >
              Robotics Engineer
            </motion.span>

            {/* Hero Content */}
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true, amount: 0.2 }}
              className="my-2 max-w-xl py-6 font-light tracking-tighter text-justify"
            >
              {HERO_CONTENT}
            </motion.p>
          </div>
        </div>

        {/* Right Side - Enlarged Profile Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:p-10">
          <motion.img 
            src={profilePic} 
            alt="Sauman Raaj"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.05, rotate: 2 }}  
            className="rounded-2xl w-64 lg:w-80 h-64 lg:h-80 object-cover shadow-lg"
          />
        </div>

      </div>
    </motion.div>
  );
};

export default Hero;
