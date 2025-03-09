"use client";

import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import { studentsData } from "../../components/feedback/students";

export default function StudentStory() {
  const router = useRouter();
  const { id } = router.query;

  // Find the student data based on the ID from the URL
  const student = studentsData.find((s) => s.id === id);

  // If student data is not found or page is still loading
  if (!student) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-yellow-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
        <div className="md:flex">
          <div className="md:flex-shrink-0 md:w-1/3 bg-purple-900 flex justify-center p-8">
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              src={student.image}
              alt={student.name}
              className="h-48 w-48 object-cover rounded-full border-4 border-yellow-300"
            />
          </div>
          <div className="p-8 md:p-12 md:w-2/3">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h1 className="text-3xl font-bold text-purple-900 mb-2">
                {student.name}
              </h1>
              <p className="text-lg text-gray-600 italic mb-6">
                {student.grade}
              </p>

              <div className="prose prose-lg max-w-none text-gray-800">
                <p>{student.fullStory}</p>
              </div>

              <div className="mt-8">
                <Link href="/#parents" passHref>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    className="inline-block bg-yellow-300 hover:bg-yellow-400 text-purple-900 font-bold py-3 px-6 rounded-full transition duration-300"
                  >
                    Back to Stories
                  </motion.a>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}
