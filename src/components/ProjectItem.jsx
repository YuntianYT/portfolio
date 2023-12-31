import { Link } from 'react-router-dom';

function ProjectItem({ title, description, link, imgURI }) {
  return (
    <div className='w-full h-screen flex flex-col justify-center items-center md:px-36'>
      <img
        className='md:w-[40vw] pt-6 md:hover:w-[50vw] transition-all duration-500 shadow-2xl mx-6'
        src={imgURI}
      />
      <div className='w-3/5 flex flex-col space-y-8 md:px-36'>
        <hr className='w-1/4 h-1 bg-black' />
        <div className='text-3xl font-bold w-fit text-slate-500 hover:text-slate-600 animate-bounce transition-colors duration-500'>
          {title}
        </div>
        <div className='font-semibold text-xl text-slate-700 hover:text-blue-400 transition-colors duration-500'>
          {description}
        </div>
        <Link to={link}>
          <button className='bg-black hover:bg-slate-700 w-full text-white font-bold py-2 px-4 rounded'>
            View Project
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectItem;
