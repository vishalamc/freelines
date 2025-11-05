import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header"; // Make sure file name matches this import
import Footer from "./components/Footer";
import ContactCard from "./pages/ContactCard";
import Authorizations from "./pages/Authorizations";
import ContactUs from "./pages/ContactUs";
import AboutPage from "./pages/About-Project";
import ScrollToTop from "./components/ScrollToTop";
import ErrorBoundary from "./components/ErrorBoundary";

import HomePage from "./pages/HomePage";
import Videolectures from "./pages/Videolectures";

// Games pages
import Towerofhanoi from "./pages/games/Towerofhanoi";
import Computerbuilder from "./pages/games/Computerbuilder";
import Codejumble from "./pages/games/Codejumble";
// Computer Course Pages
import ComputerCourse from "./pages/ComputerCourse";
import ADCA from "./computer/Adca";
import DCA from "./computer/Dca";
import BCC from "./computer/Bcc";
import PGDCA from "./computer/Pgdca";
import TALLY from "./computer/Tally";
import CCC from "./computer/Ccc";
// BCA Class Pages
import BcaCourse from "./pages/BcaCourse";
// MCA Class Pages
import McaCourse from "./pages/McaCourse"
// Btech Class Pages
import BtechCourse from "./pages/BtechCourse"
// Other pages
import ComingSoon from "./pages/ComingSoon";
import Gamedashboard from "./pages/Gamedashboard";
import Myportfolio from "./pages/Myportfolio";

function App() {
  return (
    <Router>
    <ErrorBoundary>
      <Header />
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videolectures" element={<Videolectures />} />
        <Route path="/ComingSoon" element={<ComingSoon />} />
        <Route path="/myportfolio" element={<Myportfolio />} />
         <Route path="/contactus" element={<ContactUs />} />
        <Route path="/gamedashboard" element={<Gamedashboard />} />
        <Route path="/authorizations" element={<Authorizations />} />
       
        <Route path="/computercourse" element={<ComputerCourse />} />
        <Route path="/bcacourse" element={<BcaCourse />} />
        <Route path="/mcacourse" element={<McaCourse />} />
        <Route path="/btechcourse" element={<BtechCourse />} />

        <Route path="/contactcard" element={<ContactCard />} />
        <Route path="/about-project" element={<AboutPage />} />
        <Route path="/towerofhanoi" element={<Towerofhanoi numDisks={3} />} />
        <Route path="/computerbuilder" element={<Computerbuilder />} />
        <Route path="/codejumble" element={<Codejumble />} />
      
       {/* ✅ Computer Course Page Route */}
<Route path="/adca" element={<ADCA />} />
<Route path="/dca" element={<DCA />} />
<Route path="/bcc" element={<BCC />} />
<Route path="/pgdca" element={<PGDCA />} />
<Route path="/tally" element={<TALLY />} />
<Route path="/ccc" element={<CCC />} />

      </Routes>
      <Footer />
  </ErrorBoundary>
    </Router>
  );
}

export default App;
