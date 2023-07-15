import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
function Navbar() {
  return (
    <div className='w-36 h-full fixed'>
      <div className='w-full h-full flex flex-col items-center justify-between'>
        <div className='flex flex-col mt-16 items-end space-y-16 text-2xl font-semibold text-[#616161] font-mono'>
          <img
            className='w-14 hover:p-1 transition-all duration-500 cursor-pointer'
            src='logo.png'
          />
          <div className='hover:text-blue-400 transition-colors duration-500 cursor-pointer'>
            Home
          </div>
          <div className='hover:text-blue-400 transition-colors duration-500 cursor-pointer'>
            Project
          </div>
          <div className='hover:text-blue-400 transition-colors duration-500 cursor-pointer'>
            Resume
          </div>
        </div>
        <div className='flex flex-col mb-16 space-y-8'>
          <FaLinkedinIn className='cursor-pointer w-8 h-8 text-[#616161] hover:text-blue-400 transition-colors duration-500' />
          <FaGithub className='cursor-pointer w-8 h-8 text-[#616161] hover:text-blue-400 transition-colors duration-500' />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
