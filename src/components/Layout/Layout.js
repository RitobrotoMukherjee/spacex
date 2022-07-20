import { Outlet } from 'react-router-dom';
import Navigation from './Nav';

const Layout = () => (
  <div>
    <Navigation />
    <main className="main">
      <Outlet />
    </main>
  </div>
);

export default Layout;
