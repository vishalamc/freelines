import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FcBullish } from "react-icons/fc";

const learnCourses = [
  { icon: <FcBullish className="course-icon" />, title: "Web Development", desc: "Smart Teaching • Regular Tests", link: "/comingsoon" },
  { icon: <FcBullish className="course-icon" />, title: "BCA", desc: "Smart Teaching • Regular Tests", link: "/comingsoon" },
  { icon: <FcBullish className="course-icon" />, title: "MCA", desc: "Smart Teaching • Regular Tests", link: "/comingsoon" },
  { icon: <FcBullish className="course-icon" />, title: "BTech(CSE)", desc: "Smart Teaching • Regular Tests", link: "/comingsoon" }
];

const practiceCourses = [
  { title: "Computer Courses", img: "/computer.png", link: "/computercourse" },
  { title: "BCA Class", img: "/BCA.png", link: "/bcacourse" },
  { title: "MCA Class", img: "/MCA.png", link: "/mcacourse" },
  { title: "BTech(CSE) Class", img: "/btech.png", link: "/btechcourse" },
];
const technologySolutions = [
  { title: "Website or Web App", img: "/website.jpg", link: "/comingsoon" },
  { title: "Mobile App", img: "/mobile.jpg", link: "/ComingSoon" },
  { title: "Accounting Software", img: "/account.jpg", link: "/ComingSoon" },
  { title: "Stock Management", img: "/stock.jpg", link: "/ComingSoon" },
];

export default function Home() {
  return (
    <div className="homepage">
      {/* Header Section */}
      <h1 className="home-title">Future Lines</h1>
      <h2 className="subtitle">Join Future Lines — Your Path to Success!</h2>
      <p className="admission-text animated-admission">🎯 <strong>Registration Open — Limited Seats!</strong></p>

      {/* Showcase Image */}
      <div className="showcase-container">
        <img src="/showcase.png" alt="Showcase" className="showcase-img" />
      </div>

      {/* Top Buttons */}
      <div className="top-buttons">
        <a href="#learn-section" className="top-btn learn-top">Learn</a>
        <a href="#practice-section" className="top-btn practice-top">Practice</a>
      </div>
 

      {/* Practice Section */}
      <h2 id="practice-section" className="section-title">Future Lines-Academy</h2>
      <div className="cards-container">
        {practiceCourses.map((course, i) => (
          <div className="card" key={i}>
            <img src={course.img} alt={course.title} className="card-img" />
            <h2>{course.title}</h2>
            <Link to={course.link} className="learn-btn">Course Details</Link>
          </div>
        ))}
      </div>

      {/* Learn Section */}
      <h2 id="learn-section" className="sectin-title">Future Lines-Technology Solutions</h2>
      <div className="cards-container">
        {technologySolutions.map((course, i) => (
          <div className="card" key={i}>
            <img src={course.img} alt={course.title} className="card-img" />
            <h2>{course.title}</h2>
            <Link to={course.link} className="learn-btn">Go for Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
