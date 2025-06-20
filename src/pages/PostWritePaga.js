import React, {useState} from 'react';

function PostWritePage() {
  const [title, settitle] = useState('');

  const [content, setContent] = useState('');
  const [posts, setPosts] = useState([]); // 글 리스트도 state로 관리
  // useState() => 값을 기억하고 화면을 바꾸는 React의 기본 Hook
  
  const handleSubmit = () => {
    if (title === '' || content === ''){
      alert('제목과 내용을 모두 입력하세요');
      return;
    }

    const newPost = {
      id: Date.now(),
      title: title,
      content: content
    };

    setPosts([newPost, ...posts]); // 글 추가
    settitle('');
    setContent('');
  };
  
  return(
      // value={...} => 입력창의 현재 값을 표기 (JSX에서 제어 입력방식)
      // onChange={(e) => ...} => 사용자가 입력할 때마다 상태를 바꿈.
      // onClick={(e) => ...} => 버튼 클릭 시 함수 실행
      // setPosts([...]) => 배열을 복사해서 새로운 값으로 업데이트 (불변성 유지)
      
    <div>
      <h1>글 작성</h1>
      <input type='text' placeholder='제목 입력' value={title} onChange={(e) => settitle(e.target.value)} />
      <textarea placeholder='내용 입력' value={content} onChange={(e) => setContent(e.target.value)} />
        <br /><br />
        <button onClick={handleSubmit}>글 등록</button>

        <hr />
        <h2>등록된 글</h2>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <hr />
            </li>
          ))}
        </ul>
    </div>
  )
}

export default PostWritePage;