import React from "react";

const TabContent = ({ tab }) => {
  return (
    <div className="tab-content-container">
      <div className="tab_heading">
        <h3>
          {tab.role} <span>@ {tab.company}</span>
        </h3>
        <p>
          {tab.start} - {tab.end}
        </p>
      </div>
      <ul>
        {tab.detail.map((detail, idx) => (
          <li className="content_detail" key={idx}>
            <img src="assets/bullet-point.svg" alt="bullet point" />
            <p>{detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TabContent;
