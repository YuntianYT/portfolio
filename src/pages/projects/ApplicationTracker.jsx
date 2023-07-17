import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
function ApplicationTracker() {
  return (
    <>
      <div className='flex justify-center py-56 md:px-36'>
        <div className='flex flex-col p-6 md:w-1/2 md:pr-36'>
          <div className='text-3xl md:text-6xl font-semibold'>
            ApplicationTracker
          </div>
          <div className='my-8 text-2xl'>
            Job Application Tracker implemneted with ReactJS and Firebase. This
            application aimed to track job application process and provide
            real-time updates.
          </div>
          <Link
            className='flex items-center space-x-2 font-semibold text-xl w-fit'
            to='https://application-tracking.vercel.app/'
          >
            <MdOutlineArrowForwardIos />
            <div>Visit website</div>
          </Link>
        </div>
        <div className='hidden md:flex flex-col w-96 space-y-5 text-slate-500 text-2xl'>
          <hr className=' border-slate-400' />
          <div>React.js</div>
          <hr className=' border-slate-400' />
          <div>Ant Design UI</div>
          <hr className=' border-slate-400' />
          <div>Firebase</div>
          <hr className=' border-slate-400' />
          <div>UX and UI Design</div>
          <hr className=' border-slate-400' />
        </div>
      </div>
      <img
        className='m-auto w-[60vw] hover:w-[70vw] transition-all duration-500 shadow-2xl mb-20'
        src='projects/application/application.jpg'
      />
      <img
        className='m-auto w-[60vw] hover:w-[70vw] transition-all duration-500 shadow-2xl mb-20'
        src='projects/application/application1.jpg'
      />
    </>
  );
}

export default ApplicationTracker;
