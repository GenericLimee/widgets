'use client'

import { useState } from 'react';
import Button from './Button';
import '@/css/Nav.css';

export default function Nav({ links }: { links: {href: string, label: string}[] }) {
  const [clicked, setClicked] = useState(false); // button cover clicked or not

  return (
    <>
      <div className="Nav" onMouseLeave={() => { setClicked(false) }} onMouseEnter={() => { setClicked(true) }}>
        <div 
          className={"Nav-button-cover " + (clicked ? "clicked" : "")} 
          onClick={() => { setClicked(thing => !thing) }}
        />
        <div className="Nav-button-ctnr">
          {links.map((link, i) => { // maps the pages' respective buttons (except the boom and error pages of course)
            return (
              <Button 
                className="Nav-button"
                href={link.href}
                key={link.label + i}
              >
                {link.label}
              </Button>
            );
          })}
        </div>
      </div>
    </>
  );
}
