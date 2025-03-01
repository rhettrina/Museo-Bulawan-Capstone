import { Outlet } from 'react-router-dom';
import LandingHeader from '../components/headers/LandingHeader';
import LandingFooter from '../components/footers/LandingFooter';

const LandingLayout = () => (
  <>
    <LandingHeader />
    <main>
      <Outlet />
    </main>
    <LandingFooter />
  </>
);

export default LandingLayout;