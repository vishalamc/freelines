import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FcBullish } from "react-icons/fc";
const learnCourses = [
  { icon: <FcBullish className="course-icon" />, title: "9th Class", desc: "Smart Teaching • Regular Tests", link: "/ComingSoon" },
  { icon: <FcBullish className="course-icon" />, title: "10th Class", desc: "Smart Teaching • Regular Tests", link: "/ComingSoon" },
  { icon: <FcBullish className="course-icon" />, title: "BCA/MCA", desc: "Smart Teaching • Regular Tests", link: "/ComingSoon" },
  { icon: <FcBullish className="course-icon" />, title: "BTech/MTech", desc: "Smart Teaching • Regular Tests", link: "/ComingSoon" }
];

const practiceCourses = [
  { title: "Math", img: "/maths.jpg", link: "/ComingSoon" },
  { title: "Science", img: "/gamification.jpg", link: "/ComingSoon" },
  { title: "Computer Science", img: "/learncomputer.jpg", link: "/ComingSoon" },
  { title: "Website Development", img: "/lang.jpg", link: "/ComingSoon" }
];

export default function Home() {
  return (
    <div className="homepage">
      <h1 className="home-title">Future Lines</h1>
<p className="tagline">
    <strong>Join Future Lines — Your Path to Success!</strong>
    <br /><br />
    कक्षा 9वीं और 10वीं (विज्ञान और गणित) के लिए विशेष कोचिंग कक्षाएँ
    <br />
    कंप्यूटर कोर्स — 6 माह / 1 वर्ष के डिप्लोमा प्रोग्राम
    <br />
    BCA, MCA, B.Tech, M.Tech छात्रों के लिए कोचिंग कक्षाएँ
    <br />
    अपनी खुद की वेबसाइट यहाँ बनाएं!
  </p>

     {/* Showcase Image */}
      <div className="showcase-container">
        <img src="/showcase.png" alt="Showcase" className="showcase-img" />
      </div>
  
      {/* Top Buttons */}
      <div className="top-buttons">
        <a href="#learn-section" className="top-btn learn-top">Learn</a>
        <a href="#practice-section" className="top-btn practice-top">Practice</a>
      </div>

      {/* Learn Section */}
      <h2 id="learn-section" className="section-title">Join</h2>
      <div className="cards-container">
        {learnCourses.map((course, i) => (
          <div className="card" key={i}>
            <div className="icon">{course.icon}</div>
            <h2>{course.title}</h2>
            <p>{course.desc}</p>
            <Link to={course.link} className="learn-btn">Learn</Link>
          </div>
        ))}
      </div>

      {/* Practice Section */}
      <h2 id="practice-section" className="section-title">Practice</h2>
      <div className="cards-container">
        {practiceCourses.map((course, i) => (
          <div className="card" key={i}>
            <img src={course.img} alt={course.title} className="card-img" />
            <h2>{course.title}</h2>
            <Link to={course.link} className="learn-btn">Reading Materials</Link>
          </div>
        ))}
      </div>
    </div>
  );
}






