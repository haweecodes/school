import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { Inter } from 'next/font/google'
import { ProductPageData, ProductResponse } from '@/constants/types'
import { findObjectByType } from '@/constants/utils'
import Description from '@/components/description/product-description'
import CourseFeatures from '@/components/features'
import CourseTitle from '@/components/title/product-title'
import CourseInstructors from '@/components/instructors'
import CoursePointers from '@/components/pointers'
import CourseExclusiveFeatures from '@/components/exclusiveContent'
import CourseDetail from '@/components/about'
import CourseTrailer from '@/components/trailer'
import CourseCTA from '@/components/cta'
import CourseChecklist from '@/components/checklist'

const inter = Inter({ subsets: ['latin'] })
const api = 'https://api.10minuteschool.com/discovery-service/api/v1/products/ielts-course'

export const getServerSideProps = (async () => {
  const res = await fetch(api)
  const data = await res.json()
  return { props: { data } }
})

export default function Home({ data }: {
  data: ProductResponse
}) {
  const response = data.data;
  const title = response?.title;
  const description = response?.description;
  const instructors = findObjectByType({list: response?.sections, type: 'instructors'})
  const features = findObjectByType({list: response?.sections, type: 'features'})
  const pointers = findObjectByType({list: response?.sections, type: 'pointers'})
  const featureExplanations = findObjectByType({list: response?.sections, type: 'feature_explanations'})
  const detail = findObjectByType({list: response?.sections, type: 'about'})
  const trailer = findObjectByType({list: response?.sections, type: 'content_preview'})
  console.log(response);

  return (
    <main>
      <div className="detailsContainer">
        <CourseTitle title={title} />
        <Description description={description} />
        <CourseInstructors detail={instructors}/>
        <CourseFeatures features={features}/>
        <CoursePointers pointers={pointers}/>
        <CourseExclusiveFeatures features={featureExplanations}/>
        <CourseDetail detail={detail}/>
      </div>
      <div className="infoContainer">
        <CourseTrailer content={trailer}/>
        <CourseCTA content={response?.cta_text}/>
        <CourseChecklist checklist={response?.checklist}/>
      </div>
    </main>
  )
}
