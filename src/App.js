import './App.css';
import Greet from './Greet';
import Hello from './HelloWorld';
import Welcome from './Welcome.js';
function App() {
  return (
    <div className="App">
      <h1>Welcome</h1>
      {/* - Functional component */}
      <Hello name="Functional Component" original="Tomy stark" />
      <p>This is the first lesson</p>
      {/* CLass Component */}
      <Greet name="Class Component"/>
      {/* jsx Syntax */}
      <Welcome name="JSX syntax"/>
    </div>
  );
}

export default App;
