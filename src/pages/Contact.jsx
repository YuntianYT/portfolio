import Spline from '@splinetool/react-spline';
import Social from '../components/Social';

const Contact = () => {
  return (
    <div className='flex h-screen w-screen justify-center items-center'>
      <div className='flex flex-col justify-center items-center space-y-8'>
        <div className='text-4xl font-semibold'>Terry Shi</div>
        <div className='text-2xl'>Software Developer</div>
        <div className='text-2xl text-slate-500'>
          I am available for full-time positions. Contact me and let&apos;s
          talk.
        </div>
        <div className='uppercase pt-8 text-slate-500'>Connect With Me</div>
        <div className='z-10'>
          <Social />
        </div>
      </div>
      <div className='absolute w-screen h-screen top-0 left-0 '>
        <Spline scene='https://prod.spline.design/zNYNj496gY0VeqW7/scene.splinecode' />
      </div>
    </div>
  );
};

export default Contact;
