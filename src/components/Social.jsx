import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';
import { Link } from 'react-router-dom';

function Social() {
  return (
    <div className='flex items-center justify-between w-[330px] lg:w-[400px] m-auto py-4'>
      <Link target='_blank' to='https://www.linkedin.com/in/yuntianshi/'>
        <FaLinkedinIn className='cursor-pointer w-8 h-8 text-[#616161] hover:text-blue-400 transition-colors duration-500' />
      </Link>
      <Link target='_blank' to='https://github.com/YuntianYT'>
        <FaGithub className='cursor-pointer w-8 h-8 text-[#616161] hover:text-blue-400 transition-colors duration-500' />
      </Link>
      <Link to='mailto:shiyuntian97@gmail.com'>
        <BiLogoGmail className='cursor-pointer w-8 h-8 text-[#616161] hover:text-blue-400 transition-colors duration-500' />
      </Link>
    </div>
  );
}

export default Social;
