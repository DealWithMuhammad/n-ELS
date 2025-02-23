import { motion } from "framer-motion";
import { useIntl } from "react-intl";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const TestimonialCard = ({ content, img, title, description, type }) => {
  const { formatMessage: f } = useIntl();
  const TYPE = {
    teacher: f({
      id: "Home.TeacherSharing",
      defaultMessage: "Teacher's Sharing",
    }),
    parent: f({
      id: "Home.ParentSharing",
      defaultMessage: "Parent's Sharing",
    }),
    student: f({
      id: "Home.StudentSharing",
      defaultMessage: "Student's Sharing",
    }),
  };
  return (
    <motion.div className="px-8 py-8 mx-4 transition duration-300 ease-in-out bg-yellow-200 sm:px-6 md:px-8 lg:px-5 2xl:px-8 rounded-3xl h-full">
      <h3 className="mb-5 text-xl font-bold text-purple-900 text-center">
        {type ? TYPE[type] : ""}
      </h3>
      <img
        src={img || "/api/placeholder/80/80"}
        className="object-cover w-20 h-20 border-2 border-yellow-300 rounded-full filter drop-shadow-2xl mx-auto"
        alt="Testimonial profile"
      />
      <p className="mt-3 text-lg font-bold text-purple-900 text-center">
        {title}
      </p>
      <p className="mt-1 text-lg text-gray-800 italic text-center">
        {description}
      </p>
      <p className="mt-5 text-lg text-purple-800">{content}</p>
    </motion.div>
  );
};

const Feedback = ({ id }) => {
  const { formatMessage: f } = useIntl();

  // Dummy testimonials data
  const testimonials = [
    // {
    //   type: "parent",
    //   photo: { url: "/api/placeholder/80/80" },
    //   parent: "Sarah Johnson",
    //   description: "Parent of Alex, Grade 3",
    //   content:
    //     "The personalized attention my child receives here is incredible. The teachers truly understand his learning style and have helped him grow both academically and socially.",
    // },
    {
      type: "teacher",
      photo: {
        url: "https://images.ctfassets.net/573l3izhxytz/FA6ipyAauCdssSGFDXCD9/0d4029070b8e1f8c818e092bfdcd97d6/L___Ho__ng_L__m-_Micheal.HEIC",
      },
      parent: "Mr. David Chen",
      description: "Mathematics Teacher",
      content:
        "Being part of this educational community is truly rewarding. We focus on developing not just academic skills, but also critical thinking and creativity in our students.",
    },
    {
      type: "student",
      photo: {
        url: "https://images.ctfassets.net/573l3izhxytz/2zMliQa9sz2aS7ZIPgqjHR/f105225273a1f6be0aa392f503b31306/mr._chow.jpg.png",
      },
      parent: "Emily Wang",
      description: "Grade 5 Student",
      content:
        "I love coming to school every day! The teachers make learning fun and interesting. I've made great friends and learned so much this year.",
    },
    {
      type: "parent",
      photo: {
        url: "https://images.ctfassets.net/573l3izhxytz/28JtfqL1qPTNfGb0GETrTT/57fd88fe854e2d3e6993e9444b614382/Dam_Thi_men.jpg",
      },
      parent: "Michael Rodriguez",
      description: "Parent of twins in Grade 4",
      content:
        "The school's approach to handling different learning paces is exceptional. Both my children receive the attention they need despite having different strengths.",
    },
    {
      type: "teacher",
      photo: {
        url: "https://images.ctfassets.net/573l3izhxytz/42tRcAncImAIR4EzeJ1uGc/10b1f6c55e8a809f7ac0da313ab47788/7.JPG",
      },
      parent: "Ms. Lisa Thompson",
      description: "Science Department Head",
      content:
        "Our hands-on learning approach really engages students. It's wonderful to see their eyes light up during experiments and discovery sessions.",
    },
    {
      type: "student",
      photo: {
        url: "https://images.ctfassets.net/573l3izhxytz/5KJXf5mc0ZrBGvncZvdLHJ/8344b910b1595b74f61a95ed429f4bc5/H___Ph____ng-Cathy.jpeg",
      },
      parent: "Kevin Park",
      description: "Grade 6 Student",
      content:
        "The after-school programs are amazing! I've learned coding and joined the robotics club. The teachers always encourage us to try new things.",
    },
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section id={id} className="md:mt-12 bg-primary-100">
      <div
        style={{
          backgroundImage: "url(/images/mask.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="relative"
      >
        <div className="px-4 mx-auto lg:max-w-screen-2xl sm:px-6 py-20 sm:py-20 lg:py-20">
          <div className="flex flex-col items-center justify-center">
            <h2 className="max-w-4xl text-center text-white text-5xl sm:text-5xl xl:text-6xl sm:leading-tighter font-bold">
              {f({
                id: "Home.OurStories",
                defaultMessage: "Our Stories",
              })}
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl leading-relaxed text-center text-purple-50">
              {f({
                id: "Home.OurStoriesSummary",
                defaultMessage:
                  "All of teachers and support staffs at ELS know and call each of us by name, they understand our families, our hobbies and listen to us all the time. Therefore, we are very pleased to say that we were a happy family. We love everything of Blue Sky!",
              })}
            </p>
          </div>
          <div className="mt-12 md:mt-14 lg:mt-16 xl:mt-20 2xl:mt-24 lg:max-w-screen-xl mx-auto">
            <Carousel responsive={responsive}>
              {testimonials.map((item, idx) => (
                <TestimonialCard
                  key={`testimonial-${idx}`}
                  content={item?.content}
                  img={item?.photo?.url}
                  title={item?.parent}
                  description={item?.description}
                  type={item?.type}
                />
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
