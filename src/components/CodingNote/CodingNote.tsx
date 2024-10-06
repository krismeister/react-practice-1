import "./CodingNotes.css";
import { FunctionComponent, ReactNode } from "react";

const CodingNotes: FunctionComponent<{
  children: ReactNode;
  title: string;
  summary: string;
}> = ({ title, children, summary }) => {
  return (
    <section className="coding-notes">
      <h3>{title}</h3>
      <h4>{summary}</h4>
      <div>{children}</div>
    </section>
  );
};

export default CodingNotes;
