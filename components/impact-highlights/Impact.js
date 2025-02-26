import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function Impact() {
  const counts = [
    { target: 600, label: "Current Enrolment" },
    { target: 100, label: "IGCSE Graduates" },
    { target: 10, label: "GED Graduates" },
    { target: 50, label: "University Enrolments" },
  ];

  const Counter = ({ target, label }) => {
    const [count, setCount] = React.useState(0);
    const controls = useAnimation();
    const ref = React.useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            controls.start({ opacity: 1, y: 0 });
            let interval = setInterval(() => {
              setCount((prev) => {
                if (prev >= target) {
                  clearInterval(interval);
                  return target;
                }
                return prev + 1;
              });
            }, 20);
            return () => clearInterval(interval);
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
    }, [controls, target]);

    return (
      <motion.div
        ref={ref}
        className="flex flex-col items-center p-6 pt-2"
        initial={{ opacity: 0, y: 20 }}
        animate={controls}
        transition={{ duration: 0.5 }}
      >
        <span className="text-4xl font-bold text-primary-100 mb-2">
          {count}+
        </span>
        <span className="text-lg text-primary-100 font-bold">{label}</span>
      </motion.div>
    );
  };

  return (
    <section className="px-4 sm:px-6 lg:px-8">
      <div className="max-w-screen-xl mx-auto mt-20">
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <h2 className="max-w-3xl mx-auto text-center text-primary-100 text-5xl font-bold">
            <span className="relative inline-block">
              <span>Impact Highlights</span>
              <img
                src="/svg/sunny.svg"
                alt="Sunny"
                className="absolute -top-28 z-0 translate-x-full hidden sm:block"
              />
            </span>
          </h2>

          <p className="mx-auto mt-4 text-xl leading-relaxed text-center text-primary-100 sm:mt-5">
            Transforming Lives, One Student at a Time – See the Impact of
            Education in Action
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {counts.map((item, index) => (
              <Counter key={index} {...item} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Impact;
