import { Route, Routes } from 'react-router-dom';
// pages
import ExamplePage from './pages/ExamplePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

export default function Router() {
  return (
    <Routes>
      {/* example 等用不掉的時候可直接刪掉 */}
      <Route path="/example" index element={<ExamplePage />} />
      <Route path="/" index element={<HomePage />} />
      <Route path="/login" index element={<LoginPage />} />
    </Routes>
  );
}
