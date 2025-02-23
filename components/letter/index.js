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
            <div className="col-span-2 transform aspect-w-3 aspect-h-4 2xl:-translate-x-16">
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
                From the day of operation in June 2010 to May 2021, Blue Sky
                Academy has gone through an unforgettable 11-year journey. All
                school levels, including Kindergarten, Primary and Secondary
                school have seen numerous opportunities and challenges and
                gained great achievements along the way.
                <br />
                Blue Sky Academy is a dream school for all staff, teachers and
                parents. But most importantly, it is a limitless blue sky where
                students can let their dreams fly. Here students can learn while
                playing, discover their aptitudes and develop their talents.
                <br />
                Blue Sky Academy offers a unique, integrated curriculum,
                perfectly combining the National Education Programme with the
                International Education Programme provided by Cambridge
                Assessment International Education (CAIE, formerly known as CIE
                - Cambridge International Examinations, is one of the most
                popular education programmes in the world and has been om offer
                in more than 10,000 schools in 160 countries). Some key
                guidelines for our education program are as follows:
                <br />
                Let students at all levels explore the world around them, learn
                by asking questions, through researching for answers and by
                writing down the results. • Ensure that students know their
                mother tongue well to understand their motherland and the
                Vietnamese people. Students learn and use English as their
                second language from an early age to gain access to global
                knowledge. • Increase practical learning of any subject through
                the use and application of science and information technology. •
                The Comprehensive Development Programme at BSA provides
                alternative learning oppoturnities for students through a
                variety of activities supporting the comprehensive development
                of academic and extra-curricular fields as well as necessary
                life skills. • Participate in all extracurricular, outdoor and
                social activities in order to contribute to personality
                development. Teachers and students never stop improving their
                own communication skills; through the activities inside and
                outside the classroom, they strengthen the bond among
                themselves.
                <br />
                We are delighted to welcome all parents, teachers and staff as
                an inseparable part in the development of the Blue Sky Academy.
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Letter;
