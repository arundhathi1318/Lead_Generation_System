// LandingPage.js
import React from 'react';
import LeadForm from './LeadForm';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page-container">
      <div className="landing-content-wrapper">
        <div className="info-pane">
          <h1 className="landing-headline">
            Connect With <span className="highlight-text">Error Technologies</span>
          </h1>
          <p className="landing-subheadline">
            At Error Technologies, we focus on innovation, precision, and empowering startups. We are a product-based company based in Hyderabad, offering technical support through in-house applications and solutions centered around web and application development.
          </p>
          <ul className="landing-benefits">
            <li>Supporting innovative startups with technical expertise</li>
            <li>Developing robust web and mobile applications</li>
            <li>Encouraging young entrepreneurs</li>
            <li>Providing industrial exposure to students</li>
            <li>Focused on perfection, not just survival</li>
          </ul>
        </div>
        <div className="form-pane">
          <LeadForm />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
