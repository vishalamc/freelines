import React from "react";
import { useNavigate } from "react-router-dom";

const ContactCard = () => {
  const navigate = useNavigate();

  return (
    <section className="contact-section">
      <h2>MCA Tution Class</h2>

      <div className="contact-card">
        <div className="course-description" lang="hi">
          यह कोर्स उन विद्यार्थियों के लिए बनाया गया है जो Master of Computer Applications (MCA) के प्रत्येक विषय को गहराई से समझना चाहते हैं और अपने विश्वविद्यालय परीक्षाओं, प्रोजेक्ट्स, तथा प्लेसमेंट प्रिपरेशन में उत्कृष्ट प्रदर्शन करना चाहते हैं।
          <br /><br />
          We offer complete support for university exams, internal assessments, and project work.
        </div>

        <div className="contact-item">
          <span className="label">Duration:</span>
          <span className="value">Monthly Basis</span>
        </div>
      </div>

      {/* Buttons outside card */}
      <div className="contact-buttons">
        <button onClick={() => navigate("/")}>⬅ Back to Home</button>
      </div>

      <style>{`
        .contact-section {
          text-align: center;
          padding: 60px 20px;
          background: #3d0322ff;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        }

        .contact-section h2 {
          font-size: 2.2rem;
          margin-bottom: 40px;
          color: #FFD700; 
          text-transform: uppercase;
          letter-spacing: 1px;
          animation: fadeInDown 1.2s ease;
        }

        .contact-card {
          max-width: 450px;
          margin: 0 auto;
          background: #420515ff;
          border-radius: 20px;
          padding: 30px 25px;
          box-shadow: 0 0 20px rgba(255, 215, 0, 0.5), 0 0 40px rgba(255, 215, 0, 0.3);
          border: 2px solid #FFD700;
          position: relative;
          overflow: hidden;
          text-align: left;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          animation: fadeInUp 1.5s ease;
        }

        .contact-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(255, 215, 0, 0.7), 0 10px 20px rgba(255, 215, 0, 0.5);
        }

        .course-description {
          color: #fff;
          line-height: 1.6;
          font-size: 16px;
          margin-bottom: 20px;
        }

        .contact-item {
          display: flex;
          justify-content: space-between;
          margin-bottom: 15px;
          color: #FFD700;
          font-size: 17px;
        }

        .label {
          font-weight: 600;
        }

        .value {
          font-weight: 500;
        }

        .contact-buttons {
          margin-top: 40px;
          display: flex;
          justify-content: center;
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
          animation: fadeIn 2s ease-in;
        }

        .contact-buttons button:hover {
          background: #FFD700;
          color: #111;
          transform: translateY(-3px);
          box-shadow: 0 8px 15px rgba(255, 215, 0, 0.5);
        }

        /* Animations */
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        /* Responsive Design */
        @media (max-width: 600px) {
          .contact-card {
            width: 90%;
            padding: 20px;
          }
          .contact-section h2 {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </section>
  );
};

export default ContactCard;

