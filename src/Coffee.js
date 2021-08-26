import './Coffee.css';
import coffeeImg from './images/coffee.jpg';
import { Link } from 'react-router-dom';

const Coffee = () => {
  return (
  <div className="Coffee">
    <img 
      alt="coffee"
      src={coffeeImg}
    />
    <Link exact to='/'>Go Back</Link>
  </div>
  );
};

export default Coffee;