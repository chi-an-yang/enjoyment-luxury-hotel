import {  Route, Routes } from 'react-router-dom';
// pages
import ExamplePage from './pages/ExamplePage';

export default function Router() {
  return (
    <Routes>
      <Route path="/" index element={<ExamplePage />} />
    </Routes>
  );
}
