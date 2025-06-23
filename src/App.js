import React, {useState} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import PostListPage from './pages/PostListPage';
import PostWritePage from './pages/PostWritePage';
/* 
  <BrowserRouter>: 컴포넌트, 라우팅 전체를 감싸는 "라우터 컨테이너"
  <Routes>: 컴포넌트, 여러 개의 페이지(Route)를 관리
  <Route>: 컴포넌트, 특정 URL에 해당하는 컴포넌트를 지정
  <Link>: 컴포넌트, <a> 대신 사용되는 페이지 이동 버튼
*/

function App() {
  const [posts, setPosts] = useState([]); // 게시글 상태를 부모(App)로 끌어올림.

  return (
    <BrowserRouter>
      <div>
        <nav>
          <Link to={'/'}>글 목록</Link> | <Link to={'/write'}>글 작성</Link>
        </nav>
        <hr />

        <Routes>
          <Route path='/' element={<PostListPage posts={posts} setPosts={setPosts} />} />
          <Route path='/write' element={<PostWritePage posts={posts} setPosts={setPosts} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
