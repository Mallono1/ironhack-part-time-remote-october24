import { Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar';
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import HomePageWithNavigate from "./pages/HomePageWithNavigate";
import AboutPage from "./pages/AboutPage";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";
import QueryStringExample from "./pages/QueryStringExample";
import LoginPage from "./pages/LoginPage";
import ErrorPage from "./pages/ErrorPage";
import projectsData from "./projects-data.json"
import './App.css';
 
function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePageWithNavigate />} />
        <Route path="/about" element={<AboutPage />}/>
        <Route path="/projects" element={<ProjectsPage projects={projectsData} />}/>
        <Route path="/projects/:projectId" element={<ProjectDetailsPage projects={projectsData} />}/>
        <Route path="/login" element={<LoginPage />}/>
        <Route path="/example" element={<QueryStringExample />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>

    <Footer />
    </div>
  );
}
export default App;
