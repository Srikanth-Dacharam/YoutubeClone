// import logo from "./logo.svg";
import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./screens/HomeScreen";

function App() {
  return (
    <div className="App">
      <Header />
      <div>
        <Sidebar />
        <Routes>
          <Route index element={<HomeScreen />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
