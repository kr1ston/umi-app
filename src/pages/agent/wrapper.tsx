import { Outlet } from 'umi';
import AgentHistory from './components/AgentHistory';

export default function AgentWrapper() {
  return (
    <div className="h-full flex">
      <AgentHistory />
      <div className="h-full flex-1">
        <Outlet />
      </div>
    </div>
  );
}
