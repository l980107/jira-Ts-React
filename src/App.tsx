// import ProjectList from './screens/project-list/index';
import './App.css';
import { useAuth } from 'context/auth-context';
import Login from './components/Login';
import Admin from './components/Admin/';
import ErrorBoundary from './components/error-boundary/index';
import { FullPageError } from 'components/lib';

function App() {
  const { user } = useAuth();
  return (
    <div className="app">
      <ErrorBoundary fallbackRender={FullPageError}>{user ? <Admin /> : <Login />}</ErrorBoundary>
    </div>
  );
}

export default App;
