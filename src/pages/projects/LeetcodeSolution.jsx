import { MdOutlineArrowForwardIos } from 'react-icons/md';
import { Link } from 'react-router-dom';
function LeetcodeSolution() {
  return (
    <>
      <div className='flex justify-center py-56 md:px-36'>
        <div className='flex flex-col p-6 md:w-1/2 md:pr-36'>
          <div className='text-3xl md:text-6xl font-semibold'>
            LeetcodeSolution
          </div>
          <div className='my-8 text-2xl'>
            This app is built using Next.js and features a unique approach to
            helping coders tackle LeetCode problems. By leveraging the OpenAI
            API, the website generates LeetCode solutions for all languages and
            stores them in MongoDB. This makes it easy for users to access and
            learn from a comprehensive collection of coding solutions.
          </div>
          <Link
            className='flex items-center space-x-2 font-semibold text-xl w-fit'
            to='https://leetcode-solution.vercel.app/'
          >
            <MdOutlineArrowForwardIos />
            <div>Visit website</div>
          </Link>
        </div>
        <div className='hidden md:flex flex-col w-96 space-y-5 text-slate-500 text-2xl'>
          <hr className='border-slate-400' />
          <div>UX and UI Design</div>
          <hr className='border-slate-400' />
          <div>Next.js</div>
          <hr className='border-slate-400' />
          <div>OpenAI API</div>
          <hr className='border-slate-400' />
          <div>TailwindCSS</div>
          <hr className='border-slate-400' />
          <div>Mongo DB</div>
          <hr className='border-slate-400' />
        </div>
      </div>
      <img
        className='m-auto w-[60vw] hover:w-[70vw] transition-all duration-500 shadow-2xl mb-20'
        src='projects/leetcode/leetcode.jpg'
      />
      <img
        className='m-auto w-[60vw] hover:w-[70vw] transition-all duration-500 shadow-2xl mb-20'
        src='projects/leetcode/leetcode1.jpg'
      />
      <img
        className='m-auto w-[60vw] hover:w-[70vw] transition-all duration-500 shadow-2xl mb-20'
        src='projects/leetcode/leetcode2.jpg'
      />
    </>
  );
}

export default LeetcodeSolution;
