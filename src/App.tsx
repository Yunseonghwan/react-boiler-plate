import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const MainPage = lazy(() => import('./pages/index'));

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="*" element={<Navigate replace to="/" />} />
      </Routes>
    </Suspense>
  );
}

export default App;
