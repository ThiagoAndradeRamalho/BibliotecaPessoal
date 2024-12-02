// AppRoutes.jsx
import { Routes, Route } from 'react-router-dom';
import Login from '../pages/LoginPage.jsx';
import RegisterPage from '../pages/RegisterPage.jsx';
import DashBoardPage from '../pages/DashBoardPage.jsx';
import BookPage from '../pages/BookPage.jsx';
import AuthorProfilePage from '../pages/AuthorProfilePage.jsx'
import CreateBookPage from '../pages/CreateBookPage.jsx'
import LibraryPage from '../pages/LibraryPage.jsx';
import AuthorsPage from '../pages/AuthorsPage.jsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/createbook" element={<CreateBookPage />} />
      <Route path="/dashboard" element={<DashBoardPage />} />
      <Route path="/book/:bookId" element={<BookPage />} />
      <Route path="/author/:authorId" element={<AuthorProfilePage />} />
      <Route path="/library" element={<LibraryPage />} />
      <Route path="/authors" element={<AuthorsPage />} />
    </Routes>
  );
};

export default AppRoutes;
