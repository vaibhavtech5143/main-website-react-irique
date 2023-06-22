import About from "./pages/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import FAQPage from "./pages/Faq";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
// import All from "./components/Products/All";
import Hrms from "./components/Products/Hrms";
import Pms from "./components/Products/Pms";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ScrollToTop from "./Scroll_To_Top/Scrolltotop";
// import React, { useState } from 'react';




function App() {
  // const [isSectionVisible, setIsSectionVisible] = useState(true);
  // const { userId } = useParams();
  // const location = useLocation();

  // console.log(location.pathname);


  // const ScrollToTop = (props) => {
  //   const location = useLocation();
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, [location]);
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/about" element={<About></About>}></Route>
          <Route path="/faq" element={<FAQPage></FAQPage>}></Route>
          {/* <Route path="/products/all" element={<All></All>}></Route> */}
          <Route path="/products/hrms" element={<Hrms></Hrms>}></Route>
          <Route path="/products/pms" element={<Pms></Pms>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Routes>
        </ScrollToTop>
        <Footer></Footer>
      </BrowserRouter>
    </>
  );
}

export default App;
