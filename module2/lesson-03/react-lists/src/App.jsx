// App.jsx
import MovieList from './components/MovieList/MovieList';
import ProjectList from './components/ProjectList/ProjectList';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <ProjectList /> */}
      <MovieList>
        <ProjectList/>
        <ProjectList/>
      </MovieList>
    </div>
  );
}

export default App;
