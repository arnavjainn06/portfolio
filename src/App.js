import logo from "./logo.svg";
import "./index.css";
import SideBar from "./components/SideBar";
import MainFrame from "./components/MainFrame";
import SideFrame from "./components/SideFrame";

function App() {
    return (
        <div className="App">
            <SideBar />
            <MainFrame />
            <div className="sf-superframe">
              <SideFrame />
            </div>
        </div>
    );
}

export default App;
