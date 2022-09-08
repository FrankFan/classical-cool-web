import Activity from "@/components/Activity";
import Banner from "@/components/Banner";
import BookList from "@/components/BookList";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Record from "@/components/Record";

export default function HomePage() {
  return (
    <div className="home-box">
      <Header></Header>
      <Banner></Banner>
      <BookList></BookList>
      <Activity></Activity>
      <Record></Record>
      <Footer></Footer>
    </div>
  );
}
