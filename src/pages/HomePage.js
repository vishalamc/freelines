import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FcBullish } from "react-icons/fc";

const learnCourses = [
  { icon: <FcBullish className="course-icon" />, title: "Computer Courses", desc: "Smart Teaching • Regular Tests", link: "/ComingSoon" },
  { icon: <FcBullish className="course-icon" />, title: "BCA", desc: "Smart Teaching • Regular Tests", link: "/ComingSoon" },
  { icon: <FcBullish className="course-icon" />, title: "MCA", desc: "Smart Teaching • Regular Tests", link: "/ComingSoon" },
  { icon: <FcBullish className="course-icon" />, title: "BTech(CSE)", desc: "Smart Teaching • Regular Tests", link: "/ComingSoon" }
];

const practiceCourses = [
  { title: "Computer Courses", img: "/maths.jpg", link: "/ComingSoon" },
  { title: "BCA", img: "/gamification.jpg", link: "/ComingSoon" },
  { title: "MCA", img: "/learncomputer.jpg", link: "/ComingSoon" },
  { title: "BTech(CSE)", img: "/learncomputer.jpg", link: "/ComingSoon" },
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
