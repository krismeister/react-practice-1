import { Route, Routes } from "react-router-dom";
import Home from "../pages/01-Home/Home";
import SimpleComponent from "../pages/02-SimpleComponent/SimpleComponent";
import SimpleState from "../pages/03-SimpleState/SimpleState";
import ReducerStateComponent from "../pages/04-ReducerState/ReducerState";
import ComponentLifeCycle from "../pages/05-ComponentLifecycle/ComponentLifeCycle";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/02-simple-component" element={<SimpleComponent />} />
      <Route path="/03-simple-state" element={<SimpleState />} />
      <Route path="/04-reducer-state" element={<ReducerStateComponent />} />
      <Route path="/05-component-life-cycle" element={<ComponentLifeCycle />} />
    </Routes>
  );
};

export default AppRouter;
