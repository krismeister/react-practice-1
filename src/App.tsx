import "./App.css";
import Navigation from "./navigation/Navigation";
import { AppRouter } from "./router/AppRouter";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navigation></Navigation>
        <AppRouter></AppRouter>
      </div>
    </Router>
  );
}

export default App;
