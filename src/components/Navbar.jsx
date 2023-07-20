import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';
import { CiMenuBurger } from 'react-icons/ci';
import { useState } from 'react';
import Social from './Social';
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleIsMenuOpen = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <>
      {/* desktop */}
      <div className='hidden md:inline w-36 h-full fixed z-10'>
        <div className='w-full h-full flex flex-col items-center justify-between'>
          <div className='flex flex-col mt-16 items-end space-y-16 text-2xl font-semibold text-[#616161]'>
            <img
              className='w-14 hover:p-1 transition-all duration-500 cursor-pointer'
              src='logo.png'
            />
            <MenuItem link='/'>Home</MenuItem>
            <MenuItem link='/project'>Project</MenuItem>
            <MenuItem link='/resume'>Resume</MenuItem>
            <MenuItem link='/contact'>Contact</MenuItem>
          </div>
          <div className='flex flex-col mb-16 space-y-8'>
            <Link target='_blank' to='https://www.linkedin.com/in/yuntianshi/'>
              <FaLinkedinIn className='cursor-pointer w-8 h-8 text-[#616161] hover:text-blue-400 transition-colors duration-500' />
            </Link>
            <Link target='_blank' to='https://github.com/YuntianYT'>
              <FaGithub className='cursor-pointer w-8 h-8 text-[#616161] hover:text-blue-400 transition-colors duration-500' />
            </Link>
          </div>
        </div>
      </div>
      {/* mobile */}
      <div className='md:hidden w-full h-16 fixed z-10'>
        <div className='w-full h-full flex justify-between items-center'>
          <div className='flex flex-row items-center space-x-4 ml-4'>
            <img
              className='w-10 hover:p-1 transition-all duration-500 cursor-pointer'
              src='logo.png'
            />
          </div>
          <div className='flex flex-row text-2xl items-center space-x-4 mr-4'>
            <CiMenuBurger onClick={() => handleIsMenuOpen()} />
          </div>
        </div>
      </div>
      <div
        className={
          isMenuOpen
            ? 'md:hidden fixed left-0 top-0 w-full h-screen backdrop-blur-lg ease-in duration-500 z-40'
            : ''
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            isMenuOpen
              ? ' fixed left-0 top-0 h-screen ease duration-300'
              : 'fixed top-[-100%] ease-in duration-300'
          }
        >
          <div className='w-screen mt-6 flex justify-between items-center'>
            <div className='flex flex-row items-center space-x-4 ml-4'>
              <img
                className='w-10 hover:p-1 transition-all duration-500 cursor-pointer'
                src='logo.png'
              />
            </div>
            <div className='flex flex-row text-2xl items-center space-x-4 mr-4'>
              <CiMenuBurger onClick={() => handleIsMenuOpen()} />
            </div>
          </div>
          <div
            className='p-4 flex flex-col justify-around items-center h-full text-2xl font-semibold'
            onClick={() => handleIsMenuOpen()}
          >
            <Link to='/'>Home</Link>
            <Link to='/project'>Project</Link>
            <Link to='/resume'>Resume</Link>
            <Link to='/contact'>Contact</Link>
            <Social />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
