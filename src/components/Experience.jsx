import { EXPERIENCES } from "../constants";
import { motion } from "framer-motion";  // ✅ Import Framer Motion

const Experience = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      
      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
        className="my-20 text-center text-4xl"
      >
        Experience
      </motion.h2>

      {/* Experience List */}
      <div>
        {EXPERIENCES.map((experience, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.2 }}
            className="mb-8 flex flex-wrap lg:justify-center"
          >
            
            {/* Year Section */}
            <div className="w-full lg:w-1/4">
              <p className="mb-2 text-sm text-neutral-400">{experience.year}</p>
            </div>

            {/* Role & Description Section */}
            <div className="w-full max-w-xl lg:w-3/4">
              <h6 className="mb-2 font-semibold">
                {experience.role} - <span className="text-sm text-purple-100">{experience.company}</span>  
              </h6>
              <p className="mb-4 text-neutral-400 text-justify">{experience.description}</p>

              {/* Technologies Section with Hover Effect */}
              <div className="flex flex-wrap gap-2">
                {experience.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.2 }}
                    className="rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-purple-400"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
