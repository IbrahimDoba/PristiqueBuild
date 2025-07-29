import React from 'react';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

interface Menu {
  isOpen: boolean;
  toggleMenu: () => void;
}

const MenuButton = ({ isOpen, toggleMenu }: Menu) => {
  const pathname = usePathname();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen]);

  return (
    <button
      type='button'
      onClick={toggleMenu}
      className='md:hidden flex flex-col justify-center gap-1 z-50 outline-2 outline-offset-2 bg-acc p-1 rounded-sm h-7'
    >
      <span className='sr-only'>Mobile menu toggle</span>
      <span
        className={`top-bar h-0.5 w-6 bg-white transition duration-500 ${isOpen && 'translate-y-1 rotate-45'}`}
        aria-hidden='true'
      ></span>
      <span
        className={`mid-bar h-0.5 w-5 bg-white transition duration-500 ${isOpen && 'hidden'}`}
        aria-hidden='true'
      ></span>
      <span
        className={`bottom-bar h-0.5 w-4 bg-white transition duration-500 ${isOpen && '-translate-y-0.5 -rotate-45 w-6'}`}
        aria-hidden='true'
      ></span>
    </button>
  );
};

export default MenuButton;
