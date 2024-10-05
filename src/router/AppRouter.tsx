import { Route, Routes } from "react-router-dom";
import Home from "../pages/01-Home/Home";
import SimpleComponent from "../pages/02-SimpleComponent/SimpleComponent";
import SimpleState from "../pages/03-SimpleState/SimpleState";
import ReducerStateComponent from "../pages/04-ReducerState/ReducerState";
import ComponentLifeCycle from "../pages/05-ComponentLifecycle/ComponentLifeCycle";
import RefsExample from "../pages/06-RefsExample/RefExample";
import Imperative from "../pages/07-Imperative/Imperative";
import { FunctionComponent } from "react";
import ContextExample from "../pages/08-Context/ContextExample";
import ComponentList from "../pages/09-ComponentList/ComponentList";
import ListWithContext from "../pages/10-ListWithContext/ListWithContext";

type AppPageConfig = {
  path: string;
  name: string;
  PageComponent: FunctionComponent;
};

const appRoutes: AppPageConfig[] = [
  {
    path: "/",
    name: "Home",
    PageComponent: Home,
  },
  {
    path: "/02-simple-component",
    name: "Simple Component",
    PageComponent: SimpleComponent,
  },
  {
    path: "/03-simple-state",
    name: "Simple State",
    PageComponent: SimpleState,
  },
  {
    path: "/04-reducer-state",
    name: "Reducer State",
    PageComponent: ReducerStateComponent,
  },
  {
    path: "/05-component-life-cycle",
    name: "Component Life Cycle",
    PageComponent: ComponentLifeCycle,
  },
  {
    path: "/06-refs-example",
    name: "Refs Example",
    PageComponent: RefsExample,
  },
  {
    path: "/07-imperative",
    name: "Imperative",
    PageComponent: Imperative,
  },
  {
    path: "/08-imperative",
    name: "Context",
    PageComponent: ContextExample,
  },
  {
    path: "/09-component-list",
    name: "Component List",
    PageComponent: ComponentList,
  },
  {
    path: "/10-list-with-context",
    name: "List with Context",
    PageComponent: ListWithContext,
  },
];

const AppRouter = () => {
  return (
    <Routes>
      {appRoutes.map(({ path, PageComponent }) => (
        <Route key={path} path={path} element={<PageComponent />} />
      ))}
    </Routes>
  );
};

export { AppRouter, appRoutes };
