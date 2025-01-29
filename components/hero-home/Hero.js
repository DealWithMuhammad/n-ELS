import Link from "next/link";

function Hero() {
  return (
    <div
      className="min-h-[90vh] flex items-center justify-center text-center bg-cover bg-center w-full text-white relative overflow-hidden"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)), url('/images/LearnHome.jpg')",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <h1 className="mb-6 font-extrabold text-4xl md:text-6xl lg:text-7xl">
          Empower Your
          <span className="bg-gradient-to-r from-blue-500 to-blue-800 bg-clip-text text-transparent">
            Future With ELS
          </span>
        </h1>
        <div className="text-lg md:text-xl lg:text-2xl max-w-3xl mx-auto mb-8 font-light text-gray-200 leading-relaxed">
          Discover Your Potential at Egypt's Premier International School -
          Where Excellence Meets Compassion
        </div>

        <Link href="/about" passHref>
          <a className="text-lg font-medium text-white bg-primary-100 relative leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded_button outline-none hover:bg-primary-100 group h-[55px]">
            <span>Start Your Journey</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 ml-3 transition-transform duration-300 group-hover:translate-x-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-[12px]"></div>
          </a>
        </Link>

        <button
          type="button"
          className="mt-6 text-lg font-medium bg-white sm:mt-0 text-primary-100 sm:ml-6 relative leading-normal inline-flex items-center justify-center px-8 py-3 duration-300 ease-in-out rounded_button group cursor-pointer border-solid border-2 border-primary-100"
        >
          Register Now
          <svg
            className="ml-2"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.4"
              d="M22 12.0048C22 17.5137 17.5116 22 12 22C6.48842 22 2 17.5137 2 12.0048C2 6.48625 6.48842 2 12 2C17.5116 2 22 6.48625 22 12.0048Z"
              fill="#003056"
            />
            <path
              d="M16 12.0049C16 12.2576 15.9205 12.5113 15.7614 12.7145C15.7315 12.7543 15.5923 12.9186 15.483 13.0255L15.4233 13.0838C14.5881 13.9694 12.5099 15.3011 11.456 15.7278C11.456 15.7375 10.8295 15.9913 10.5312 16H10.4915C10.0341 16 9.60653 15.7482 9.38778 15.34C9.26847 15.1154 9.15909 14.4642 9.14915 14.4554C9.05966 13.8712 9 12.9769 9 11.9951C9 10.9657 9.05966 10.0316 9.16903 9.45808C9.16903 9.44836 9.27841 8.92345 9.34801 8.74848C9.45739 8.49672 9.65625 8.2819 9.90483 8.14581C10.1037 8.04957 10.3125 8 10.5312 8C10.7599 8.01069 11.1875 8.15553 11.3565 8.22357C12.4702 8.65128 14.598 10.051 15.4134 10.9064C15.5526 11.0425 15.7017 11.2087 15.7415 11.2467C15.9105 11.4605 16 11.723 16 12.0049Z"
              fill="#003056"
            />
          </svg>
        </button>
      </div>

      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-full h-full animate-pulse-slow opacity-10">
          <div className="w-full h-full bg-gradient-to-r from-cyan-500/20 to-blue-600/20"></div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
