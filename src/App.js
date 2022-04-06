import "./App.css";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div data-testid="app" className="App">
      <Router>
        <Routes>
          <Route path="/" exact element={<HomePage />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
