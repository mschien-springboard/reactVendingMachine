import { BrowserRouter, Route } from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Soda from './Soda';
import Tea from './Tea';
import Coffee from './Coffee';

const VendingMachine = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Route exact path='/'>
        <Home />
      </Route>
      <Route exact path='/soda'>
        <Soda />
      </Route>
      <Route exact path='/tea'>
        <Tea />
      </Route>
      <Route exact path='/coffee'>
        <Coffee />
      </Route>
    </BrowserRouter>
  );
};

export default VendingMachine;