// resource
// https://youtu.be/lLWfZL-Y8lM

import { useState } from "react";
import Header from "./components/Header";
import TodoContainer from "./features/TodoContainer";

function App() {
  const [total, setTotal] = useState(0)
  return (
    <div className="App max-w-5xl mx-auto font-itim">
      <Header total={total} />
      <div className="mx-auto w-3/5 border mt-3 rounded">
        <TodoContainer setTotal={setTotal} />
      </div>
            
    </div>
  );
}

export default App;
