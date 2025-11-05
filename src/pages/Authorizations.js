import React from "react";
import "./Authorizations.css";

const Authorizations = () => {
  const certifications = [
    {
      title: "Franchise Partner Licence",
      image: "/franchise.png",
    },
    {
      title: "Identity Card",
      image: "/centerdirector.png",
    },
  ];

  return (
    <section className="auth-section">
      <h1 className="auth-title">Authorizations & Certifications</h1>
      <p className="auth-subtitle">
        We are proud to be recognized and certified by reputed government and professional organizations.
      </p>

      <div className="auth-grid">
        {certifications.map((item, index) => (
          <div key={index} className="auth-card">
            <img src={item.image} alt={item.title} className="auth-image-large" />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Authorizations;

