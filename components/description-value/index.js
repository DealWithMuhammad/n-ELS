import { motion } from "framer-motion";
import { useIntl } from "react-intl";
const DescriptionValues = () => {
  const { formatMessage: f } = useIntl();
  return (
    <section className="px-4 -mt-8 bg-white sm:py-4 sm:mt-0 sm:px-6 lg:px-8 mb-16">
      <motion.div
        className="max-w-3xl mx-auto lg:max-w-screen-xl"
        initial={{ y: "50%", opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="lg:grid lg:grid-cols-2 lg:gap-10 xl:gap-10">
          <div className="flex flex-col justify-center">
            <h2 className="text-purple-900 sm:text-center lg:text-left text-2xl leading-tight tracking-tight sm:text-3xl sm:leading-tighter font-bold">
              {f({
                id: "About.WithAnAimToDevelop",
                defaultMessage: "With an aim to develop",
              })}
            </h2>

            <div className="grid max-w-4xl gap-2 mt-10 sm:grid-cols-2 lg:grid-cols-1 sm:mx-auto lg:mx-0 lg:max-w-xl">
              <div className="flex">
                <div className="w-14">
                  <img src="/svg/checkmark.svg" className="w-7 h-7" alt="" />
                </div>
                <div className="w-full">
                  <h5 className="flex items-center text-xl font-semibold text-purple-900">
                    {f({
                      id: "About.GoodKnowledge",
                      defaultMessage: "Good knowledge",
                    })}
                  </h5>
                  <p className="mt-1 text-base text-purple-800">
                    {f({
                      id: "About.GoodKnowledgeDetail",
                      defaultMessage:
                        "A well-rounded citizen who has a good knowledge base. Intellectual capacity and language capability to integrate into global education",
                    })}
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="w-14">
                  <img src="/svg/checkmark.svg" className="w-7 h-7" alt="" />
                </div>
                <div className="w-full">
                  <h5 className="flex items-center text-xl font-semibold text-purple-900">
                    {f({
                      id: "About.Coordination",
                      defaultMessage: "Coordination",
                    })}
                  </h5>
                  <p className="mt-1 text-base text-purple-800">
                    {f({
                      id: "About.CoordinationSummary",
                      defaultMessage:
                        "We inspire students to become confident and ethical leaders, strengthening their voices and capacity to contribute positively to their communities. Young people leave the ELS with the tools and confidence they need to be successful personally and academically in higher levels and beyond.",
                    })}
                  </p>
                </div>
              </div>

              <div className="flex">
                <div className="w-14">
                  <img src="/svg/checkmark.svg" className="w-7 h-7" alt="" />
                </div>
                <div className="w-full">
                  <h5 className="flex items-center text-xl font-semibold text-purple-900">
                    {f({
                      id: "About.Confidence",
                      defaultMessage: "Confidence",
                    })}
                  </h5>
                  <p className="mt-1 text-base text-purple-800">
                    {f({
                      id: "About.ConfidenceSummary",
                      defaultMessage:
                        "Confidence, dynamics, and the desire to succeed in life. Integrity, respect for themselves and for others Responsibility for themselves, family, and society.",
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="w-full max-w-xl mx-auto mt-16 lg:mt-0 lg:max-w-none lg:mx-0">
            <div className="aspect-w-9 aspect-h-6">
              <img
                className="object-cover w-full h-full rounded-3xl"
                src="/images/aim-develope.jpg"
                alt="values"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default DescriptionValues;
