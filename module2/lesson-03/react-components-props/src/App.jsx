import Navbar from './components/Navbar/Navbar';
import Greeting from './components/Greeting/Greeting';
import StudentList from './components/StudentList/StudentList';
import StudentCard from './components/StudentCard/StudentCard';
import ReactPlayer from 'react-player';
import './App.css';

function App() {
  return <div className="App">
          <Navbar />
          <Greeting name={"Ana"} gender={"female"} />
          <Greeting name={"John"} gender={"male"}  />
          <Greeting name={"Jane"} gender={"female"}  />
          <Greeting name={"Paul"} gender={"male"}  />
          <StudentList>
            <StudentCard name="Eva" week={7} info={{ city: 'BCN', course: 'WEB' }} />
            <StudentCard name="Mat" week={8} info={{ city: 'MIA', course: 'DATA' }} />
          </StudentList>
          <ReactPlayer url="https://vimeo.com/channels/top/22439234" playing controls />
          <ReactPlayer
          url="https://www.youtube.com/watch?v=kJQP7kiw5Fk"
          playing
          controls
          volume="0.5"
        />
          </div>;
}

export default App;
