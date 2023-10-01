import LeftSideBar from "./components/LeftSidebar";
import "./App.css";
import RightSideBar from './components/rightSideBar'; 

function App() {
    const chatStyles ={
        display : 'flex',
        alignItems : 'center',
        width : '100%'
    }
    return (
        <div style={chatStyles}>
            <LeftSideBar />
            <RightSideBar />
        </div>
    );
    }

export default App;

