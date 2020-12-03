import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";

import "./App.css";

const App = () => {
  return (
    // BEM
    <div className="app">
      <Sidebar />
      <Feed />
      <Widgets />
    </div>
  );
};

export default App;
