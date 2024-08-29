import Header from "./Headerr"
import Trending from "./Trending"
import Released from "./Released" 
import Top from "./Top Rated"
import Footer from "./Footer"

export default function Page() {
  return (
    <div className="bg-transparent">
        <Header />
        <Trending />
        <Released />
        <Top />
        <Footer />
    </div>
  )
}