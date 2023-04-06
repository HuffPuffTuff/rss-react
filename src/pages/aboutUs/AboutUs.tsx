import React, { useEffect } from 'react';
import gitHubLogo from '/github.svg';
import rssLogo from '/rss-logo.svg';
import './aboutUs.scss';

const AboutUs = () => {
  useEffect(() => {
    document.title = 'About Us';
  }, []);
  const style = { height: '200px' };
  return (
    <div className="about-us" data-testid="about-us">
      <a href="https://rs.school/">
        <img style={style} src={gitHubLogo} alt="github logo" />
      </a>
      <a href="https://github.com/HuffPuffTuff">
        <img style={style} src={rssLogo} alt="rss logo" />
      </a>
    </div>
  );
};

export default AboutUs;
