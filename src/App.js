import logo from './logo.svg';
import './App.css';
import Dashboard from './components/Dashboard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Main Page</h1>
        <h2>Toggley's First Commits</h2>
        <p>
          Brian commit,
          Austin Commit,
          RJ Commit
        </p>
      </header>
      <Dashboard />
    </div>
  );
}

export default App;
