import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className='w-full max-w-4xl mx-auto'>
      <div onClick={() => setIsOpen(!isOpen)} style={{ cursor: 'pointer', fontWeight: 'bold', margin: '10px 0' }}>
        {title}
      </div>
      {isOpen && <div>{children}</div>}
    </div>
  );
};

export default Accordion;