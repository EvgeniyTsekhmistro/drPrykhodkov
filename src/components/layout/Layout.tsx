import { Outlet } from 'react-router-dom';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';

export const Layout = () => (
  <>
    <SiteHeader />
    <Outlet />
    <SiteFooter />
  </>
);
