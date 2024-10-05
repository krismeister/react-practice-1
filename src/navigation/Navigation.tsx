import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/02-simple-component">Simple Component</Link>
      <Link to="/03-simple-state">Simple State</Link>
      <Link to="/04-reducer-state">Reducer State</Link>
      <Link to="/05-component-life-cycle">Component Life Cycle</Link>
      <Link to="/06-refs-example">Refs Example</Link>
      <Link to="/07-imperative">Imperative</Link>
    </nav>
  );
};

export default Navigation;
