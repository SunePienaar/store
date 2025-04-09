import React from 'react';
import '../styles/HelpPage.css'; // Import the CSS file

const HelpPage = () => {
  return (
    <div className="help-container container py-5">
      <h1 className="help-title text-center mb-4">Need Assistance?</h1>
      <div className="help-content">
        <ul>
          <li>
            <span>Email:</span> essence@store.com
          </li>
          <li>
            <span>Phone:</span> (+24) 11 202 3142
          </li>
          <li>
            <span>Live Chat:</span> Available 24/7
          </li>
        </ul>
        <p>
          You can also visit our <a href="/faq">FAQ page</a> for answers to common questions.
        </p>
      </div>
    </div>
  );
};

export default HelpPage;