import { appRoutes } from "../router/AppRouter";
import "./Navigation.css";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      {appRoutes.map(({ path, name }) => {
        return (
          <Link key={path} to={path}>
            {name}
          </Link>
        );
      })}
    </nav>
  );
};

export default Navigation;
