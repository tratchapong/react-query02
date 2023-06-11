// resource
// https://youtu.be/lLWfZL-Y8lM

import Header from "./components/Header";
import TodoContainer from "./features/TodoContainer";
import {ToastContainer} from 'react-toastify'

function App() {
  return (
    <div className="App max-w-5xl mx-auto font-itim">
      <ToastContainer position="bottom-center" autoClose={3000} />
      <Header />
      <div className="mx-auto w-3/5 border mt-3 rounded">
        <TodoContainer />
      </div>
            
    </div>
  );
}

export default App;
