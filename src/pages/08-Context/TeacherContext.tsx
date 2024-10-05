import { createContext, FunctionComponent, ReactNode, useState } from "react";

export type Teacher = {
  name: string;
  course: string;
};

type TeacherContextShape = {
  toggleTeacher: () => void;
  teacher: Teacher;
};

export const TeacherContext = createContext<TeacherContextShape>({
  toggleTeacher: () => {},
  teacher: {
    name: "",
    course: "",
  },
});

const Conner: Teacher = {
  name: "Conner",
  course: "FrontEnd",
};

const Clement: Teacher = {
  name: "Clement",
  course: "BackEnd",
};

const TeacherContextProvider: FunctionComponent<{ children: ReactNode }> = ({
  children,
}) => {
  const [teacher, setTeacher] = useState(Conner);

  const toggleTeacher = () => {
    if (teacher === Conner) {
      setTeacher(Clement);
    } else {
      setTeacher(Conner);
    }
  };

  return (
    <TeacherContext.Provider value={{ teacher, toggleTeacher }}>
      {children}
    </TeacherContext.Provider>
  );
};

export { Clement, Conner, TeacherContextProvider };
