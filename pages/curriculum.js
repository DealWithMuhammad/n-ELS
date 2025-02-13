import Layout from "../components/layout";
import { getNavigation } from "../lib/api";
import AnimationRevealPage from "../helpers/AnimationRevealPage";
import CurriculumOverview from "../components/CurriculumSection/curriculum-overview";

export default function CurriculumPage({ navigations }) {
  return (
    <Layout navigations={navigations}>
      <AnimationRevealPage>
        <CurriculumOverview />
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
