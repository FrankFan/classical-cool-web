import Activity from '@/components/Activity'
import Banner from '@/components/Banner'
import BookList from '@/components/BookList'
// import BookShow from "@/components/BookShow";
import ConnectWalletButton from '@/components/ConnectWalletButton'
import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { MobileHeader } from '@/components/MobileHeader'
import Record from '@/components/Record'
import './index.less'

export default function HomePage() {
  return (
    <div className='home-box'>
      <Header></Header>
      <MobileHeader />
      <Banner></Banner>
      <BookList></BookList>
      {/* <BookShow></BookShow> */}
      <Activity></Activity>
      {/* <Record></Record>
      <Footer></Footer> */}
      {/* <ConnectWalletButton></ConnectWalletButton> */}
    </div>
  )
}
