import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import CkEditorView from './components/ckEditorView/CkEditorView';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <CkEditorView />
    </div>
  );
}

export default App;
