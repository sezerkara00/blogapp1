import React from 'react';
import Navitem from './Navitem';

interface Link {
  path: string;
  title: string;
}

interface MobileMenuProps {
  links: Link[];
}

const MobileMenu = ({ links }: MobileMenuProps) => {
  return (
    <div>
      <ul className='flex flex-col py-4 items-center z-10 bg-mycolor-400'>
        {links.map((link, index) => (
          <li key={index}>
            <Navitem href={link.path} title={link.title} />
          </li>
        ))}
      </ul>
    </div>
  )
}

export default MobileMenu;
