import { Route, Routes, HashRouter } from 'react-router-dom';

import MobileListPage from '@pages/MobileListPage';
import MobileDetailPage from '@pages/MobileDetailPage';
import NotFound from '@pages/NotFound';

const AppRouter = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MobileListPage />} />
        <Route path="/mobile/:mobileId" element={<MobileDetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </HashRouter>
  );
};
export default AppRouter;
