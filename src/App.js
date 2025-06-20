import React from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import PostListPage from './pages/PostListPage';
import PostWritePage from './pages/PostWritePaga';

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to={'/'}>글 목록</Link> | <Link to={'/write'}>글 작성</Link>
        </nav>
        <hr />

        <Routes>
          <Route path='/' element={<PostListPage />} />
          <Route path='/write' element={<PostWritePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
