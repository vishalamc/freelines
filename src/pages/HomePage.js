import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { FcBullish } from "react-icons/fc";



const ComputerClasses = [
   
  { title: "Computer Courses", img: "/computer.png", link: "/computercourse" },
  { title: "ADCA", img: "/computer.png", link: "/adca" },
  { title: "PGDCA", img: "/computer.png", link: "/pgdca" },
  { title: "DCA", img: "/computer.png", link: "/dca" },
  { title: "BCC", img: "/computer.png", link: "/bcc" },
  { title: "Tally", img: "/computer.png", link: "/tally" },
  { title: "CCC", img: "/computer.png", link: "/ccc" },
  { title: "CCT", img: "/computer.png", link: "/typing1" },

];

const programmingCourses = [

  { title: "C", img: "/BCA.png", link: "/videolectures" },
  { title: "C++", img: "/MCA.png", link: "#" },
  { title: "Java", img: "/btech.png", link: "#" },
   { title: "Python", img: "/btech.png", link: "#" },
   { title: "Vb.Net", img: "/btech.png", link: "#" },
   { title: "PHP", img: "/btech.png", link: "#" },
   { title: "Website or Web App", img: "/website.jpg", link: "#" },
   { title: "Mobile App", img: "/mobile.jpg", link: "#" }
];

const schoolClasses = [
   
  { title: "Physics", img: "/account.jpg", link: "/comingsoon" },
  { title: "Chemistry", img: "account.jpg", link: "/ComingSoon" },
  { title: "Math", img: "/account.jpg", link: "/ComingSoon" }

];

export default function Home() {
  return (
    <div className="homepage">
      {/* Header Section */}
      <h1 className="home-title">Future Lines</h1>
      <h2 className="subtitle">Join Future Lines — Your Path to Success!</h2>
          {/* Registration Button */}
       <h2 id="practice-section" className="section-title">Enrollment Fees ₹300 Only</h2>
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
	 <a href="#computercourse-section" className="nav-link-btn">Computer Courses</a>
        <a href="#learn-section" className="nav-link-btn">Class 6 to Class 10</a>
    	<a href="#videolecture-section" className="nav-link-btn">Video Lectures</a>
      </div>



{/* Class 6 to 10 Section */}
      <h2 id="computercourse-section" className="section-title">Join any course or class for just ₹500 per month.</h2>
      <div className="cards-container">
        {ComputerClasses.map((course, i) => (
          <div className="card" key={i}>
            <img src={course.img} alt={course.title} className="card-img" />
            <h2>{course.title}</h2>
            <Link to={course.link} className="learn-btn">Go for Details</Link>
          </div>
        ))}
      </div>


	{/* Video Lecture Section */}
      <h2 id="videolecture-section" className="section-title">Join any course or class for just ₹500 per month.</h2>
      <div className="cards-container">
        {programmingCourses.map((course, i) => (
          <div className="card" key={i}>
            <img src={course.img} alt={course.title} className="card-img" />
            <h2>{course.title}</h2>
            <Link to={course.link} className="learn-btn">Video Lectures</Link>
          </div>
        ))}
      </div>

      {/* Class 6 to 10 Section */}
      <h2 id="learn-section" className="section-title">Class 6 To Class 10th </h2>
      <div className="cards-container">
        {schoolClasses.map((course, i) => (
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
