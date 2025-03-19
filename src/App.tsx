import { BrowserRouter } from "react-router-dom";

import {
  About,
} from "./components";
import { useEffect } from "react";
import { config } from "./constants/config";

const App = () => {
  useEffect(() => {
    if (document.title !== config.html.title) {
      document.title = config.html.title;
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="bg-primary relative z-0">
        <About />
      </div>
    </BrowserRouter>
  );
};

export default App;
