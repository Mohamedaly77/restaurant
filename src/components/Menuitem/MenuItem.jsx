import React from 'react';

import './MenuItem.css';

const MenuItem = ({ title, price, tags }) => (
  <div className="app__menuItem">
    <div className="app__menuItem-head">
      <div className="app__menuItem-name">
        <p className="P__cormorant" style={{ color: '#ddca87' }}>
          {title}
        </p>
      </div>

      <div className="app__menuItem-dash" />

      <div className="app__menuItem-price">
        <p className="p__cormorant">{price}</p>
      </div>
    </div>
    <div className="app__mmenuItem-sub">
      <p className="P__opensans" style={{ color: '#aaa' }}>
        {tags}
      </p>
    </div>
  </div>
);

export default MenuItem;
