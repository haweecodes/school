import Head from 'next/head';
import {
  About,
  ExclusiveFeatures,
  Features,
  Instructors,
  Pointers,
  ProductResponse,
  SectionResponse,
} from "@/constants/types";
import { findObjectByType } from "@/constants/utils";
import CourseTitle from "@/components/title";
import CoursePointers from "@/components/pointers";
import CourseExclusiveFeatures from "@/components/exclusiveContent";
import CourseDetail from "@/components/about";
import CourseTrailer from "@/components/trailer";
import CourseCTA from "@/components/cta";
import CourseChecklist from "@/components/checklist";
import RenderHTML from "@/components/htmlRenderer";
import CourseSections from "@/components/course-sections";
import FeaturesCard from "@/components/featuresCard";
import MetaTags from '@/components/metaTags';
import InstructorWrapper from '@/components/instructorWrapper';

const api =
  "https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course";

export const getStaticProps = async () => {
  const res = await fetch(api, {
    headers: {
      'X-TENMS-SOURCE-PLATFORM': 'web'
    }
  });
  const data = await res.json();
  return { props: { data, revalidate: 10,fallback: 'blocking' } };
};


export default function Home({ data }: { data: ProductResponse<any> }) {
  const response = data.data;
  const courseTitle = response?.title;
  const description = response?.description;

  const seoTitle = response?.seo.title
  const meta = response?.seo.defaultMeta

  const instructors: SectionResponse<Instructors> = findObjectByType({
    list: response?.sections,
    type: "instructors",
  });
  const features: SectionResponse<Features> = findObjectByType({
    list: response?.sections,
    type: "features",
  });
  const pointers: SectionResponse<Pointers> = findObjectByType({
    list: response?.sections,
    type: "pointers",
  });
  const featureExplanations: SectionResponse<ExclusiveFeatures> = findObjectByType({
    list: response?.sections,
    type: "feature_explanations",
  });
  const about: SectionResponse<About> = findObjectByType({
    list: response?.sections,
    type: "about",
  });

  return (
    <>
      <Head>
        <title>{seoTitle}</title>
        <MetaTags metaTags={meta} />
      </Head>
      <main className="container flex flex-col gap-4 md:flex-row md:gap-12 md:pt-10">
        <div className="order-2 flex-1 md:order-1  md:max-w-[calc(100%_-_348px)] lg:max-w-[calc(100%_-_448px)]">
          <CourseSections>
            {/* title */}
            <CourseTitle title={courseTitle} />
            {/* description */}
            <RenderHTML htmlContent={description} />
          </CourseSections>

          <CourseSections title={instructors?.name}>
            <InstructorWrapper detail={instructors} />
          </CourseSections>

          <CourseSections title={features?.name}>
            <div className="grid grid-cols-1 gap-4 rounded-md border bg-[#111827] p-6 md:grid-cols-2 md:gap-8">
              {features?.values?.map((features: Features) => {
                return (
                  <FeaturesCard key={features.title} features={features} />
                );
              })}
            </div>
          </CourseSections>

          <CourseSections title={pointers?.name}>
            <div className="rounded-md border p-6">
              <CoursePointers detail={pointers} />
            </div>
          </CourseSections>

          <CourseSections title={featureExplanations?.name}>
            <div className="grid grid-cols-1 divide-y rounded-md border px-5">
              {featureExplanations?.values?.map((features: ExclusiveFeatures) => {
                return (
                  <CourseExclusiveFeatures key={features.title} features={features} />
                );
              })}
            </div>

          </CourseSections>

          <CourseSections title={about?.name}>
            <div className="max-w-auto bg-white shadow dark:bg-gray-800 dark:border-gray-700">
              <div id="accordion-collapse" data-accordion="collapse">
                {about?.values?.map((about: About, i: number) => {
                  return (
                    <CourseDetail key={i} detail={about} index={i + 1} />
                  );
                })}
              </div>
            </div>
          </CourseSections>
        </div>
        <div className="order-1 w-full md:max-w-[330px] lg:max-w-[400px]">
          <CourseTrailer />
          <CourseSections>
            <CourseCTA content={response?.cta_text} />
            <div className="max-w-auto p-5 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <CourseChecklist checklist={response?.checklist} />
            </div>
          </CourseSections>
        </div>
      </main>
    </>
  );
}
