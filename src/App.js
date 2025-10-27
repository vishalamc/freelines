import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header"; // Make sure file name matches this import
import Footer from "./components/Footer";
import ContactCard from "./pages/ContactCard";
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

        <Route path="/contactcard" element={<ContactCard />} />
        <Route path="/about-project" element={<AboutPage />} />
        <Route path="/towerofhanoi" element={<Towerofhanoi numDisks={3} />} />
        <Route path="/computerbuilder" element={<Computerbuilder />} />
        <Route path="/codejumble" element={<Codejumble />} />
      </Routes>
      <Footer />
  </ErrorBoundary>
    </Router>
  );
}

export default App;
