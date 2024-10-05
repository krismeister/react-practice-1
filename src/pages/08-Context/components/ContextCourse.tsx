import { FunctionComponent } from "react";
import ContextDescription from "./ContextDescription";
import ContextWelcome from "./ContextWelcome";

const ContextCourse: FunctionComponent = () => {
  return (
    <div>
      <ContextWelcome />
      <ContextDescription />
    </div>
  );
};

export default ContextCourse;
