import logo from '@/assets/images/layout/logo.png';
import { Outlet } from 'umi';
import ChatHistory from './ChatHistory';
import FileHistory from './FileHistory';
import './index.scss';
import Menu from './Menu';
import Release from './Release';
import User from './User';

export default function Layout() {
  return (
    <div className="layout-bg h-full">
      <div className="layout-wrapper h-full flex">
        <nav className="flex flex-col items-center w-12 mx-3 layout-menu">
          <img src={logo} alt="logo" className="w-8 h-8 my-9 cursor-pointer" />
          <div className="flex-1 h-0 layout-menu">
            <Menu />
          </div>
          <div className="flex flex-col items-center flex-none">
            <ChatHistory />
            <FileHistory />
            <Release />
            <User />
          </div>
        </nav>
        <main className="flex-1 rounded-xl my-2 mr-2 relative overflow-hidden bg-white p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
