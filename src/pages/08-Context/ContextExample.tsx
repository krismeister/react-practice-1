import { useContext } from "react";
import ContextCourse from "./components/ContextCourse";
import { TeacherContext, TeacherContextProvider } from "./TeacherContext";

const ExampleInteral = () => {
  const { toggleTeacher } = useContext(TeacherContext);
  return (
    <>
      <ContextCourse />
      <button onClick={toggleTeacher}>Switch Teacher</button>
    </>
  );
};

const Example = () => {
  return (
    <>
      <h1>Context Example</h1>
      <p>Active Course:</p>
      <TeacherContextProvider>
        <ExampleInteral />
      </TeacherContextProvider>
      <hr />
      <dl>
        <dt>Lifting State Up or Prop Drilling</dt>
        <dd>
          <strong>Context Solves this:</strong> <br />
          This is when you keep passing state down to your childrens, childrens
          components... <br />
          <em>
            where props are passed down from a higher-level component to a
            lower-level component through intermediary components in the
            component tree.
          </em>
        </dd>
      </dl>
    </>
  );
};

const ContextExample = () => {
  return <Example />;
};

export default ContextExample;
