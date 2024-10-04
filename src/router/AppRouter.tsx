import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import SimpleComponent from "../pages/SimpleComponent/SimpleComponent";
import SimpleState from "../pages/SimpleState/SimpleState";
import ReducerStateComponent from "../pages/ReducerState/ReducerState";

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
