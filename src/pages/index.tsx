import Activity from '@/components/Activity'
import Banner from '@/components/Banner'
import BookList from '@/components/BookList'
// import BookShow from "@/components/BookShow";
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { MobileHeader } from '@/components/MobileHeader'
import Record from '@/components/Record'
import RoadMap from '@/components/Roadmap'
import Team from '@/components/Team'
import './index.less'

export default function HomePage() {
  return (
    <div className='home-box'>
      <Header />
      <MobileHeader />
      <Banner />
      <BookList />
      {/* <BookShow></BookShow> */}
      {/* <Activity></Activity> */}
      <RoadMap />
      <Team />
      <Footer />
    </div>
  )
}
