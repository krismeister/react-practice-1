import { FunctionComponent, useContext } from "react";
import { TeacherContext } from "../TeacherContext";

const ContextDescription: FunctionComponent = () => {
  const { teacher } = useContext(TeacherContext);
  return <p>Description {teacher.course}</p>;
};

export default ContextDescription;
