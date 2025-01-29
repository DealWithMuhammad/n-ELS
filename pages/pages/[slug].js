import Layout from "../../components/layout";
import { useRouter } from "next/router";
import {
  getAllPages,
  getNavigation,
  getPage,
  getPostsForHome,
} from "../../lib/api";
import AnimationRevealPage from "../../helpers/AnimationRevealPage";
import CTA from "../../components/cta";
// import NotFoundPage from "../404";
import PostBody from "../../components/post/post-body";
import BreadCrumb from "../../components/breadcrumb";
import RecentPosts from "../../components/recent-posts";
const Page = ({ page, posts, navigations }) => {
  const router = useRouter();

  // Ensure content is available for rendering
  const pageContent = page?.content || ""; // Fallback to an empty string if content is missing

  return (
    <Layout navigations={navigations}>
      <div className="max-w-screen-xl mx-auto mt-12">
        <BreadCrumb title={page?.title} slug={page?.slug} />
      </div>
      <div className="max-w-screen-xl flex flex-col lg:flex-row mx-auto">
        {/* <PostBody
          content={pageContent}
          className="max-w-screen-md pt-6 mx-3 md:mx-auto"
        /> */}
        {/* <RecentPosts recentPosts={posts} /> */}
      </div>

      <CTA />
    </Layout>
  );
};

export default Page;

export async function getStaticProps({ params, locale }) {
  const data = await getPage(params.slug, locale);

  // Ensure data has the structure you expect
  const posts = (await getPostsForHome(locale)) ?? [];
  const navigations = (await getNavigation(locale)) ?? [];

  // Make sure the `page` object is valid (fallback to an empty object if not)
  return {
    props: {
      page: data ?? {}, // If no data, pass an empty object instead of null
      posts,
      navigations,
    },
    revalidate: 1,
  };
}

export async function getStaticPaths() {
  const pages = await getAllPages();

  return {
    paths: pages?.map(({ slug }) => `/pages/${slug}`) ?? [],
    fallback: true, // Keep fallback true, which means pages will be generated on demand
  };
}
