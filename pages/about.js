import AboutHero from "../components/about-hero";
import CTA from "../components/cta";
import DescriptionValues from "../components/description-value";
import Founders from "../components/founders";
import Intro from "../components/intro";
import Layout from "../components/layout";
import Letter from "../components/letter";
import Values from "../components/values";
import { useHashFragment } from "../hooks/useHashFragment";
import { getNavigation, getParagraphs } from "../lib/api";
import { motion } from "framer-motion";

export default function About({ navigations, visions, cofounders }) {
  useHashFragment();
  return (
    <Layout navigations={navigations}>
      <AboutHero />
      <section
        className="relative w-full px-4 sm:px-6 xl:px-8 my-12"
        style={{ minHeight: "40vh" }}
      >
        <div className="max-w-xl mx-auto lg:max-w-screen-xl">
          <div className="grid gap-16 lg:grid-cols-2 xl:grid-cols-11 lg:gap-12 xl:gap-24">
            <motion.div
              className="flex flex-col justify-center lg:col-span-1 xl:col-span-6 lg:order-1"
              initial={{ y: "50%", opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <div className="mt-10 md:mt-0">
                <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
                  Why We Stand Out
                </span>
              </div>
              <h2 className="mt-4 text-purple-900 sm:mt-12 text-4xl leading-tight tracking-tight sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
                Holistic Learning, Global Standards
              </h2>
              <p className="max-w-xl mt-4 text-lg leading-relaxed text-purple-800 md:mt-6">
                Our programs blend international curricula (including IGCSE)
                with tailored support for displaced and underserved youth. From
                nursery to higher education, we equip students with the
                knowledge, skills, and agency to thrive in an interconnected
                world.
              </p>
              <br />
              {/* <p className="max-w-xl mt-4 text-lg leading-relaxed text-purple-800 md:mt-1">
                🎓 Uninterrupted Learning: Seamless online classrooms for
                stability amid uncertainty.
              </p> */}
              <br />
            </motion.div>
            <div className="w-full mx-auto sm:gap-8 lg:col-span-1 xl:col-span-4 sm:grid-cols-2 lg:gap-4 xl:gap-8 lg:order-2 sm:max-w-none sm:mx-0">
              <img
                className="object-cover"
                src="https://cdn.pixabay.com/photo/2022/08/29/07/25/bag-7418193_1280.png"
                alt="Cambridge"
              ></img>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* <p className="max-w-xl mx-auto lg:max-w-screen-xl text-lg leading-relaxed text-purple-800">
            🤝 Community First: Culturally responsive programs that honor
            students’ unique journeys.
          </p> */}
        </motion.div>
      </section>
      <Intro id="vision" visions={visions} />

      <Values id="core" />

      {/* <DescriptionValues /> */}
      <Letter id="message" />
      {/* <Founders id="founder" cofounders={cofounders} /> */}
      <CTA />
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  const navigations = (await getNavigation(locale)) ?? [];
  const { visions = [], cofounders = [] } = await getParagraphs(locale);
  return {
    props: { navigations, visions, cofounders },
    revalidate: 1,
  };
}
