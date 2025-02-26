import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"

const Layout = () => {
  return (
    <div className="w-screen bg-[#F4F3FC] text-[#28253b] font-[Figtree] ">
      <Navbar />
      <main className="w-screen flex justify-center overflow-hidden ">
        <Outlet /> {/* This is where child routes will be rendered */}
      </main>
      <Footer />
    </div>
  )
}

export default Layout