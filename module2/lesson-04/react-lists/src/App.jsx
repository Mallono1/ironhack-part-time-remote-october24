// App.jsx
import {useState} from 'react'
import Spinner from './components/Spinner/Spinner';
import MovieList from './components/MovieList/MovieList';
// import ProjectList from './components/ProjectList/ProjectList';
import './App.css';

function App() {
  const [isLoading, setIsLoading] = useState(false); // <-- add

  if(isLoading){
    return <Spinner />
  }
  return (
    <div className="App">
      {/* <ProjectList /> */}
      <MovieList />
    </div>
  );
}

export default App;
