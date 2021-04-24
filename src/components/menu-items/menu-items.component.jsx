import React from 'react';
import { withRouter } from 'react-router-dom';
import './menu-items.style.scss';

const MenuItem = ({ title, imageUrl, history, match }) => {
  return (
    <div
      className="menu-item"
      onClick={() => history.push(`${match.url}${title}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>

      <div className="content">
        <div className="title">{title.toUpperCase()}</div>
        <span className="subtitle">SHOP NOW</span>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
