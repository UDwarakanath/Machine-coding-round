import { useState } from "react";
import "./App.css";
import Model from "./Model";

const App = () => {
      const [openModel, setOpenModel] = useState(false);
      return (
            <div>
                  <button onClick={() => setOpenModel(true)}>Open Model</button>
                  {openModel && <Model setOpenModel={setOpenModel} />}
            </div>
      );
};

export default App;
