import Layout from "../components/layout";
import {
  getCoverImage,
  getFaq,
  getNavigation,
  getPostsForHome,
  getTestimonials,
} from "../lib/api";
import { useHashFragment } from "../hooks/useHashFragment";
import Programs from "../components/programs";
import Events from "../components/events";
import Faq from "../components/faq";
import GalleryHero from "../components/gallery-hero";
import HomeHero from "../components/home-hero";
import CTA from "../components/cta";
import Feedback from "../components/feedback";
import { useIntl } from "react-intl";
import Banner from "../components/banner";
import Hero from "../components/hero-home/Hero";

import Impact from "../components/impact-highlights/Impact";
import WhyUs from "../components/whyus-section/why-us";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home({
  allPosts,
  testimonials,
  faq,
  navigations,
  coverImages,
}) {
  const { formatMessage: f } = useIntl();
  useHashFragment();
  const GALLERY_IMAGES = [
    "/images/gallery2.jpg",
    "/images/gallery1.jpg",
    "/images/gallery3.jpg",
    "/images/gallery4.jpg",
    "/images/gallery5.jpg",
  ];
  return (
    <Layout navigations={navigations}>
      {/* <Banner coverImages={coverImages} /> */}
      <div className="w-full mb-10  bg-grid-black/[0.1] relative ">
        <Hero />
      </div>
      <HomeHero />
      <Programs id="program" />
      <WhyUs />
      <Impact />
      <Feedback id="parents" testimonials={testimonials} />
      <div className="mt-56"></div>
      <GalleryHero
        id="gallery"
        className="md:-mt-36"
        hasButton={true}
        url="/gallery"
        title={f({
          id: "Home.OurGallery",
          defaultMessage: "Our Gallery",
        })}
        description={f({
          id: "Home.GallerySummary",
          defaultMessage:
            "Providing the best possible start to your children's education. Our goal is to ensure your little one's success in life. So We provide an environment that enables students to thrive.",
        })}
        images={GALLERY_IMAGES}
      />
      {/* <Events posts={allPosts} id="news" /> */}
      <Faq faq={faq} id="faq" />
      <div>
        <motion.div
          className="flex justify-center mt-6"
          viewport={{ once: true }}
          transition={{ duration: 1.6 }}
          initial={{ y: "50%", opacity: 0 }}
          whileInView={{ y: "0", opacity: 1 }}
        >
          <Link href="/faq" passHref>
            <button className="text-lg font-medium text-white bg-primary-100 sm:mt-0 sm:ml-6 leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded_button hover:text-white hover:bg-primary-80 group">
              {f({
                id: "Home.ViewMore",
                defaultMessage: "View More",
              })}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6 ml-3 group-hover:animate-horizontal-bounce"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <line x1="5" y1="12" x2="19" y2="12" />
                <line x1="15" y1="16" x2="19" y2="12" />
                <line x1="15" y1="8" x2="19" y2="12" />
              </svg>
            </button>
          </Link>
        </motion.div>
      </div>
      <CTA />
    </Layout>
  );
}
export async function getStaticProps({ locale }) {
  const allPosts = (await getPostsForHome(locale)) ?? [];
  const testimonials = (await getTestimonials(locale)) ?? [];
  const faq = (await getFaq(locale)) ?? [];
  const navigations = (await getNavigation(locale)) ?? [];
  const coverImages = (await getCoverImage(locale)) ?? [];
  return {
    props: { allPosts, testimonials, faq, navigations, coverImages },
    revalidate: 1,
  };
}
