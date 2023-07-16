import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
function Spotitube() {
  return (
    <>
      <div className='flex justify-center py-56 px-36'>
        <div className='flex flex-col w-1/2 pr-36'>
          <div className='text-6xl font-semibold'>Spotitube</div>
          <div className='my-8 text-2xl'>
            A Spotify looks like YouTube! While there are numerous repositories
            for Spotify clones or YouTube clones, I noticed the absence of a
            repository combining the design of YouTube with the content of
            Spotify, which I found intriguing.
          </div>
          <Link
            className='flex items-center space-x-2 font-semibold text-xl w-fit'
            to='https://spotify-youtube.vercel.app/'
          >
            <MdOutlineArrowForwardIos />
            <div>Visit website</div>
          </Link>
        </div>
        <div className='flex flex-col w-96 space-y-5 text-slate-500 text-2xl'>
          <hr className=' border-slate-400' />
          <div>React.js</div>
          <hr className=' border-slate-400' />
          <div>TailwindCSS</div>
          <hr className=' border-slate-400' />
          <div>Spotify API</div>
          <hr className=' border-slate-400' />
          <div>UX and UI Design</div>
          <hr className=' border-slate-400' />
        </div>
      </div>
      <img
        className='m-auto w-[60vw] hover:w-[70vw] transition-all duration-500 shadow-2xl mb-20'
        src='projects/spotitube/spotitube.jpg'
      />
      <img
        className='m-auto w-[60vw] hover:w-[70vw] transition-all duration-500 shadow-2xl mb-20'
        src='projects/spotitube/spotitube1.jpg'
      />
      <img
        className='m-auto w-[60vw] hover:w-[70vw] transition-all duration-500 shadow-2xl mb-20'
        src='projects/spotitube/spotitube2.jpg'
      />
    </>
  );
}

export default Spotitube;
