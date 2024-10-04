import { MouseEvent, ReactElement } from "react";
import logo from "./logo.svg";
const Hello = ({
  name,
  children,
}: {
  name: string;
  children?: ReactElement | ReactElement[];
}): ReactElement => {
  const onClickHandler = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    return false;
  };

  return (
    <>
      <a onClick={onClickHandler} href="google.com">
        I am {name}
      </a>
      {children}
    </>
  );
};

const Home = () => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.tsx</code> and save to reload.
      </p>
      <Hello name="kris">
        <p>I am inside</p>
        <p>I am inside</p>
      </Hello>
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  );
};

export default Home;
