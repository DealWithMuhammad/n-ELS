import React from "react";
import { useIntl } from "react-intl";
import { motion } from "framer-motion";

const Intro = ({ id }) => {
  const { formatMessage: f } = useIntl();

  const visions = [
    {
      title: "Vision",
      content:
        "Our vision is to bridge the educational gap by providing innovative and adaptable learning solutions, ensuring that no one is left behind and that education becomes a fundamental human right for all.",
    },
    {
      title: "Mission",
      content:
        "Provide access to educational opportunities for children, youth, and adults with limited financial capacity to attain a certificate/degree",
    },
  ];

  return (
    <div id={id}>
      <div className="w-full h-32 sm:h-40 xl:h-48 bg-gradient-to-b from-purple-25 to-yellow-100"></div>
      <section className="px-4 pb-16 overflow-hidden bg-yellow-100 sm:pb-24 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-screen-xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="relative">
            <h2 className="max-w-4xl mx-auto text-center text-purple-900 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
              {f({
                id: "About.VisionMission",
                defaultMessage: "Vision & Mission",
              })}
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl leading-relaxed text-center text-purple-800"></p>
          </div>
          {visions.map((item, idx) => (
            <div
              className={`max-w-xl mx-auto mt-16 lg:max-w-none sm:mt-20 lg:mt-24 lg:grid lg:grid-cols-12 lg:gap-x-14 xl:gap-x-20 2xl:gap-x-24`}
              key={`vision-${idx}`}
            >
              <div
                className={`relative lg:col-span-6 ${
                  idx === 1 && "lg:order-2 mb-10"
                }`}
              >
                <div className="relative sm:pl-36 lg:pl-20 xl:pl-32">
                  <div className="aspect-w-3 aspect-h-2 rounded-2xl">
                    <img
                      className="object-cover rounded-2xl"
                      src="https://www.bsa.edu.vn/images/vision1.jpg"
                      alt={`${item.title} main image`}
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col justify-center mt-16 sm:mt-44 lg:mt-0 lg:col-span-6">
                <h3 className="text-purple-900 text-3xl leading-tight tracking-tight sm:text-4xl sm:leading-tighter font-bold">
                  {item.title}
                </h3>
                <p
                  className="max-w-2xl mt-3 text-lg leading-loose text-purple-800"
                  style={{
                    whiteSpace: "pre-line",
                  }}
                >
                  {item.content}
                </p>
                <br />
              </div>
            </div>
          ))}
        </motion.div>
      </section>
      <div className="w-full h-10 sm:h-10 xl:h-10 bg-gradient-to-b from-yellow-100 to-white"></div>
    </div>
  );
};

export default Intro;
