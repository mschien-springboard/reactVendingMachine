import './Soda.css';
import sodaImg from './images/pocari.jpg';
import { Link } from 'react-router-dom';

const Soda = () => {
  return (
    <div className="Soda">
      <img 
        alt="pocari sweat"
        src={sodaImg}
      />
      <Link exact to='/'>Go Back</Link>
    </div>
  );
};

export default Soda;