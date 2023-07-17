import Spline from '@splinetool/react-spline';

function Home() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='px-10 flex flex-col z-10'>
        <div className='flex flex-col justify-end'>
          <div className='text-3xl font-bold w-fit text-slate-500 hover:text-slate-600 transition-colors duration-500'>
            TERRY SHI
          </div>
          <div className='text-[4rem] md:text-[6rem] font-bold text-slate-700 hover:text-blue-400 transition-colors duration-500'>
            Software Developer
          </div>
        </div>
        <div>
          <div className='text-xl md:text-3xl font-bold w-fit text-slate-400 hover:text-slate-500 transition-colors duration-500'>
            I build things for the web.
          </div>
        </div>
      </div>
      <div className='absolute w-screen h-screen top-0 left-0 '>
        <Spline scene='https://prod.spline.design/zNYNj496gY0VeqW7/scene.splinecode' />
      </div>
    </div>
  );
}

export default Home;
