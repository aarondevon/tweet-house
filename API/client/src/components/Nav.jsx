import React from 'react';

function Nav() {
    return (
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <a className="nav-link active" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Random Tweet</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Tweet Search</a>
          </li>
        </ul>
      </nav>
      );
}

export default Nav;