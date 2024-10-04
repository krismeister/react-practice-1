import { Route, Routes } from "react-router-dom";
import Home from "../pages/01-Home/Home";
import SimpleComponent from "../pages/02-SimpleComponent/SimpleComponent";
import SimpleState from "../pages/03-SimpleState/SimpleState";
import ReducerStateComponent from "../pages/04-ReducerState/ReducerState";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/component-1" element={<SimpleComponent />} />
      <Route path="/state-1" element={<SimpleState />} />
      <Route path="/state-2" element={<ReducerStateComponent />} />
    </Routes>
  );
};

export default AppRouter;
