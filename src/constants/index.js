import project1 from "../assets/projects/p1.jpeg";
import project2 from "../assets/projects/p2.jpeg";
import project3 from "../assets/projects/p3.jpeg";
import project4 from "../assets/projects/p4.jpeg";
import project5 from "../assets/projects/project-1.jpg";
export const HERO_CONTENT = `Hi, I'm Sauman Raaj, Robotics Engineer & AI Enthusiast
Passionate about designing intelligent robotic systems, I specialize in Human-Robot Interaction, Machine Learning, and Control Systems. My focus is on building autonomous, real-time decision-making robots that bridge the gap between AI and the physical world.
`;

export const ABOUT_TEXT = ` I'm a Master's student in Robotics & Autonomous Systems at Boston University, exploring the intersection of AI, robotics, and real-world applications. My expertise spans Machine Learning, Deep Learning, Control Systems, and Embedded Electronics. 

With hands-on experience in ROS, Python, CAD Design, Neural Networks, and Multi-Agent Systems, I strive to develop innovative robotic solutions that enhance human-robot collaboration.

Currently, I’m working on LLM-powered mobile robot control and have fine-tuned models like Llama 3 for real-time decision-making. My projects include autonomous surveillance bots, smart package delivery systems, and underwater robotics solutions.
`;

export const EXPERIENCES = [
  {
    year: "Jul 2023 - Apr 2024",
    role: "Technical Director of Projects",
    company: "CEG TECH FORUM",
    description: `Led a team of over 150 students at CEG Tech Forum, a UNESCO-patronaged organization, managing 14 multidisciplinary projects spanning robotics, CAD design, embedded systems, AI, and automation. Played a key role in organizing KURUKSHETRA, an international techno-management fest, while promoting hands-on, project-based learning in engineering. This experience strengthened my leadership, problem-solving, and technical expertise, enabling me to drive innovation and foster collaboration across diverse technological domains.`,
    technologies: ["Robotics", "Project Management", "CAD", "Machine Learning","Embedded Systems & IoT","Cross-Disciplinary Collaboration"],
  },
  {
    year: "Jul 2022 - Aug 2022",
    role: "Intern Trainee",
    company: "Caterpillar Inc.",
    description: `At Caterpillar, I applied Lean methodologies, including Six Sigma, to optimize manufacturing processes, reducing assembly inefficiencies by 30%. I implemented defect analysis techniques to enhance quality control, cutting assembly errors by 50% and significantly improving efficiency. Additionally, I gained hands-on experience with industrial robots like SCARA, doubling automation efficiency in production operations.`,
    technologies: ["Industrial automations", "Lean methods","Data-Driven Decision Making", "Mechanical Systems & Assembly Line Optimization"],
  },
];

export const PROJECTS = [
  {
    title: "LocusEdge - Offline LLM-Controlled Mobile Robot",
    image: project4,
    description:
      "Developed an autonomous mobile robot that operates entirely offline using fine-tuned, quantized LLMs. Integrated Whisper for speech-to-text conversion, LLaMA 3 for parsing natural language commands, and ROS for executing real-time navigation. Optimized motion planning algorithms, achieving 96% positional accuracy and 93% rotational accuracy with just 400ms latency in Gazebo simulations. Designed the system to minimize cloud dependencies, reducing communication delays and improving response time for real-time applications.",
    technologies: ["ROS", "Gazebo", "LLaMA 3", "Whisper", "Python", "Machine Learning", "Motion Planning", "Embedded Systems"],
  },
  {
    title: "Smart Package Delivery Box",
    image: project2,
    description:
      "Designed and engineered an IoT-enabled smart package delivery box to enhance security and prevent parcel theft. Integrated a real-time tracking system with an OTP-secured electronic locking mechanism, ensuring safe deliveries. Developed an interchangeable electronic control unit that reduced parcel loss by 15% while improving package monitoring accuracy by 35%. Conducted extensive testing across 10+ real-world scenarios and filed a patent for 'A Security Enhanced Smart Package Delivery Box and Method Thereof.' The system also includes a mobile app for real-time alerts and parcel status tracking.",
    technologies: ["IoT", "Embedded Systems", "Python", "CAD", "3D Printing", "Mobile App Development", "Security Systems"],
  },
  {
    title: "Amphibious Surveillance Robot",
    image: project1,
    description:
      "Led the design and development of a military-grade surveillance robot capable of seamless operation on both land and water. Engineered a lightweight, 3D-printed chassis that reduced weight by 20% while maintaining structural integrity. Integrated Raspberry Pi 4, IMU, and ultrasonic sensors for real-time perception and autonomous navigation. Designed and implemented a custom rocker arm suspension system to enhance maneuverability and improve terrain adaptability by 40%. Utilized Flask and OpenCV for real-time video streaming and SLAM-based mapping, reducing system latency by 35%.",
    technologies: ["Raspberry Pi", "ROS", "SLAM", "Computer Vision", "Flask", "3D Printing", "Python", "Sensor Integration"],
  },
  {
    title: "Daimler India Commercial Vehicle Hackathon",
    image: project3,
    description:
    "Competed in Daimler’s automotive innovation challenge and secured the runner-up position among 20+ teams. Led a team of four to develop a strategy for reducing the Total Cost of Ownership (TCO) of Daimler commercial trucks by 25%. Designed and simulated a four-wheel-drive concept to improve fuel efficiency while implementing a predictive maintenance system that reduced vehicle downtime by 30%. The proposed solution utilized real-time sensor data and machine learning models to optimize maintenance scheduling and enhance fleet reliability. Presented findings to a panel of industry experts and secured a $1,200 cash prize for innovation.",
    technologies: ["Automotive Engineering", "Predictive Maintenance", "Machine Learning", "Simulation", "Fleet Optimization"],
  },
  {
    title: "Portfolio Website",
    image: project5,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
];

export const CONTACT = {
  address: "Apartment 26, 1820 Commonwealth Ave, Boston 02135 ",
  phoneNo: "+1 (857) 605 9552 ",
  email: "sauman@bu.edu",
};
