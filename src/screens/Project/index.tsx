import { Link } from 'react-router-dom';
import { Route, Routes, Navigate } from 'react-router';
import { KanbanScreen } from './kanban';
import { EpicScreen } from './epic';
export const ProjectScreen = () => {
  return (
    <div>
      <h2>ProjectScreen</h2>
      <Link to={`kanban`}>看板</Link>
      <Link to={`epic`}>任务组</Link>

      <Routes>
        <Route path={'/kanban'} element={<KanbanScreen />} />
        <Route path={'/epic'} element={<EpicScreen />} />
        <Navigate to={window.location.pathname + '/kanban'} />
      </Routes>
    </div>
  );
};
