// App.jsx
import { useState } from 'react';
import Counter from './components/Counter/Counter';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light');

  const updateTheme = (event) => {
    console.log('event', event)
    setTheme(event.target.value)
  }

  return <div className={`App ${theme}`}>
            <Counter />
            <select onChange={updateTheme}>
              <option value="light"> Light </option>
              <option value="dark"> Dark </option>
            </select>
          </div>;
}
export default App;
