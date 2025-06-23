import React from 'react';
// 컴포넌트 하나를 정의힘
function PostListPage({posts, setPosts}) {
  const handleDelete = (id) => {
    const updatePosts = posts.filter((post) => post.id !== id);
    // filter(): 배열에서 조건을 만족하는 항목만 남김(삭제 기능의 핵심)
    // post.id !== id => 삭제하고 싶은 게시글의 id만 뻬고 나머지를 유지
    setPosts(updatePosts);
  }
  // 게시글 목록을 가짜로 만든다 (나중에 DB에서 불러올 예정)
  // const posts = [
  //   {id: 1, title: '첫 번째 글', content: '리액트 배우는 중!'},
  //   {id: 2, title: '두 번째 글', content: '게시판 만들기 진행 중'},
  //   {id: 3, title: '세 번째 글', content: 'JavaScript 복습 중'},
  // ];

  return (
    <div>
      <h1>게시글 목록</h1>
      {posts.length === 0 ? (
        <p>등록된 글이 없습니다.</p>
      ) : (
        <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
            <button onClick={() => handleDelete(post.id)}>삭제</button>
            <hr />
          </li>
        ))}
      </ul>
      )}
    </div>
  );
}

export default PostListPage;