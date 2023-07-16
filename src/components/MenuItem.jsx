import { Link } from 'react-router-dom';

function MenuItem({ children, link }) {
  return (
    <div className='hover:text-blue-400 transition-colors duration-500 cursor-pointer'>
      <Link to={link}>{children}</Link>
    </div>
  );
}
export default MenuItem;
