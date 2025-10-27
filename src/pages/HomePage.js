import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FcBullish } from "react-icons/fc";
const learnCourses = [
  { icon: <FcBullish className="course-icon" />, title: "9th Class", desc: "Master the foundations of programming in C.", link: "/learnc" },
  { icon: <FcBullish className="course-icon" />, title: "10th Class", desc: "Learn object-oriented programming with C++.", link: "/ComingSoon" },
  { icon: <FcBullish className="course-icon" />, title: "BCA/MCA", desc: "Build robust and scalable applications in Java.", link: "/ComingSoon" },
  { icon: <FcBullish className="course-icon" />, title: "BTech/MTech", desc: "Learn Python for AI, data science, and more.", link: "/ComingSoon" }
];

const practiceCourses = [
  { title: "Math", img: "/maths.jpg", link: "/ComingSoon" },
  { title: "Science", img: "/gamification.jpg", link: "/gamedashboard" },
  { title: "Computer Science", img: "/learncomputer.jpg", link: "/videolectures" },
  { title: "Website Development", img: "/lang.jpg", link: "/ComingSoon" }
];

export default function Home() {
  return (
    <div className="homepage">
      <h1 className="home-title">Future Lines</h1>
      <p className="tagline">Join Future Lines — Your Path to Success!</p>

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
            <Link to={course.link} className="learn-btn">Online Materials</Link>
          </div>
        ))}
      </div>
    </div>
  );
}



