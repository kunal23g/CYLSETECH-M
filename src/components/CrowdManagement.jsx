import { motion } from "framer-motion";
import photo from "../assets/img1.jpg";
import crowd2 from "../assets/crowd2.jpg";
import { ChartLine, ShoppingCart, PersonStanding, BookUp2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { FaRegHandPointRight } from "react-icons/fa";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <div className="py-10 max-w-[1240px] mx-auto">
      <h1 className="text-5xl font-bold lg:text-7xl px-4 text-white mt-10">
        CROWD MANAGEMENT
      </h1>

      <div
        ref={ref}
        className=" mt-10  p-2 max-w-[1240px] mx-auto my-3 md:grid grid-cols-2"
      >
        {/* Text Content */}
        <div className="font-playfair col-span-1 p-3 lg:w-[80%] flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h1 className="text-4xl lg:text-5xl font-foundersGrotesk font-bold  text-dark-blue mb-4">
              FEATURES
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <p className="text-xm lg:text-xl font-neueMontreal font-medium text-gray-600 mb-5">
              Optimize operations with smart crowd control for smooth flow and
              enhanced safety.
            </p>
          </motion.div>

          <motion.ul
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="font-medium font-neueMontreal  text-xm lg:text-xl"
          >
            <li className="flex mb-2  text-justify">
              <FaRegHandPointRight size={19} className="mt-1" />
              <span className="pl-2">
                Empower organizers with tools for capacity planning and live
                crowd tracking
              </span>
            </li>
            <li className="flex mb-2 text-md text-justify">
              <FaRegHandPointRight size={19} className="mt-1" />
              <span className="pl-2">
                Ensure security with AI-driven behavior analysis and automated
                alerts.
              </span>
            </li>
            <li className="flex mb-2 text-md text-justify">
              <FaRegHandPointRight size={19} className="mt-1" />
              <span className="pl-2">
                Enhance efficiency and reduce risks with cutting-edge crowd
                management solutions.
              </span>
            </li>
            <li className="flex mb-2 text-md text-justify">
              <FaRegHandPointRight size={19} className="mt-1" />
              <span className="pl-2">
                Seamlessly manage large gatherings with real-time monitoring and
                advanced analytics.
              </span>
            </li>
          </motion.ul>
        </div>

        {/* Image */}
        <motion.div
          className="mt-2 col-span-1"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <img className="p-2" src={photo} alt="testimonial" />
        </motion.div>
      </div>
      <div
        ref={ref}
        className=" mt-16  p-2 max-w-[1240px] mx-auto my-3 md:grid grid-cols-2"
      >
        {/* Text Content */}
        {/* Image */}
        <motion.div
          className="mt-2 col-span-1"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isVisible ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <img className="p-2" src={crowd2} alt="testimonial" />
        </motion.div>
        <div className=" ml-7 font-playfair col-span-1 p-3  flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          ></motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h1 className=" text-4xl lg:text-5xl font-foundersGrotesk font-bold  text-dark-blue mb-4">
              ABOUT US
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <p className="text-xm lg:text-xl font-neueMontreal font-medium text-gray-600 mb-5">
              At <span className=" mx-1 text-3xl text-white font-foundersGrotesk ">
                {" "}
                CYLSETECH
              </span>{" "}
              , we’re pioneering the future with AI-driven solutions that transform industries. From intelligent video analytics to cutting-edge facial recognition and dynamic crowd management, we use technology to solve real-world challenges
We’re not just building products; we’re creating smarter, safer environments where businesses thrive and people feel secure. With a focus on innovation and real-time impact, we’re empowering organizations to unlock new possibilities, streamline operations, and make data-driven decisions that shape a better tomorrow.
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
