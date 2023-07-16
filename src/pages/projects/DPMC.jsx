function DPMC() {
  return (
    <>
      <div className='flex justify-center py-56 px-36'>
        <div className='flex flex-col w-1/2 pr-36'>
          <div className='text-6xl font-semibold'>
            Data Platform Management Console
          </div>
          <div className='my-8 text-2xl'>
            This is the project that I worked at Geotab. It provides an
            intuitive and streamlined user experience for all data platform
            services. In the past, we had two separate management consoles for
            Data Ingestion and Data Digestion, which required users to navigate
            two different front-end applications.
          </div>
        </div>
        <div className='flex flex-col w-96 space-y-5 text-slate-500 text-2xl'>
          <hr className=' border-slate-400' />
          <div>React.js</div>
          <hr className=' border-slate-400' />
          <div>Ant Design UI</div>
          <hr className=' border-slate-400' />
          <div>Google Cloud Platform</div>
          <hr className=' border-slate-400' />
          <div>Jest</div>
          <hr className=' border-slate-400' />
          <div>Cypress</div>
          <hr className=' border-slate-400' />
        </div>
      </div>
    </>
  );
}

export default DPMC;
