import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'

  // useNavigate() Hook함수, JS코드에서 페이지 이동을 가능하게 하는 함수

function PostWritePage({posts, setPosts}) {
  const [title, settitle] = useState('');
  const [content, setContent] = useState('');
  // const [posts, setPosts] = useState([]); // 글 리스트도 state로 관리
  // useState() => 값을 기억하고 화면을 바꾸는 React의 기본 Hook

  const navigate = useNavigate();
  
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

    // 등록 후 메인 페이지로 이동
    navigate('/');
  };
  
  return(
      // value={...} => 입력창의 현재 값을 표기 (JSX에서 제어 입력방식)
      // onChange={(e) => ...} => 사용자가 입력할 때마다 상태를 바꿈.
      // onClick={(e) => ...} => 버튼 클릭 시 함수 실행
      // setPosts([...]) => 배열을 복사해서 새로운 값으로 업데이트 (불변성 유지)
      
    <div>
      <h1>글 작성</h1>
      <input value={title} onChange={(e) => settitle(e.target.value)} placeholder='제목' /><br /><br />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder='내용' /><br /><br />
      <button onClick={handleSubmit}>글 등록</button>
    </div>
  );
}

export default PostWritePage;