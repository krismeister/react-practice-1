import "./Navigation.css";
import {Link} from 'react-router-dom'

const Navigation = () => {
    return  <nav>
    <Link to="/">Home</Link>
    <Link to="/component-1">Simple Component</Link>
    <Link to="/state-1">Simple State</Link>
  </nav> 
}

export default Navigation;