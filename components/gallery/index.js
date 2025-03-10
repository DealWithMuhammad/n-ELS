import { useIntl } from "react-intl";
export const Gallery = () => {
  const { formatMessage: f } = useIntl();
  return (
    <section className="relative px-4 pt-16 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-purple-25">
      <div className="max-w-screen-xl mx-auto">
        <div className="relative">
          <div className="flex justify-center">
            <span className="inline-block px-4 py-2 font-medium text-purple-700 bg-purple-200 rounded-full shadow-md -rotate-1">
              {f({
                id: "About.WhereGreatKidsGrow",
                defaultMessage: "Where great kids grow",
              })}
            </span>
          </div>
          <h2 className="max-w-3xl mx-auto mt-4 text-center text-purple-900 font-extrabold text-4xl sm:text-6xl xl:text-7xl leading-snug sm:leading-tight xl:leading-tighter">
            {f({
              id: "Gallery.SeeWhatOurStudentsExperienceLooksLike",
              defaultMessage: "See what our students' experience looks like",
            })}
          </h2>
          <p className="max-w-screen-xl mx-auto mt-4 text-xl leading-relaxed text-center text-purple-800 sm:mt-5">
            {f({
              id: "Gallery.GallerySummary",
              defaultMessage:
                "When you see these pictures, please bear in mind our aspirational mission to educate happy, independent, creative, intellectual, passionate and lifelong learners. We have worked hard to capture the joy, the beauty and, most importantly, the reality of what will undoubtedly go down in history of ELS School. I hope you agree that the captured images reflect that joy of learning, working and living in a nurturing environment that gives children the security and opportunity to discover themselves and their world..",
            })}
          </p>
        </div>

        <div
          id="hero-gallery"
          className="relative z-10 grid grid-cols-12 gap-4 js-lightgallery lg:px-4 2xl:px-16 mt-14 sm:mt-16 md:mt-20 lg:mt-24 sm:gap-6 lg:gap-10 xl:gap-12"
        >
          <div className="flex flex-col col-span-4 md:col-span-2 md:justify-end">
            <div className="w-full cursor-pointer aspect-w-1 aspect-h-1 group hover:z-50">
              <img
                src="/images/gallery5.jpg"
                className="object-cover object-center w-full h-full duration-300 ease-in-out shadow-2xl rounded-2xl rotate-3 md:-rotate-8 md:-translate-y-12 md:translate-x-3 group-hover:rotate-0 group-hover:scale-110"
                alt="Gallery hero 01"
              />
            </div>
          </div>
          <div className="flex col-span-8 md:col-span-3 md:flex-col">
            <div className="w-1/2 mr-2 md:w-full sm:mr-3 md:mr-0">
              <div className="relative z-10 cursor-pointer aspect-w-1 aspect-h-1 group hover:z-50">
                <img
                  src="/images/gallery2.jpg"
                  className="object-cover object-center w-full h-full duration-300 ease-in-out shadow-2xl rounded-2xl -rotate-3 md:-rotate-8 group-hover:rotate-0 group-hover:scale-110"
                  alt="Gallery hero 02"
                />
              </div>
            </div>

            <div className="relative w-1/2 ml-2 sm:ml-3 md:ml-6">
              <div className="cursor-pointer aspect-w-1 aspect-h-1 group hover:z-50">
                <img
                  src="/images/gallery3.jpg"
                  className="object-cover object-center w-full h-full duration-300 ease-in-out shadow-2xl rounded-2xl rotate-3 md:rotate-8 group-hover:rotate-0 group-hover:scale-110"
                  alt="Gallery hero 03"
                />
              </div>
            </div>
          </div>

          <div className="col-span-4 md:col-span-4 md:pr-4">
            <div className="w-full cursor-pointer aspect-w-1 aspect-h-1 group hover:z-50">
              <img
                src="/images/gallery4.jpg"
                className="object-cover object-center w-full h-full duration-300 ease-in-out shadow-2xl rounded-2xl -rotate-3 md:rotate-4 group-hover:rotate-0 group-hover:scale-110"
                alt=""
              />
            </div>
          </div>

          <div className="flex col-span-8 md:col-span-3 md:flex-col md:pr-3 md:translate-y-12">
            <div className="w-1/2 mr-2 md:w-full sm:mr-3 md:mr-0">
              <div className="relative z-10 cursor-pointer aspect-w-1 aspect-h-1 group hover:z-50">
                <img
                  src="/images/gallery1.jpg"
                  className="object-cover object-center w-full h-full duration-300 ease-in-out shadow-2xl rounded-2xl rotate-3 md:rotate-12 group-hover:rotate-0 group-hover:scale-110"
                  alt="images/gallery-hero-05.jpg"
                />
              </div>
            </div>

            <div className="relative w-1/2 ml-2 md:w-2/3 sm:ml-3 md:-ml-3 lg:-ml-6">
              <div className="cursor-pointer aspect-w-1 aspect-h-1 group hover:z-50 md:-translate-y-6">
                <img
                  src="/images/gallery6.jpg"
                  className="object-cover object-center w-full h-full duration-300 ease-in-out shadow-2xl rounded-2xl -rotate-3 md:-rotate-8 group-hover:rotate-0 group-hover:scale-110"
                  alt="Gallery hero 06"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Gallery;
