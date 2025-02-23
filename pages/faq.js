"use client";

import Layout from "../components/layout";
import { getNavigation } from "../lib/api";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import { motion } from "framer-motion";
import { useState } from "react";
import { useIntl } from "react-intl";

const Question = ({ question, answer, response }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <li className="w-full px-5 py-6 sm:px-8 sm:py-4 border border-1 border-primary-100 rounded-2xl">
      <button
        className="flex items-center justify-between w-full text-lg sm:text-xl group"
        onClick={() => setShowAnswer(!showAnswer)}
      >
        <span className="text-left text-primary-100 duration-300 ease-in-out font-bold">
          {question}
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`flex-shrink-0 w-5 h-6 ml-3 text-primary-100 duration-300 ease-in-out sm:w-6 sm:h-6 sm:ml-6  ${
            showAnswer ? "transform rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {showAnswer && (
        <div className="relative duration-700">
          <div className="mt-3 text-base leading-relaxed text-purple-800 sm:text-lg">
            {/* Directly render the answer text */}
            <div className="prose max-w-none">{answer}</div>
          </div>
        </div>
      )}
    </li>
  );
};

const Faq = ({ id }) => {
  const { formatMessage: f } = useIntl();

  const faqData = [
    {
      question: "1. What is Empower Learning System?",
      answer:
        "Empower Learning System is an educational institution dedicated to providing quality education to refugees and marginalized communities. We offer nursery, primary, secondary, and IGCSE preparation classes, along with higher education pathways.",
    },
    {
      question: "2. What educational programs do you offer?",
      answer: (
        <div>
          We offer a comprehensive range of programs including:
          <ul className="list-disc pl-5 mt-2">
            <li>Nursery and Primary Education</li>
            <li>Secondary Education</li>
            <li>IGCSE Preparation Classes</li>
            <li>GED Preparation</li>
            <li>Higher Education Pathways</li>
          </ul>
        </div>
      ),
    },
    {
      question: "3. Who can enroll in your programs?",
      answer:
        "Our programs are designed for refugees and individuals from marginalized communities with limited financial capacity. We welcome students of all backgrounds who are seeking quality education.",
    },
    {
      question:
        "4. What subjects are covered in your primary education program?",
      answer: (
        <div>
          Our primary education program focuses on foundational learning,
          including:
          <ul className="list-disc pl-5 mt-2">
            <li>Literacy</li>
            <li>Numeracy</li>
            <li>Social skills</li>
            <li>Basic sciences</li>
          </ul>
        </div>
      ),
    },
    {
      question: "5. What does your secondary education program include?",
      answer: (
        <div>
          Our secondary program offers a comprehensive curriculum with:
          <ul className="list-disc pl-5 mt-2">
            <li>Core academic subjects</li>
            <li>Critical thinking development</li>
            <li>Problem-solving skills</li>
            <li>Preparation for higher education</li>
          </ul>
        </div>
      ),
    },
    {
      question:
        "6. What is IGCSE, and what does the preparation program cover?",
      answer:
        "IGCSE (International General Certificate of Secondary Education) is an internationally recognized qualification. Our preparation program covers all core subjects including Mathematics, Science, and English.",
    },
    {
      question: "7. What is better for my child - IGCSE or GED?",
      answer:
        "For students between 12-16 years old, IGCSE is the recommended path as it provides a comprehensive international education. However, GED can be a good alternative for students over 16 who face financial constraints or other barriers to completing IGCSE.",
    },
    {
      question: "8. What is the minimum age for the GED exam?",
      answer:
        "The minimum age requirement for taking the GED exam is 17 years old.",
    },
    {
      question: "9. Can students switch from IGCSE to GED preparation?",
      answer:
        "Yes, students who are unable to complete IGCSE due to financial constraints or other factors can switch to GED preparation after age 16.",
    },
    {
      question: "10. Do you provide financial assistance?",
      answer:
        "We offer various support options for students with limited financial capacity. Please contact our administration for specific details about available assistance programs.",
    },
    {
      question:
        "11. Are there any additional support services for refugee students?",
      answer:
        "Yes, we provide compassionate support understanding the unique challenges faced by refugee students, including academic counseling and mentorship.",
    },
    {
      question: "12. Do you offer career guidance?",
      answer:
        "Yes, we provide higher education pathways support, including scholarship assistance, academic counselling, and mentorship for future career opportunities.",
    },
    {
      question: "13. How can I enroll my child in your programs?",
      answer:
        "Please visit our website and navigate to the 'Admissions' page for detailed enrollment instructions and forms.",
    },
    {
      question: "14. What documents are required for enrollment?",
      answer:
        "Please contact our admissions office for a detailed list of required documents, as requirements may vary based on the program and student's situation.",
    },
    {
      question: "15. Can students join mid-semester?",
      answer:
        "Contact our administration to discuss mid-semester enrollment possibilities and any additional support that might be needed.",
    },
    {
      question: "16. What are the qualifications of your teachers?",
      answer:
        "Our educators are experienced professionals dedicated to student success and are qualified to teach their respective subjects according to international standards.",
    },
    {
      question: "17. What is the typical class size?",
      answer:
        "Contact our administration for specific information about class sizes, as they may vary by program and level.",
    },
    {
      question:
        "18. What opportunities are available after completing your programs?",
      answer:
        "Students can pursue higher education worldwide, with our support in accessing universities and scholarship opportunities.",
    },
    {
      question: "19. Do you help with university applications?",
      answer:
        "Yes, our Higher Education Pathways program includes support for university applications, scholarship assistance, and academic counseling.",
    },
    {
      question: "20. How can parents track their child's progress?",
      answer:
        "We maintain regular communication with parents regarding student progress. Contact your child's program coordinator for specific details about progress tracking and reporting.",
    },
  ];

  return (
    <motion.section
      className="pt-20 pb-2 sm:pt-28"
      id={id}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
    >
      <div className="px-4 mx-auto lg:max-w-screen-lg sm:px-6 mb-16 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="text-primary-100 text-5xl font-bold">
            {f({
              id: "Home.FrequentlyAskedQuestions",
              defaultMessage: "Frequently asked questions",
            })}
          </h2>
        </div>
        <ul className="relative mt-12 space-y-6">
          <div>
            <img
              className="absolute hidden h-auto w-28 -left-40 top-10 sm:block 2xl:-left-60"
              src="svg/question-mark.svg"
              alt=""
            />
            <img
              className="absolute hidden h-auto w-28 -right-40 bottom-10 sm:block 2xl:-right-60"
              src="svg/bulb.svg"
              alt=""
            />
          </div>
          {faqData.map((item, idx) => (
            <Question
              key={`question-${idx}`}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </ul>
      </div>
    </motion.section>
  );
};

export default function FaqPage({ navigations }) {
  return (
    <Layout navigations={navigations}>
      <AnimationRevealPage>
        <Faq />
      </AnimationRevealPage>
    </Layout>
  );
}

export async function getStaticProps({ locale }) {
  const navigations = (await getNavigation(locale)) ?? [];

  return {
    props: { navigations },
    revalidate: 1,
  };
}
