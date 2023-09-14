import React, { useEffect, useState } from 'react'
import { ScrollToTopButton } from './ScrollToTopStyles'

export const ScrollToTop = ({scrollToTopText}) => {
  const [isVisible, setIsVisible]  = useState(false)

  // Toggle the visibility of the button dependant on page height
  useEffect(() => {
    console.log(document.documentElement.scrollTop)

    const toggleVisibility = () => {
      if (document.documentElement.scrollTop > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Function to scroll to the top of the page
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    isVisible && (
      <ScrollToTopButton
        onClick={scrollToTop}
      >
        {scrollToTopText ? scrollToTopText : 'Back to top ↑'}
      </ScrollToTopButton>
    )
  )
}