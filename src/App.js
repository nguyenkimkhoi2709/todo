import './App.css';
import Header from './components/Header';
import logo from './logo.svg';

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
