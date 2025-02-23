import { motion } from "framer-motion";
import { useState } from "react";
import { useIntl } from "react-intl";
import PostBody from "../post/post-body";

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
      question: "What is Empower Learning System?",
      answer:
        "Empower Learning System is an educational institution dedicated to providing quality education to refugees and marginalized communities. We offer nursery, primary, secondary, and IGCSE preparation classes, along with higher education pathways.",
    },
    {
      question: "What educational programs do you offer?",
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
      question: "Who can enroll in your programs?",
      answer:
        "Our programs are designed for refugees and individuals from marginalized communities with limited financial capacity. We welcome students of all backgrounds who are seeking quality education.",
    },
    {
      question: "What subjects are covered in your primary education program?",
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
      question: "What does your secondary education program include?",
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
      <div className="px-4 mx-auto lg:max-w-screen-lg sm:px-6 lg:px-8">
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

export default Faq;
