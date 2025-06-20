import React from 'react';
// 컴포넌트 하나를 정의힘
function PostListPage() {
  // 게시글 목록을 가짜로 만든다 (나중에 DB에서 불러올 예정)
  const posts = [
    {id: 1, title: '첫 번째 글', content: '리액트 배우는 중!'},
    {id: 2, title: '두 번째 글', content: '게시판 만들기 진행 중'},
    {id: 3, title: '세 번째 글', content: 'JavaScript 복습 중'},
  ];

  return (
    <div>
      <h1>게시글 목록</h1>
      <ul>
        {posts.map((posts) => (
          <li key={posts.id}>
            <h3>{posts.title}</h3>
            <p>{posts.content}</p>
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default PostListPage;