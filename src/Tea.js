import './Tea.css';
import teaImg from './images/greentea.jpg';
import { Link } from 'react-router-dom';

const Tea = () => {
  return (
    <div className="Tea">
      <img
        alt="green tea"
        src={teaImg}
      />
      <Link exact to='/'>Go Back</Link>
    </div>
  );
};

export default Tea;