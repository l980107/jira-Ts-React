// import ProjectList from './screens/project-list/index';
import "./App.css";
import { useAuth } from "context/auth-context";
import Login from "./components/Login";
import Admin from "./components/Admin/";

function App() {
  const { user } = useAuth();
  return <div className="app">{user ? <Admin /> : <Login />}</div>;
}

export default App;
