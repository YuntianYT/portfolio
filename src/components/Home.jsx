function Home() {
  return (
    <div className='w-full h-screen flex justify-center items-center'>
      <div className='animated-fade-in flex flex-col '>
        <div className='flex flex-col justify-end h-[50vh]'>
          <div className='text-3xl font-bold w-fit text-slate-500 hover:text-slate-600 animate-bounce transition-colors duration-500'>
            TERRY SHI
          </div>
          <div className='text-[6rem] font-bold text-slate-700 hover:text-blue-400 transition-colors duration-500'>
            Software Developer
          </div>
        </div>
        <div className='h-[50vh]'>
          <div className='text-3xl font-bold w-fit text-slate-400 hover:text-slate-500 transition-colors duration-500'>
            I build things for the web.
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
