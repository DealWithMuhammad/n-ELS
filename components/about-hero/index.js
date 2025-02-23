import { motion } from "framer-motion";
import Link from "next/link";
import { useIntl } from "react-intl";
const AboutHero = () => {
  const { formatMessage: f } = useIntl();
  return (
    <motion.section
      className="relative px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-25"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="max-w-screen-xl mx-auto">
        <div className="relative mt-16">
          <div className="flex justify-center">
            <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
              Get to know us
            </span>
          </div>
          <h2 className="max-w-4xl mx-auto mt-4 text-center text-purple-900 font-extrabold text-5xl sm:text-6xl xl:text-7xl leading-snug sm:leading-tight xl:leading-tighter">
            Who We Are
          </h2>
          <p className="max-w-4xl mx-auto mt-4 text-xl leading-relaxed text-center text-purple-800 sm:mt-5">
            We are educators, mentors, and advocates dedicated to breaking
            barriers for refugee and marginalized communities. Driven by the
            belief that every individual deserves equitable access to education,
            we foster environments where students not only learn but
            flourish—unlocking confidence, resilience, and lifelong opportunity.
            {/*           
            Education is a beacon of hope and a tool for transformation. At
            Empower Learning System, we provide inclusive, accessible education
            to refugees in Malaysia, empowering them to rebuild their lives and
            contribute to their communities. Together, lets restore hope,
            dignity, and opportunity—because every individual deserves the
            chance to thrive. */}
            {/* <br />
            Empower Learning System is a compassionate and innovative
            educational initiative dedicated to addressing the critical
            educational needs of refugees in Malaysia. We are committed to
            providing inclusive and accessible educational opportunities for
            children, youth, and adults with limited financial capacity.
            <br />
            At Empower Learning System, we believe in the transformative power
            of education and its ability to empower individuals to rebuild their
            lives and contribute positively to their communities. We understand
            the challenges faced by refugees in accessing quality education, and
            we are here to bridge that gap.
            <br />
            Our team of dedicated educators and mentors is passionate about
            creating a nurturing and supportive learning environment for our
            students. We offer a comprehensive range of programs, including K-12
            Education, Cambridge Primary and Secondary Education, GED
            Preparation, Higher Education, and Skills Development Programs, all
            tailored to meet the unique needs of our diverse student population.
            <br />
            Through our compassionate approach, we aim to restore hope, dignity,
            and a sense of normalcy to the lives of refugees. We believe that
            education is a fundamental human right and should be accessible to
            all, regardless of their background or legal status. By providing
            educational support and resources, we empower individuals to unlock
            their full potential and pursue a brighter future.
            <br />
            Collaborate with us and support us at Empower Learning System to
            become part of a community that values compassion, inclusivity, and
            the inherent worth of every individual. Together, we can make a
            difference and ensure that education becomes a pathway to success
            for refugees, enabling them to thrive and contribute to society. */}
            <p className=" ml-5 italic text-gray-700 font-extrabold">
              {/* Faizan Ahmad, Director */}
            </p>
          </p>

          <div className="flex justify-center mt-8">
            <Link href="/about#message">
              <a className="text-lg font-semibold text-purple-900 bg-yellow-500 eading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded-full outline-none hover:bg-yellow-600 group">
                {f({
                  id: "Home.ViewMore",
                  defaultMessage: "View more",
                })}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 ml-3 text-purple-500 duration-300 ease-in-out animate-vertical-bounce hover:text-purple-600"
                  width="44"
                  height="44"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#2c3e50"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <polyline points="7 7 12 12 17 7" />
                  <polyline points="7 13 12 18 17 13" />
                </svg>
              </a>
            </Link>
          </div>
        </div>

        <div className="relative z-1 mt-14 sm:mt-16">
          <div className="aspect-w-3 aspect-h-2 sm:aspect-w-16 sm:aspect-h-9">
            <img
              className="object-cover w-full h-full shadow-xl rounded-3xl"
              src="/images/pricipal.jpeg"
              alt="preschool"
            />
          </div>
        </div>
      </div>

      {/* <div className="absolute inset-x-0 bottom-0 top-auto z-0 hidden h-64 bg-white sm:block"></div> */}
    </motion.section>
  );
};

export default AboutHero;
