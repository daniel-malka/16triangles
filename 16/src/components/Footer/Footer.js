import React, { useEffect, useState } from 'react';
import './Footer.css';

function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
      const isAtBottom = scrollTop + clientHeight >= scrollHeight - 20; // Adjust the threshold as needed

      setShowFooter(isAtBottom);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <footer className={`footer ${showFooter ? 'show' : ''}`}>
      <div className="footer__links">{/* Footer links */}</div>
    </footer>
  );
}

export default Footer;
