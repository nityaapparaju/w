import './App.css';
import Projects from "./Projects";

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <h1>Welcome</h1>
        <h3>Student Details</h3>
        <Projects/>
      </header>
    </div>
  );
}

export default App;
