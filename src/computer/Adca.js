import React from "react";
import { useNavigate } from "react-router-dom";

const ContactCard = () => {
  const navigate = useNavigate();

  return (
    <section className="contact-section">
      <h2>ADVANCE DIPLOMA IN COMPUTER APPLICATION</h2>
 <div className="contact-card">
        <ul className="course-list">
          <li>Computer Fundamentals & Basic Hardware Concepts</li>
          <li>MS Office Tools with Windows File & Folder Management</li>
          <li>Internet, Email & HTML-Based Web Designing</li>
          <li>Tally ERP with GST & Inventory Management</li>
          <li>MS PowerPoint</li>
           </ul>
           <div className="contact-item">
          <span className="label">Duration:</span>
          <span className="value">12 Months</span>
</div>
      </div>
        	
      {/* Buttons outside card */}
      <div className="contact-buttons">
        <button onClick={() => navigate("/computercourse")}>⬅ Back to Computer Courses</button>
        <button onClick={() => navigate("/")}>⬅ Back to Home</button>
      </div>

      <style>{`
        .contact-section {
          text-align: center;
          padding: 60px 20px;
          background: #4d0864ff;
        }
        .contact-section h2 {
          font-size: 2.2rem;
          margin-bottom: 40px;
          color: #FFD700; 
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .contact-card {
          max-width: 400px;
          margin: 0 auto;
          background: #830e70ff;
          border-radius: 20px;
          padding: 30px 25px;
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.5), 0 0 40px rgba(255, 215, 0, 0.3);
          border: 2px solid #FFD700;
          position: relative;
          overflow: hidden;
          text-align: left;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(255, 215, 0, 0.7), 0 10px 20px rgba(255, 215, 0, 0.5);
        }
        .contact-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
        }
        .label {
          font-weight: 600;
          color: #FFD700;
        }
        .value {
          font-weight: 500;
          color: #FFD700;
        }
        .socials {
          margin-top: 25px;
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        .socials a img {
          width: 32px;
          height: 32px;
          filter: brightness(0) invert(1);
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .socials a:hover img {
          transform: scale(1.2);
          filter: drop-shadow(0 0 8px #FFD700);
        }
        .contact-buttons {
          margin-top: 40px;
          display: flex;
          justify-content: center;
          gap: 20px;
        }
        .contact-buttons button {
          padding: 10px 25px;
          font-size: 16px;
          font-weight: 600;
          color: #FFD700;
          background: transparent;
          border: 2px solid #FFD700;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .contact-buttons button:hover {
          background: #FFD700;
          color: #111;
          transform: translateY(-3px);
          box-shadow: 0 8px 15px rgba(255, 215, 0, 0.5);
        }
      `}</style>
    </section>
  );
};

export default ContactCard;
