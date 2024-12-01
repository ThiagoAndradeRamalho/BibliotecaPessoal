// AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/LoginPage.jsx';
import RegisterPage from '../pages/RegisterPage.jsx';
import DashBoardPage from '../pages/DashBoardPage.jsx';
import BookPage from '../pages/BookPage.jsx';
import AuthorProfilePage from '../pages/AuthorProfilePage.jsx'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/dashboard" element={<DashBoardPage />} />
      <Route path="/book/:bookId" element={<BookPage />} />
      <Route path="/author/:authorId" element={<AuthorProfilePage />} />
    </Routes>
  );
};

export default AppRoutes;
