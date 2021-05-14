import { useAuth } from 'context/auth-context';
import ProjectList from '../../screens/project-list';

export default function Admin() {
  const { logout } = useAuth();
  return (
    <div>
      <ProjectList />
      <button onClick={logout}>登出</button>
    </div>
  );
}
