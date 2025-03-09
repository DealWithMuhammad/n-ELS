"use client";

import { motion } from "framer-motion";
import { useIntl } from "react-intl";
import Link from "next/link";

const TestimonialCard = ({
  content,
  img,
  title,
  description,
  type,
  studentId,
}) => {
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

  // Function to replace "Read more" with a link
  const formatContent = (text) => {
    if (!text) return "";

    const readMoreIndex = text.indexOf("Read more");
    if (readMoreIndex === -1) return text;

    return (
      <>
        {text.substring(0, readMoreIndex)}
        <Link href={`/student/${studentId}`}>
          <a className="text-purple-600 hover:text-purple-800 font-bold">
            Read more
          </a>
        </Link>
      </>
    );
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
      <p className="mt-5 text-lg text-purple-800">{formatContent(content)}</p>
    </motion.div>
  );
};

export default TestimonialCard;
