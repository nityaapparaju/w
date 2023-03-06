// import React from "react";
// import { Link } from "react-router-dom";

// const Navbar = () => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from 'react';

const Navbar = () => {
  const [active, setActive] = useState('home');

  const handleClick = (tab) => {
    setActive(tab);
  };

  return (
    <nav>
      <ul>
        <li className={active === 'home' ? 'active' : ''} onClick={() => handleClick('home')}>
          Home
        </li>
        <li className={active === 'about' ? 'active' : ''} onClick={() => handleClick('about')}>
          About
        </li>
        <li className={active === 'contact' ? 'active' : ''} onClick={() => handleClick('contact')}>
          Contact
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
