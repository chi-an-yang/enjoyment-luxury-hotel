import { Route, Routes } from 'react-router-dom';
// pages
import ExamplePage from './pages/ExamplePage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" index element={<ExamplePage />} />
      <Route path="/home" index element={<HomePage />} />
      <Route path="/login" index element={<LoginPage />} />
    </Routes>
  );
}
