"use client";
import { useIntl } from "react-intl";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialCard from "./TestimonialCard";

const Feedback = ({ id }) => {
  const { formatMessage: f } = useIntl();

  // Updated testimonials data with studentId
  const testimonials = [
    {
      type: "student",
      photo: {
        url: "/images/students/faris.jpg",
      },
      parent: "Faris Mehmood",
      description: "Grade 6 student",
      content:
        "Faris, a Grade 6 student at ELS, has spent eight years growing into a confident, curious, and kind-hearted learner. His journey reflects the power of hard work and a nurturing environment... Read more",
      studentId: "faris",
    },
    {
      type: "student",
      photo: {
        url: "/images/students/student1.jpg",
      },
      parent: "Hibat Ul Naseer Bareera",
      description: "Grade 5 Student",
      content:
        "Hibat Ul Naseer Bareera, affectionately known as Bareera, came to Malaysia in 2015 and joined Empowrr Learning System in 2017. Over the past five years, she has grown into a bright and ... Read more",
      studentId: "bareera",
    },
    {
      type: "student",
      photo: {
        url: "/images/students/student2.jpg",
      },
      parent: "Haniya Rehman",
      description: "Grade 6 Student",
      content:
        "Haniya Rehman came to Malaysia in 2016 and joined Empowrr Learning System in 2017. Over the past six years, she has grown into a bright and enthusiastic Grade 6 student, leaving a lasting ... Read more",
      studentId: "haniya",
    },
    {
      type: "student",
      photo: {
        url: "/images/students/student3.jpg",
      },
      parent: "Aashar Hayat Khan",
      description: "Grade 7 Student",
      content:
        "Aashar Hayat Khan came to Malaysia in 2020 and joined Empowrr Learning System in 2021. Over the past five years, he has grown into a confident and accomplished Grade 7 student, showcasing ... Read more",
      studentId: "aashar",
    },
    {
      type: "student",
      photo: {
        url: "/images/students/student4.jpg",
      },
      parent: "Rohan Ahmad Zafar",
      description: "Grade 4 Student",
      content:
        "Rohan Ahmad Zafar came to Malaysia on 3rd November 2016 and joined Empowrr Learning System in 2020. Over the past five years, he has grown into a bright and inquisitive Grade 4 student, ... Read more",
      studentId: "rohan",
    },
    {
      type: "student",
      photo: {
        url: "/images/students/student5.jpg",
      },
      parent: "Ummat UL Mateen",
      description: "Grade 6 Student",
      content:
        "Ummat UL Mateen came to Malaysia in 2016 and joined Empowrr Learning System in 2018. Over the past seven years, she has grown into a confident and accomplished Grade 6 student, leaving ... Read more",
      studentId: "ummat",
    },
    {
      type: "student",
      photo: {
        url: "/images/students/student6.jpg",
      },
      parent: "Neha Naveed",
      description: "Grade 5 Student",
      content:
        "Neha Naveed came to Malaysia in 2016 and joined Empowrr Learning System in 2019. Over the past six years, she has grown into a bright and enthusiastic Grade 5 student, capturing the ... Read more",
      studentId: "neha",
    },

    {
      type: "student",
      photo: {
        url: "/images/students/student8.jpg",
      },
      parent: "Ata ul Shafi",
      description: "Grade 1 Student",
      content:
        "Ata ul Shafi came to Malaysia in 2018 and joined Empowrr Learning System in 2022. Over the past three years, he has blossomed into an enthusiastic and curious Grade 1 student, winning ... Read more",
      studentId: "ata",
    },
    {
      type: "student",
      photo: {
        url: "/images/students/student9.jpg",
      },
      parent: "Muqadas",
      description: "Grade 7 Student",
      content:
        "Muqadas, 16, came to Malaysia in 2017 and joined Empowrr Learning System in 2025. Though she has only been with us for two months, her Grade 7 journey here has already reignited her ... Read more ",
      studentId: "muq",
    },
    {
      type: "student",
      photo: {
        url: "/images/students/student10.jpg",
      },
      parent: "Najia Imran",
      description: "IGCSE Student",
      content:
        "Najia Imran, daughter of Imran Khan, began her journey with Empowrr Learning System in *2016* at just *4 years old, enrolling in our Nursery program. Now **13, she has grown into ... Read more",
      studentId: "najia",
    },
    {
      type: "student",
      photo: {
        url: "/images/students/student11.png",
      },
      parent: "Attia tul Hadi Satwa",
      description: "IGCSE Graduate",
      content:
        "Attia arrived in Malaysia from Pakistan in *December 2016* at just *8 years old* and began her educational journey at *ELS Klang* in *January 2017, starting at Level 3. Over **nine ... Read more",
      studentId: "attia",
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
    <section id={id || "testimonials"} className="md:mt-12 bg-primary-100">
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
                  studentId={item?.studentId}
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
