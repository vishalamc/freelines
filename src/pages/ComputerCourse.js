import React from 'react';
import { useNavigate } from 'react-router-dom';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function CourseDashboard() {
  const navigate = useNavigate();

  const courses = [
    {
      title: 'ADCA',
      description: 'ADVANCE DIPLOMA IN COMPUTER APPLICATION(12 Months)',
      path: '/adca',
    },
    {
      title: 'DCA',
      description: 'DIPLOMA IN COMPUTER APPLICATION(6 Months)',
      path: '/dca',
    },
    {
      title: 'BCC', 
      description: 'BASIC COMPUTER COURSE(3 Months)',
      path: '/bcc',
    },
     {
    title: 'PGDCA',
    description: 'POST GRADUATE DIPLOMA IN COMPUTER APPLICATION (12 Months)',
    path: '/pgdca',
  },
  {
    title: 'TALLY',
    description: 'CERTIFICATE IN TALLY (6 Months)',
    path: '/tally',
  },
  {
    title: 'CCC',
    description: 'CERTIFICATE COURSE IN COMPUTER (3 Months)',
    path: '/ccc',
  },
    {
    title: 'CCT',
    description: 'Certificate in Computer Typing (3 Months)',
    path: '/typing1',
  },
  {
    title: 'BCCA',
    description: 'BASIC COMPUTER COURSE ADVANCE (6 Months)',
    path: '/comingsoon',
  },
  {
    title: 'DCAA',
    description: 'DIPLOMA IN COMPUTER APPLICATION & ACCOUNTING (6 Months)',
    path: '/comingsoon',
  },
  {
    title: 'DWD',
    description: 'DIPLOMA IN WEB DEVELOPMENT (12 Months)',
    path: '/comingsoon',
  },
  {
    title: 'MDCA',
    description: 'MODERN DIPLOMA IN COMPUTER APPLICATION (18 Months)',
    path: '/comingsoon',
  },
  {
    title: 'CORE JAVA',
    description: 'CORE JAVA (3 Months)',
    path: '/comingsoon',
  },
  {
    title: 'DCS',
    description: 'DIPLOMA IN COMPUTER SCIENCE (12 Months)',
    path: '/comingsoon',
  },
  {
    title: 'ADIT',
    description: 'ADVANCE DIPLOMA IN INFORMATION TECHNOLOGY (12 Months)',
    path: '/comingsoon',
  },
  {
    title: 'CCCA',
    description: 'CERTIFICATE COURSE IN COMPUTER APPLICATION (3 Months)',
    path: '/comingsoon',
  },
  {
    title: 'C LANGUAGE',
    description: 'PROFESSIONAL COURSE IN C LANGUAGE (3 Months)',
    path: '/comingsoon',
  },
  {
    title: 'CWT',
    description: 'CERTIFICATE IN WEB TECHNOLOGY (CWT) (6 Months)',
    path: '/comingsoon',
  },
  {
    title: 'CWTF',
    description: 'CERTIFICATE IN WEB TECHNOLOGY FUNDAMENTALS (CWTF) (3 Months)',
    path: '/comingsoon',
  },
  {
    title: 'CIT',
    description: 'CERTIFICATE IN INFORMATION TECHNOLOGY (CIT) (6 Months)',
    path: '/comingsoon',
  },
{
    title: 'IWD',
    description: 'INTERNSHIP IN WEB DESIGNING (1 Month)',
    path: '/comingsoon',
  },
  {
    title: 'IWDV',
    description: 'INTERNSHIP IN WEB DEVELOPMENT (1 Month)',
    path: '/comingsoon',
  },
  {
    title: 'ICC',
    description: 'INTERNSHIP IN CLOUD COMPUTING (1 Month)',
    path: '/comingsoon',
  },
  {
    title: 'IDS',
    description: 'INTERNSHIP IN DATA SCIENCE (1 Month)',
    path: '/comingsoon',
  },
  {
    title: 'DWD',
    description: 'DIPLOMA IN WEB DEVELOPMENT (6 Months)',
    path: '/comingsoon',
  },
  {
    title: 'MDICM',
    description: 'MASTER DIPLOMA IN COMPUTER MANAGEMENT (12 Months)',
    path: '/comingsoon',
  },
  {
    title: 'CCA',
    description: 'CERTIFICATE IN COMPUTER APPLICATION (6 Months)',
    path: '/comingsoon',
  },
  {
    title: 'ICT',
    description: 'INFORMATION AND COMMUNICATIONS TECHNOLOGY (6 Months)',
    path: '/comingsoon',
  },
  ];

  return (
    <div className="game-dashboard">
      {/* Header */}
      <div className="header-section">
        <MenuBookIcon className="header-icon" />
        <h1>Computer Courses</h1>
        <h2>सभी प्रमाणपत्र भारत सरकार द्वारा मान्यता प्राप्त संस्थान
"Drishti Computer Education" द्वारा जारी किए जाएंगे।</h2>
        <p>हर कोर्स की पूरी जानकारी प्राप्त करें।</p>
      </div>

      {/* Cards */}
      <div className="game-grid">
        {courses.map((course, i) => (
          <div className="game-card" key={i}>
            <div className="card-body">
              <h2>{course.title}</h2>
              <p>{course.description}</p>
              <button className="start-btn" onClick={() => navigate(course.path)}>
                <PlayArrowIcon className="btn-icon" />
                View Course Details
              </button>
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .game-dashboard {
          padding: 3rem 1rem;
          background: inherit;
          font-family: 'Inter', sans-serif;
          color: #fff;
        }

        .header-section {
          text-align: center;
          margin-bottom: 2.5rem;
        }

        .header-icon {
          font-size: 3rem;
          color: #60a5fa;
          margin-bottom: 0.5rem;
        }

        .header-section h1 {
          font-size: 2.5rem;
          font-weight: 800;
          margin-bottom: 0.3rem;
          background: linear-gradient(to right, #60a5fa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .header-section p {
          color: #d1d5db;
          font-size: 1.1rem;
        }

        .game-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
        }

        .game-card {
          background: rgba(255, 255, 255, 0.08);
          border-radius: 1rem;
          padding: 1.5rem;
          backdrop-filter: blur(6px);
          border: 1px solid rgba(255, 255, 255, 0.15);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .game-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 12px 30px rgba(0,0,0,0.3);
        }

        .card-body {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 100%;
        }

        .card-body h2 {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
        }

        .card-body p {
          color: #cbd5e1;
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
          line-height: 1.5;
        }

        .start-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.6rem;
          width: 100%;
          padding: 1rem;
          font-size: 1.1rem;
          font-weight: 700;
          color: white;
          background: linear-gradient(90deg, #60a5fa, #3b82f6);
          border: none;
          border-radius: 0.75rem;
          cursor: pointer;
          transition: background 0.3s ease, transform 0.2s ease;
        }

        .start-btn:hover {
          background: linear-gradient(90deg, #3b82f6, #2563eb);
          transform: translateY(-2px);
        }

        .btn-icon {
          font-size: 1.5rem;
        }
      `}</style>
    </div>
  );
}

