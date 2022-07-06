import "./App.css";
import Dashboard from "./components/dashboard/Dashboard";
import { BrowserRouter } from "react-router-dom";
import myStore from "./components/redux/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={myStore}>
      <BrowserRouter>
        <Dashboard></Dashboard>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
