import React from 'react';
import Svg from '../../Svgs'

export default function SocialIcons() {
  return (
  <ul className="menu-socials-container">
      <li className="menu-socials">
        <a href='/'>
          <div className="social-icon">
            <div className="icon-front">
              <div className="contents">
                <Svg svg='behance' fill='#FFC01D'/>
              </div>
            </div>
            <div className="icon-back">
              <div className="contents">
                <Svg svg='behance' fill='#001116'/>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li className="menu-socials">
        <a href='/'>
          <div className="social-icon">
            <div className="icon-front">
              <div className="contents">
                <Svg svg='linkedin' fill='#FFC01D'/>
              </div>
            </div>
            <div className="icon-back">
              <div className="contents">
                <Svg svg='linkedin' fill='#001116'/>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li className="menu-socials">
        <a href='/'>
          <div className="social-icon">
            <div className="icon-front">
              <div className="contents">
                <Svg svg='dribbble' fill='#FFC01D'/>
              </div>
            </div>
            <div className="icon-back">
              <div className="contents">
                <Svg svg='dribbble' fill='#001116'/>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li className="menu-socials">
        <a href='/'>
          <div className="social-icon">
            <div className="icon-front">
              <div className="contents">
                <Svg svg='twitter' fill='#FFC01D'/>
              </div>
            </div>
            <div className="icon-back">
              <div className="contents">
                <Svg svg='twitter' fill='#001116'/>
              </div>
            </div>
          </div>
        </a>
      </li>
      <li className="menu-socials">
        <a href='/'>
          <div className="social-icon">
            <div className="icon-front">
              <div className="contents">
                <Svg svg='instagram' fill='#FFC01D'/>
              </div>
            </div>
            <div className="icon-back">
              <div className="contents">
                <Svg svg='instagram' fill='#001116'/>
              </div>
            </div>
          </div>
        </a>
      </li>
    </ul>
  );
}
