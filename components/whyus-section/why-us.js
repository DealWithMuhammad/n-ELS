"use client";
import Image from "next/image";
import { motion } from "framer-motion";

function WhyUs() {
  const features = [
    {
      title: "Compassionate Support",
      description:
        "We understand the unique challenges faced by refugees and marginalized communities.",
      image: "/svg/heart.png",
      alt: "Heart with educational items illustration",
    },
    {
      title: "Experienced Educators",
      description:
        "Dedicated teachers and mentors who care about your success.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-21%20at%2000.07.18_4c6b4940.jpg-UxJLiAQdBE0EZLaIuKykRQypzxTxPX.jpeg",
      alt: "Teacher at chalkboard illustration",
    },
    {
      title: "Quality Education",
      description: "Our programs are designed to meet international standards.",
      image:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-02-21%20at%2000.02.23_59bb4b62.jpg-Fh25o8136mMUpCI9OgTYfVkClDzYBD.jpeg",
      alt: "Open book with educational symbols",
    },
  ];

  return (
    <section className="relative -top-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-purple-900 text-3xl sm:text-6xl leading-snug sm:leading-tight font-extrabold relative inline-block">
            <span className="relative">
              Why Us ?
              <img
                className="absolute inset-x-0 bottom-0 transform translate-y-8  "
                src="/svg/underline.png"
                alt=""
              />
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                <img
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-bold text-purple-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
