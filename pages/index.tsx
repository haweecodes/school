import Image from 'next/image'
import { Inter } from 'next/font/google'
import ProductTitle from '@/components/title/product-title'
import ProductDescription from '@/components/description/product-description'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const title = "IELTS Course by Munzereen Shahid";
  const description = `Take complete preparation of Academic IELTS and General Training IELTS in one course! By enrolling in the IELTS course, get videos, lecture sheets, IELTS Reading and Listening Mock Tests, Doubt Solving Live Classes and Munzereen Shahid's "ঘরে বসে IELTS প্রস্তুতি" book for free! So, enroll in our IELTS Course today to get the best preparation for the IELTS exam and achieve the desired band score!`

  return (
    <main>
      <div className="detailsContainer">
        <ProductTitle title={title} />
        <ProductDescription description={description}/>
      </div>
      <div className="infoContainer"></div>
    </main>
  )
}
