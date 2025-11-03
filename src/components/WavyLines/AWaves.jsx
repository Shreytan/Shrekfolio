import React, { useEffect, useRef } from 'react';
import AWaves from './animate';  // Import the AWaves class\
import './style.scss'


const Lines = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Check if the custom element 'a-waves' is already defined
    if (!customElements.get('a-waves')) {
      customElements.define('a-waves', AWaves);  // Define the custom element if not already defined
    }

    // Create an instance of the AWaves custom element
    const wavesInstance = document.createElement('a-waves');
    
    // Append it to the container
    if (containerRef.current) {
      containerRef.current.appendChild(wavesInstance);
    }

    // Cleanup function to remove the instance when component unmounts
    return () => {
      if (containerRef.current) {
        containerRef.current.removeChild(wavesInstance);
      }
    };
  }, []);  // Empty dependency array ensures it runs once after component mounts

  return (
    <div ref={containerRef} className='lines-background'>
      <a-waves>
        <svg className="js-svg">
            
        </svg>
        
      </a-waves>
   
    </div>
  );
};

export default Lines;
