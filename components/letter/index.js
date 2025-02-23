import { motion } from "framer-motion";

const Letter = ({ id, message }) => {
  return (
    <section id={id} className="relative overflow-hidden">
      <div className="absolute inset-y-0 right-0 w-full max-w-screen-xl ml-auto bg-purple-600 rounded-l-5xl"></div>

      <img
        src="/svg/dots-chaos.svg"
        className="absolute bottom-0 right-0 z-10 hidden h-auto transform 2xl:block w-80"
        alt=""
      />
      <img
        src="/svg/dots-strip.svg"
        className="absolute z-10 hidden h-auto transform 2xl:block top-1 right-20 w-36"
        alt=""
      />

      <div className="relative w-full px-4 py-16 bg-purple-600 2xl:max-w-screen-xl 2xl:mx-auto 2xl:rounded-l-5xl sm:px-6 lg:pr-0 sm:py-24 lg:py-0">
        <div className="relative grid gap-12 lg:grid-cols-2 2xl:gap-4 lg:pr-10 2xl:pr-0">
          <div className="relative grid order-2 w-full max-w-2xl grid-cols-2 gap-3 mx-auto lg:order-1 sm:gap-6 lg:py-32 lg:max-w-none">
            <img
              src="/svg/dots-purple-mess.svg"
              className="absolute hidden transform lg:block top-12 -right-16 2xl:right-0 "
              alt=""
            />
            <img
              src="/svg/dots-grid.svg"
              className="absolute top-0 hidden h-auto transform translate-y-12 right-2 w-80"
              alt=""
            />
            <div className="col-span-2 transform aspect-w-3 aspect-h-3 2xl:-translate-x-16">
              <img
                src="/images/principal.jpeg"
                className="object-cover w-full h-full rounded-3xl 2xl:rounded-4xl"
                alt="Program description 01"
              />
            </div>
            <div className="transform 2xl:-translate-x-16">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="/images/letter1.jpg"
                  className="object-cover w-full h-full rounded-3xl 2xl:rounded-4xl"
                  alt="Program description 02"
                />
              </div>
            </div>
            <div className="transform 2xl:-translate-x-16">
              <div className="aspect-w-1 aspect-h-1">
                <img
                  src="/images/letter2.jpg"
                  className="object-cover w-full h-full rounded-3xl 2xl:rounded-4xl"
                  alt="Program description 03"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col justify-center order-1 lg:order-2 lg:py-36">
            <motion.div
              className="relative z-20 mx-auto prose prose-lg prose-light sm:prose-xl text-white"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="font-4xl text-white">Message from our Director</h2>
              <div
                className="text-base leading-loose tracking-wide"
                style={{
                  whiteSpace: "pre-line",
                }}
              >
                At Empower Learning System, we believe that education is not
                just a privilege but a lifeline—a force capable of transcending
                borders, healing trauma, and rebuilding futures. As someone who
                has witnessed firsthand the resilience of displaced communities,
                I am deeply humbled to lead a team dedicated to turning
                adversity into opportunity. Our school was born from a simple
                yet profound truth: every child, every individual, deserves the
                chance to learn, grow, and dream, regardless of their
                circumstances. Whether through our nursery programs nurturing
                young minds or our IGCSE classes unlocking doors to higher
                education, we strive to create a sanctuary where hope is
                rekindled and potential is unleashed.
                <br />
                Over the years, I’ve seen students who once faced unimaginable
                hardships rise to become scholars, leaders, and changemakers.
                These stories fuel our mission daily. But none of this would be
                possible without the unwavering support of our donors,
                volunteers, and partners who share our vision of education
                without boundaries. Together, we are not just teaching
                subjects—we are restoring dignity, fostering resilience, and
                building bridges to a brighter tomorrow. Join us in this
                journey, because when we empower one learner, we transform
                generations.
                <br />
                With gratitude and hope
                <p className=" text-2xl italic text-gray-200 font-extrabold">
                  Faizan Ahmad, Director
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Letter;
