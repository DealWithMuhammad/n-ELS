import { POSTS_PER_PAGE, LOCALES } from "./constant";
import {
  CLASS_GRAPHQL_FIELDS,
  COVER_GRAPHQL_FIELDS,
  FACEBOOK_GALLERY_GRAPHQL_FIELDS,
  FAQ_GRAPHQL_FIELDS,
  JOB_DETAIL_GRAPHQL_FIELDS,
  JOB_GRAPHQL_FIELDS,
  NAVIGATION_GRAPHQL_FIELDS,
  PAGES_GRAPHQL_FIELDS,
  PAGE_DETAIL_GRAPHQL_FIELDS,
  PARAGRAPH_GRAPHQL_FIELDS,
  POST_DETAIL_GRAPHQL_FIELDS,
  POST_GRAPHQL_FIELDS,
  SCHOOL_DIVISIONS_GRAPHQL_FIELDS,
  SCHOOL_DIVISION_DETAIL_GRAPHQL_FIELDS,
  STAT_GRAPHQL_FIELDS,
  TEACHER_GRAPHQL_FIELDS,
  TESTIMONIAL_GRAPHQL_FIELDS,
  VIDEO_GRAPHQL_FIELDS,
} from "./query";
import {
  extractClassEntries,
  extractCoverEntries,
  extractFacebookGalleryEntries,
  extractFaqEntries,
  extractJob,
  extractJobEntries,
  extractNavigationsEntries,
  extractPage,
  extractPagesEntries,
  extractParagraphsEntries,
  extractPost,
  extractPostEntries,
  extractSchoolDivision,
  extractSchoolDivisionsEntries,
  extractStatsEntries,
  extractStepsEntries,
  extractTeacherEntries,
  extractTestimonialEntries,
  extractVideoEntries,
} from "./utils";

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json());
}
export async function getTotalPostNumber() {
  const response = await fetchGraphQL(
    `query {
      postCollection {
       total
      }
    }`
  );
  const totalPosts = response.data.postCollection.total
    ? response.data.postCollection.total
    : 0;
  return totalPosts;
}
export async function getPaginatedPosts(locale, page) {
  const skipMultiplier = page === 1 ? 0 : page - 1;
  const skip = skipMultiplier > 0 ? POSTS_PER_PAGE * skipMultiplier : 0;
  const entries = await fetchGraphQL(
    `query {
      postCollection(limit: ${POSTS_PER_PAGE}, skip: ${skip},order: date_DESC, locale: "${LOCALES[locale]}") {
        total
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  const paginatedPostSummaries = entries?.data?.postCollection
    ? entries.data.postCollection
    : { total: 0, items: [] };

  return paginatedPostSummaries;
}

export async function getVideoForHome() {
  const entries = await fetchGraphQL(
    `query {
      videoCollection(limit: 10) {
        items {
          ${VIDEO_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractVideoEntries(entries);
}
export async function getAllJobs(locale) {
  const entries = await fetchGraphQL(
    `query {
      jobCollection( locale: "${LOCALES[locale]}") {
        items {
          ${JOB_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractJobEntries(entries);
}
export async function getJob(slug, locale) {
  const entry = await fetchGraphQL(
    `query {
      jobCollection(where: { slug: "${slug}" },locale: "${LOCALES[locale]}", limit: 1) {
        items {
          ${JOB_DETAIL_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return extractJob(entry);
}
export async function getTeachers(locale) {
  const entries = await fetchGraphQL(
    `query {
      teacherCollection( locale: "${LOCALES[locale]}") {
        items {
          ${TEACHER_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractTeacherEntries(entries);
}

export async function getGalleries(locale) {
  const entries = await fetchGraphQL(
    `query {
      facebookGalleryCollection( locale: "${LOCALES[locale]}") {
        items {
          ${FACEBOOK_GALLERY_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractFacebookGalleryEntries(entries);
}
export async function getAllSchoolDivisions() {
  const entries = await fetchGraphQL(
    `query {
      schoolDivisionCollection {
        items {
          ${SCHOOL_DIVISIONS_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractSchoolDivisionsEntries(entries);
}
export async function getSchoolDivision(slug, locale) {
  const entry = await fetchGraphQL(
    `query {
      schoolDivisionCollection(where: { slug: "${slug}" },locale: "${LOCALES[locale]}", limit: 1) {
        items {
          ${SCHOOL_DIVISION_DETAIL_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return extractSchoolDivision(entry);
}
export async function getClasses() {
  const entries = await fetchGraphQL(
    `query {
      classCollection {
        items {
          ${CLASS_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractClassEntries(entries);
}

export async function getAllPages() {
  const entries = await fetchGraphQL(
    `query {
      pageCollection {
        items {
          ${PAGES_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractPagesEntries(entries);
}
export async function getPage(slug, locale) {
  const entry = await fetchGraphQL(
    `query {
      pageCollection(where: { slug: "${slug}" },locale: "${LOCALES[locale]}", limit: 1) {
        items {
          ${PAGE_DETAIL_GRAPHQL_FIELDS}
        }
      }
    }`
  );

  return extractPage(entry);
}

export async function getParagraphs(locale) {
  const entries = await fetchGraphQL(
    `query {
      paragraphCollection( locale: "${LOCALES[locale]}") {
        items {
          ${PARAGRAPH_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractParagraphsEntries(entries);
}
export async function getSteps(locale) {
  const entries = await fetchGraphQL(
    `query {
      paragraphCollection(where: {type: "Process" },locale: "${LOCALES[locale]}", order: title_ASC,) {
        items {
          ${PARAGRAPH_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractStepsEntries(entries);
}
export async function getStats(locale) {
  const entries = await fetchGraphQL(
    `query {
      statCollection(locale: "${LOCALES[locale]}", limit:6) {
        items {
          ${STAT_GRAPHQL_FIELDS}
        }
      }
    }`
  );
  return extractStatsEntries(entries);
}

const dummyPosts = [
  {
    title: "School Science Fair 2023",
    slug: "science-fair-2023",
    excerpt: "Our annual science fair showcased amazing student projects",
    date: "2023-03-15T00:00:00.000Z",
    coverImage: {
      url: "https://source.unsplash.com/random/800x600?sig=1&science",
      title: "Science Fair Exhibition",
    },
    content:
      "Students demonstrated innovative projects ranging from renewable energy solutions to robotics...",
  },
  {
    title: "Sports Day Highlights",
    slug: "sports-day-2023",
    excerpt: "Annual sports day brought out the best in our students",
    date: "2023-04-02T00:00:00.000Z",
    coverImage: {
      url: "https://source.unsplash.com/random/800x600?sig=2&sports",
      title: "Sports Day",
    },
    content: "Track and field events saw record-breaking performances...",
  },
];

const dummyTestimonials = [
  {
    name: "John Doe",
    role: "Parent",
    text: "This school has transformed my child's learning experience",
    avatar: {
      url: "https://source.unsplash.com/random/100x100?sig=3&portrait",
    },
  },
  {
    name: "Jane Smith",
    role: "Alumni",
    text: "The foundation I received here helped me succeed in college",
    avatar: {
      url: "https://source.unsplash.com/random/100x100?sig=4&portrait",
    },
  },
];

const dummyFaq = [
  {
    question: "What are the school hours?",
    answer: "Our regular school hours are from 8:00 AM to 3:00 PM",
  },
  {
    question: "Do you offer extracurricular activities?",
    answer: "Yes, we offer sports, arts, and various clubs",
  },
];

const dummyNavigations = [
  { title: "Home", path: "/" },
  { title: "About", path: "/about" },
  { title: "Education Program", path: "/programs" },
  { title: "Registration", path: "/contact" },
];

const dummyCoverImages = [
  {
    image: {
      url: "/images/homeBanner.png",
      title: "School Campus",
    },
    facebookLink: "#",
    post: { slug: "campus-tour" },
  },
  {
    image: {
      url: "/images/schoolHero.png",
      title: "Modern Classroom",
    },
    facebookLink: "#",
  },
];

// Modified API functions to return dummy data
export async function getPostsForHome(locale) {
  return dummyPosts.slice(0, 4);
}

export async function getTestimonials(locale) {
  return dummyTestimonials;
}

export async function getFaq(locale) {
  return dummyFaq;
}

export async function getNavigation(locale) {
  return dummyNavigations;
}

export async function getCoverImage(locale) {
  return dummyCoverImages;
}

export async function getAllPosts(locale) {
  return dummyPosts;
}

export async function getAllPostsWithSlug(locale) {
  return dummyPosts.filter((post) => post.slug);
}

export async function getPostAndMorePosts(slug, locale) {
  const post = dummyPosts.find((p) => p.slug === slug);
  const morePosts = dummyPosts.filter((p) => p.slug !== slug).slice(0, 3);
  return { post, morePosts };
}
