import {  BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import SimpleState from "../pages/SimpleState";
import SimpleComponent from "../pages/SimpleComponent";

const AppRouter = () => {
return <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/component-1" element={<SimpleComponent />} />
            <Route path="/state-1" element={<SimpleState />} />
      </Routes>
}

export default AppRouter