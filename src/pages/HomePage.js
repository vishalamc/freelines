import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FcBullish } from "react-icons/fc";

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
          {/* Registration Button */}
      <a
        href="https://forms.gle/iPvEwqVQECJpjkgk7"
        target="_blank"
        rel="noopener noreferrer"
        className="register-btn"
      >
        👉 Click Here to Register
      </a>

      {/* Showcase Image */}
      <div className="showcase-container">
        <img src="/showcase.png" alt="Showcase" className="showcase-img" />
      </div>

      {/* Navigation Buttons */}
      <div className="top-buttons">
        <a href="#learn-section" className="nav-link-btn">Software Solutions</a>
        <a href="#practice-section" className="nav-link-btn">Courses and Classes</a>
      </div>

      {/* Academy Section */}
      <h2 id="practice-section" className="section-title">Join any course or class for just ₹500 per month.</h2>
      <div className="cards-container">
        {practiceCourses.map((course, i) => (
          <div className="card" key={i}>
            <img src={course.img} alt={course.title} className="card-img" />
            <h2>{course.title}</h2>
            <Link to={course.link} className="learn-btn">Course Details</Link>
          </div>
        ))}
      </div>

      {/* Software Solutions Section */}
      <h2 id="learn-section" className="section-title">Software Solutions</h2>
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

