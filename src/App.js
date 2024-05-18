// import logo from "./logo.svg";
import { Route, Routes } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import HomeScreen from "./screens/HomeScreen";
import Video from "./components/Video";

function App() {
  return (
    <div className="App">
      <Header />/
      <div className="side">
        <Sidebar />
        <Routes>
          <Route index element={<HomeScreen />} />

          <Route path="Videos/:videoId" element={<Video />} />
          {/* <Route path="/Video" component={Video} /> */}
        </Routes>
      </div>
    </div>
  );
}

export default App;
