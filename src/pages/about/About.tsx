import React, { useEffect } from 'react';
import gitHubLogo from '/images/github.svg';
import rssLogo from '/images/rss-logo.svg';

const About = () => {
  useEffect(() => {
    document.title = 'About Us';
  }, []);
  const style = { height: '200px' };
  return (
    <div className="about" data-testid="about-us">
      <a href="https://rs.school/">
        <img style={style} src={gitHubLogo} alt="github logo" />
      </a>
      <a href="https://github.com/HuffPuffTuff">
        <img style={style} src={rssLogo} alt="rss logo" />
      </a>
    </div>
  );
};

export { About };
