import { FunctionComponent, useContext } from "react";
import { TeacherContext } from "../TeacherContext";

const ContextWelcome: FunctionComponent = () => {
  const { teacher } = useContext(TeacherContext);
  return <h3>Welcome {teacher.name}</h3>;
};

export default ContextWelcome;
