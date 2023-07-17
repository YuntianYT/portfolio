import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import MenuItem from './MenuItem';
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <div className='w-36 h-full fixed z-10'>
      <div className='w-full h-full flex flex-col items-center justify-between'>
        <div className='flex flex-col mt-16 items-end space-y-16 text-2xl font-semibold text-[#616161] font-mono'>
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
  );
}

export default Navbar;
