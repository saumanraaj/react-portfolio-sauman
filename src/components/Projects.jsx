import { PROJECTS } from "../constants";
import { motion } from "framer-motion";  // ✅ Import Framer Motion

const Projects = () => {
  return (
    <div className="border-b border-neutral-900 pb-12">
      
      {/* Title Animation */}
      <motion.h2
        initial={{ opacity: 0, y: -30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true, amount: 0.2 }}
        className="my-20 text-center text-4xl text-neutral-200"
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {PROJECTS.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.15, ease: "easeInOut" }}  // ✅ Faster stagger effect
            viewport={{ once: true, amount: 0.2 }}
            whileHover={{ scale: 1.02 }}  // ✅ Smooth hover effect
            className="rounded-lg border border-neutral-800 p-6 bg-neutral-950 shadow-lg hover:shadow-purple-500/50 transition-all duration-150 will-change-transform"
          >
            
            {/* Project Image */}
            <div className="overflow-hidden rounded-lg">
              <motion.img 
                src={project.image} 
                alt={project.title} 
                whileHover={{ scale: 1.05 }}  // ✅ Slight zoom-in for snappy effect
                transition={{ duration: 0.15, ease: "linear" }}  // ✅ Quick image response
                className="w-full h-52 object-cover rounded-lg transition-all duration-150"
              />
            </div>

            {/* Project Title */}
            <h3 className="mt-4 text-2xl font-semibold text-purple-400">{project.title}</h3>

            {/* Project Description */}
            <p className="mt-2 text-neutral-400 text-justify">{project.description}</p>

            {/* Technologies Used */}
            <div className="mt-4 flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <motion.span 
                  key={index} 
                  whileHover={{ scale: 1.08 }}  // ✅ Slight pop on hover
                  transition={{ duration: 0.1, ease: "linear" }}  // ✅ Fast hover effect
                  className="rounded bg-neutral-800 px-3 py-1 text-sm font-medium text-purple-300"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
