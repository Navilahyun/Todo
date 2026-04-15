import { useState } from 'react';

function TodoInput({ addTodo }) {
  const [input, setInput] = useState('');

  const handleAdd = () => {
    if (input.trim()) {
      addTodo(input);
      setInput('');
    }
  };
// Enter 키 입력 감지
  const handleKeyDown = (e) => {
    if (e.isComposing) return;
    // 맥에서 한글을 입력하는 동작(onKeyDown/Up)에서 함수 콜링이 두번 중첩되는 이슈가 있어 해결책 삽입
    if (e.key === 'Enter') handleAdd();
    // Enter를 누르면 할 일 추가
  };

  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown} // 키 입력 이벤트 추가
        placeholder="오늘 해야할 일"
      />
      <button onClick={handleAdd}> 할 일 등록 </button>
    </>
  );
}

export default TodoInput;