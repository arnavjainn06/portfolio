import logo from "./logo.svg";
import "./index.css";
import SideBar from "./components/SideBar";
import MainFrame from "./components/MainFrame";

function App() {
    return (
        <div className="App">
            <SideBar />
            <MainFrame />
        </div>
    );
}

export default App;
